import React, { useState } from 'react';
import {
    Search,
    Filter,
    MoreHorizontal,
    Users,
    Shield,
    Settings,
    Edit2
} from 'lucide-react';

const UserManagement = () => {
    // Mock Data
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice Walker', email: 'alice@techflow.com', role: 'Accountant', company: 'TechFlow Solutions', status: 'Active' },
        { id: 2, name: 'Bob Brown', email: 'bob@techflow.com', role: 'Viewer', company: 'TechFlow Solutions', status: 'Active' },
        { id: 3, name: 'Charlie Davis', email: 'charlie@innovate.com', role: 'Manager', company: 'Innovate Inc', status: 'Active' },
        { id: 4, name: 'Dana Evans', email: 'dana@global.com', role: 'Accountant', company: 'Global Traders', status: 'Inactive' },
    ]);

    const roles = ['Super Admin', 'Company Admin', 'Manager', 'Accountant', 'Viewer'];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--text-main)]">User & Role Management</h1>
                <p className="text-[var(--text-muted)]">Oversee all users and manage their global roles.</p>
            </div>

            {/* Filters */}
            <div className="glass-card p-4 rounded-xl border border-[var(--border-color)] flex items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                    <input
                        type="text"
                        placeholder="Search users by name, email, or role..."
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-slate-500"
                    />
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <select className="bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]">
                        <option>All Roles</option>
                        {roles.map(role => <option key={role}>{role}</option>)}
                    </select>
                </div>
            </div>

            {/* Users Table */}
            <div className="glass-card rounded-xl border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--border-color)] bg-[var(--bg-hover)]">
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">User</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Role</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Company</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Status</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-hover)] transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                <Users size={16} />
                                            </div>
                                            <div>
                                                <div className="font-medium text-[var(--text-main)]">{user.name}</div>
                                                <div className="text-xs text-[var(--text-muted)]">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 rounded-md bg-[var(--bg-dark)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)]">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4 text-[var(--text-muted)]">{user.company}</td>
                                    <td className="p-4">
                                        <span className={`text-xs font-semibold ${user.status === 'Active' ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 hover:bg-[var(--bg-dark)] rounded-lg text-[var(--primary)] hover:opacity-80 transition-colors">
                                            <Edit2 size={16} />
                                        </button>
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

export default UserManagement;
