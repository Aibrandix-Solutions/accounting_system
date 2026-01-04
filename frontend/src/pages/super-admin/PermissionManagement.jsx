import React, { useState } from 'react';
import { Shield, Save, Check, X, AlertCircle } from 'lucide-react';

const PermissionManagement = () => {
    const [selectedRole, setSelectedRole] = useState('Manager');
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const roles = ['Super Admin', 'Company Admin', 'Manager', 'Accountant', 'Viewer'];

    // Modules to configure
    const modules = [
        { id: 'users', name: 'User Management', description: 'Manage system users and roles' },
        { id: 'accounts', name: 'Accounts', description: 'Chart of accounts and banking' },
        { id: 'transactions', name: 'Transactions', description: 'Invoices, bills, and payments' },
        { id: 'reports', name: 'Reports', description: 'Financial analytics and reporting' },
        { id: 'settings', name: 'System Settings', description: 'Global system configuration' },
    ];

    // Permission types
    const permissionTypes = [
        { key: 'view', label: 'View' },
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'approve', label: 'Approve' },
        { key: 'export', label: 'Export' },
    ];

    // Mock Permissions State
    const [permissions, setPermissions] = useState({
        'Super Admin': {
            users: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            accounts: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            transactions: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            reports: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            settings: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
        },
        'Manager': {
            users: { view: true, add: false, edit: false, delete: false, approve: false, export: true },
            accounts: { view: true, add: true, edit: true, delete: false, approve: true, export: true },
            transactions: { view: true, add: true, edit: true, delete: false, approve: true, export: true },
            reports: { view: true, add: false, edit: false, delete: false, approve: false, export: true },
            settings: { view: true, add: false, edit: false, delete: false, approve: false, export: false },
        },
        // Defaults for others...
        'Company Admin': {
            users: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            accounts: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            transactions: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            reports: { view: true, add: true, edit: true, delete: true, approve: true, export: true },
            settings: { view: true, add: true, edit: true, delete: false, approve: true, export: true },
        },
        'Accountant': {
            users: { view: false, add: false, edit: false, delete: false, approve: false, export: false },
            accounts: { view: true, add: true, edit: true, delete: false, approve: false, export: true },
            transactions: { view: true, add: true, edit: true, delete: false, approve: false, export: true },
            reports: { view: true, add: false, edit: false, delete: false, approve: false, export: true },
            settings: { view: false, add: false, edit: false, delete: false, approve: false, export: false },
        },
        'Viewer': {
            users: { view: false, add: false, edit: false, delete: false, approve: false, export: false },
            accounts: { view: true, add: false, edit: false, delete: false, approve: false, export: false },
            transactions: { view: true, add: false, edit: false, delete: false, approve: false, export: false },
            reports: { view: true, add: false, edit: false, delete: false, approve: false, export: true },
            settings: { view: false, add: false, edit: false, delete: false, approve: false, export: false },
        },
    });

    const handleToggle = (module, type) => {
        setPermissions(prev => ({
            ...prev,
            [selectedRole]: {
                ...prev[selectedRole],
                [module]: {
                    ...prev[selectedRole]?.[module],
                    [type]: !prev[selectedRole]?.[module]?.[type]
                }
            }
        }));
    };

    const handleSave = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">Permission Management</h1>
                    <p className="text-[var(--text-muted)]">Configure granular access controls for each role.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="appearance-none bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] rounded-xl px-4 py-2 pr-10 min-w-[200px] focus:outline-none focus:border-[var(--primary)] cursor-pointer"
                        >
                            {roles.map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                        <Shield className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" size={16} />
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-2 px-6 py-2 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSaving ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Save size={18} />
                        )}
                        <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="glass-card rounded-xl border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--border-color)] bg-[var(--bg-hover)]">
                                <th className="p-4 pl-6 text-sm font-semibold text-[var(--text-muted)] min-w-[200px]">Module</th>
                                {permissionTypes.map(type => (
                                    <th key={type.key} className="p-4 text-center text-sm font-semibold text-[var(--text-muted)]">
                                        {type.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {modules.map((module) => (
                                <tr key={module.id} className="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-hover)] transition-colors">
                                    <td className="p-4 pl-6">
                                        <div className="font-medium text-[var(--text-main)]">{module.name}</div>
                                        <div className="text-xs text-[var(--text-muted)]">{module.description}</div>
                                    </td>
                                    {permissionTypes.map(type => {
                                        const isEnabled = permissions[selectedRole]?.[module.id]?.[type.key];
                                        return (
                                            <td key={type.key} className="p-4 text-center">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={isEnabled || false}
                                                        onChange={() => handleToggle(module.id, type.key)}
                                                    />
                                                    <div className={`w-11 h-6 rounded-full peer peer-focus:ring-2 peer-focus:ring-[var(--primary)]/20 transition-colors duration-200 ease-in-out
                                                        ${isEnabled ? 'bg-[var(--primary)]' : 'bg-slate-700'}
                                                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                                        ${isEnabled ? 'after:translate-x-full after:border-white' : ''}
                                                    `}></div>
                                                </label>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Success Notification */}
            {showSuccess && (
                <div className="fixed bottom-6 right-6 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-slide-up z-50">
                    <Check size={20} />
                    <span className="font-medium">Permissions updated successfully!</span>
                </div>
            )}
        </div>
    );
};

export default PermissionManagement;
