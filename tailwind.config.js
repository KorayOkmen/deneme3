// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    // Gantt bar ve özel class'lar
    'gantt-visible',
    'gantt-blue',
    'bar',
    'bar-progress',
    'bar-invalid',
    'bar-label',
    'grid-row',
    'grid-header',
    'today-highlight',
    'arrow',
    'tick',
    'lower-text',
    'upper-text',

    // Kişiye özel bar renkleri (renk map'te kullanılan)
    'gantt-#4ade80',
    'gantt-#60a5fa',
    'gantt-#f472b6',
    'gantt-#facc15',
    'gantt-#34d399',
    'gantt-#f87171',
    'gantt-#a78bfa',
    'gantt-#fbbf24',

    // Popup içi Tailwind sınıfları
    'p-3',
    'max-w-xs',
    'rounded',
    'border',
    'bg-white',
    'dark:bg-gray-800',
    'shadow',
    'text-sm',
    'font-bold',
    'text-blue-700',
    'dark:text-blue-300',
    'text-base',
    'mb-1',
    'text-gray-600',
    'dark:text-gray-300',
    'text-gray-500',
    'dark:text-gray-400',
    'mt-1',

    // Modal animasyonu
    'animate-fade-in'
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
