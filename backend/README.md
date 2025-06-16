# 禅道工时助手后端

这是禅道工时助手的后端API服务，提供与禅道系统交互的接口，帮助用户更方便地管理和记录工时。

## 技术栈

- Node.js
- Express.js
- TypeScript
- 其他依赖库（详见package.json）

## 开发环境设置

1. 安装依赖

```bash
npm install
```

2. 配置环境变量

复制`.env.example`文件（如果有的话）为`.env`，并根据你的禅道系统配置填写相应的值。

3. 启动开发服务器

```bash
npm run dev
```

服务器将在http://localhost:3001上运行（除非在.env中指定了其他端口）。

## 构建生产版本

```bash
npm run build
```

编译后的文件将位于`dist`目录中。

## 启动生产服务器

```bash
npm start
```

## API文档

### 健康检查

```
GET /api/health
```

返回API服务的状态。

### 获取工时数据

```
GET /api/workhours
```

返回工时数据列表。

## 许可证

[MIT](LICENSE)
