

const state = {

  sections: 9,
  pages: 8,
  zoom: 75,
  icons: {
    profile: "me.jpg",
    linkedin: "linkedin_icon.png",
    email: "email.png",
  },
  content: {
    projects: [
      {
        header: "Jimmy Van Twest | Portfolio Website",
        image: "/jimmy_website.png",
        text: "Art department portfolio site for Jimmy Van Twest",
        link: "http://www.jimmyvantwest.com",
        css: "gallery__item gallery__item--"
      },
      {
        header: "Operating Systems Calculator",
        image: "/systems_calculator.png",
        text: "A command-line calculator in Python for common calculations in operating systems",
        link: "/calculator",
        css: "gallery__item gallery__item--"
      },
      {
        header: "Soothing Solar System",
        image: "/solar_system.png",
        text: "A soothing solar system animation created with Eclipse",
        link: "https://etiennemustowcu.github.io/processing-project.html",
        css: "gallery__item gallery__item--"
      }
    ]
  }


}

export default state
