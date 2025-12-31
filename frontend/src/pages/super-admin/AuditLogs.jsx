import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Clock,
    User,
    Globe,
    Shield,
    FileText,
    Activity
} from 'lucide-react';

const AuditLogs = () => {
    // Mock Data
    const [logs, setLogs] = useState([
        { id: 1, action: 'User Login', user: 'John Doe', role: 'Company Admin', ip: '192.168.1.1', date: '2023-11-01 09:12:45', details: 'Successful login from Chrome on Windows' },
        { id: 2, action: 'Settings Updated', user: 'Master Admin', role: 'Super Admin', ip: '10.0.0.5', date: '2023-11-01 10:30:11', details: 'Changed default tax rate to 18%' },
        { id: 3, action: 'Invoice Deleted', user: 'Sarah Smith', role: 'Manager', ip: '192.168.1.12', date: '2023-11-01 11:45:22', details: 'Deleted overdue invoice #INV-003' },
        { id: 4, action: 'User Created', user: 'Master Admin', role: 'Super Admin', ip: '10.0.0.5', date: '2023-11-01 14:20:05', details: 'Created new user account: bob@techflow.com' },
        { id: 5, action: 'Failed Login', user: 'unknown', role: 'Guest', ip: '45.76.12.99', date: '2023-11-01 16:05:01', details: 'Invalid password attempt for account: admin@test.com' },
    ]);

    const getActionColor = (action) => {
        if (action.includes('Delete') || action.includes('Failed')) return 'text-red-500 bg-red-500/10 border-red-500/20';
        if (action.includes('Update') || action.includes('Change')) return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">Audit Logs</h1>
                    <p className="text-[var(--text-muted)]">Track system activities for security and compliance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                        <Download size={18} />
                        <span>Export Logs</span>
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="glass-card p-4 rounded-xl border border-[var(--border-color)] flex items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                    <input
                        type="text"
                        placeholder="Search logs by action, user, or IP..."
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-slate-500"
                    />
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg hover:border-[var(--primary)] transition-colors">
                        <Calendar size={16} />
                        <span>Date Range</span>
                    </button>
                </div>
            </div>

            {/* Logs Table */}
            <div className="glass-card rounded-xl border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--border-color)] bg-[var(--bg-hover)]">
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Action</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">User</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Date & Time</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">IP Address</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log) => (
                                <tr key={log.id} className="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-hover)] transition-colors">
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getActionColor(log.action)}`}>
                                            {log.action}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <Shield size={14} className="text-[var(--text-muted)]" />
                                            <div>
                                                <div className="font-medium text-[var(--text-main)]">{log.user}</div>
                                                <div className="text-xs text-[var(--text-muted)]">{log.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-[var(--text-muted)] font-medium font-mono">{log.date}</td>
                                    <td className="p-4 text-sm text-[var(--text-muted)] font-mono">{log.ip}</td>
                                    <td className="p-4 text-sm text-[var(--text-main)] max-w-xs truncate" title={log.details}>
                                        {log.details}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AuditLogs;
