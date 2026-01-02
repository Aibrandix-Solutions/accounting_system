import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ThemeToggle from '../components/ThemeToggle';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const response = await api.post('/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Invalid credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fin-primary/10 via-fin-bg to-fin-bg text-fin-text font-sans transition-colors duration-300 relative">
            <div className="absolute top-6 right-6">
                <ThemeToggle />
            </div>
            <div className="w-full max-w-md animate-fade-in">

                {/* Brand Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-fin-primary to-fin-secondary bg-clip-text text-transparent mb-2">
                        FinDash
                    </h1>
                    <p className="text-fin-text-muted">Welcome back! Please login to continue.</p>
                </div>

                <div className="bg-fin-card rounded-2xl border border-fin-border shadow-xl p-8 backdrop-blur-sm">
                    {error && (
                        <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-500 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-fin-text-muted mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-xl bg-fin-input border border-fin-border p-3 text-fin-text placeholder-fin-text-muted focus:border-fin-primary focus:outline-none focus:ring-1 focus:ring-fin-primary transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-fin-text-muted mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full rounded-xl bg-fin-input border border-fin-border p-3 text-fin-text placeholder-fin-text-muted focus:border-fin-primary focus:outline-none focus:ring-1 focus:ring-fin-primary transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                            />
                            <div className="flex justify-end mt-2">
                                <a href="#" className="text-xs text-fin-primary hover:text-fin-secondary transition-colors">Forgot Password?</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-xl bg-gradient-to-r from-fin-primary to-fin-secondary py-3.5 font-semibold text-white shadow-lg shadow-fin-primary/20 hover:shadow-fin-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
