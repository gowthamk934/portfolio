/* ===============================
   THEME SYSTEM
   Default = light theme.
   data-theme="dark" opts into dark mode.
=================================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.documentElement.setAttribute("data-theme","dark");
}else{
    document.documentElement.removeAttribute("data-theme");
}

function updateThemeIcon(){

    const btn = document.getElementById("themeToggle");

    if(!btn) return;

    const icon = btn.querySelector("i");

    if(!icon) return;

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    icon.classList.remove("fa-moon","fa-sun");
    icon.classList.add(isDark ? "fa-sun" : "fa-moon");

}

function toggleTheme(){

    const current =
        document.documentElement.getAttribute("data-theme");

    if(current === "dark"){

        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme","light");

    }else{

        document.documentElement.setAttribute("data-theme","dark");
        localStorage.setItem("theme","dark");

    }

    updateThemeIcon();

}

updateThemeIcon();

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", toggleTheme);

}
