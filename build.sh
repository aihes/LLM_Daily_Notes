#!/bin/bash

# LLM Daily Notes 构建脚本
# 此脚本用于本地构建和部署项目

# 显示彩色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}===== LLM Daily Notes 构建脚本 =====${NC}"

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo -e "${RED}错误: Node.js 未安装${NC}"
    echo "请访问 https://nodejs.org 安装 Node.js"
    exit 1
fi

# 检查 npm 是否安装
if ! command -v npm &> /dev/null; then
    echo -e "${RED}错误: npm 未安装${NC}"
    echo "请安装 npm 包管理器"
    exit 1
fi

# 显示当前环境信息
echo -e "${GREEN}环境信息:${NC}"
echo "Node.js 版本: $(node -v)"
echo "npm 版本: $(npm -v)"
echo ""

# 安装依赖
echo -e "${YELLOW}正在安装依赖...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}依赖安装失败${NC}"
    exit 1
fi
echo -e "${GREEN}依赖安装成功${NC}"
echo ""

# 构建项目
echo -e "${YELLOW}正在构建项目...${NC}"
npm run docs:build
if [ $? -ne 0 ]; then
    echo -e "${RED}构建失败${NC}"
    exit 1
fi
echo -e "${GREEN}构建成功${NC}"
echo ""

# 显示构建结果
BUILD_DIR="docs/.vitepress/dist"
FILE_COUNT=$(find $BUILD_DIR -type f | wc -l)
echo -e "${GREEN}构建结果:${NC}"
echo "输出目录: $BUILD_DIR"
echo "文件数量: $FILE_COUNT"
echo ""

# 询问是否预览
read -p "是否预览构建结果? (y/n): " PREVIEW
if [[ $PREVIEW == "y" || $PREVIEW == "Y" ]]; then
    echo -e "${YELLOW}启动预览服务器...${NC}"
    npm run docs:preview
fi

# 询问是否部署到 Cloudflare Pages
read -p "是否部署到 Cloudflare Pages? (y/n): " DEPLOY
if [[ $DEPLOY == "y" || $DEPLOY == "Y" ]]; then
    # 检查 wrangler 是否安装
    if ! command -v wrangler &> /dev/null; then
        echo -e "${YELLOW}wrangler 未安装, 正在安装...${NC}"
        npm install -g wrangler
    fi
    
    echo -e "${YELLOW}正在部署到 Cloudflare Pages...${NC}"
    wrangler pages deploy $BUILD_DIR --project-name=llm-daily-notes
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}部署失败${NC}"
        echo "请检查 Cloudflare 凭证和权限"
        exit 1
    fi
    
    echo -e "${GREEN}部署成功${NC}"
fi

echo -e "${GREEN}构建脚本执行完成${NC}"
