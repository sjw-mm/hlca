# HLCA - Korpret企业网站模板

这是一个基于React + TypeScript + Ant Design的企业网站模板，复刻了Korpret模板的设计和功能。

## 技术栈

- **React 19** - 前端框架
- **TypeScript** - 类型安全
- **Ant Design 5** - UI组件库
- **React Router** - 路由管理
- **Vite** - 构建工具

## 功能特性

### 🏠 首页
- Hero轮播区域
- 特色服务卡片（3D翻转效果）
- 关于我们介绍
- 服务展示
- 项目作品集
- 团队介绍
- 数据统计计数器
- FAQ和联系表单
- 客户评价
- 博客文章

### 📄 页面
- **关于我们** - 公司介绍和团队展示
- **服务** - 详细的服务介绍
- **作品集** - 项目展示
- **团队** - 团队成员介绍
- **博客** - 文章列表
- **联系我们** - 联系表单和FAQ

### 🎨 设计特色
- 现代化企业风格
- 响应式设计
- 3D卡片翻转效果
- 平滑动画过渡
- 专业配色方案

## 项目结构

```
src/
├── components/          # 公共组件
│   └── Layout/         # 布局组件
├── pages/              # 页面组件
│   ├── Home/          # 首页
│   ├── About/         # 关于我们
│   ├── Services/      # 服务
│   ├── Portfolio/     # 作品集
│   ├── Team/          # 团队
│   ├── Blog/          # 博客
│   └── Contact/       # 联系我们
└── App.tsx            # 应用入口
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

MIT License