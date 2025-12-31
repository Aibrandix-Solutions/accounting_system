import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Eye,
    MoreHorizontal,
    ArrowUpDown,
    CheckCircle,
    XCircle,
    Clock
} from 'lucide-react';

const InvoiceBills = () => {
    // Mock Data
    const [invoices, setInvoices] = useState([
        { id: 'INV-001', company: 'TechFlow Solutions', amount: '$1,200.00', date: '2023-10-25', status: 'Paid', client: 'Alpha Corp' },
        { id: 'INV-002', company: 'Innovate Inc', amount: '$850.50', date: '2023-10-26', status: 'Pending', client: 'Beta LLC' },
        { id: 'INV-003', company: 'Global Traders', amount: '$3,400.00', date: '2023-10-27', status: 'Overdue', client: 'Gamma Systems' },
        { id: 'INV-004', company: 'TechFlow Solutions', amount: '$500.00', date: '2023-10-28', status: 'Paid', client: 'Delta Group' },
        { id: 'INV-005', company: 'NextGen AI', amount: '$12,000.00', date: '2023-10-29', status: 'Pending', client: 'Epsilon Tech' },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Paid': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
            case 'Pending': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
            case 'Overdue': return 'text-red-500 bg-red-500/10 border-red-500/20';
            default: return 'text-slate-500 bg-slate-500/10 border-slate-500/20';
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">Invoice Bills</h1>
                    <p className="text-[var(--text-muted)]">Manage and monitor all system-wide invoices.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
                        <Download size={18} />
                        <span>Export Report</span>
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="glass-card p-4 rounded-xl border border-[var(--border-color)] flex items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                    <input
                        type="text"
                        placeholder="Search invoices by ID, company, or client..."
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-slate-500"
                    />
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <select className="bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]">
                        <option>All Statuses</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Overdue</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="glass-card rounded-xl border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--border-color)] bg-[var(--bg-hover)]">
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--text-main)]">
                                        Invoice ID <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Company</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Client</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--text-main)]">
                                        Amount <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Date</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Status</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice, index) => (
                                <tr key={invoice.id} className="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-hover)] transition-colors">
                                    <td className="p-4 font-medium text-[var(--text-main)]">{invoice.id}</td>
                                    <td className="p-4 text-[var(--text-muted)]">{invoice.company}</td>
                                    <td className="p-4 text-[var(--text-muted)]">{invoice.client}</td>
                                    <td className="p-4 font-semibold text-[var(--text-main)]">{invoice.amount}</td>
                                    <td className="p-4 text-[var(--text-muted)]">{invoice.date}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getStatusColor(invoice.status)}`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 hover:bg-[var(--bg-dark)] rounded-lg text-blue-500 hover:text-blue-400 transition-colors" title="View Details">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-[var(--bg-dark)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Simple Placeholder) */}
                <div className="p-4 border-t border-[var(--border-color)] flex items-center justify-between text-sm text-[var(--text-muted)]">
                    <span>Showing 1 to 5 of 124 entries</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg hover:border-[var(--primary)] transition-colors disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg hover:border-[var(--primary)] transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceBills;
