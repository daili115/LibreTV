# LibreTV 详细部署指南 (中文)

**项目简介**：LibreTV 是一个轻量级、免费的在线视频搜索与观看平台，提供来自多个视频源的内容搜索与播放服务。本项目基于 Node.js 运行时环境，并结合了前端技术和后端代理功能，因此需要部署在支持服务端功能的平台或环境中。

本指南将详细介绍 LibreTV 的多种部署方式，包括一键部署、Serverless 平台部署、Docker 容器化部署以及本地运行。

---

## ⚠️ 安全与隐私提醒：强烈建议设置密码保护

为了您的安全和避免潜在的法律风险，我们**强烈建议**在部署时设置密码保护：

1.  **设置环境变量 `PASSWORD`**：为您的实例设置一个访问密码。
2.  **设置环境变量 `ADMINPASSWORD` (可选)**：为设置页面设置一个管理密码。

**重要声明**：本项目仅供学习和个人使用。请勿将部署的实例用于商业用途或公开服务。如因公开分享导致的任何法律问题，用户需自行承担责任。

---

## 🚀 部署方式一：一键部署 (推荐)

LibreTV 提供了对主流 Serverless 平台的原生支持，您可以通过点击以下按钮快速部署：

| 平台 | 优势 | 部署链接 |
| :--- | :--- | :--- |
| **Vercel** | 部署速度快，全球 CDN 加速 | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLibreSpark%2FLibreTV) |
| **Netlify** | 稳定的 Serverless Functions 支持 | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LibreSpark/LibreTV) |
| **Render** | 支持 Web Service 模式，配置灵活 | [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/LibreSpark/LibreTV) |

**部署步骤概览**：

1.  点击上方任一平台的“Deploy”按钮。
2.  授权平台访问您的 GitHub 账号，并克隆项目。
3.  在部署配置页面，找到“环境变量”或“Environment Variables”部分。
4.  **务必添加 `PASSWORD` 环境变量**，并设置一个强密码。
5.  点击部署，等待部署完成。

---

## 💻 部署方式二：Serverless 平台详细指南

Serverless 平台是部署 LibreTV 的首选方式，因为它能提供稳定且低成本的运行环境。

### 1. Vercel 部署

Vercel 是一个流行的 Serverless 平台，LibreTV 通过 `vercel.json` 文件自动配置。

