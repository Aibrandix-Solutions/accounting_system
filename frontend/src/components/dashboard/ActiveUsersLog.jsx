import React from 'react';
import { User, Clock, Activity } from 'lucide-react';

const ActiveUsersLog = () => {
    // Mock data matching the proposed API structure
    const activeUsers = [
        { id: 1, user: 'John Doe', action: 'Viewed Dashboard', time: 'Oct 24, 10:42 AM', status: 'online' },
        { id: 2, user: 'Sarah Wilson', action: 'Created Invoice #INV-2024-001', time: 'Oct 24, 10:38 AM', status: 'online' },
        { id: 3, user: 'Mike Brown', action: 'Updated System Settings', time: 'Oct 24, 10:15 AM', status: 'idle' },
        { id: 4, user: 'Emily Davis', action: 'Logged Out', time: 'Oct 24, 09:30 AM', status: 'offline' },
        { id: 5, user: 'Alex Turner', action: 'Exported Reports', time: 'Yesterday, 5:00 PM', status: 'offline' },
    ];

    const onlineCount = activeUsers.filter(u => u.status === 'online').length;

    return (
        <div className="glass-panel p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Activity size={20} className="text-emerald-500" />
                        Active Users Log
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                        {onlineCount} Online
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    {/* View All button removed */}
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] px-3 mb-2">
                    <span>User & Action</span>
                    <span>Date & Time</span>
                </div>
                {activeUsers.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-hover)]/30 hover:bg-[var(--bg-hover)] transition-colors border border-transparent hover:border-[var(--border-color)]">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${log.status === 'online' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-500/10 text-slate-500'}`}>
                                <User size={16} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[var(--text-main)]">{log.user}</p>
                                <p className="text-xs text-[var(--text-muted)]">{log.action}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1.5">
                                <Clock size={12} className="text-[var(--text-muted)]" />
                                <span className="text-xs text-[var(--text-muted)]">{log.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${log.status === 'online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' :
                                    log.status === 'idle' ? 'bg-amber-500' : 'bg-slate-500'
                                    }`} />
                                <span className="text-[10px] capitalize text-[var(--text-muted)]">{log.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveUsersLog;
