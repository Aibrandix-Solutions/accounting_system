import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Shield,
    Mail,
    CheckCircle,
    XCircle,
    User,
    Lock,
    Power
} from 'lucide-react';

const AdminManagement = () => {
    // Mock Data
    const [admins, setAdmins] = useState([
        { id: 1, name: 'John Doe', email: 'john@techflow.com', company: 'TechFlow Solutions', status: 'Active', lastLogin: '2 hours ago' },
        { id: 2, name: 'Sarah Smith', email: 'sarah@innovate.com', company: 'Innovate Inc', status: 'Active', lastLogin: '1 day ago' },
        { id: 3, name: 'Mike Ross', email: 'mike@global.com', company: 'Global Traders', status: 'Suspended', lastLogin: '5 days ago' },
    ]);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">Admin Management</h1>
                    <p className="text-[var(--text-muted)]">Manage company administrators and their permissions.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                    <Plus size={18} />
                    <span>Create Admin</span>
                </button>
            </div>

            {/* Filters */}
            <div className="glass-card p-4 rounded-xl border border-[var(--border-color)] flex items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                    <input
                        type="text"
                        placeholder="Search admins..."
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* Admins Table */}
            <div className="glass-card rounded-xl border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--border-color)] bg-[var(--bg-hover)]">
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Admin</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Assigned Company</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Status</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Last Login</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin) => (
                                <tr key={admin.id} className="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-hover)] transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--bg-dark)] flex items-center justify-center text-[var(--text-muted)] border border-[var(--border-color)]">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <div className="font-medium text-[var(--text-main)]">{admin.name}</div>
                                                <div className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                                                    <Mail size={10} /> {admin.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-[var(--text-muted)] font-medium">{admin.company}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${admin.status === 'Active' ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' : 'text-red-500 bg-red-500/10 border-red-500/20'}`}>
                                            {admin.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-[var(--text-muted)]">{admin.lastLogin}</td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 hover:bg-[var(--bg-dark)] rounded-lg text-amber-500 hover:text-amber-400 transition-colors" title="Reset Password">
                                                <Lock size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-[var(--bg-dark)] rounded-lg text-red-500 hover:text-red-400 transition-colors" title="Suspend Admin">
                                                <Power size={18} />
                                            </button>
                                        </div>
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

export default AdminManagement;
