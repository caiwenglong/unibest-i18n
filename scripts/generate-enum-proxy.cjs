const fs = require('node:fs')
const path = require('node:path')

/**
 * 自动生成枚举代理文件脚本
 * 核心思想：独立枚举分包 + 自动代理文件生成
 *
 * 功能：
 * 1. 扫描 pages-enums 分包中的所有枚举文件
 * 2. 自动生成代理文件到主包和其他分包
 * 3. 实现跨分包枚举引用而不污染主包
 */

// 配置
const config = {
  // 枚举分包路径
  enumsPackagePath: path.resolve(__dirname, '../src/pages-enums'),
  // 主包代理文件路径
  mainProxyPath: path.resolve(__dirname, '../src/enums'),
  // 其他分包代理文件路径
  subPackageProxyPaths: [
    path.resolve(__dirname, '../src/pages-sub/enums'),
    path.resolve(__dirname, '../src/pages-components/enums'),
  ],
  // 需要扫描的文件类型
  fileExtensions: ['.ts', '.js'],
  // 排除的文件/文件夹
  excludes: ['index.ts', 'index.js', 'node_modules', '.git'],
}

/**
 * 获取所有枚举文件
 */
function getEnumFiles(dirPath, relativePath = '') {
  const files = []

  try {
    const items = fs.readdirSync(dirPath)

    for (const item of items) {
      if (config.excludes.includes(item))
        continue

      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      const currentRelativePath = path.join(relativePath, item)

      if (stat.isDirectory()) {
        files.push(...getEnumFiles(fullPath, currentRelativePath))
      }
      else if (stat.isFile()) {
        const ext = path.extname(item)
        if (config.fileExtensions.includes(ext)) {
          files.push({
            fullPath,
            relativePath: currentRelativePath,
            name: path.basename(item, ext),
            ext,
          })
        }
      }
    }
  }
  catch (error) {
    console.warn(`无法读取目录 ${dirPath}:`, error.message)
  }

  return files
}

/**
 * 解析文件导出内容
 */
function parseExports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const exports = []

    // 匹配 export 语句
    const exportRegex = /export\s+(?:const|let|var|enum|class|interface|type|function)\s+(\w+)/g
    let match
    while ((match = exportRegex.exec(content)) !== null) {
      exports.push(match[1])
    }

    // 匹配默认导出
    const defaultExportRegex = /export\s+default\s+(\w+)/
    const defaultMatch = content.match(defaultExportRegex)
    if (defaultMatch) {
      exports.push(`default as ${defaultMatch[1]}`)
    }

    return exports
  }
  catch (error) {
    console.warn(`解析文件 ${filePath} 失败:`, error.message)
    return []
  }
}

/**
 * 生成代理文件内容
 */
function generateProxyContent(enumFiles, targetPath) {
  const lines = [
    '// 自动生成的枚举代理文件',
    '// 请勿手动修改此文件',
    `// 生成时间: ${new Date().toISOString()}`,
    '',
  ]

  // 计算相对路径
  const enumsPackageRelative = path.relative(targetPath, config.enumsPackagePath)
  const normalizedPath = enumsPackageRelative.replace(/\\/g, '/')

  // 按目录分组
  const groupedFiles = {}
  for (const file of enumFiles) {
    const dir = path.dirname(file.relativePath)
    if (!groupedFiles[dir]) {
      groupedFiles[dir] = []
    }
    groupedFiles[dir].push(file)
  }

  // 生成导出语句
  for (const [dir, files] of Object.entries(groupedFiles)) {
    lines.push(`// ${dir} 目录`)

    for (const file of files) {
      const exports = parseExports(file.fullPath)
      if (exports.length > 0) {
        const importPath = `${normalizedPath}/${file.relativePath.replace(/\\/g, '/').replace(file.ext, '')}`
        lines.push(`export { ${exports.join(', ')} } from '${importPath}'`)
      }
    }

    lines.push('')
  }

  return lines.join('\n')
}

/**
 * 创建目录（如果不存在）
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

/**
 * 生成单个代理文件
 */
function generateProxyFile(targetPath, enumFiles) {
  ensureDir(targetPath)

  const content = generateProxyContent(enumFiles, targetPath)
  const fullPath = path.join(targetPath, 'index.ts')

  fs.writeFileSync(fullPath, content, 'utf-8')
  console.log(`✅ 生成代理文件: ${fullPath}`)
}

/**
 * 生成所有代理文件
 */
function generateAllProxyFiles() {
  console.log('🚀 开始生成枚举代理文件...')

  // 扫描枚举文件
  const enumFiles = getEnumFiles(config.enumsPackagePath)
  console.log(`📁 找到 ${enumFiles.length} 个枚举文件`)

  if (enumFiles.length === 0) {
    console.log('❌ 没有找到枚举文件，跳过生成')
    return
  }

  // 生成主包代理文件
  generateProxyFile(config.mainProxyPath, enumFiles)

  // 生成分包代理文件
  for (const subPath of config.subPackageProxyPaths) {
    generateProxyFile(subPath, enumFiles)
  }

  console.log('✨ 所有枚举代理文件生成完成！')
}

/**
 * 监听文件变化（开发模式）
 */
function watchFiles() {
  console.log('👀 监听枚举文件变化...')

  try {
    const chokidar = require('chokidar')
    const watcher = chokidar.watch(config.enumsPackagePath, {
      ignored: /(^|[/\\])\../, // 忽略隐藏文件
      persistent: true,
    })

    let timeout = null
    const regenerate = () => {
      if (timeout)
        clearTimeout(timeout)
      timeout = setTimeout(() => {
        console.log('📝 检测到文件变化，重新生成代理文件...')
        generateAllProxyFiles()
      }, 1000)
    }

    watcher
      .on('add', regenerate)
      .on('change', regenerate)
      .on('unlink', regenerate)

    console.log('✅ 文件监听已启动')
  }
  catch (error) {
    console.warn('❌ chokidar 未安装，跳过文件监听功能')
    console.log('💡 可以运行 "npm install chokidar --save-dev" 安装后使用监听功能')
  }
}

// 主函数
function main() {
  const args = process.argv.slice(2)

  if (args.includes('--watch') || args.includes('-w')) {
    // 先生成一次
    generateAllProxyFiles()
    // 然后监听变化
    watchFiles()
  }
  else {
    // 只生成一次
    generateAllProxyFiles()
  }
}

// 检查是否直接运行此脚本
if (require.main === module) {
  main()
}

module.exports = {
  generateAllProxyFiles,
  watchFiles,
}
