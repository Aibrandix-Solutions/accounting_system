import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const colorStyles = {
    indigo: { text: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    rose: { text: 'text-rose-500', bg: 'bg-rose-500/10' },
    emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    amber: { text: 'text-amber-500', bg: 'bg-amber-500/10' },
};

const StatCard = ({ title, value, change, isPositive, icon: Icon, color, onClick }) => {
    const styles = colorStyles[color] || colorStyles.indigo;

    return (
        <div
            onClick={onClick}
            className="glass-panel p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
        >
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
                <p className="text-2xl font-bold text-[var(--text-main)]">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
