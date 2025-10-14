#!/usr/bin/env node

/**
 * 页面CSS变量修复脚本
 * 修复页面迁移过程中CSS变量替换的问题
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要修复的页面列表
const pagesToFix = [
  { name: 'About', path: 'About' },
  { name: 'Contact', path: 'Contact' },
  { name: 'Team', path: 'Team' },
  { name: 'Blog', path: 'Blog' },
  { name: 'Activity', path: 'Activity' },
  { name: 'Join', path: 'Join' },
  { name: 'Profile', path: 'Profile' },
  { name: 'Video', path: 'Video' }
];

// CSS变量修复规则
const fixRules = [
  // 修复错误的变量替换
  { from: /var\(--font-size-xs\)/g, to: '12px' },
  { from: /var\(--font-size-sm\)/g, to: '14px' },
  { from: /var\(--font-size-base\)/g, to: '16px' },
  { from: /var\(--font-size-lg\)/g, to: '18px' },
  { from: /var\(--font-size-xl\)/g, to: '20px' },
  { from: /var\(--font-size-2xl\)/g, to: '24px' },
  { from: /var\(--font-size-3xl\)/g, to: '28px' },
  { from: /var\(--font-size-4xl\)/g, to: '32px' },
  { from: /var\(--font-size-5xl\)/g, to: '36px' },
  { from: /var\(--font-size-6xl\)/g, to: '48px' },
  
  // 修复间距变量
  { from: /var\(--spacing-xs\)/g, to: '4px' },
  { from: /var\(--spacing-sm\)/g, to: '8px' },
  { from: /var\(--spacing-md\)/g, to: '12px' },
  { from: /var\(--spacing-lg\)/g, to: '16px' },
  { from: /var\(--spacing-xl\)/g, to: '20px' },
  { from: /var\(--spacing-2xl\)/g, to: '24px' },
  { from: /var\(--spacing-3xl\)/g, to: '30px' },
  { from: /var\(--spacing-4xl\)/g, to: '40px' },
  { from: /var\(--spacing-5xl\)/g, to: '60px' },
  { from: /var\(--spacing-6xl\)/g, to: '80px' },
  
  // 修复圆角变量
  { from: /var\(--radius-sm\)/g, to: '4px' },
  { from: /var\(--radius-md\)/g, to: '8px' },
  { from: /var\(--radius-lg\)/g, to: '12px' },
  { from: /var\(--radius-xl\)/g, to: '16px' },
  
  // 修复阴影变量
  { from: /var\(--shadow-sm\)/g, to: '0 2px 8px rgba(246, 104, 172, 0.1)' },
  { from: /var\(--shadow-md\)/g, to: '0 4px 16px rgba(246, 104, 172, 0.1)' },
  { from: /var\(--shadow-lg\)/g, to: '0 8px 24px rgba(246, 104, 172, 0.15)' },
  { from: /var\(--shadow-xl\)/g, to: '0 12px 32px rgba(246, 104, 172, 0.15)' },
  
  // 修复过渡变量
  { from: /var\(--transition-fast\)/g, to: '0.2s ease' },
  { from: /var\(--transition-normal\)/g, to: '0.3s ease' },
  { from: /var\(--transition-slow\)/g, to: '0.5s ease' },
  
  // 修复断点变量
  { from: /var\(--breakpoint-xl\)/g, to: '1300px' },
  { from: /var\(--breakpoint-lg\)/g, to: '992px' },
  { from: /var\(--breakpoint-md\)/g, to: '768px' },
  { from: /var\(--breakpoint-sm\)/g, to: '480px' },
  
  // 修复颜色变量
  { from: /var\(--primary-color\)/g, to: '#F668AC' },
  { from: /var\(--primary-hover\)/g, to: '#d4b547' },
  { from: /var\(--text-primary\)/g, to: '#17161a' },
  { from: /var\(--text-secondary\)/g, to: '#666' },
  { from: /var\(--text-light\)/g, to: '#999' },
  { from: /var\(--background-primary\)/g, to: '#ffffff' },
  { from: /var\(--background-secondary\)/g, to: '#f8f9fa' },
  { from: /var\(--background-tertiary\)/g, to: '#f0f2f5' },
  { from: /var\(--border-color\)/g, to: '#e9ecef' },
  { from: /var\(--border-light\)/g, to: '#f0f0f0' },
  
  // 修复错误的组合变量
  { from: /0 var\(--radius-md\) 2var\(--radius-sm\)/g, to: '0 8px 24px' },
  { from: /var\(--radius-md\) 2var\(--radius-sm\)/g, to: '8px 24px' },
];

// 修复CSS内容
function fixCSSContent(content) {
  let fixed = content;
  
  fixRules.forEach(rule => {
    fixed = fixed.replace(rule.from, rule.to);
  });
  
  return fixed;
}

// 修复页面
function fixPage(pageInfo) {
  const { name, path: pagePath } = pageInfo;
  const pageDir = path.join(__dirname, '../src/pages', pagePath);
  const moduleCssFile = path.join(pageDir, 'index.module.css');
  
  console.log(`正在修复 ${name} 页面...`);
  
  try {
    if (!fs.existsSync(moduleCssFile)) {
      console.log(`  ⚠️  ${moduleCssFile} 不存在，跳过`);
      return;
    }
    
    // 读取模块化CSS文件
    const originalCSS = fs.readFileSync(moduleCssFile, 'utf8');
    
    // 修复CSS内容
    const fixedCSS = fixCSSContent(originalCSS);
    
    // 写回文件
    fs.writeFileSync(moduleCssFile, fixedCSS);
    console.log(`  ✅ 修复 ${name}/index.module.css`);
    
  } catch (error) {
    console.error(`  ❌ 修复 ${name} 失败:`, error.message);
  }
}

// 执行修复
console.log('开始修复页面CSS变量...\n');

pagesToFix.forEach(pageInfo => {
  fixPage(pageInfo);
});

console.log('\n修复完成！');
console.log('\n注意事项:');
console.log('1. 请检查修复后的CSS文件');
console.log('2. 验证页面样式是否正常');
console.log('3. 如有问题请手动调整');
