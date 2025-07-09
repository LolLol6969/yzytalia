class YeezyTalia {
  constructor() {
    this.init()
  }

  init() {
    this.setupThemeToggle()
    this.setupNavigation()
    this.setupInteractions()
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById("themeToggle")
    const body = document.body

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
      localStorage.setItem("darkMode", body.classList.contains("dark-mode"))
    })

    if (localStorage.getItem("darkMode") === "true") {
      body.classList.add("dark-mode")
    }
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll(".main-nav a")

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")

        // Check if it's an internal anchor link
        if (href.startsWith("#")) {
          e.preventDefault()
          const targetId = href.substring(1)
          const targetSection = document.getElementById(targetId)

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
            })
          }

          navLinks.forEach((l) => l.classList.remove("active"))
          link.classList.add("active")
        }
        // For external links (discografia.html, merch.html), let the default behavior happen
      })
    })

    // Keep the scroll listener for internal navigation
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPos = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    })
  }

  setupInteractions() {
    // Remove the alert functionality for social links since they now have real URLs
    console.log("YeezyTalia initialized with social links")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new YeezyTalia()
})
