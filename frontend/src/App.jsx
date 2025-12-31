import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import SuperAdminLayout from './layouts/SuperAdminLayout';
import SuperAdminDashboard from './pages/super-admin/SuperAdminDashboard';
import InvoiceBills from './pages/super-admin/InvoiceBills';
import VendorBills from './pages/super-admin/VendorBills';
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
          <Route path="companies" element={<div className="text-white">Companies Management (Coming Soon)</div>} />
          <Route path="invoices" element={<InvoiceBills />} />
          <Route path="vendor-bills" element={<VendorBills />} />
          <Route path="admins" element={<div className="text-white">Admins Management (Coming Soon)</div>} />
          <Route path="users" element={<div className="text-white">User Management (Coming Soon)</div>} />
          <Route path="reports" element={<div className="text-white">Reports (Coming Soon)</div>} />
          <Route path="audit-logs" element={<div className="text-white">Audit Logs (Coming Soon)</div>} />
          <Route path="settings" element={<div className="text-white">System Settings (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
