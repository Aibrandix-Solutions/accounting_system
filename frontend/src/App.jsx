import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import SuperAdminLayout from './layouts/SuperAdminLayout';
import SuperAdminDashboard from './pages/super-admin/SuperAdminDashboard';
import InvoiceBills from './pages/super-admin/InvoiceBills';
import VendorBills from './pages/super-admin/VendorBills';
import CompanyManagement from './pages/super-admin/CompanyManagement';
import AdminManagement from './pages/super-admin/AdminManagement';
import UserManagement from './pages/super-admin/UserManagement';
import Reports from './pages/super-admin/Reports';
import AuditLogs from './pages/super-admin/AuditLogs';
import SystemSettings from './pages/super-admin/SystemSettings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer/Admin Dashboard Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vendor-bills" element={<div className="p-6"><h2 className="text-2xl font-bold">Vendor Bills</h2><p className="text-[var(--text-muted)]">Manage your vendor bills here.</p></div>} />
        </Route>

        {/* Super Admin Routes */}
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="invoices" element={<InvoiceBills />} />
          <Route path="vendor-bills" element={<VendorBills />} />
          <Route path="reports" element={<Reports />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="settings" element={<SystemSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
