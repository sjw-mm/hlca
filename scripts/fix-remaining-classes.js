#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

/**
 * 快速修复脚本 - 更新剩余的类名使用
 */

// 需要修复的文件列表
const filesToFix = [
  'src/components/VideoPlayer/index.tsx',
  'src/components/MobileBottomNav/index.tsx',
  'src/components/LanguageSwitcher/index.tsx'
];

/**
 * 将 kebab-case 转换为 camelCase
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * 更新单个文件
 */
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // 更新 className 使用
  const classNameRegex = /className\s*=\s*["']([^"']+)["']/g;
  content = content.replace(classNameRegex, (match, classNames) => {
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

  // 更新模板字符串中的类名
  const templateRegex = /className\s*=\s*{`([^`]+)`}/g;
  content = content.replace(templateRegex, (match, template) => {
    const updatedTemplate = template
      .replace(/(\$\{styles\.\w+\})/g, '$1')
      .replace(/([a-z][a-z0-9-]*)/g, (className) => {
        if (className.includes('-') && !className.includes('${')) {
          const camelCase = toCamelCase(className);
          return `\${styles.${camelCase}}`;
        }
        return className;
      });
    
    if (updatedTemplate !== template) {
      hasChanges = true;
      return `className={\`${updatedTemplate}\`}`;
    }
    return match;
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${filePath}`);
  } else {
    console.log(`ℹ️  No changes needed: ${filePath}`);
  }
}

/**
 * 更新 CSS 文件中的类名
 */
function fixCssFile(cssPath) {
  if (!fs.existsSync(cssPath)) {
    console.log(`⚠️  CSS file not found: ${cssPath}`);
    return;
  }

  let content = fs.readFileSync(cssPath, 'utf8');
  
  // 将 kebab-case 类名转换为 camelCase
  content = content.replace(/\.([a-z][a-z0-9-]*)/g, (match, className) => {
    const camelCase = toCamelCase(className);
    return `.${camelCase}`;
  });
  
  // 更新伪类选择器中的类名
  content = content.replace(/\.([a-z][a-z0-9-]*):/g, (match, className) => {
    const camelCase = toCamelCase(className);
    return `.${camelCase}:`;
  });
  
  // 更新嵌套选择器中的类名
  content = content.replace(/  \.([a-z][a-z0-9-]*)/g, (match, className) => {
    const camelCase = toCamelCase(className);
    return `  .${camelCase}`;
  });
  
  fs.writeFileSync(cssPath, content);
  console.log(`✅ Updated CSS: ${cssPath}`);
}

/**
 * 主函数
 */
function main() {
  console.log('🔧 Fixing remaining class names...\n');
  
  for (const filePath of filesToFix) {
    console.log(`📄 Processing: ${filePath}`);
    
    // 更新 TSX 文件
    fixFile(filePath);
    
    // 更新对应的 CSS 文件
    const cssPath = filePath.replace('.tsx', '.module.css');
    fixCssFile(cssPath);
    
    console.log('');
  }
  
  console.log('🎉 Fix completed!');
}

// 运行脚本
main();
