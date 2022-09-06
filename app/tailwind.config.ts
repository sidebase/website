import type { Config } from 'tailwindcss'

export default <Config> {
  content: ['./components/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        CooperHewitt: ['Cooper-Hewitt', 'sans-serif'],
      },
      colors: {
        SideBase: {
          green: '#5bf3c7',
        },
      },
    },
  },
}
