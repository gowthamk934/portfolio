const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme(){

    const current =
        document.documentElement.getAttribute("data-theme");

    if(current === "light"){

        document.documentElement.removeAttribute("data-theme");

        localStorage.setItem("theme","dark");

    }else{

        document.documentElement.setAttribute("data-theme","light");

        localStorage.setItem("theme","light");

    }

}
