# LLM Daily Notes (大模型日常笔记)

<p align="center">
  <img src="docs/public/logo-large.png" alt="LLM Daily Notes Logo" width="200">
</p>

## 项目背景
这是一个记录和分享大语言模型(LLM)学习心得、研究发现和实践经验的开源知识库。通过系统化的方式，帮助开发者和研究者更好地理解和应用LLM技术。

## 核心特点
- 日更：每天更新LLM相关的思考和研究
- 系统化：按照清晰的知识体系整理内容
- 开源：GitHub开放协作，欢迎社区贡献
- 实用：结合实际应用场景的分析

## 内容架构
1. 基础理论
   - Transformer架构
   - 预训练与微调
   - 提示工程

2. 模型解析
   - GPT系列
   - Claude系列
   - Llama系列
   - 国产模型分析

3. 应用实践
   - 编程助手应用
   - 知识问答系统
   - 多模态应用
   - Agent开发

4. 前沿动态
   - 论文解读
   - 新技术追踪
   - 行业新闻

5. 思考与展望
   - 技术趋势
   - 伦理问题
   - 未来发展

## 技术实现
- 使用 VitePress 搭建文档网站
- Markdown格式编写
- GitHub Actions自动部署
- Cloudflare Pages托管

## 快速开始

### 本地开发

1. 克隆仓库
   ```bash
   git clone https://github.com/aihes/LLM_Daily_Notes.git
   cd LLM_Daily_Notes
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run docs:dev
   ```

4. 在浏览器中访问 `http://localhost:5173`

### 构建静态网站

```bash
./build.sh
```

或者使用npm命令：

```bash
npm run docs:build
```

构建后的文件将位于 `docs/.vitepress/dist` 目录中。

## 部署

本项目可以部署到 Cloudflare Pages。详细的部署指南请参考：

- [部署指南](DEPLOYMENT.md)
- [Cloudflare Pages 配置指南](CLOUDFLARE_SETUP.md)

## 参与贡献
欢迎通过以下方式参与项目：
- GitHub Discussions进行讨论
- Issue追踪内容更新建议
- Pull Request接受社区贡献

## 许可证

本项目采用 MIT 许可证。
