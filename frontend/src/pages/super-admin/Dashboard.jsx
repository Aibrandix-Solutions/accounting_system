import StatCard from '../../components/dashboard/StatCard';
import RevenueChart from '../../components/dashboard/RevenueChart';
import ExpensePieChart from '../../components/dashboard/ExpensePieChart';
import ActiveUsersLog from '../../components/dashboard/ActiveUsersLog';
import { DollarSign, TrendingUp, TrendingDown, Briefcase, Activity } from 'lucide-react';


const Dashboard = () => {

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--text-main)] to-[var(--text-muted)] bg-clip-text text-transparent">
                        Good Morning, Super Admin!
                    </h2>
                    <p className="text-[var(--text-muted)] mt-1">Here's your system overview.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => console.log('Refreshing live updates...')}
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors text-sm font-medium cursor-pointer"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Live Updates
                    </button>
                    <button
                        onClick={() => console.log('Downloading report...')}
                        className="px-4 py-2 bg-[var(--primary)] text-white rounded-xl hover:bg-[var(--primary-hover)] transition-colors text-sm font-medium shadow-lg shadow-indigo-500/20 cursor-pointer"
                    >
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
                    onClick={() => console.log('Clicked Total Revenue')}
                />
                <StatCard
                    title="Total Expenses"
                    value="$21,450"
                    change={-2.4}
                    isPositive={true}
                    icon={TrendingDown}
                    color="rose"
                    onClick={() => console.log('Clicked Total Expenses')}
                />
                <StatCard
                    title="Net Profit"
                    value="$32,780"
                    change={8.2}
                    isPositive={true}
                    icon={TrendingUp}
                    color="emerald"
                    onClick={() => console.log('Clicked Net Profit')}
                />
                <StatCard
                    title="Active Projects"
                    value="12"
                    change={4}
                    isPositive={true}
                    icon={Briefcase}
                    color="amber"
                    onClick={() => console.log('Clicked Active Projects')}
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Main Chart */}
                <RevenueChart />

                {/* Expense Breakdown */}
                <ExpensePieChart />
            </div>

        </div>
    );
};

export default Dashboard;
