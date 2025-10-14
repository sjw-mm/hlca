#!/usr/bin/env node

/**
 * 清理页面旧CSS文件脚本
 * 删除已迁移的页面原始CSS文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要清理的页面列表
const pagesToClean = [
  { name: 'About', path: 'About' },
  { name: 'Contact', path: 'Contact' },
  { name: 'Team', path: 'Team' },
  { name: 'Blog', path: 'Blog' },
  { name: 'Activity', path: 'Activity' },
  { name: 'Join', path: 'Join' },
  { name: 'Profile', path: 'Profile' },
  { name: 'Video', path: 'Video' }
];

// 清理页面
function cleanPage(pageInfo) {
  const { name, path: pagePath } = pageInfo;
  const pageDir = path.join(__dirname, '../src/pages', pagePath);
  const oldCssFile = path.join(pageDir, 'index.css');
  
  console.log(`正在清理 ${name} 页面...`);
  
  try {
    if (!fs.existsSync(oldCssFile)) {
      console.log(`  ⚠️  ${oldCssFile} 不存在，跳过`);
      return;
    }
    
    // 删除旧CSS文件
    fs.unlinkSync(oldCssFile);
    console.log(`  ✅ 删除 ${name}/index.css`);
    
  } catch (error) {
    console.error(`  ❌ 清理 ${name} 失败:`, error.message);
  }
}

// 执行清理
console.log('开始清理页面旧CSS文件...\n');

pagesToClean.forEach(pageInfo => {
  cleanPage(pageInfo);
});

console.log('\n清理完成！');
console.log('\n注意事项:');
console.log('1. 请确认页面样式正常工作');
console.log('2. 如有问题可从git恢复文件');
console.log('3. 建议先测试再清理');
