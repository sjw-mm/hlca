#!/usr/bin/env node

/**
 * 剩余组件CSS模块化迁移脚本
 * 处理全局组件、Home页面、App.css等
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要迁移的组件列表
const componentsToMigrate = [
  { name: 'LanguageSwitcher', path: 'components/LanguageSwitcher' },
  { name: 'Layout', path: 'components/Layout' },
  { name: 'MobileBottomNav', path: 'components/MobileBottomNav' },
  { name: 'VideoPlayer', path: 'components/VideoPlayer' },
  { name: 'Home', path: 'pages/Home' },
  { name: 'TeamDetail', path: 'pages/Home/components/TeamDetail' }
];

// CSS变量映射表
const cssVariableMap = {
  // 颜色
  '#F668AC': 'var(--primary-color)',
  '#d4b547': 'var(--primary-hover)',
  '#17161a': 'var(--text-primary)',
  '#666': 'var(--text-secondary)',
  '#999': 'var(--text-light)',
  '#ffffff': 'var(--background-primary)',
  '#f8f9fa': 'var(--background-secondary)',
  '#f0f2f5': 'var(--background-tertiary)',
  '#e9ecef': 'var(--border-color)',
  '#f0f0f0': 'var(--border-light)',
  '#d9d9d9': 'var(--border-color)',
  
  // 间距
  '4px': 'var(--spacing-xs)',
  '8px': 'var(--spacing-sm)',
  '12px': 'var(--spacing-md)',
  '16px': 'var(--spacing-lg)',
  '20px': 'var(--spacing-xl)',
  '24px': 'var(--spacing-2xl)',
  '30px': 'var(--spacing-3xl)',
  '40px': 'var(--spacing-4xl)',
  '60px': 'var(--spacing-5xl)',
  '80px': 'var(--spacing-6xl)',
  
  // 圆角
  '4px': 'var(--radius-sm)',
  '6px': 'var(--radius-sm)',
  '8px': 'var(--radius-md)',
  '12px': 'var(--radius-lg)',
  '16px': 'var(--radius-xl)',
  
  // 字体大小
  '10px': 'var(--font-size-xs)',
  '12px': 'var(--font-size-xs)',
  '14px': 'var(--font-size-sm)',
  '16px': 'var(--font-size-base)',
  '18px': 'var(--font-size-lg)',
  '20px': 'var(--font-size-xl)',
  '24px': 'var(--font-size-2xl)',
  '28px': 'var(--font-size-3xl)',
  '32px': 'var(--font-size-4xl)',
  '36px': 'var(--font-size-5xl)',
  '48px': 'var(--font-size-6xl)',
  
  // 过渡
  '0.3s ease': 'var(--transition-normal)',
  '0.2s ease': 'var(--transition-fast)',
  '0.5s ease': 'var(--transition-slow)',
  
  // 阴影
  '0 2px 8px rgba(246, 104, 172, 0.1)': 'var(--shadow-sm)',
  '0 4px 16px rgba(246, 104, 172, 0.1)': 'var(--shadow-md)',
  '0 8px 24px rgba(246, 104, 172, 0.15)': 'var(--shadow-lg)',
  '0 12px 32px rgba(246, 104, 172, 0.15)': 'var(--shadow-xl)',
  '0 4px 15px rgba(0, 0, 0, 0.1)': 'var(--shadow-md)',
  '0 8px 25px rgba(0, 0, 0, 0.15)': 'var(--shadow-lg)',
  '0 -2px 8px rgba(0, 0, 0, 0.1)': 'var(--shadow-sm)',
  
  // 断点
  '1300px': 'var(--breakpoint-xl)',
  '992px': 'var(--breakpoint-lg)',
  '768px': 'var(--breakpoint-md)',
  '480px': 'var(--breakpoint-sm)',
};

// 类名转换函数
function convertClassName(className) {
  // 将kebab-case转换为camelCase
  return className.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// 转换CSS内容
function convertCSSContent(content, componentName) {
  let converted = content;
  
  // 替换CSS变量
  Object.entries(cssVariableMap).forEach(([oldValue, newValue]) => {
    const regex = new RegExp(oldValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    converted = converted.replace(regex, newValue);
  });
  
  // 转换类名为camelCase
  converted = converted.replace(/\.([a-z][a-z0-9-]*)/g, (match, className) => {
    return '.' + convertClassName(className);
  });
  
  return converted;
}

// 生成模块化CSS文件
function generateModuleCSS(originalContent, componentName) {
  const convertedContent = convertCSSContent(originalContent, componentName);
  
  return `/* ${componentName} 模块化样式 */
