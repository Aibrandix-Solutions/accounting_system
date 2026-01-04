import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
    const data = [
        { name: 'Jan', revenue: 4000, expenses: 2400 },
        { name: 'Feb', revenue: 3000, expenses: 1398 },
        { name: 'Mar', revenue: 2000, expenses: 9800 },
        { name: 'Apr', revenue: 2780, expenses: 3908 },
        { name: 'May', revenue: 1890, expenses: 4800 },
        { name: 'Jun', revenue: 2390, expenses: 3800 },
        { name: 'Jul', revenue: 3490, expenses: 4300 },
        { name: 'Aug', revenue: 4200, expenses: 3100 },
        { name: 'Sep', revenue: 3800, expenses: 2900 },
        { name: 'Oct', revenue: 5100, expenses: 4000 },
        { name: 'Nov', revenue: 4800, expenses: 3600 },
        { name: 'Dec', revenue: 6000, expenses: 4500 },
    ];

    return (
        <div className="lg:col-span-2 bg-[var(--bg-card)] rounded-2xl p-6 shadow-lg border border-[var(--border-color)]">
            <h3 className="text-lg font-semibold mb-6">Revenue Overview</h3>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRev)" />
                        <Area type="monotone" dataKey="expenses" stroke="#ec4899" fillOpacity={1} fill="url(#colorExp)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
