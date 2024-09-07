// menu toggle button
const menuToggleButton = document.querySelector('#nav-toggle')
const navMenu = document.querySelector('#nav-menu')
const navLinks =document.querySelectorAll('.nav-link')

menuToggleButton.addEventListener('click', () => {
  navMenu.classList.toggle("right-[0]")
  menuToggleButton.classList.toggle('ri-menu-4-fill')
  menuToggleButton.classList.toggle('ri-close-line')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle("left-[0]")
    menuToggleButton.classList.toggle('ri-menu-4-fill')
    menuToggleButton.classList.toggle('ri-close-line')
  })
})

// show scroll up
const scrollUp = () => {
  const scrollUpBtn = document.querySelector('#scroll-up')
  
  if(this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }
}
window.addEventListener('scroll', scrollUp)

// header bottom border 增加
const scrollHeader = () => {
  const header = document.querySelector('#navbar')
  
  if(this.scrollY >= 50) {
    header.classList.add("border-b", "border-white")
  } else {
    header.classList.remove("border-b", "border-white")
  }
}
window.addEventListener('scroll', scrollHeader)

// nav 按下滑動到對應區塊
const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-link')

  let current = 'home'

  sections.forEach(section => {
    const sectionTop = section.offsetTop

    if(this.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id')
    }
  })
  
  navLinks.forEach(link => {
    link.classList.remove('active')
    if(link.href.includes(current)) {
      link.classList.add('active')
    }
  })
}

window.addEventListener("scroll", activeLink)

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

// 不同動畫 observer 的 options
const ObserverOptions = {
  threshold: 0.2
}

// slideDown Observer
const slideDownObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if(!entry.target.classList.contains('animate-slideDown')) {
        entry.target.classList.add('animate-slideDown')
        entry.target.classList.remove('opacity-0', '-translate-y-8')
      }
    } else {
      entry.target.classList.remove('animate-slideDown')
      entry.target.classList.add('opacity-0', '-translate-y-8')
    }
  })
}, ObserverOptions)

// section cards delay slideDown Observer
const sectionDelaySlideDownObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const elements = entry.target.querySelectorAll('.card-slide-down')
    if(!elements) return

    if(entry.isIntersecting) {
      elements.forEach((element, index) => {
        // 確保動畫不重複執行
        if(!element.classList.contains('animate-slideDown')) {
          const delay = 500
          const timeoutId = setTimeout(() => {
            element.classList.add('animate-slideDown')
            element.classList.remove('opacity-0', '-translate-y-8')
          }, index * delay)

          // 把 timeoutId 存起來
          element.dataset.timeoutId = timeoutId
        }
      })
    } else {
      elements.forEach(element => {
        // 清除計時器
        const timeoutId = element.dataset.timeoutId

        if(timeoutId) {
          clearTimeout(timeoutId)
          delete element.dataset.timeoutId
        }
        element.classList.remove('animate-slideDown')
        element.classList.add('opacity-0', '-translate-y-8')
      })
    }
  })
}, ObserverOptions)

// slideLeft Observer
const slideLeftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if(!entry.target.classList.contains('animate-slideLeft')) {
        entry.target.classList.add('animate-slideLeft')
        entry.target.classList.remove('opacity-0', '-translate-x-40')
      }
    } else {
      entry.target.classList.remove('animate-slideLeft')
      entry.target.classList.add('opacity-0', '-translate-x-40')
    }
  })
}, ObserverOptions)

// slideRight Observer
const slideRightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if(!entry.target.classList.contains('animate-slideRight')) {
        entry.target.classList.add('animate-slideRight')
        entry.target.classList.remove('opacity-0', 'translate-x-40')
      }
    } else {
      entry.target.classList.remove('animate-slideRight')
      entry.target.classList.add('opacity-0', 'translate-x-40')
    }
  })
}, ObserverOptions)

// scaleUp Observer
const scaleUpObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if(!entry.target.classList.contains('animate-scaleUp')) {
        entry.target.classList.add('animate-scaleUp')
        entry.target.classList.remove('opacity-0', 'scale-50')
      }
    } else {
      entry.target.classList.remove('animate-scaleUp')
      entry.target.classList.add('opacity-0', 'scale-50')
    }
  })
}, ObserverOptions)


const slideDownElement = document.querySelectorAll('.slide-down')
slideDownElement.forEach(element => {
  slideDownObserver.observe(element)
})
const slideLeftElement = document.querySelectorAll('.slide-left')
slideLeftElement.forEach(element => {
  slideLeftObserver.observe(element)
})
const slideRightElement = document.querySelectorAll('.slide-right')
slideRightElement.forEach(element => {
  slideRightObserver.observe(element)
})
const scaleUpElement = document.querySelectorAll('.scale-up')
scaleUpElement.forEach(element => {
  scaleUpObserver.observe(element)
})

const sectionDelaySlideDown = document.querySelectorAll('.section-delay-slide-down')
sectionDelaySlideDown.forEach(section => {
  sectionDelaySlideDownObserver.observe(section)
})
