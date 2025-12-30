import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, Briefcase } from 'lucide-react';

const colorStyles = {
    indigo: { text: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    rose: { text: 'text-rose-500', bg: 'bg-rose-500/10' },
    emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    amber: { text: 'text-amber-500', bg: 'bg-amber-500/10' },
};

const StatCard = ({ title, value, change, isPositive, icon: Icon, color }) => {
    const styles = colorStyles[color] || colorStyles.indigo;

    return (
        <div className="glass-panel p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${styles.text}`}>
                <Icon size={80} />
            </div>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${styles.bg} ${styles.text}`}>
                        <Icon size={24} />
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                        {isPositive ? '+' : ''}{change}%
                    </span>
                </div>
                <h3 className="text-[var(--text-muted)] text-sm font-medium mb-1">{title}</h3>
                <p className="text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
};

const data = [
    { name: 'Jan', revenue: 4000, expenses: 2400 },
    { name: 'Feb', revenue: 3000, expenses: 1398 },
    { name: 'Mar', revenue: 2000, expenses: 9800 },
    { name: 'Apr', revenue: 2780, expenses: 3908 },
    { name: 'May', revenue: 1890, expenses: 4800 },
    { name: 'Jun', revenue: 2390, expenses: 3800 },
    { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const pieData = [
    { name: 'Operations', value: 400 },
    { name: 'Marketing', value: 300 },
    { name: 'Salaries', value: 300 },
    { name: 'Equipment', value: 200 },
];

const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--text-main)] to-[var(--text-muted)] bg-clip-text text-transparent">
                        Good Morning, Admin!
                    </h2>
                    <p className="text-[var(--text-muted)] mt-1">Here's your financial overview.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Live Updates
                    </button>
                    <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:bg-[var(--primary-hover)] transition-colors text-sm font-medium shadow-lg shadow-indigo-500/20">
                        Download Report
                    </button>
                </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value="$54,230"
                    change={12.5}
                    isPositive={true}
                    icon={DollarSign}
                    color="indigo"
                />
                <StatCard
                    title="Total Expenses"
                    value="$21,450"
                    change={-2.4}
                    isPositive={true}
                    icon={TrendingDown}
                    color="rose"
                />
                <StatCard
                    title="Net Profit"
                    value="$32,780"
                    change={8.2}
                    isPositive={true}
                    icon={TrendingUp}
                    color="emerald"
                />
                <StatCard
                    title="Active Projects"
                    value="12"
                    change={4}
                    isPositive={true}
                    icon={Briefcase}
                    color="amber"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 glass-panel p-6">
                    <h3 className="text-lg font-semibold mb-6">Revenue Overview</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRev)" />
                                <Area type="monotone" dataKey="expenses" stroke="#ec4899" fillOpacity={1} fill="url(#colorExp)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Expense Breakdown */}
                <div className="glass-panel p-6">
                    <h3 className="text-lg font-semibold mb-6">Expense Distribution</h3>
                    <div className="h-[300px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center">
                                <p className="text-xs text-[var(--text-muted)]">Total</p>
                                <p className="text-xl font-bold">$12.4k</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        {pieData.map((entry, index) => (
                            <div key={entry.name} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                    <span className="text-[var(--text-muted)]">{entry.name}</span>
                                </div>
                                <span className="font-medium">{Math.round((entry.value / 1200) * 100)}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
