# 禅道工时助手

这是一个基于Next.js的全栈应用程序，用于帮助用户更方便地管理和记录禅道系统中的工时。

## 项目结构

- `frontend/`: Next.js前端应用
- `backend/`: Express.js后端API服务

## 开发环境设置

### 方法一：使用根目录统一管理（推荐）

1. 安装根目录依赖

```bash
npm install
```

2. 安装前端和后端依赖

```bash
npm install --workspaces
```

3. 配置环境变量

编辑`backend/.env`文件，设置禅道API的相关配置。

4. 启动开发服务器（同时启动前端和后端）

```bash
npm run dev
```

前端应用将在http://localhost:3000上运行，后端服务将在http://localhost:3001上运行。

### 方法二：分别管理前后端

#### 后端

1. 进入后端目录

```bash
cd backend
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

编辑`.env`文件，设置禅道API的相关配置。

4. 启动开发服务器

```bash
npm run dev
```

后端服务将在http://localhost:3001上运行。

#### 前端

1. 进入前端目录

```bash
cd frontend
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

前端应用将在http://localhost:3000上运行。

## 功能特性

- 查看工时记录
- 添加新的工时记录（即将上线）
- 与禅道系统集成（即将上线）

## 许可证

[MIT](LICENSE)