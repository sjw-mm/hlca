module.exports = {
  // 语言文件路径
  localesPaths: ['src/i18n/locales'],
  
  // 键名风格
  keystyle: 'nested',
  
  // 是否排序键名
  sortKeys: true,
  
  // 是否使用命名空间
  namespace: true,
  
  // 默认命名空间
  defaultNamespace: 'translation',
  
  // 提取键名前缀
  extract: {
    keyPrefix: '',
    keygenStyle: 'camelCase',
    autoDetect: true
  },
  
  // 源语言（默认语言）
  sourceLanguage: 'zh-CN',
  
  // 显示语言
  displayLanguage: 'zh-CN',
  
  // 启用的解析器
  enabledParsers: ['json'],
  
  // 启用的框架
  enabledFrameworks: ['react', 'react-i18next'],
  
  // 路径匹配模式
  pathMatcher: '{locale}.json',
  
  // 目录结构
  dirStructure: 'file',
  
  // 使用情况扫描目录
  usage: {
    scanningDirs: ['src'],
    exclude: ['node_modules', 'dist', 'build']
  },
  
  // 审查功能
  review: {
    enabled: true,
    gutters: true,
    showComments: true
  },
  
  // 翻译引擎
  translate: {
    engines: ['google', 'deepl'],
    autoDetect: true,
    saveAsCandidates: true
  },
  
  // 分析功能
  analysis: {
    enabled: true,
    exclude: ['node_modules', 'dist', 'build']
  },
  
  // 重构功能
  refactor: {
    removeUnusedKeys: true,
    extractText: true,
    extractComments: true
  },
  
  // 遥测
  telemetry: {
    enabled: false
  }
};
