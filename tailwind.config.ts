
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        travel: {
          blue: {
            light: '#E0F2FF',
            DEFAULT: '#0080FF',
            dark: '#0059B3'
          },
          neutral: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717'
          },
          accent: {
            DEFAULT: '#FF6B00',
            light: '#FFE0CC'
          }
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'scale-up': {
          from: {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'scale-down': {
          from: {
            opacity: '0',
            transform: 'scale(1.05)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.8'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'scale-up': 'scale-up 0.4s ease-out forwards',
        'scale-down': 'scale-down 0.4s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
			},
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.05)',
        'glass-lg': '0 16px 48px 0 rgba(31, 38, 135, 0.09)',
        'neo': '8px 8px 16px #e2e2e2, -8px -8px 16px #ffffff',
        'neo-sm': '4px 4px 8px #e2e2e2, -4px -4px 8px #ffffff',
        'neo-lg': '16px 16px 32px #e2e2e2, -16px -16px 32px #ffffff',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.05), 0 3px 6px rgba(0,0,0,0.1)',
        'elevation-4': '0 15px 25px rgba(0,0,0,0.05), 0 5px 10px rgba(0,0,0,0.1)',
        'elevation-5': '0 20px 40px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))',
        'glass-card-dark': 'linear-gradient(135deg, rgba(40, 40, 40, 0.5), rgba(20, 20, 20, 0.2))',
      },
      backdropBlur: {
        'xs': '2px',
      },
		}
	},
	plugins: [tailwindAnimate],
} satisfies Config;
