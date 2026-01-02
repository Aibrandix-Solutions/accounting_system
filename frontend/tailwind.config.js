/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable manual toggling
    theme: {
        extend: {
            colors: {
                fin: {
                    bg: 'var(--color-fin-bg)',
                    card: 'var(--color-fin-card)',
                    input: 'var(--color-fin-input)',
                    border: 'var(--color-fin-border)',
                    primary: 'var(--color-fin-primary)',
                    secondary: 'var(--color-fin-secondary)',
                    text: 'var(--color-fin-text)',
                    'text-muted': 'var(--color-fin-text-muted)',
                    success: '#10b981',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            }
        },
    },
    plugins: [],
}
