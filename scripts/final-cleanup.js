#!/usr/bin/env node

/**
 * 最终清理脚本 - 删除所有旧CSS文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要清理的文件列表
const filesToClean = [
  // 全局组件
  'src/components/LanguageSwitcher/index.css',
  'src/components/Layout/index.css',
  'src/components/MobileBottomNav/index.css',
  'src/components/VideoPlayer/index.css',
  
  // 页面
  'src/pages/About/index.css',
  'src/pages/Contact/index.css',
  'src/pages/Team/index.css',
  'src/pages/Blog/index.css',
  'src/pages/Activity/index.css',
  'src/pages/Join/index.css',
  'src/pages/Profile/index.css',
  'src/pages/Video/index.css',
  'src/pages/Home/index.css',
  
  // Home页面组件
  'src/pages/Home/components/AboutSection.css',
  'src/pages/Home/components/ActivitySection.css',
  'src/pages/Home/components/BlogSection.css',
  'src/pages/Home/components/CounterSection.css',
  'src/pages/Home/components/FAQSection.css',
  'src/pages/Home/components/FeatureCards.css',
  'src/pages/Home/components/HeroSection.css',
  'src/pages/Home/components/HonorWall.css',
  'src/pages/Home/components/NewsSection.css',
  'src/pages/Home/components/PartnerSection.css',
  'src/pages/Home/components/PortfolioSection.css',
  'src/pages/Home/components/Profile.css',
  'src/pages/Home/components/ServicesSection.css',
  'src/pages/Home/components/TeamSection.css',
  'src/pages/Home/components/TeamDetail.css',
  'src/pages/Home/components/TestimonialSection.css',
  
  // App.css
  'src/App.css',
  
  // 测试文件
  'src/styles/test.css'
];

// 清理文件
function cleanFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  try {
    if (!fs.existsSync(fullPath)) {
      console.log(`  ⚠️  ${filePath} 不存在，跳过`);
      return false;
    }
    
    // 删除文件
    fs.unlinkSync(fullPath);
    console.log(`  ✅ 删除 ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`  ❌ 删除 ${filePath} 失败:`, error.message);
    return false;
  }
}

// 执行清理
console.log('开始最终清理 - 删除所有旧CSS文件...\n');

let cleanedCount = 0;
let totalCount = filesToClean.length;

filesToClean.forEach(filePath => {
  if (cleanFile(filePath)) {
    cleanedCount++;
  }
});

console.log(`\n清理完成！`);
console.log(`成功删除: ${cleanedCount}/${totalCount} 个文件`);

if (cleanedCount === totalCount) {
  console.log('\n🎉 所有旧CSS文件已成功删除！');
  console.log('项目现在完全使用CSS模块化架构！');
} else {
  console.log('\n⚠️ 部分文件删除失败，请手动检查');
}

console.log('\n注意事项:');
console.log('1. 请确认所有页面和组件样式正常工作');
console.log('2. 如有问题可从git恢复文件');
console.log('3. 建议先测试再清理');
