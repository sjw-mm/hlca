#!/usr/bin/env node

/**
 * 修复页面CSS类名前缀问题
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

// 修复CSS文件
function fixCSSFile(pageInfo) {
  const { name, path: pagePath } = pageInfo;
  const pageDir = path.join(__dirname, '../src/pages', pagePath);
  const moduleCssFile = path.join(pageDir, 'index.module.css');
  
  console.log(`正在修复 ${name} 页面CSS...`);
  
  try {
    if (!fs.existsSync(moduleCssFile)) {
      console.log(`  ⚠️  ${moduleCssFile} 不存在，跳过`);
      return;
    }
    
    // 读取CSS文件
    let cssContent = fs.readFileSync(moduleCssFile, 'utf8');
    
    // 修复类名前缀问题
    const pagePrefix = name.toLowerCase();
    const wrongPrefix = `${pagePrefix}${name}`;
    
    // 替换错误的类名前缀
    cssContent = cssContent.replace(
      new RegExp(`\\.${wrongPrefix}`, 'g'),
      `.${pagePrefix}`
    );
    
    // 写回文件
    fs.writeFileSync(moduleCssFile, cssContent);
    console.log(`  ✅ 修复 ${name}/index.module.css`);
    
  } catch (error) {
    console.error(`  ❌ 修复 ${name} CSS失败:`, error.message);
  }
}

// 修复TSX文件
function fixTSXFile(pageInfo) {
  const { name, path: pagePath } = pageInfo;
  const pageDir = path.join(__dirname, '../src/pages', pagePath);
  const tsxFile = path.join(pageDir, 'index.tsx');
  
  console.log(`正在修复 ${name} 页面TSX...`);
  
  try {
    if (!fs.existsSync(tsxFile)) {
      console.log(`  ⚠️  ${tsxFile} 不存在，跳过`);
      return;
    }
    
    // 读取TSX文件
    let tsxContent = fs.readFileSync(tsxFile, 'utf8');
    
    // 修复类名引用问题
    const pagePrefix = name.toLowerCase();
    const wrongPrefix = `${pagePrefix}${name}`;
    
    // 替换错误的类名引用
    tsxContent = tsxContent.replace(
      new RegExp(`styles\\.${wrongPrefix}`, 'g'),
      `styles.${pagePrefix}`
    );
    
    // 写回文件
    fs.writeFileSync(tsxFile, tsxContent);
    console.log(`  ✅ 修复 ${name}/index.tsx`);
    
  } catch (error) {
    console.error(`  ❌ 修复 ${name} TSX失败:`, error.message);
  }
}

// 执行修复
console.log('开始修复页面类名前缀问题...\n');

pagesToFix.forEach(pageInfo => {
  fixCSSFile(pageInfo);
  fixTSXFile(pageInfo);
  console.log('');
});

console.log('修复完成！');
