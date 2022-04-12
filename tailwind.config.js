module.exports = {
  darkMode: "class", 
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main_bg_dark': 'bg-slate-700',
        'component_bg_dark': 'bg-slate-900',
        // 'light_text_color': '',
  
        'main_bg_light': '#FFFFFF',// '#D3D3D3', // 'bg-slate-300',
        'component_bg_light': '#E4E6F5',//'bg-white',
        'light_text_color': '#67788A', // for blog text
        'light_postcard': '#F1F4F7',
  
        'button_main_color': '#218EA4',// 'bg-pink-600', // '#7e5bef', //'bg-pink-600'
        'hover_color': '#56A9B9',

        'form_color': '#E4E6F5',
      },

      // custom made
      animation: {
        wiggle: 'wiggle 1s ease-in-out ',
        wiggle_reverse:'wiggle_reverse 0.3s ease-in'
      },
      
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-60deg)' },
          '50%': { transform: 'rotate(60deg)' },
        },
        wiggle_reverse:{
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }  
    },
  },
  plugins: [],
}
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     colors: {
//       'blue': '#1fb6ff',
//       'purple': '#7e5bef',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'yellow': '#ffc82c',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   }
// }