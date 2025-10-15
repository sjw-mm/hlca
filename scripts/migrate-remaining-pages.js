#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

/**
 * 迁移剩余的页面组件到 CSS Modules
 */

// 需要迁移的页面组件
const pagesToMigrate = [
  'src/pages/Home/index.tsx',
  'src/pages/About/index.tsx',
  'src/pages/Contact/index.tsx',
  'src/pages/Team/index.tsx',
  'src/pages/Blog/index.tsx',
  'src/pages/Join/index.tsx',
  'src/pages/Profile/index.tsx',
  'src/pages/Video/index.tsx',
  'src/pages/Activity/index.tsx'
];

/**
 * 将 kebab-case 转换为 camelCase
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * 迁移单个页面组件
 */
function migratePage(pagePath) {
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠️  File not found: ${pagePath}`);
    return;
  }

  const dir = path.dirname(pagePath);
  const cssPath = path.join(dir, 'index.css');
  const moduleCssPath = path.join(dir, 'index.module.css');

  // 1. 重命名 CSS 文件
  if (fs.existsSync(cssPath) && !fs.existsSync(moduleCssPath)) {
    fs.renameSync(cssPath, moduleCssPath);
    console.log(`✅ Renamed: ${cssPath} → ${moduleCssPath}`);
  }

  // 2. 更新 CSS 文件中的类名
  if (fs.existsSync(moduleCssPath)) {
    let cssContent = fs.readFileSync(moduleCssPath, 'utf8');
    
    // 将 kebab-case 类名转换为 camelCase
    cssContent = cssContent.replace(/\.([a-z][a-z0-9-]*)/g, (match, className) => {
      const camelCase = toCamelCase(className);
      return `.${camelCase}`;
    });
    
    // 更新伪类选择器中的类名
    cssContent = cssContent.replace(/\.([a-z][a-z0-9-]*):/g, (match, className) => {
      const camelCase = toCamelCase(className);
      return `.${camelCase}:`;
    });
    
    // 更新嵌套选择器中的类名
    cssContent = cssContent.replace(/  \.([a-z][a-z0-9-]*)/g, (match, className) => {
      const camelCase = toCamelCase(className);
      return `  .${camelCase}`;
    });
    
    fs.writeFileSync(moduleCssPath, cssContent);
    console.log(`✅ Updated CSS classes in: ${moduleCssPath}`);
  }

  // 3. 更新 TSX 文件
  let tsxContent = fs.readFileSync(pagePath, 'utf8');
  let hasChanges = false;

  // 更新导入语句
  if (tsxContent.includes("import './index.css';")) {
    tsxContent = tsxContent.replace("import './index.css';", "import styles from './index.module.css';");
    hasChanges = true;
  }

  // 更新类名使用
  const classNameRegex = /className\s*=\s*["']([^"']+)["']/g;
  tsxContent = tsxContent.replace(classNameRegex, (match, classNames) => {
    const updatedClassNames = classNames
      .split(' ')
      .map(className => {
        if (className.includes('-')) {
          const camelCase = toCamelCase(className);
          return `{styles.${camelCase}}`;
        }
        return className;
      })
      .join(' ');
    
    if (updatedClassNames !== classNames) {
      hasChanges = true;
      return `className={${updatedClassNames}}`;
    }
    return match;
  });

  if (hasChanges) {
    fs.writeFileSync(pagePath, tsxContent);
    console.log(`✅ Updated: ${pagePath}`);
  } else {
    console.log(`ℹ️  No changes needed: ${pagePath}`);
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 Migrating remaining page components...\n');
  
  for (const pagePath of pagesToMigrate) {
    console.log(`📄 Processing: ${pagePath}`);
    migratePage(pagePath);
    console.log('');
  }
  
  console.log('🎉 Migration completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Check if the development server is running without errors');
  console.log('2. Test all pages to ensure they display correctly');
  console.log('3. Verify CSS Modules are working for all components');
}

// 运行脚本
main();
