/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Crimson+Text':['Crimson Text'],
        'Comfortaa': ['Comfortaa'],
        'Space+Grotesk':['Space Grotesk'],
        'Space+Grotesk':['Space Grotesk'],
        'Prompt':['Prompt']
      },
      animation: {
        'reverse-spin': 'reverse-spin 3s linear infinite',
        'slow-bounce':'slow-bounce 1s infinite',
        'slow-bounce2':'slow-bounce 2s infinite',
        'slow-bounce3':'slow-bounce 3s infinite',
        'slow-bounce4':'slow-bounce 4s infinite',
        'slow-bounce5':'slow-bounce 5s infinite',
        'slow-bounce6':'slow-bounce 6s infinite',
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: 'rotate(360deg)'
          },
        },
        "slow-bounce":{
          from: {
            transform: 'translateY(-5px)'
          },
          to: {
            transform: 'translateY(0)'
          },
        },
        "slow-bounce2":{
          from: {
            transform: 'translateY(-15px)'
          },
          to: {
            transform: 'translateY(0)'
          },
        },
        "slow-bounce3":{
          from: {
            transform: 'translateY(-25px)'
          },
          to: {
            transform: 'translateY(0)'
          },
        },
        "slow-bounce4":{
          from: {
            transform: 'translateY(-35px)'
          },
          to: {
            transform: 'translateY(0)'
          },
        },
        "slow-bounce5":{
          from: {
            transform: 'translateY(-45px)'
          },
          to: {
            transform: 'translateY(0)'
          },
        },
        "slow-bounce6":{
          from: {
            transform: 'translateY(-55px)'
          },
          to: {
            transform: 'translateY(0)'
          },
        },
      },
    },
  }, 
  plugins: [],
}


// @keyframes bounce {
//   0%, 100% {
//       transform: translateY(-25%);
//       animation-timing-function: cubic-bezier(0.8,0,1,1);
//   }
//   50% {
//       transform: none;
//       animation-timing-function: cubic-bezier(0,0,0.2,1);
//   }
// }
// .animate-bounce {
//   animation: bounce 1s infinite;
// }

