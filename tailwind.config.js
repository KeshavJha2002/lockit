/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                offWhite: 'hsl(0, 0%, 94%)',
                offBlack: 'hsl(0, 0%, 13%)',
                tomato: 'hsl(9, 100%, 70%)',
                blue: 'hsl(195, 100%, 50%)',
                green: 'hsl(150, 100%, 50%)',
                fuchsia: 'hsl(300, 100%, 65%)',
                paleYellow: 'hsl(60, 100%, 75%)',
                lightGray: 'hsl(0, 0%, 85%)',
                darkGray: 'hsl(0, 0%, 20%)',
            }
        },
    },
    plugins: [],
}