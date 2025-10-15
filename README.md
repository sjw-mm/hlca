# HLCA - 美满人生交流协会网站

这是一个基于React + TypeScript + Ant Design的协会网站，为美满人生交流协会提供现代化的在线展示平台。

## 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Ant Design 5** - UI组件库
- **React Router 7** - 路由管理
- **Vite** - 构建工具
- **i18next** - 国际化支持
- **CSS Modules** - 样式模块化

## 功能特性

### 🏠 首页
- 协会简介展示
- 团队介绍
- 活动展示
- 新闻资讯
- 多语言支持

### 📄 页面
- **关于我们** - 协会介绍和团队展示
- **协会活动** - 活动列表和详情
- **加入我们** - 会员申请表单
- **联系我们** - 联系信息和表单
- **个人资料** - 用户信息展示

### 🎨 设计特色
- 现代化协会风格
- 响应式设计
- 多语言支持（中文、英文、法文）
- 平滑动画过渡
- 专业配色方案
- 移动端适配

### 🌐 国际化
- 支持中文、英文、法文
- 自动语言检测
- 语言切换组件
- 完整的多语言内容

## 项目结构

```
src/
├── components/              # 公共组件
│   ├── Layout/             # 布局组件
│   ├── LanguageSwitcher/   # 语言切换器
│   ├── MobileBottomNav/    # 移动端底部导航
│   ├── ScrollToTop/        # 路由滚动到顶部
│   └── VideoPlayer/        # 视频播放器
├── pages/                  # 页面组件
│   ├── Home/              # 首页
│   │   └── components/     # 首页子组件
│   ├── About/             # 关于我们
│   ├── Activity/          # 协会活动
│   ├── Join/              # 加入我们
│   ├── Contact/           # 联系我们
│   └── Profile/           # 个人资料
├── i18n/                  # 国际化配置
│   ├── index.ts           # i18n配置
│   └── locales/           # 语言文件
│       ├── zh-CN.json     # 中文
│       ├── en-US.json     # 英文
│       └── fr-FR.json     # 法文
├── assets/                # 静态资源
│   ├── image/             # 图片资源
│   └── video/             # 视频资源
└── App.tsx                # 应用入口
```

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build   

# 预览构建结果
pnpm run preview

# 代码检查
pnpm run lint
```

## 主要功能

### 路由管理
- 使用React Router 7进行路由管理
- 自动滚动到页面顶部
- 响应式导航

### 国际化支持
- 支持中文、英文、法文三种语言
- 自动语言检测
- 语言切换功能

### 组件化开发
- 模块化CSS样式
- 可复用的组件设计
- TypeScript类型安全

### 移动端适配
- 响应式设计
- 移动端底部导航
- 触摸友好的交互

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

MIT License

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 联系方式

如有问题或建议，请通过以下方式联系：
- 项目Issues
- 邮箱联系
- 协会官方渠道