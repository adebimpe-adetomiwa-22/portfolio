/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                main: {
                    100: '#DDDAD9',
                    200: '#BAB5B3',
                    300: '#98918D',
                    400: '#756C67',
                    500: '#534741',
                    600: '#3E3531',
                    700: '#2A2421',
                    800: '#151210',
                    900: '#000000',
                },
            },

            height: {
                0.7: '3px',
            },
        },
    },
    plugins: [],
};
