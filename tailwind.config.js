/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
        neutral: '#374151',
        base: '#F3F4F6',
        danger: '#EF4444',
        success: '#10B981',
        warning: '#FBBF24',
        info: '#3B82F6',
        // Add more custom colors here
      },
      fontFamily: {
        poppinsThin: ['Poppins-Thin', 'sans-serif'],
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextrathin: ['Poppins-ExtraLight', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

