#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * CSS Modules 迁移脚本
 * 自动将 .css 文件重命名为 .module.css 并更新相应的导入语句
 */

// 配置
const CONFIG = {
  // 要排除的目录
  excludeDirs: ['node_modules', 'dist', '.git'],
  // 要排除的文件
  excludeFiles: ['index.css', 'App.css'],
  // 要处理的文件扩展名
  cssExtensions: ['.css'],
  // 要更新的文件扩展名
  tsxExtensions: ['.tsx', '.ts', '.jsx', '.js']
};

/**
 * 递归查找所有 CSS 文件
 */
function findCssFiles(dir, cssFiles = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        findCssFiles(fullPath, cssFiles);
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      const basename = path.basename(item, ext);
      
      if (CONFIG.cssExtensions.includes(ext) && 
          !CONFIG.excludeFiles.includes(item) &&
          !item.includes('.module.')) {
        cssFiles.push({
          fullPath,
          dir: path.dirname(fullPath),
          name: basename,
          ext: ext
        });
      }
    }
  }
  
  return cssFiles;
}

/**
 * 将 kebab-case 转换为 camelCase
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * 更新 CSS 文件中的类名
 */
function updateCssFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
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
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated CSS classes in: ${filePath}`);
}

/**
 * 查找并更新 TSX 文件中的导入和类名使用
 */
function updateTsxFile(tsxPath, cssFile) {
  let content = fs.readFileSync(tsxPath, 'utf8');
  let hasChanges = false;
  
  // 更新导入语句
  const importRegex = new RegExp(`import\\s+['"]\\.\\/${cssFile.name}\\.css['"];?`, 'g');
  if (importRegex.test(content)) {
    content = content.replace(importRegex, `import styles from './${cssFile.name}.module.css';`);
    hasChanges = true;
    console.log(`✅ Updated import in: ${tsxPath}`);
  }
  
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
    fs.writeFileSync(tsxPath, content);
    console.log(`✅ Updated class names in: ${tsxPath}`);
  }
}

/**
 * 查找对应的 TSX 文件
 */
function findCorrespondingTsxFiles(cssFile) {
  const tsxFiles = [];
  const dir = cssFile.dir;
  
  for (const ext of CONFIG.tsxExtensions) {
    const tsxPath = path.join(dir, `${cssFile.name}${ext}`);
    if (fs.existsSync(tsxPath)) {
      tsxFiles.push(tsxPath);
    }
  }
  
  return tsxFiles;
}

/**
 * 重命名 CSS 文件为 .module.css
 */
function renameCssFile(cssFile) {
  const newPath = path.join(cssFile.dir, `${cssFile.name}.module.css`);
  
  if (fs.existsSync(newPath)) {
    console.log(`⚠️  Module CSS file already exists: ${newPath}`);
    return false;
  }
  
  fs.renameSync(cssFile.fullPath, newPath);
  console.log(`✅ Renamed: ${cssFile.fullPath} → ${newPath}`);
  return true;
}

/**
 * 主迁移函数
 */
function migrateToCssModules(srcDir) {
  console.log('🚀 Starting CSS Modules migration...\n');
  
  const cssFiles = findCssFiles(srcDir);
  
  if (cssFiles.length === 0) {
    console.log('❌ No CSS files found to migrate.');
    return;
  }
  
  console.log(`📁 Found ${cssFiles.length} CSS files to migrate:\n`);
  
  for (const cssFile of cssFiles) {
    console.log(`📄 Processing: ${cssFile.fullPath}`);
    
    // 1. 重命名 CSS 文件
    if (!renameCssFile(cssFile)) {
      continue;
    }
    
    // 2. 更新 CSS 文件中的类名
    const newCssPath = path.join(cssFile.dir, `${cssFile.name}.module.css`);
    updateCssFile(newCssPath);
    
    // 3. 查找并更新对应的 TSX 文件
    const tsxFiles = findCorrespondingTsxFiles(cssFile);
    for (const tsxFile of tsxFiles) {
      updateTsxFile(tsxFile, cssFile);
    }
    
    console.log('');
  }
  
  console.log('🎉 Migration completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Review the changes and test your application');
  console.log('2. Fix any remaining class name issues manually');
  console.log('3. Update any global CSS imports if needed');
  console.log('4. Commit your changes');
}

/**
 * 命令行参数处理
 */
function main() {
  const args = process.argv.slice(2);
  const srcDir = args[0] || './src';
  
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Directory not found: ${srcDir}`);
    process.exit(1);
  }
  
  console.log(`📂 Source directory: ${srcDir}`);
  migrateToCssModules(srcDir);
}

// 运行脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  migrateToCssModules,
  findCssFiles,
  updateCssFile,
  updateTsxFile
};
