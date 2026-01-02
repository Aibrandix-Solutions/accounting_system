import React from 'react';
import { Building2 } from 'lucide-react';

const CompanySelector = ({ selectedCompany, onSelect, className = '' }) => {
    // Mock Companies Data - In a real app, this would come from an API or context
    const companies = [
        'TechFlow Solutions',
        'Innovate Inc',
        'Global Traders',
        'NextGen AI',
        'Alpha Corp',
        'Beta LLC',
        'Gamma Systems'
    ];

    return (
        <div className={`relative ${className}`}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none">
                <Building2 size={16} />
            </div>
            <select
                value={selectedCompany}
                onChange={(e) => onSelect(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg focus:outline-none focus:border-[var(--primary)] appearance-none cursor-pointer"
            >
                <option value="">All Companies</option>
                {companies.map((company) => (
                    <option key={company} value={company}>
                        {company}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CompanySelector;
