/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik, sans-serif'],
        dancing: ['Dancing Script, cursive'],
      },
      screens: {
        ssm: '400px',
        sm: '480px',
        md: '640px',
        '2md': '768px',
        lg: '1024px',
        '2lg': '1220px',
        xl: '1366px',
        '2xl': '1620px',
      },
      colors: {
        text: '#343D48', // body color and primary color
        textSecondary: '#02073E', // secondary body color
        heading: '#0F2137', // primary heading color
        headingSecondary: '#343D48', // heading color
        background: '#FFFFFF', // body background color
        backgroundSecondary: '#F9FBFD', // secondary background color
        backgroundThird: '#d6e2ea', // secondary background color
        borderColor: '#DCE5EA', // border color
        primary: '#A29BFE', // primary button and link color
        muted: '#7B8188', // muted color
        accent: '#609', // a contrast color for emphasizing UI
        dark: '#10132D',
        link: '#4F96FF',
        fbColor: '#0D63BE',
        fbColorHover: '#3283D9',
        darkText: '#fff',
        darkBackground: '#000',
        darkPrimary: '#0cf',
        darkSecondary: '#09c',
        darkMuted: '#111',
        error: '#D63423',
      },
      boxShadow: {
        form: '0px 24px 50px rgb(54 91 125 / 5%)',
        card: '0 3px 5px #ebebeb',
        cardHover: '0 10px 30px #ebebeb',
        primary:
          '#A29BFE 2px 2px 5px 0px, rgba(255, 255, 255, 0.8) -2px -2px 10px 0px',
        input: 'rgba(0, 0, 0, 0.15) 0px 2px 8px;',
      },
      height: {
        input: '50px',
        inputMobile: '46px',
      },
      backgroundImage: {
        gradientPrimary:
          'linear-gradient(to right, #a29bfe, #978eff, #8b82ff, #7f75ff, #7368ff);',
        gradientBg:
          'radial-gradient(circle, #e0f7fa, #e1f6fb, #e3f5fc, #e5f3fc, #e7f2fc, #e9f3fc, #eaf3fc, #ecf4fc, #eef7fd, #f1fafd, #f5fdfe, #faffff);',
      },
    },
  },
  plugins: [],
};
