import React from 'react';
import {
    Users,
    Building2,
    Shield,
    Receipt,
    TrendingUp,
    Activity,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';

const SuperAdminDashboard = () => {
    // Mock Data
    const stats = [
        {
            title: 'Total Companies',
            value: '124',
            change: '+12%',
            isPositive: true,
            icon: Building2,
            color: 'from-blue-500 to-cyan-400'
        },
        {
            title: 'Total Admins',
            value: '148',
            change: '+8%',
            isPositive: true,
            icon: Shield,
            color: 'from-purple-500 to-pink-400'
        },
        {
            title: 'Active Users',
            value: '1,293',
            change: '+24%',
            isPositive: true,
            icon: Users,
            color: 'from-emerald-500 to-teal-400'
        },
        {
            title: 'Total Invoices',
            value: '$1.4M',
            change: '+18%',
            isPositive: true,
            icon: Receipt,
            color: 'from-orange-500 to-yellow-400'
        },
    ];

    const growthData = [
        { name: 'Jan', companies: 20, revenue: 15 },
        { name: 'Feb', companies: 35, revenue: 28 },
        { name: 'Mar', companies: 50, revenue: 32 },
        { name: 'Apr', companies: 65, revenue: 45 },
        { name: 'May', companies: 80, revenue: 58 },
        { name: 'Jun', companies: 100, revenue: 70 },
        { name: 'Jul', companies: 124, revenue: 85 },
    ];

    const roleData = [
        { name: 'Super Admins', value: 5 },
        { name: 'Company Admins', value: 124 },
        { name: 'Standard Users', value: 850 },
        { name: 'Viewers', value: 314 },
    ];

    const COLORS = ['#F59E0B', '#8B5CF6', '#3B82F6', '#10B981'];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--text-main)]">System Overview</h1>
                <p className="text-[var(--text-muted)]">Welcome back, Master Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="glass-card p-6 rounded-2xl border border-[var(--border-color)] hover:shadow-lg transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 text-white shadow-lg`}>
                                <stat.icon size={24} />
                            </div>
                            <span className={`flex items-center text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'} bg-[var(--bg-hover)] px-2 py-1 rounded-lg`}>
                                {stat.isPositive ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-[var(--text-muted)] text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-[var(--text-main)] mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Growth Chart */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                    <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-blue-500" />
                        Monthly Growth
                    </h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={growthData}>
                                <defs>
                                    <linearGradient id="colorCompanies" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                                    itemStyle={{ color: 'var(--text-main)' }}
                                />
                                <Area type="monotone" dataKey="companies" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorCompanies)" />
                                <Area type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Role Distribution Chart */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                    <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
                        <Users size={20} className="text-purple-500" />
                        User Role Distribution
                    </h3>
                    <div className="h-80 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={roleData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {roleData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Activities */}
            <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
                    <Activity size={20} className="text-emerald-500" />
                    Recent System Activities
                </h3>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-hover)] hover:bg-[var(--bg-card)] transition-colors border border-transparent hover:border-[var(--border-color)]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Building2 size={20} />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--text-main)]">New Company Registered: "TechFlow Solutions"</p>
                                    <p className="text-sm text-[var(--text-muted)]">2 minutes ago by System</p>
                                </div>
                            </div>
                            <span className="text-sm font-medium text-[var(--primary)]">View Details</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
