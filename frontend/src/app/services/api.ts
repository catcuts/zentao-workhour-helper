// API服务，用于与后端通信

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// 通用请求函数
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`API请求失败: ${response.statusText}`);
    }

    return response.json();
}

// 工时数据接口
export interface WorkHour {
    id: number;
    date: string;
    hours: number;
    project: string;
    task: string;
}

// API服务对象
export const apiService = {
    // 获取健康状态
    getHealth: () => fetchAPI<{ status: string; message: string }>("/health"),

    // 获取工时列表
    getWorkHours: () => fetchAPI<{ success: boolean; data: WorkHour[] }>("/workhours"),

    // 添加工时记录
    addWorkHour: (workHour: Omit<WorkHour, "id">) =>
        fetchAPI<{ success: boolean; data: WorkHour }>("/workhours", {
            method: "POST",
            body: JSON.stringify(workHour),
        }),

    // 更新工时记录
    updateWorkHour: (id: number, workHour: Partial<Omit<WorkHour, "id">>) =>
        fetchAPI<{ success: boolean; data: WorkHour }>(`/workhours/${id}`, {
            method: "PUT",
            body: JSON.stringify(workHour),
        }),

    // 删除工时记录
    deleteWorkHour: (id: number) =>
        fetchAPI<{ success: boolean }>(`/workhours/${id}`, {
            method: "DELETE",
        }),
};
