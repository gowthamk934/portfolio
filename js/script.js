const counter = document.getElementById("counter");

let count = 0;

const target = 230000;

const speed = 50;

const increment = target / speed;

function updateCounter(){

    count += increment;

    if(count < target){

        counter.innerText = Math.floor(count).toLocaleString();

        requestAnimationFrame(updateCounter);

    }

    else{

        counter.innerText = target.toLocaleString();

    }

}

if(counter){
    updateCounter();
}
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

if(topBtn){

    topBtn.onclick = function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    };

}
const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
const words = [
    "Learning Operations",
    "Program Management",
    "LMS Administration",
    "Process Automation"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){
    if (!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0, charIndex++);
    }else{

        typing.textContent = current.substring(0, charIndex--);

    }

    if(!deleting && charIndex === current.length + 1){

        deleting = true;

        setTimeout(typeEffect,1200);

        return;

    }

    if(deleting && charIndex === 0){

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
/* ===============================
   Creative Dropdown
================================ */

const creativeBtn = document.getElementById("creativeBtn");
const creativeMenu = document.getElementById("creativeMenu");

creativeBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    creativeMenu.classList.toggle("show");

});

document.addEventListener("click", function () {

    creativeMenu.classList.remove("show");

});

creativeMenu.addEventListener("click", function (e) {

    e.stopPropagation();

});
