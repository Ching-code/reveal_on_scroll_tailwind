# Tailwind RWD 滾動動畫網頁

## 主要使用技術:

- tailwind
- swiper.js 輪播圖
- IntersectionObserver API 做滾動
- remix icon

## 設定

font:

- NotoSans TC
- Jost
- LXGW

```javascript
// tailwind.config.js

module.exports = {
  theme: {
    // rwd media query
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    // font
    fontFamily: {
      LXGW: ["LXGW WenKai Mono TC", "monospace"],
      NotoTC: ["Noto Sans TC", "sans-serif"],
      Jost: ["Jost", "sans-serif"],
    },
    // container 預設值
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
  }
}
```

## Intersection Observer 使用

在 `tailwind.config.js` 設定 `keyframes` 和 `animation`
例:

```javascript
theme {
  keyframes: {
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
  },
  animation: {
    slideDown: "slideDown 2s ease",
  }
}
```

在 js 中對不同動畫套用不同 observer
再對想要套用滾動動畫的元素進行觀察

```javascript
// Observer 的選項
const ObserverOptions = {
  threshold: 0.2
}

// slideDown Observer
const slideDownObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('animate-slideDown')
      entry.target.classList.remove('opacity-0', '-translate-y-8')
    } else {
      entry.target.classList.remove('animate-slideDown')
      entry.target.classList.add('opacity-0', '-translate-y-8')
    }
  })
}, ObserverOptions)

// 元素套用觀察，這樣只要有 class slide-down 的元素都會有滾動動畫
const slideDownElement = document.querySelectorAll('.slide-down')
slideDownElement.forEach(element => {
  slideDownObserver.observe(element)
})
```
