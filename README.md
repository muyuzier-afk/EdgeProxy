<p align="center">
  <img src="https://raw.githubusercontent.com/muyuzier-afk/EdgeProxy/main/public/vsp.png" alt="Edge Proxy Logo" width="120" height="120">
</p>

<h1 align="center">Edge Proxy</h1>

<p align="center">
  <a href="https://github.com/muyuzier-afk/EdgeProxy/stargazers">
    <img src="https://img.shields.io/github/stars/muyuzier-afk/EdgeProxy?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/muyuzier-afk/EdgeProxy/network/members">
    <img src="https://img.shields.io/github/forks/muyuzier-afk/EdgeProxy?style=social" alt="GitHub forks">
  </a>
</p>

<p align="center">
  <a href="https://github.com/muyuzier-afk/EdgeProxy">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js">
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel" alt="Vercel">
  </a>
</p>

<p align="center">
  <strong>基于 Edge Functions 的高性能网站反向代理工具</strong>
</p>

## 项目简介

Edge Proxy 是一个轻量级、高性能的网站反向代理工具，利用 Edge Functions 在全球边缘节点部署，提供快速、稳定的代理服务。支持完整的网站代理，自动重写页面中的所有链接和资源。

## 快速开始

### 前置要求

- Node.js 18.17 或更高版本
- npm 或 yarn 或 pnpm

### 本地开发

```bash
# 克隆项目
git clone https://github.com/muyuzier-afk/EdgeProxy.git
cd EdgeProxy

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看主页

### 构建生产版本

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 部署教程

### 方法一：使用 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel
```

按照提示操作：
1. 选择要部署的项目目录
2. 选择或创建 Vercel 账户
3. 配置项目设置（通常使用默认设置即可）
4. 等待部署完成

部署完成后，你会获得一个 `.vercel.app` 域名，例如：`https://vercel-site-proxy.vercel.app`

### 方法二：通过 Vercel 网页部署

1. 将代码推送到 GitHub
2. 访问 [Vercel 官网](https://vercel.com)
3. 点击 "Add New" -> "Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测 Next.js 项目
6. 点击 "Deploy" 按钮开始部署
7. 等待部署完成

### 方法三：一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muyuzier-afk/EdgeProxy)

点击上面的按钮，按照提示操作即可快速部署。

### 自定义域名配置

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录
4. 等待 SSL 证书自动签发

## 使用方法

### Web 界面使用

访问部署后的网站，在输入框中输入目标网站 URL，点击"代理访问"按钮即可。

### API 使用

#### 简单代理（单个请求）

```bash
# GET 请求
curl "https://your-domain.vercel.app/api/proxy/simple?url=https://api.example.com/data"

# POST 请求
curl -X POST "https://your-domain.vercel.app/api/proxy/simple?url=https://api.example.com/create" \
  -H "Content-Type: application/json" \
  -d '{"key": "value"}'
```

#### 完整网站代理（自动重写所有链接）

```bash
# 浏览整个网站
https://your-domain.vercel.app/api/proxy/site?url=https://example.com

# 使用路径方式访问
https://your-domain.vercel.app/api/proxy/site/example.com
```

## 项目结构

```
edge-proxy/
├── app/
│   ├── api/
│   │   └── proxy/
│   │       ├── route.ts          # 简单代理
│   │       ├── simple/
│   │       │   └── route.ts      # 简单代理（单个请求）
│   │       └── site/
│   │           └── route.ts      # 完整网站代理
│   ├── doc/
│   │   └── page.tsx              # 文档页面
│   ├── about/
│   │   └── page.tsx              # 关于页面
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # 主页
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

## 许可证

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2026 Edge Proxy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
