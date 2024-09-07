/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" }
      },
      slideDown: {
        "0%": { 
          transform: "translateY(-2rem)",
          opacity: 0 
        },
        "100%": { 
          transform: "translateY(0)",
          opacity: 1
        }
      },
      slideLeft: {
        "0%": { 
          transform: "translateX(-10rem)",
          opacity: 0 
        },
        "100%": { 
          transform: "translateX(0)",
          opacity: 1
        }
      },
      slideRight: {
        "0%": { 
          transform: "translateX(10rem)",
          opacity: 0 
        },
        "100%": { 
          transform: "translateX(0)",
          opacity: 1
        }
      },
      scaleUp: {
        "0%": {
          transform: "scale(0.5)",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          opacity: 1
        }
      }
    },
    animation: {
      movingY: "move 3s linear infinite",
      slideDown: "slideDown 2s ease",
      slideLeft: "slideLeft 2s ease",
      slideRight: "slideRight 2s ease",
      scaleUp: "scaleUp 2s ease"
    },
    fontFamily: {
      LXGW: ["LXGW WenKai Mono TC", "monospace"],
      NotoTC: ["Noto Sans TC", "sans-serif"],
      Jost: ["Jost", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  safelist: ['left-[0]', 'ri-close-line'],
  plugins: [],
}
