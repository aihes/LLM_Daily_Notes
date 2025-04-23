# LLM Daily Notes 部署指南

本文档提供了如何构建和部署 LLM Daily Notes 项目的详细说明。

## 本地开发

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn
```

### 本地开发服务器

启动本地开发服务器，支持热重载：

```bash
# 使用 npm
npm run docs:dev

# 或使用 yarn
yarn docs:dev
```

访问 `http://localhost:5173` 查看网站。

### 构建静态网站

构建生产环境的静态网站文件：

```bash
# 使用 npm
npm run docs:build

# 或使用 yarn
yarn docs:build
```

构建后的文件将位于 `docs/.vitepress/dist` 目录中。

### 预览构建结果

预览构建后的网站：

```bash
# 使用 npm
npm run docs:preview

# 或使用 yarn
yarn docs:preview
```

## 部署到 Cloudflare Pages

### 方法一：通过 GitHub 自动部署

1. 在 [Cloudflare Dashboard](https://dash.cloudflare.com/) 中登录您的账户
2. 进入 Pages 页面
3. 点击 "创建项目"
4. 选择 "连接到 Git"
5. 选择您的 GitHub 仓库 `LLM_Daily_Notes`
6. 配置构建设置：
   - 构建命令：`npm run docs:build`
   - 构建输出目录：`docs/.vitepress/dist`
   - 构建环境变量：根据需要添加
7. 点击 "保存并部署"

### 方法二：手动部署

1. 在本地构建项目：
   ```bash
   npm run docs:build
   ```

2. 安装 Cloudflare Wrangler CLI：
   ```bash
   npm install -g wrangler
   ```

3. 登录到 Cloudflare：
   ```bash
   wrangler login
   ```

4. 部署到 Cloudflare Pages：
   ```bash
   wrangler pages deploy docs/.vitepress/dist --project-name=llm-daily-notes
   ```

## 自定义域名设置

1. 在 Cloudflare Pages 项目中，点击 "自定义域"
2. 添加您的域名（例如 `llm-notes.yourdomain.com`）
3. 按照 Cloudflare 提供的说明更新 DNS 记录

## 持续集成/持续部署 (CI/CD)

本项目已配置 GitHub Actions 工作流，每当推送到 `main` 分支时，会自动构建并部署网站。

如果您想修改 CI/CD 配置，请编辑 `.github/workflows/deploy.yml` 文件。

## 故障排除

### 构建失败

- 确保所有依赖项都已正确安装
- 检查 Node.js 版本是否兼容
- 查看构建日志以获取详细错误信息

### 部署问题

- 确保构建输出目录设置正确
- 检查 Cloudflare Pages 项目设置
- 验证 GitHub 仓库权限设置

## 更多资源

- [VitePress 文档](https://vitepress.dev/)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
