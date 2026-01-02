import React, { useState } from 'react';
import {
    BarChart3,
    FileText,
    TrendingUp,
    CreditCard,
    DollarSign,
    PieChart,
    Activity,
    Shield,
    Calendar,
    Download,
    Filter,
    ArrowLeft,
    Search,
    ChevronDown
} from 'lucide-react';

// --- Configuration & Mock Data ---

const REPORT_CATEGORIES = [
    {
        title: 'Core Financial',
        color: 'indigo',
        icon: FileText,
        reports: [
            { id: 'gl', title: 'General Ledger', desc: 'Complete record of all financial transactions.' },
            { id: 'tb', title: 'Trial Balance', desc: 'List of all ledger account balances.' },
            { id: 'pl', title: 'Profit and Loss', desc: 'Revenue, costs, and expenses summary.' },
            { id: 'bs', title: 'Balance Sheet', desc: 'Assets, liabilities, and equity snapshot.' }
        ]
    },
    {
        title: 'Sales & Revenue',
        color: 'emerald',
        icon: TrendingUp,
        reports: [
            { id: 'sales_inv', title: 'Sales by Invoice', desc: 'Detailed sales broken down by invoice.' },
            { id: 'sales_cust', title: 'Sales by Customer', desc: 'Revenue analysis per customer.' },
            { id: 'ar_aging', title: 'A/R Aging', desc: 'Unpaid invoices and payment delays.' }
        ]
    },
    {
        title: 'Purchase & Expense',
        color: 'rose',
        icon: CreditCard,
        reports: [
            { id: 'purchases', title: 'Purchase Report', desc: 'Detailed history of all purchases.' },
            { id: 'ap_aging', title: 'A/P Aging', desc: 'Outstanding bills and upcoming payments.' },
            { id: 'expense_cat', title: 'Expenses by Category', desc: 'Breakdown of spending by category.' }
        ]
    },
    {
        title: 'Tax & Compliance',
        color: 'amber',
        icon: Shield,
        reports: [
            { id: 'tax_summary', title: 'Tax Summary', desc: 'Collected and paid tax (VAT/GST) report.' },
            { id: 'wht', title: 'Withholding Tax', desc: 'Details of taxes withheld on payments.' }
        ]
    },
    {
        title: 'System & Security',
        color: 'slate',
        icon: Activity,
        reports: [
            { id: 'audit_log', title: 'Audit Log', desc: 'Tracked user activities and system changes.' },
            { id: 'user_activity', title: 'User Activity', desc: 'Login history and feature usage stats.' }
        ]
    }
];

// Mock Table Data Generator
const generateMockData = (reportId) => {
    const baseData = [
        { date: '2024-01-15', ref: 'INV-001', entity: 'TechFlow Solutions', type: 'Sales', amount: 4500.00, status: 'Completed' },
        { date: '2024-01-16', ref: 'BILL-023', entity: 'Office Depot', type: 'Expense', amount: 120.50, status: 'Paid' },
        { date: '2024-01-18', ref: 'INV-002', entity: 'Innovate Inc', type: 'Sales', amount: 2300.00, status: 'Pending' },
        { date: '2024-01-20', ref: 'PAY-005', entity: 'John Doe', type: 'Salary', amount: 3500.00, status: 'Processed' },
        { date: '2024-01-22', ref: 'TAX-Q1', entity: 'Tax Authority', type: 'Tax', amount: 890.00, status: 'Accrued' },
    ];
    return Array(5).fill(baseData).flat().map((item, i) => ({ ...item, id: i, ref: `${item.ref}-${i}` }));
};

// --- Components ---

const ReportCard = ({ title, desc, onClick }) => (
    <div
        onClick={onClick}
        className="glass-card p-4 rounded-xl border border-[var(--border-color)] hover:bg-[var(--bg-hover)] cursor-pointer transition-all group"
    >
        <h3 className="font-semibold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">{title}</h3>
        <p className="text-sm text-[var(--text-muted)] mt-1">{desc}</p>
    </div>
);

const CategorySection = ({ category, onSelectReport }) => (
    <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
            <div className={`p-2 rounded-lg bg-${category.color}-500/10 text-${category.color}-500`}>
                <category.icon size={20} />
            </div>
            <h2 className="text-lg font-bold text-[var(--text-main)]">{category.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.reports.map(report => (
                <ReportCard
                    key={report.id}
                    title={report.title}
                    desc={report.desc}
                    onClick={() => onSelectReport(report)}
                />
            ))}
        </div>
    </div>
);

const ReportViewer = ({ report, onBack }) => {
    const data = generateMockData(report.id);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div className="flex items-center gap-2">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-[var(--bg-hover)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--text-main)]">{report.title}</h1>
                        <p className="text-sm text-[var(--text-muted)]">Generated on {new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-sm hover:bg-[var(--bg-hover)]">
                        <Calendar size={16} />
                        <span>This Month</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-sm hover:bg-[var(--bg-hover)]">
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>
                    <div className="h-6 w-px bg-[var(--border-color)] mx-2"></div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] shadow-lg shadow-indigo-500/20">
                        <Download size={18} />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="glass-card rounded-xl border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--bg-hover)] border-b border-[var(--border-color)]">
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] w-32">Date</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] w-40">Reference</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Entity / Description</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] w-32">Type</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] w-32 text-right">Amount</th>
                                <th className="p-4 text-sm font-semibold text-[var(--text-muted)] w-24 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id} className="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-hover)] transition-colors">
                                    <td className="p-4 text-sm font-medium text-[var(--text-main)]">{row.date}</td>
                                    <td className="p-4 text-sm text-[var(--text-muted)] font-mono">{row.ref}</td>
                                    <td className="p-4 text-sm text-[var(--text-main)]">{row.entity}</td>
                                    <td className="p-4 text-sm"><span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 text-xs font-medium">{row.type}</span></td>
                                    <td className="p-4 text-sm font-bold text-[var(--text-main)] text-right">${row.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                                    <td className="p-4 text-center">
                                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                                            {row.status}
                                        </span>
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

// --- Main Page ---

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState(null);

    return (
        <div className="animate-fade-in">
            {!selectedReport ? (
                <div className="space-y-8">
                    {/* Hub Header */}
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--text-main)]">Reports Center</h1>
                        <p className="text-[var(--text-muted)] mt-1">Access financial statements, transaction histories, and system logs.</p>
                    </div>

                    {/* Categories */}
                    <div className="space-y-8">
                        {REPORT_CATEGORIES.map((category, index) => (
                            <CategorySection
                                key={index}
                                category={category}
                                onSelectReport={setSelectedReport}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <ReportViewer
                    report={selectedReport}
                    onBack={() => setSelectedReport(null)}
                />
            )}
        </div>
    );
};

export default Reports;
