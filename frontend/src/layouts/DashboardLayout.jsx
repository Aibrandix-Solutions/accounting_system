import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Receipt, Settings, Bell, Search, User, Menu, X, Sun, Moon, ScrollText, Shield } from 'lucide-react';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Invoice Bills', icon: Receipt, path: '/invoices' },
        { name: 'Vendor Bills', icon: ScrollText, path: '/vendor-bills' },
        { name: 'Settings', icon: Settings, path: '/settings' },
        { name: 'Super Admin Console', icon: Shield, path: '/super-admin' },
    ];

    useEffect(() => {
        // Apply theme class to root
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.remove('light');
        } else {
            root.classList.add('light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-main)] flex transition-colors duration-300">
            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[var(--bg-card)] border-r border-[var(--border-color)] transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="h-16 flex items-center px-6 border-b border-[var(--border-color)]">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        FinDash
                    </h1>
                    <button
                        className="ml-auto lg:hidden text-[var(--text-muted)] hover:text-[var(--text-main)]"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-indigo-500/20'
                                    : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-main)]'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen relative overflow-hidden">
                {/* Topbar */}
                <header className="h-16 glass-panel mx-4 mt-4 mb-6 flex items-center justify-between px-6 sticky top-4 z-40 transition-all duration-300">
                    <button
                        className="lg:hidden text-[var(--text-muted)]"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex-1 max-w-md mx-4 hidden md:block">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--primary)] transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search analytics, transactions..."
                                className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-hover)] rounded-full transition-colors"
                            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button className="relative p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--bg-card)]"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-4 border-l border-[var(--border-color)]">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold">Super Admin</p>
                                <p className="text-xs text-[var(--text-muted)]">System Administrator</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--primary)] to-purple-500 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-[var(--bg-card)]">
                                SA
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 px-4 pb-6 overflow-y-auto w-full max-w-[1600px] mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
