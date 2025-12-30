import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vendor-bills" element={<div className="p-6"><h2 className="text-2xl font-bold">Vendor Bills</h2><p className="text-[var(--text-muted)]">Manage your vendor bills here.</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
