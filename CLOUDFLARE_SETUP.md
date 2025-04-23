# Cloudflare Pages 配置指南

本文档提供了如何在 Cloudflare Pages 上配置和部署 LLM Daily Notes 项目的详细步骤。

## 前提条件

1. 拥有 Cloudflare 账户
2. 已将项目推送到 GitHub 仓库

## 方法一：通过 Cloudflare Dashboard 配置

### 步骤 1: 创建 Cloudflare Pages 项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧导航栏中点击 "Pages"
3. 点击 "创建项目" 按钮
4. 选择 "连接到 Git"

### 步骤 2: 连接 GitHub 仓库

1. 授权 Cloudflare 访问您的 GitHub 账户
2. 从列表中选择 `LLM_Daily_Notes` 仓库
3. 点击 "开始设置"

### 步骤 3: 配置构建设置

填写以下信息:

- **项目名称**: `llm-daily-notes` (或您喜欢的名称)
- **生产分支**: `main`
- **构建设置**:
  - **框架预设**: `None` (自定义)
  - **构建命令**: `npm run docs:build`
  - **构建输出目录**: `docs/.vitepress/dist`
  - **根目录**: (保持为空)

### 步骤 4: 环境变量 (可选)

如果需要，添加环境变量:

- 点击 "环境变量" 标签
- 添加所需的环境变量，例如:
  - `NODE_VERSION`: `18`

### 步骤 5: 部署

1. 点击 "保存并部署" 按钮
2. Cloudflare 将开始构建和部署您的网站
3. 部署完成后，您将收到一个 `*.pages.dev` 域名

## 方法二：通过 GitHub Actions 自动部署

### 步骤 1: 获取 Cloudflare API 令牌

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角的个人资料图标，然后选择 "我的个人资料"
3. 在左侧导航栏中点击 "API 令牌"
4. 点击 "创建令牌" 按钮
5. 选择 "创建自定义令牌"
6. 命名令牌 (例如 "GitHub Actions - LLM Daily Notes")
7. 添加以下权限:
   - Account > Cloudflare Pages > Edit
   - Account > Account Settings > Read
8. 点击 "继续到摘要" 然后 "创建令牌"
9. 复制生成的令牌 (它只会显示一次)

### 步骤 2: 获取 Cloudflare 账户 ID

1. 登录 Cloudflare Dashboard
2. 您的账户 ID 显示在右侧栏的底部
3. 复制账户 ID

### 步骤 3: 在 GitHub 中添加 Secrets

1. 在 GitHub 上打开您的仓库
2. 点击 "Settings" > "Secrets and variables" > "Actions"
3. 点击 "New repository secret"
4. 添加以下 secrets:
   - 名称: `CLOUDFLARE_API_TOKEN`
     值: 您在步骤 1 中创建的 API 令牌
   - 名称: `CLOUDFLARE_ACCOUNT_ID`
     值: 您在步骤 2 中获取的账户 ID

### 步骤 4: 推送更改触发部署

1. 确保 `.github/workflows/deploy.yml` 文件已更新为使用 Cloudflare Pages
2. 将更改推送到 `main` 分支
3. GitHub Actions 将自动构建并部署到 Cloudflare Pages

## 自定义域名设置

### 步骤 1: 添加自定义域名

1. 在 Cloudflare Pages 项目中，点击 "自定义域" 标签
2. 点击 "设置自定义域" 按钮
3. 输入您的域名 (例如 `llm-notes.yourdomain.com`)
4. 点击 "继续"

### 步骤 2: 验证域名

如果您的域名已经在 Cloudflare 上:
- 选择 "在 Cloudflare 上激活域名"

如果您的域名不在 Cloudflare 上:
- 按照提供的说明更新 DNS 记录
- 等待 DNS 传播 (可能需要 24-48 小时)

## 高级配置

### 自定义构建设置

您可以在项目根目录创建 `cloudflare.toml` 文件来自定义构建设置:

```toml
[build]
  command = "npm run docs:build"
  publish = "docs/.vitepress/dist"
  
[build.environment]
  NODE_VERSION = "18"
```

### 自定义头部和重定向

在 `cloudflare.toml` 文件中添加:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"

[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301
```

## 故障排除

### 构建失败

- 检查构建命令和输出目录是否正确
- 验证项目依赖项是否正确安装
- 查看构建日志以获取详细错误信息

### 部署问题

- 确保 API 令牌具有正确的权限
- 验证账户 ID 是否正确
- 检查 GitHub Actions 工作流程配置

## 更多资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
