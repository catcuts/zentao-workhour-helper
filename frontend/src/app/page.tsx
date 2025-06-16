"use client";

import { useState, useEffect } from "react";
import { apiService, WorkHour } from "./services/api";

export default function Home() {
    const [workHours, setWorkHours] = useState<WorkHour[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkHours = async () => {
            try {
                setLoading(true);
                const response = await apiService.getWorkHours();
                setWorkHours(response.data);
                setError(null);
            } catch (err) {
                console.error("获取工时数据失败:", err);
                setError("获取工时数据失败，请稍后再试");
            } finally {
                setLoading(false);
            }
        };

        fetchWorkHours();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold mb-8 text-center">禅道工时助手</h1>

                {loading ? (
                    <div className="text-center">加载中...</div>
                ) : error ? (
                    <div className="text-red-500 text-center">{error}</div>
                ) : (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        日期
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        项目
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        任务
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        工时
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {workHours.length > 0 ? (
                                    workHours.map((workHour) => (
                                        <tr key={workHour.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {workHour.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {workHour.project}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {workHour.task}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {workHour.hours}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-4 text-center">
                                            暂无工时数据
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => alert("添加工时功能即将上线")}
                    >
                        添加工时
                    </button>
                </div>
            </div>
        </main>
    );
}
