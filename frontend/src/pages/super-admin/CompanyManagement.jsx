import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Building2,
    Mail,
    Phone,
    Globe,
    CheckCircle,
    XCircle,
    Edit,
    Trash2,
    Shield
} from 'lucide-react';

const CompanyManagement = () => {
    // Mock Data
    const [companies, setCompanies] = useState([
        { id: 1, name: 'TechFlow Solutions', email: 'contact@techflow.com', admin: 'John Doe', status: 'Active', plan: 'Enterprise', users: 12, invoices: 154 },
        { id: 2, name: 'Innovate Inc', email: 'info@innovate.com', admin: 'Sarah Smith', status: 'Active', plan: 'Pro', users: 5, invoices: 45 },
        { id: 3, name: 'Global Traders', email: 'support@globaltraders.com', admin: 'Mike Ross', status: 'Inactive', plan: 'Basic', users: 2, invoices: 12 },
        { id: 4, name: 'NextGen AI', email: 'hello@nextgen.ai', admin: 'Jessica Lee', status: 'Active', plan: 'Enterprise', users: 25, invoices: 320 },
    ]);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">Company Management</h1>
                    <p className="text-[var(--text-muted)]">Register and manage client organizations.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                    <Plus size={18} />
                    <span>Register Company</span>
                </button>
            </div>

            {/* Filters */}
            <div className="glass-card p-4 rounded-xl border border-[var(--border-color)] flex items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                    <input
                        type="text"
                        placeholder="Search companies by name, email, or admin..."
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-slate-500"
                    />
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-hover)] transition-colors">
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Companies Grid/List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {companies.map((company) => (
                    <div key={company.id} className="glass-card p-6 rounded-2xl border border-[var(--border-color)] hover:shadow-lg transition-all group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-transparent opacity-50"></div>

                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-[var(--primary)] border border-[var(--border-color)]">
                                <Building2 size={24} />
                            </div>
                            <div className="flex gap-2">
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${company.status === 'Active' ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' : 'text-red-500 bg-red-500/10 border-red-500/20'}`}>
                                    {company.status}
                                </span>
                                <button className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">{company.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                            <Mail size={14} />
                            {company.email}
                        </div>

                        <div className="space-y-3 border-t border-[var(--border-color)] pt-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-[var(--text-muted)]">Admin:</span>
                                <span className="font-medium text-[var(--text-main)] flex items-center gap-1">
                                    <Shield size={14} className="text-purple-500" /> {company.admin}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[var(--text-muted)]">Current Plan:</span>
                                <span className="font-medium text-[var(--primary)]">{company.plan}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[var(--text-muted)]">Users / Invoices:</span>
                                <span className="font-medium text-[var(--text-main)]">{company.users} / {company.invoices}</span>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-6">
                            <button className="flex-1 py-2 rounded-lg bg-[var(--bg-hover)] text-[var(--text-main)] text-sm font-medium hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-color)] transition-all">
                                View Details
                            </button>
                            <button className="flex-1 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                                Manage
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyManagement;
