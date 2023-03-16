const colorThemes = document.querySelectorAll('[name="theme"]');
// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
        if (link.style.animation)
        link.style.animation = ''
        else
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +0.55}s`;
    });
    burger.classList.toggle('toggle');
    });
}

colorThemes.forEach((themeOption) => {
  console.log(themeOption)
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

// for creating gradient coloured text
const gradientEffect = () => {
    const name = document.querySelector('.name')

    name.addEventListener('hover', () => {

        name.classList.toggle('gradient-effect');
        
    });
}

document.onload = setTheme();

navSlide();
gradientEffect();

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader-container").style.visibility = "visible";
  } else {
      document.querySelector("#loader-container").style.display = "none";
      document.querySelector( "body").style.visibility = "visible";
  }
};