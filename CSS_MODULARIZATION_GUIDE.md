# CSS 模块化重构指南

## 概述

本项目已实施CSS模块化解决方案，避免样式相互影响，提高代码可维护性和可扩展性。

## 样式系统架构

### 1. 样式文件结构
```
src/styles/
├── variables.css    # CSS变量定义
├── base.css        # 基础样式和通用组件
└── utils.css       # 工具类和辅助样式

src/pages/Home/components/
├── NewsSection.tsx
├── NewsSection.module.css  # 模块化样式
└── NewsSection.css         # 旧样式（待删除）
```

### 2. CSS变量系统
- **颜色系统**: 主色调、文本颜色、背景颜色等
- **字体系统**: 字体族、字号、字重等
- **间距系统**: 统一的间距值
- **圆角系统**: 统一的圆角值
- **阴影系统**: 统一的阴影效果
- **断点系统**: 响应式断点定义

### 3. 命名规范

#### CSS类命名
- 使用BEM命名法：`.block__element--modifier`
- 组件样式使用模块化：`.componentName`
- 工具类使用语义化：`.text-center`, `.flex-center`

#### 文件命名
- 模块化样式：`ComponentName.module.css`
- 全局样式：`variables.css`, `base.css`, `utils.css`

## 重构步骤

### 1. 创建模块化样式文件
```css
/* ComponentName.module.css */
.componentName {
  /* 使用CSS变量 */
  color: var(--text-primary);
  background: var(--background-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.componentName:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### 2. 更新组件文件
```tsx
// 导入模块化样式
import styles from './ComponentName.module.css';

// 使用样式
<div className={styles.componentName}>
  <h2 className={styles.title}>标题</h2>
</div>
```

### 3. 删除旧样式文件
- 确认新样式正常工作后
- 删除对应的 `.css` 文件
- 更新组件导入

## 最佳实践

### 1. 使用CSS变量
```css
/* ✅ 推荐 */
.button {
  background: var(--primary-color);
  color: var(--text-primary);
  padding: var(--spacing-lg);
}

/* ❌ 避免 */
.button {
  background: #F668AC;
  color: #17161a;
  padding: 16px;
}
```

### 2. 模块化样式隔离
```css
/* ✅ 推荐 - 使用模块化 */
.newsSection {
  padding: var(--spacing-5xl) 0;
}

/* ❌ 避免 - 全局样式 */
.news-section {
  padding: 80px 0;
}
```

### 3. 响应式设计
```css
/* ✅ 推荐 - 使用断点变量 */
@media (max-width: 768px) {
  .componentName {
    padding: var(--spacing-md);
  }
}

/* ❌ 避免 - 硬编码断点 */
@media (max-width: 768px) {
  .componentName {
    padding: 12px;
  }
}
```

### 4. 组件样式组织
```css
/* 组件根元素 */
.componentName {
  /* 基础样式 */
}

/* 子元素 */
.componentName__header {
  /* 头部样式 */
}

.componentName__content {
  /* 内容样式 */
}

/* 修饰符 */
.componentName--large {
  /* 大尺寸样式 */
}

.componentName--active {
  /* 激活状态样式 */
}
```

## 迁移清单

### 已完成
- [x] 创建样式系统基础文件
- [x] 重构 NewsSection 组件
- [x] 更新全局样式文件

### 待完成
- [ ] 重构 HeroSection 组件
- [ ] 重构 AboutSection 组件
- [ ] 重构 TeamSection 组件
- [ ] 重构 ActivitySection 组件
- [ ] 重构 Layout 组件
- [ ] 重构其他页面组件
- [ ] 清理旧样式文件
- [ ] 测试样式兼容性

## 注意事项

1. **渐进式迁移**: 一次重构一个组件，确保功能正常
2. **保持向后兼容**: 在完全迁移前保留旧样式
3. **测试响应式**: 确保在不同设备上样式正常
4. **性能优化**: 避免重复的CSS规则
5. **团队协作**: 确保团队成员了解新的命名规范

## 工具和资源

- CSS变量浏览器支持: https://caniuse.com/css-variables
- BEM命名法: https://getbem.com/
- CSS模块化: https://github.com/css-modules/css-modules
