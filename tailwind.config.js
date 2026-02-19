/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
					950: '#431407',
					DEFAULT: '#f97316',
				},
				secondary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
					950: '#052e16',
					DEFAULT: '#22c55e',
				},
				neutral: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				}
			},
			fontFamily: {
				heading: ['Elza', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'brand-gradient': 'linear-gradient(135deg, #EB9336 0%, #D97706 100%)',
				'brand-gradient-hover': 'linear-gradient(135deg, #D48A2F 0%, #C2710C 100%)',
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'gradient': 'gradient 8s ease infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
		}
	},
	plugins: []
};
