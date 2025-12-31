import React from 'react';
import {
    Download,
    Calendar,
    BarChart3,
    PieChart,
    TrendingUp,
    Users,
    Building2,
    DollarSign,
    FileText
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts';

const Reports = () => {
    // Mock Data for Charts
    const revenueData = [
        { name: 'Jan', system: 4000, subscriptions: 2400 },
        { name: 'Feb', system: 3000, subscriptions: 1398 },
        { name: 'Mar', system: 2000, subscriptions: 9800 },
        { name: 'Apr', system: 2780, subscriptions: 3908 },
        { name: 'May', system: 1890, subscriptions: 4800 },
        { name: 'Jun', system: 2390, subscriptions: 3800 },
        { name: 'Jul', system: 3490, subscriptions: 4300 },
    ];

    const companySupportData = [
        { name: 'TechFlow', tickets: 12 },
        { name: 'Innovate', tickets: 12 },
        { name: 'Global', tickets: 5 },
        { name: 'NextGen', tickets: 8 },
        { name: 'Alpha', tickets: 15 },
    ];

    const reportTypes = [
        { title: 'System Usage', desc: 'Active users, storage, and API calls.', icon: ActivityIcon, color: 'blue' },
        { title: 'Revenue Summary', desc: 'Monthly subscription and fee breakdown.', icon: DollarIcon, color: 'emerald' },
        { title: 'Admin Performance', desc: 'Audit logs and response times.', icon: ShieldIcon, color: 'purple' },
        { title: 'Company Growth', desc: 'New organizations and retention rates.', icon: BuildingIcon, color: 'orange' },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">System Reports</h1>
                    <p className="text-[var(--text-muted)]">Analyze performance and generate detailed insights.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors">
                        <Calendar size={18} />
                        <span>Last 30 Days</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                        <Download size={18} />
                        <span>Export All</span>
                    </button>
                </div>
            </div>

            {/* Report Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reportTypes.map((report, index) => (
                    <div key={index} className="glass-card p-6 rounded-2xl border border-[var(--border-color)] hover:shadow-lg transition-all cursor-pointer group">
                        <div className={`w-12 h-12 rounded-xl bg-${report.color}-500/10 flex items-center justify-center text-${report.color}-500 mb-4 group-hover:scale-110 transition-transform`}>
                            <report.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">{report.title}</h3>
                        <p className="text-sm text-[var(--text-muted)]">{report.desc}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                    <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-emerald-500" />
                        Revenue Trends
                    </h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorSystem" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorSubs" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }} />
                                <Area type="monotone" dataKey="system" stackId="1" stroke="#8B5CF6" fill="url(#colorSystem)" />
                                <Area type="monotone" dataKey="subscriptions" stackId="1" stroke="#10B981" fill="url(#colorSubs)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Support Chart */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                    <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
                        <Building2 size={20} className="text-blue-500" />
                        Company Support Tickets
                    </h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={companySupportData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }} cursor={{ fill: 'var(--bg-hover)' }} />
                                <Bar dataKey="tickets" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Icon Wrappers to avoid reference errors in mock array
const ActivityIcon = (props) => <BarChart3 {...props} />;
const DollarIcon = (props) => <DollarSign {...props} />;
const ShieldIcon = (props) => <Users {...props} />;
const BuildingIcon = (props) => <Building2 {...props} />;

export default Reports;
