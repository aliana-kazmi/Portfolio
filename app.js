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

const navLinkHover = () => {
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

const gradientEffect = () => {
    const name = document.querySelector('.name')

    name.addEventListener('hover', () => {

        name.classList.toggle('gradient-effect');
        
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

document.onload = setTheme();

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 90; } else { angle = angle - 90; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

// projectImage = document.querySelectorAll(".image-card")
// function project

navSlide();
gradientEffect();
