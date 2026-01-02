import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const ExpensePieChart = () => {
    const pieData = [
        { name: 'Operations', value: 400 },
        { name: 'Marketing', value: 300 },
        { name: 'Salaries', value: 300 },
        { name: 'Equipment', value: 200 },
    ];

    const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];

    return (
        <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold mb-6">Expense Distribution</h3>
            <div className="h-[300px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <p className="text-xs text-[var(--text-muted)]">Total</p>
                        <p className="text-xl font-bold">$12.4k</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                {pieData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <span className="text-[var(--text-muted)]">{entry.name}</span>
                        </div>
                        <span className="font-medium">{Math.round((entry.value / 1200) * 100)}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpensePieChart;
