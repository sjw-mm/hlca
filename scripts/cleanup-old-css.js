#!/usr/bin/env node

/**
 * 清理旧CSS文件脚本
 * 删除已迁移的原始CSS文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要清理的组件列表
const componentsToClean = [
  'HeroSection',
  'AboutSection', 
  'TeamSection',
  'ActivitySection',
  'BlogSection',
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

// 清理组件
function cleanComponent(componentName) {
  const componentDir = path.join(__dirname, '../src/pages/Home/components');
  const oldCssFile = path.join(componentDir, `${componentName}.css`);
  
  console.log(`正在清理 ${componentName}...`);
  
  try {
    if (!fs.existsSync(oldCssFile)) {
      console.log(`  ⚠️  ${oldCssFile} 不存在，跳过`);
      return;
    }
    
    // 删除旧CSS文件
    fs.unlinkSync(oldCssFile);
    console.log(`  ✅ 删除 ${componentName}.css`);
    
  } catch (error) {
    console.error(`  ❌ 清理 ${componentName} 失败:`, error.message);
  }
}

// 执行清理
console.log('开始清理旧CSS文件...\n');

componentsToClean.forEach(componentName => {
  cleanComponent(componentName);
});

console.log('\n清理完成！');
console.log('\n注意事项:');
console.log('1. 请确认组件样式正常工作');
console.log('2. 如有问题可从git恢复文件');
console.log('3. 建议先测试再清理');
