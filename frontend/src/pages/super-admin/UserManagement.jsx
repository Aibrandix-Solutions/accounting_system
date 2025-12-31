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
    const [activeTab, setActiveTab] = useState('users');
    const [selectedRole, setSelectedRole] = useState('Manager');

    // Mock Users Data
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice Walker', email: 'alice@techflow.com', role: 'Accountant', company: 'TechFlow Solutions', status: 'Active' },
        { id: 2, name: 'Bob Brown', email: 'bob@techflow.com', role: 'Viewer', company: 'TechFlow Solutions', status: 'Active' },
        { id: 3, name: 'Charlie Davis', email: 'charlie@innovate.com', role: 'Manager', company: 'Innovate Inc', status: 'Active' },
        { id: 4, name: 'Dana Evans', email: 'dana@global.com', role: 'Accountant', company: 'Global Traders', status: 'Inactive' },
    ]);

    // Mock Permissions Data
    const [permissions, setPermissions] = useState({
        'Manager': {
            dashboard: true,
            users: true,
            reports: true,
            settings: true,
            auditLogs: false,
        },
        'Accountant': {
            dashboard: true,
            users: false,
            reports: true,
            settings: false,
            auditLogs: false,
        },
        'Viewer': {
            dashboard: true,
            users: false,
            reports: true,
            settings: false,
            auditLogs: false,
        },
        'Company Admin': {
            dashboard: true,
            users: true,
            reports: true,
            settings: true,
            auditLogs: true,
        },
        'Super Admin': {
            dashboard: true,
            users: true,
            reports: true,
            settings: true,
            auditLogs: true,
        }
    });

    const roles = ['Super Admin', 'Company Admin', 'Manager', 'Accountant', 'Viewer'];
    const permissionKeys = [
        { key: 'dashboard', label: 'Dashboard Access' },
        { key: 'users', label: 'User Management' },
        { key: 'reports', label: 'View Reports' },
        { key: 'settings', label: 'System Settings' },
        { key: 'auditLogs', label: 'Audit Logs' },
    ];

    const togglePermission = (role, key) => {
        setPermissions(prev => ({
            ...prev,
            [role]: {
                ...prev[role],
                [key]: !prev[role][key]
            }
        }));
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--text-main)]">User & Role Management</h1>
                <p className="text-[var(--text-muted)]">Control user access and configure global permissions.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-[var(--border-color)]">
                <button
                    onClick={() => setActiveTab('users')}
                    className={`pb-3 px-1 text-sm font-medium transition-colors relative ${activeTab === 'users' ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                        }`}
                >
                    All Users
                    {activeTab === 'users' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] rounded-full"></span>}
                </button>
                <button
                    onClick={() => setActiveTab('permissions')}
                    className={`pb-3 px-1 text-sm font-medium transition-colors relative ${activeTab === 'permissions' ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                        }`}
                >
                    Permission Control
                    {activeTab === 'permissions' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] rounded-full"></span>}
                </button>
            </div>

            {/* Content */}
            {activeTab === 'users' ? (
                <>
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
                </>
            ) : (
                <div className="glass-card rounded-xl border border-[var(--border-color)] p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Role Selector */}
                        <div className="w-full md:w-64 space-y-2">
                            <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3">Select Role</h3>
                            {roles.map(role => (
                                <button
                                    key={role}
                                    onClick={() => setSelectedRole(role)}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${selectedRole === role
                                            ? 'bg-[var(--primary)] text-white shadow-lg'
                                            : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-main)]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">{role}</span>
                                        {selectedRole === role && <Shield size={16} />}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Permissions Grid */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-[var(--text-main)]">{selectedRole} Permissions</h2>
                                    <p className="text-sm text-[var(--text-muted)]">Configure what {selectedRole}s can access.</p>
                                </div>
                                <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium">
                                    Save Changes
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {permissionKeys.map(perm => (
                                    <div
                                        key={perm.key}
                                        onClick={() => togglePermission(selectedRole, perm.key)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${permissions[selectedRole]?.[perm.key]
                                                ? 'bg-blue-500/10 border-blue-500/30'
                                                : 'bg-[var(--bg-dark)] border-[var(--border-color)] opacity-60'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${permissions[selectedRole]?.[perm.key] ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'
                                                    }`}>
                                                    <Shield size={18} />
                                                </div>
                                                <div>
                                                    <p className={`font-semibold ${permissions[selectedRole]?.[perm.key] ? 'text-blue-400' : 'text-[var(--text-muted)]'}`}>
                                                        {perm.label}
                                                    </p>
                                                    <p className="text-xs text-[var(--text-muted)]">
                                                        {permissions[selectedRole]?.[perm.key] ? 'Access Granted' : 'Access Denied'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${permissions[selectedRole]?.[perm.key] ? 'bg-blue-500' : 'bg-slate-600'
                                                }`}>
                                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${permissions[selectedRole]?.[perm.key] ? 'translate-x-6' : 'translate-x-0'
                                                    }`} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
