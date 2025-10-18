# XTL1016 Vercel 部署版本

这是一个专为 Vercel 平台优化的 AI 股票预测落地页项目。

## 项目结构

```
xtl1016-vercel/
├── index.html          # 主页面（桌面版）
├── mobile.html         # 移动端页面
├── assets/             # 静态资源文件夹
│   ├── big.gif        # 背景动图
│   ├── lod.gif        # 加载动图
│   ├── con_bg.png     # 内容背景图
│   ├── t_bg.png       # 标题背景图
│   ├── style.css      # 主样式文件
│   ├── common.min.css # 通用样式文件
│   └── 1.js           # JavaScript 文件
├── package.json        # 项目配置文件
├── vercel.json         # Vercel 部署配置
└── README.md          # 说明文档
```

## 功能特性

- ✅ 响应式设计，支持桌面和移动端
- ✅ Safari 浏览器兼容性优化
- ✅ 多种跳转方式确保兼容性
- ✅ 用户数量动态更新
- ✅ 错误处理和备用方案
- ✅ 静态资源缓存优化
- ✅ 无统计代码，纯净版本

## 部署到 Vercel

### 方法一：通过 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 在项目目录中登录 Vercel：
```bash
vercel login
```

3. 部署项目：
```bash
vercel
```

4. 生产环境部署：
```bash
vercel --prod
```

### 方法二：通过 GitHub 集成

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 控制台连接 GitHub 仓库
3. 自动部署

### 方法三：直接上传

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择 "Upload" 选项
4. 上传整个 `xtl1016-vercel` 文件夹

## 配置说明

### vercel.json 配置

- **静态文件服务**：使用 `@vercel/static` 构建器
- **路由配置**：
  - `/mobile` → `mobile.html`
  - `/assets/*` → 静态资源
  - 其他所有路由 → `index.html`
- **缓存策略**：
  - 静态资源：1年缓存
  - HTML/CSS/JS：不缓存，强制重新验证

### 跳转链接配置

当前跳转链接已设置为：`https://7ttb4.bemobtracks.com/click`

如需修改跳转链接，请编辑以下文件中的 `targetUrl` 变量：
- `index.html`
- `mobile.html` 
- `assets/1.js`

## 页面说明

### 主页面 (index.html)
- 桌面版优化
- 完整的事件处理逻辑
- 自动跳转功能
- 详细的错误处理

### 移动端页面 (mobile.html)
- 移动端优化
- 简化的交互逻辑
- Safari 兼容性改进
- 触摸事件支持

## 技术栈

- **前端**：HTML5, CSS3, JavaScript (ES5)
- **部署**：Vercel Static
- **兼容性**：支持所有现代浏览器
- **特点**：无第三方统计代码，纯净版本

## 注意事项

1. **资源路径**：所有资源路径已更新为 `./assets/` 前缀
2. **跳转链接**：已设置为 `https://7ttb4.bemobtracks.com/click`，可根据需要修改
3. **缓存策略**：静态资源设置了长期缓存，修改后需要清除缓存
4. **Safari 兼容性**：已针对 Safari 浏览器进行特殊优化
5. **统计代码**：已移除所有 Google Analytics 相关代码

## 自定义配置

### 修改跳转链接

在 `index.html`、`mobile.html` 和 `assets/1.js` 中找到以下代码段并修改：

```javascript
var targetUrl = 'https://7ttb4.bemobtracks.com/click';  // 修改为你的链接
```

### 修改页面内容

- 标题：修改 `<title>` 标签
- 描述：修改 `<meta name="Description">` 标签
- 页面内容：修改 HTML 中的文本内容

## 故障排除

### 常见问题

1. **资源加载失败**：检查 `assets` 文件夹是否完整
2. **跳转不工作**：检查 JavaScript 控制台错误
3. **样式显示异常**：检查 CSS 文件路径
4. **Safari 兼容性问题**：确保使用了最新的兼容性代码

### 调试方法

1. 打开浏览器开发者工具
2. 查看 Console 标签页的错误信息
3. 检查 Network 标签页的资源加载情况
4. 使用 Vercel 的预览功能测试部署

## 更新日志

- **v1.1.0**：移除统计代码版本
  - 移除所有 Google Analytics 相关代码
  - 更新跳转链接为 `https://7ttb4.bemobtracks.com/click`
  - 简化跳转逻辑，提高性能
- **v1.0.0**：初始版本，支持 Vercel 部署
  - 优化了资源路径和缓存策略
  - 改进了 Safari 兼容性
  - 添加了详细的错误处理

## 支持

如有问题，请检查：
1. Vercel 部署日志
2. 浏览器控制台错误
3. 网络连接状态
4. 资源文件完整性
