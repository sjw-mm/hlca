#!/usr/bin/env node

/**
 * CSS模块化迁移脚本
 * 用于批量转换组件样式文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要迁移的组件列表
const componentsToMigrate = [
  'HeroSection',
  'AboutSection', 
  'TeamSection',
  'ActivitySection',
  'BlogSection',
  'ContactSection',
  'PartnerSection',
  'ServicesSection',
  'PortfolioSection',
  'FeatureCards',
  'TestimonialSection',
  'CounterSection',
  'FAQSection',
  'HonorWall',
  'Profile'
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
  '8px': 'var(--radius-md)',
  '12px': 'var(--radius-lg)',
  '16px': 'var(--radius-xl)',
  
  // 字体大小
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
  '0 4px 15px rgba(0, 0, 0, 0.1)': 'var(--shadow-md)',
  '0 8px 25px rgba(0, 0, 0, 0.15)': 'var(--shadow-lg)',
  '0 2px 8px rgba(246, 104, 172, 0.1)': 'var(--shadow-sm)',
  '0 4px 16px rgba(246, 104, 172, 0.1)': 'var(--shadow-md)',
  '0 8px 24px rgba(246, 104, 172, 0.15)': 'var(--shadow-lg)',
  '0 12px 32px rgba(246, 104, 172, 0.15)': 'var(--shadow-xl)',
};

// 类名转换函数
function convertClassName(className) {
  // 将kebab-case转换为camelCase
  return className.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// 转换CSS内容
function convertCSSContent(content) {
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
  const convertedContent = convertCSSContent(originalContent);
  
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
      `import styles from './${componentName}.module.css';`
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

// 主函数
function migrateComponent(componentName) {
  const componentDir = path.join(__dirname, '../src/pages/Home/components');
  const cssFile = path.join(componentDir, `${componentName}.css`);
  const tsxFile = path.join(componentDir, `${componentName}.tsx`);
  const moduleCssFile = path.join(componentDir, `${componentName}.module.css`);
  
  console.log(`正在迁移 ${componentName}...`);
  
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
    const moduleCSS = generateModuleCSS(originalCSS, componentName);
    
    // 写入模块化CSS文件
    fs.writeFileSync(moduleCssFile, moduleCSS);
    console.log(`  ✅ 创建 ${componentName}.module.css`);
    
    // 更新组件文件
    const updatedTSX = updateComponentFile(tsxFile, componentName);
    fs.writeFileSync(tsxFile, updatedTSX);
    console.log(`  ✅ 更新 ${componentName}.tsx`);
    
    console.log(`  ✅ ${componentName} 迁移完成`);
    
  } catch (error) {
    console.error(`  ❌ 迁移 ${componentName} 失败:`, error.message);
  }
}

// 执行迁移
console.log('开始CSS模块化迁移...\n');

componentsToMigrate.forEach(componentName => {
  migrateComponent(componentName);
  console.log('');
});

console.log('迁移完成！');
console.log('\n注意事项:');
console.log('1. 请检查生成的模块化CSS文件');
console.log('2. 验证组件样式是否正常');
console.log('3. 确认响应式设计是否保持');
console.log('4. 测试完成后可删除原始CSS文件');
