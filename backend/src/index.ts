import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// 加载环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由
app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok", message: "API服务正常运行" });
});

// 示例API路由
app.get("/api/workhours", (req: Request, res: Response) => {
    // 这里将来会实现获取工时数据的逻辑
    res.json({
        success: true,
        data: [
            { id: 1, date: "2023-06-15", hours: 8, project: "项目A", task: "开发任务1" },
            { id: 2, date: "2023-06-16", hours: 7, project: "项目B", task: "测试任务1" },
        ],
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