1.  **Fork 项目**：将 `daili115/LibreTV` 项目 Fork 到您自己的 GitHub 账号下。
2.  **新建项目**：登录 [Vercel](https://vercel.com/)，点击 **New Project**，导入您 Fork 的仓库。
3.  **配置环境变量**：在项目设置的 **Settings** > **Environment Variables** 中，添加以下变量：
    *   `PASSWORD`: 您的访问密码（必填）。
    *   `ADMINPASSWORD`: 您的管理密码（可选）。
4.  **部署**：点击 **Deploy**，Vercel 将自动完成构建和部署。

### 2. Cloudflare Pages 部署

Cloudflare Pages 结合了静态托管和 Cloudflare Functions 的能力。

1.  **Fork 项目**：将 `daili115/LibreTV` 项目 Fork 到您自己的 GitHub 账号下。
2.  **创建项目**：登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 Pages 服务，点击 **创建项目**，连接您的 GitHub 仓库。
3.  **构建设置**：
    *   **构建命令**：留空（无需构建）。
    *   **输出目录**：留空。
4.  **配置环境变量**：在 **设置** > **环境变量** 中，添加以下变量：
    *   `PASSWORD`: 您的访问密码（必填）。
    *   `ADMINPASSWORD`: 您的管理密码（可选）。
5.  **部署**：点击 **保存并部署**。

### 3. Netlify 部署

Netlify 同样支持 Serverless Functions。

1.  **Fork 项目**：将 `daili115/LibreTV` 项目 Fork 到您自己的 GitHub 账号下。
2.  **新建站点**：登录 [Netlify](https://www.netlify.com/)，点击 **Add new site** > **Import an existing project**，连接您的 GitHub 仓库。
3.  **配置环境变量**：在 **Site settings** > **Build & deploy** > **Environment** 中，添加以下变量：
    *   `PASSWORD`: 您的访问密码（必填）。
    *   `ADMINPASSWORD`: 您的管理密码（可选）。
4.  **部署**：点击 **Deploy site**。

---

## 📦 部署方式三：Docker 容器化部署

Docker 部署提供了更高的环境隔离性和可移植性，适合在 VPS 或私有服务器上运行。

### 1. 使用 Docker 命令

您可以直接拉取官方 Docker 镜像并运行：

```bash
docker run -d \
  --name libretv \
  --restart unless-stopped \
  -p 8899:8080 \
  -e PASSWORD=your_strong_password \
  -e ADMINPASSWORD=your_admin_password \
  bestzwei/libretv:latest
```

*   `-p 8899:8080`: 将容器内部的 `8080` 端口映射到宿主机的 `8899` 端口。您可以根据需要修改 `8899`。
*   `-e PASSWORD`: 设置访问密码。**请务必修改为您的密码**。
*   `-e ADMINPASSWORD`: 设置管理密码（可选）。

部署完成后，通过 `http://<您的服务器IP>:8899` 访问。

### 2. 使用 Docker Compose

使用 `docker-compose.yml` 可以更方便地管理容器配置：

**`docker-compose.yml` 文件内容：**

```yaml
version: '3.8'
services:
  libretv:
    image: bestzwei/libretv:latest
    container_name: libretv
    ports:
      - "8899:8080" # 将内部 8080 端口映射到主机的 8899 端口
    environment:
      # ⚠️ 务必修改为您的密码，或使用 .env 文件管理
      - PASSWORD=your_strong_password 
      - ADMINPASSWORD=your_admin_password 
    restart: unless-stopped
```

**启动命令：**

```bash
# 确保您在包含 docker-compose.yml 文件的目录下
docker compose up -d
```

---

## 🛠️ 部署方式四：本地开发环境或 VPS 部署 (Node.js)

如果您希望在本地进行开发、测试，或在支持 Node.js 的 VPS 上直接运行，可以采用此方式。

**环境要求**：Node.js (LTS 版本，推荐 18+)

1.  **克隆仓库**：
    ```bash
    git clone https://github.com/daili115/LibreTV.git
    cd LibreTV
    ```

2.  **配置环境变量**：
    创建 `.env` 文件来配置运行参数和密码。
    ```bash
    # .env 文件示例
    PORT=8080
    PASSWORD=your_strong_password
    ADMINPASSWORD=your_admin_password
    # 其他可选配置，如 CORS_ORIGIN, DEBUG 等
    ```
    您也可以复制项目中的 `.env.example` 文件：`cp .env.example .env`。

3.  **安装依赖**：
    ```bash
    npm install
    ```

4.  **启动服务器**：
    *   **开发模式 (带热重载)**：
        ```bash
        npm run dev 
        # 使用 nodemon 启动，适合开发调试
        ```
    *   **生产模式 (推荐)**：
        ```bash
        npm start
        # 使用 node server.mjs 启动，适合正式运行
        ```

5.  **访问**：
    服务器启动后，通过 `http://localhost:8080` (或您在 `.env` 中设置的端口) 访问。

> **注意**：由于项目包含后端代理功能，必须通过 `npm run dev` 或 `npm start` 启动 Node.js 服务器才能实现视频播放功能。使用简单的静态服务器（如 `python -m http.server`）将无法正常播放视频。

---

## ⚙️ 核心配置项

以下是部署 LibreTV 时常用的核心环境变量：

| 变量名 | 描述 | 必填/可选 | 默认值 |
| :--- | :--- | :--- | :--- |
| `PASSWORD` | 网站访问密码，设置后访问前需要输入密码。 | 必填 (强烈建议) | 无 |
| `ADMINPASSWORD` | 管理设置页面的密码。 | 可选 | 无 |
| `PORT` | 服务器监听端口。 | 可选 | `8080` |
| `CORS_ORIGIN` | 跨域资源共享 (CORS) 允许的来源。 | 可选 | `*` (允许所有) |
| `REQUEST_TIMEOUT` | 后端请求超时时间 (毫秒)。 | 可选 | `5000` |
| `MAX_RETRIES` | 后端请求失败后的最大重试次数。 | 可选 | `2` |
| `CACHE_MAX_AGE` | 缓存最大存活时间 (例如 `1d`, `1h`)。 | 可选 | `1d` |

**配置方法**：根据您选择的部署平台，在平台的**环境变量**设置中添加或修改这些变量。

---

## 📚 附录：项目结构概览

LibreTV 的核心文件和目录结构如下：

| 文件/目录 | 描述 |
| :--- | :--- |
| `server.mjs` | Node.js 后端入口文件，处理视频代理和 API 请求。 |
| `index.html` | 网站主页。 |
| `js/` | 包含主要的 JavaScript 逻辑和播放器配置。 |
| `css/` | 样式文件。 |
| `functions/` | 包含 Serverless Functions 的代码（如 Vercel/Netlify Functions）。 |
| `Dockerfile` | Docker 容器化配置文件。 |
| `docker-compose.yml` | Docker Compose 编排文件。 |
| `vercel.json` | Vercel 平台配置。 |
| `netlify.toml` | Netlify 平台配置。 |
| `render.yaml` | Render 平台配置。 |
| `package.json` | Node.js 项目依赖和脚本配置。 |
