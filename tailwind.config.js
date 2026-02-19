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
				brand: ['Elza', 'system-ui', 'sans-serif'],
				heading: ['Outfit', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'brand-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
				'brand-gradient-hover': 'linear-gradient(135deg, #E09000 0%, #C2710C 100%)',
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
				'fade-in-delay-1': 'fadeInUp 0.8s ease-out 0.2s forwards',
				'fade-in-delay-2': 'fadeInUp 0.8s ease-out 0.4s forwards',
				'fade-in-delay-3': 'fadeInUp 0.8s ease-out 0.6s forwards',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out 3s infinite',
				'gradient': 'gradient 8s ease infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'blob': 'blob 7s infinite',
				'blob-delay': 'blob 7s infinite 2s',
				'marquee': 'marquee 40s linear infinite',
				'marquee-reverse': 'marquee-reverse 40s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
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
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'marquee-reverse': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
		}
	},
	plugins: []
};
