import React, { useState } from 'react';
import {
    Save,
    Globe,
    CreditCard,
    FileText,
    Calendar,
    Clock,
    Languages,
    Upload,
    DollarSign,
    Percent,
    Hash,
    Shield
} from 'lucide-react';

const SystemSettings = () => {
    return (
        <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-main)]">System Settings</h1>
                    <p className="text-[var(--text-muted)]">Configure global application settings for all users.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 font-medium">
                    <Save size={18} />
                    <span>Save Changes</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Navigation Sidebar (In-page) */}
                <div className="lg:col-span-1 space-y-2">
                    <div className="glass-card p-2 rounded-xl border border-[var(--border-color)]">
                        {[
                            { name: 'General Settings', icon: Globe, active: true },
                            { name: 'Finance & Currency', icon: DollarSign, active: false },
                            { name: 'Tax Rules', icon: Percent, active: false },
                            { name: 'Invoice Settings', icon: Hash, active: false },
                            { name: 'Fiscal Year', icon: Calendar, active: false },
                            { name: 'Localization', icon: Languages, active: false },
                            { name: 'Security', icon: Shield, active: false },
                        ].map((item) => (
                            <button
                                key={item.name}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${item.active
                                        ? 'bg-[var(--primary)] text-white shadow-md'
                                        : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-main)]'
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    {/* General Settings Section */}
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                        <h2 className="text-lg font-bold text-[var(--text-main)] mb-1 flex items-center gap-2">
                            <Globe size={20} className="text-blue-500" />
                            General Information
                        </h2>
                        <p className="text-[var(--text-muted)] text-sm mb-6">Basic application details and branding.</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">App Name</label>
                                <input
                                    type="text"
                                    defaultValue="FinDash Suite"
                                    className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Company Logo</label>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)]">
                                        <Upload size={24} />
                                    </div>
                                    <button className="px-4 py-2 bg-[var(--bg-hover)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card)] transition-colors text-sm font-medium">
                                        Upload New Logo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Finance Section */}
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                        <h2 className="text-lg font-bold text-[var(--text-main)] mb-1 flex items-center gap-2">
                            <CreditCard size={20} className="text-emerald-500" />
                            Financial Configuration
                        </h2>
                        <p className="text-[var(--text-muted)] text-sm mb-6">Currency, tax, and invoicing rules.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Default Currency</label>
                                <select className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)]">
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                    <option>INR (₹)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Default Tax Rate (%)</label>
                                <input
                                    type="number"
                                    defaultValue="18"
                                    className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Fiscal Year Start</label>
                                <select className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)]">
                                    <option>January</option>
                                    <option>April</option>
                                    <option>July</option>
                                    <option>October</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Time Zone</label>
                                <select className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)]">
                                    <option>UTC (GMT+0)</option>
                                    <option>EST (GMT-5)</option>
                                    <option>IST (GMT+5:30)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Invoice Settings Section */}
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)]">
                        <h2 className="text-lg font-bold text-[var(--text-main)] mb-1 flex items-center gap-2">
                            <FileText size={20} className="text-purple-500" />
                            Invoice Customization
                        </h2>
                        <p className="text-[var(--text-muted)] text-sm mb-6">Format and prefixes for system invoices.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Invoice Prefix</label>
                                <input
                                    type="text"
                                    defaultValue="INV-"
                                    className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Next Number</label>
                                <input
                                    type="number"
                                    defaultValue="00125"
                                    className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--primary)] transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemSettings;
