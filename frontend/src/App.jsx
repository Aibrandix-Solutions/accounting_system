import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';

// Super Admin Pages
import Dashboard from './pages/super-admin/Dashboard';
import AdminManagement from './pages/super-admin/AdminManagement';
import AuditLogs from './pages/super-admin/AuditLogs';
import CompanyManagement from './pages/super-admin/CompanyManagement';
import InvoiceBills from './pages/super-admin/InvoiceBills';
import PermissionManagement from './pages/super-admin/PermissionManagement';
import Reports from './pages/super-admin/Reports';
import SystemSettings from './pages/super-admin/SystemSettings';
import UserManagement from './pages/super-admin/UserManagement';
import VendorBills from './pages/super-admin/VendorBills';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Super Admin Routes (Wrapped in DashboardLayout) */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-management" element={<AdminManagement />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/company-management" element={<CompanyManagement />} />
          <Route path="/invoice-bills" element={<InvoiceBills />} />
          <Route path="/permission-management" element={<PermissionManagement />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/system-settings" element={<SystemSettings />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/vendor-bills" element={<VendorBills />} />
        </Route>

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
