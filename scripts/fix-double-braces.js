#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

/**
 * 修复双大括号错误：{{styles.className}} -> {styles.className}
 */

/**
 * 递归查找所有 TSX 文件
 */
function findTsxFiles(dir, tsxFiles = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !['node_modules', 'dist', '.git'].includes(item)) {
      findTsxFiles(fullPath, tsxFiles);
    } else if (stat.isFile() && item.endsWith('.tsx')) {
      tsxFiles.push(fullPath);
    }
  }
  
  return tsxFiles;
}

/**
 * 修复单个文件
 */
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // 修复错误的类名格式 {{styles.className}} -> {styles.className}
  const doubleBraceRegex = /\{\{styles\.(\w+)\}\}/g;
  content = content.replace(doubleBraceRegex, (match, className) => {
    hasChanges = true;
    return `{styles.${className}}`;
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  } else {
    console.log(`ℹ️  No changes needed: ${filePath}`);
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🔧 Fixing double braces errors...\n');
  
  try {
    // 查找所有需要修复的 TSX 文件
    const tsxFiles = findTsxFiles('src');
    
    for (const filePath of tsxFiles) {
      console.log(`📄 Processing: ${filePath}`);
      fixFile(filePath);
    }
    
    console.log('\n🎉 Fix completed!');
    console.log('\n📋 Next steps:');
    console.log('1. Check if the development server is running without errors');
    console.log('2. Test the application functionality');
    console.log('3. Verify CSS Modules are working correctly');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// 运行脚本
main();