${convertedContent}`;
}

// 更新组件文件
function updateComponentFile(componentPath, componentName) {
  const content = fs.readFileSync(componentPath, 'utf8');
  
  // 替换导入语句
  const updatedContent = content
    .replace(
      /import\s+['"]\.\/.*\.css['"];?/g,
      `import styles from './index.module.css';`
    )
    .replace(
      /className="([^"]+)"/g,
      (match, className) => {
        const camelCaseClass = convertClassName(className);
        return `className={styles.${camelCaseClass}}`;
      }
    );
  
  return updatedContent;
}

// 迁移组件
function migrateComponent(componentInfo) {
  const { name, path: componentPath } = componentInfo;
  const componentDir = path.join(__dirname, '../src', componentPath);
  const cssFile = path.join(componentDir, 'index.css');
  const tsxFile = path.join(componentDir, 'index.tsx');
  const moduleCssFile = path.join(componentDir, 'index.module.css');
  
  console.log(`正在迁移 ${name} 组件...`);
  
  try {
    // 检查文件是否存在
    if (!fs.existsSync(cssFile)) {
      console.log(`  ⚠️  ${cssFile} 不存在，跳过`);
      return;
    }
    
    if (!fs.existsSync(tsxFile)) {
      console.log(`  ⚠️  ${tsxFile} 不存在，跳过`);
      return;
    }
    
    // 读取原始CSS文件
    const originalCSS = fs.readFileSync(cssFile, 'utf8');
    
    // 生成模块化CSS
    const moduleCSS = generateModuleCSS(originalCSS, name);
    
    // 写入模块化CSS文件
    fs.writeFileSync(moduleCssFile, moduleCSS);
    console.log(`  ✅ 创建 ${name}/index.module.css`);
    
    // 更新组件文件
    const updatedTSX = updateComponentFile(tsxFile, name);
    fs.writeFileSync(tsxFile, updatedTSX);
    console.log(`  ✅ 更新 ${name}/index.tsx`);
    
    console.log(`  ✅ ${name} 组件迁移完成`);
    
  } catch (error) {
    console.error(`  ❌ 迁移 ${name} 组件失败:`, error.message);
  }
}

// 处理TeamDetail组件
function handleTeamDetail() {
  const teamDetailPath = path.join(__dirname, '../src/pages/Home/components/TeamDetail.tsx');
  
  console.log('正在处理 TeamDetail 组件...');
  
  try {
    if (!fs.existsSync(teamDetailPath)) {
      console.log(`  ⚠️  ${teamDetailPath} 不存在，跳过`);
      return;
    }
    
    // 读取TeamDetail.tsx文件
    let content = fs.readFileSync(teamDetailPath, 'utf8');
    
    // 移除不存在的CSS导入
    content = content.replace(/import\s+['"]\.\/TeamDetail\.css['"];?\s*\n/, '');
    
    // 写回文件
    fs.writeFileSync(teamDetailPath, content);
    console.log(`  ✅ 移除 TeamDetail.css 导入`);
    
  } catch (error) {
    console.error(`  ❌ 处理 TeamDetail 组件失败:`, error.message);
  }
}

// 处理App.css
function handleAppCSS() {
  const appCssPath = path.join(__dirname, '../src/App.css');
  
  console.log('正在处理 App.css...');
  
  try {
    if (!fs.existsSync(appCssPath)) {
      console.log(`  ⚠️  ${appCssPath} 不存在，跳过`);
      return;
    }
    
    // 读取App.css文件
    let content = fs.readFileSync(appCssPath, 'utf8');
    
    // 将App.css转换为模块化样式
    const moduleCSS = generateModuleCSS(content, 'App');
    
    // 写入App.module.css
    const appModuleCssPath = path.join(__dirname, '../src/App.module.css');
    fs.writeFileSync(appModuleCssPath, moduleCSS);
    console.log(`  ✅ 创建 App.module.css`);
    
    // 更新App.tsx文件
    const appTsxPath = path.join(__dirname, '../src/App.tsx');
    if (fs.existsSync(appTsxPath)) {
      let appContent = fs.readFileSync(appTsxPath, 'utf8');
      appContent = appContent.replace(
        /import\s+['"]\.\/App\.css['"];?/g,
        `import styles from './App.module.css';`
      );
      appContent = appContent.replace(
        /className="([^"]+)"/g,
        (match, className) => {
          const camelCaseClass = convertClassName(className);
          return `className={styles.${camelCaseClass}}`;
        }
      );
      fs.writeFileSync(appTsxPath, appContent);
      console.log(`  ✅ 更新 App.tsx`);
    }
    
  } catch (error) {
    console.error(`  ❌ 处理 App.css 失败:`, error.message);
  }
}

// 执行迁移
console.log('开始剩余组件CSS模块化迁移...\n');

// 迁移组件
componentsToMigrate.forEach(componentInfo => {
  migrateComponent(componentInfo);
  console.log('');
});

// 处理特殊情况
handleTeamDetail();
console.log('');

handleAppCSS();
console.log('');

console.log('剩余组件迁移完成！');
console.log('\n注意事项:');
console.log('1. 请检查生成的模块化CSS文件');
console.log('2. 验证组件样式是否正常');
console.log('3. 确认响应式设计是否保持');
console.log('4. 测试完成后可删除原始CSS文件');
