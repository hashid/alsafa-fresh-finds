import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'cairo': ['Cairo', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				hypermarket: {
					red: 'hsl(var(--hypermarket-red))',
				},
				charcoal: {
					gray: 'hsl(var(--charcoal-gray))',
				},
				light: {
					gray: 'hsl(var(--light-gray))',
				},
				premium: {
					gold: 'hsl(var(--premium-gold))',
				},
				mustard: {
					yellow: 'hsl(var(--mustard-yellow))',
				},
				fresh: {
					green: 'hsl(var(--fresh-green))'
				},
				ash: {
					dark: 'hsl(var(--dark-ash))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-red': 'var(--gradient-red)',
				'gradient-green': 'var(--gradient-green)',
				'gradient-deals': 'var(--gradient-deals)',
				'gradient-elegant': 'var(--gradient-elegant)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'strong': 'var(--shadow-strong)',
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'green': 'var(--shadow-green)'
			},
			transitionDuration: {
				'instant': 'var(--transition-instant)',
				'fast': 'var(--transition-fast)',
				'normal': 'var(--transition-normal)',
				'slow': 'var(--transition-slow)',
				'luxurious': 'var(--transition-luxurious)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'premium-pulse': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 2px 10px hsl(140 40% 20% / 0.15)'
					},
					'50%': { 
						opacity: '0.95',
						boxShadow: '0 4px 16px hsl(140 40% 20% / 0.2), 0 6px 24px hsl(45 80% 60% / 0.1)'
					}
				},
				'breathe': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 4px 12px hsl(0 84% 50% / 0.3)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 6px 20px hsl(0 84% 50% / 0.5)'
					}
				},
				'elegant-flow': {
					'0%': { transform: 'translateX(-100%) skewX(-12deg)' },
					'100%': { transform: 'translateX(200%) skewX(-12deg)' }
				},
				'luxury-float': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-8px) scale(1.02)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'premium-pulse': 'premium-pulse 8s ease-in-out infinite',
				'elegant-flow': 'elegant-flow 4s linear infinite',
				'luxury-float': 'luxury-float 4s ease-in-out infinite',
				'fade-in': 'fade-in 1.2s ease-out',
				'breathe': 'breathe 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
