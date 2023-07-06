/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: '#3B3C46',
                secondary: '#787E95',
                tertiary: '#939399',
                'on-surface': '#3B3C46',
                'on-ground': '#3F404A',
                'on-card': '#787E95',
                'on-card-secondary': '#939399',
                surface: {
                    input: '#F3F4F7',
                    ground: '#F9FAFC',
                    section: 'var(--surface-section)',
                    card: '#FFFFFF',
                    overlay: 'var(--surface-overlay)',
                    border: 'var(--surface-border)',
                    hover: 'var(--surface-hover)',
                    active: '#E8E9EE'
                },

            },
            fontFamily: {
                sans: ['Inter', 'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}