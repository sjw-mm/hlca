#!/usr/bin/env node

import fs from 'fs';

/**
 * 修复 Join/index_new.tsx 文件中的类名使用
 */

const filePath = 'src/pages/Join/index_new.tsx';

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

function fixFile() {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 更新类名使用
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
      return `className={${updatedClassNames}}`;
    }
    return match;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated class names in: ${filePath}`);
}

fixFile();
