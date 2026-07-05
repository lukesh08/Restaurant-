// ==========================
// Spice Route JS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Dark Mode Toggle
    // ==========================

    const themeBtn = document.getElementById("themeToggle");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon = themeBtn.querySelector("i");

        if(document.body.classList.contains("light-mode")){

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        }

        else{

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

        }

    });


    // ==========================
    // Reservation Form
    // ==========================

    const reservationForm = document.getElementById("reservationForm");

    const modal = document.getElementById("successModal");

    const modalMessage = document.getElementById("modalMessage");

    const closeModal = document.querySelector(".close-modal");

    reservationForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name=document.getElementById("name").value;

        const guests=document.getElementById("guests").value;

        const date=document.getElementById("date").value;

        const time=document.getElementById("time").value;

        modal.style.display="flex";

        modalMessage.innerHTML=`

        <b>${name}</b><br><br>

        Your table for <b>${guests}</b> has been reserved.

        <br><br>

        📅 ${date}

        <br>

        🕒 ${time}

        <br><br>

        Thank You ❤️

        `;

        reservationForm.reset();

    });


    // ==========================
    // Feedback Form
    // ==========================

    const feedbackForm=document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        modal.style.display="flex";

        modalMessage.innerHTML=`

        🎉

        <br><br>

        Thank You For Your Feedback.

        <br>

        We Appreciate Your Support ❤️

        `;

        feedbackForm.reset();

        stars.forEach(star=>star.classList.remove("active"));

        ratingValue.value="";

    });


    // ==========================
    // Star Rating
    // ==========================

    const stars=document.querySelectorAll(".star");

    const ratingValue=document.getElementById("ratingValue");

    stars.forEach((star)=>{

        star.addEventListener("click",()=>{

            let rating=star.dataset.rating;

            ratingValue.value=rating;

            stars.forEach((item)=>{

                item.classList.remove("active");

                if(item.dataset.rating<=rating){

                    item.classList.add("active");

                }

            });

        });

    });


    // ==========================
    // Close Modal
    // ==========================

    closeModal.onclick=()=>{

        modal.style.display="none";

    }

    window.onclick=(e)=>{

        if(e.target===modal){

            modal.style.display="none";

        }

    }


    // ==========================
    // Smooth Scroll
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });


    // ==========================
    // Active Navbar
    // ==========================

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });


    // ==========================
    // Reveal Animation
    // ==========================

    const reveal=document.querySelectorAll(".menu-card,.gallery-grid img,.features div,.feedback-box,.contact-info");

    function revealAnimation(){

        reveal.forEach(item=>{

            const windowHeight=window.innerHeight;

            const top=item.getBoundingClientRect().top;

            const visible=120;

            if(top<windowHeight-visible){

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll",revealAnimation);

    revealAnimation();


    // ==========================
    // Hero Typing Effect
    // ==========================

    const title=document.querySelector(".hero-content h1");

    const text=title.innerHTML;

    title.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            title.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

});


// ==========================
// Back To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;

right:25px;

bottom:25px;

width:50px;

height:50px;

border:none;

border-radius:50%;

background:#22c55e;

color:white;

font-size:22px;

cursor:pointer;

display:none;

z-index:999;

box-shadow:0 10px 25px rgba(0,0,0,.3);

`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

console.log("🍽️ Spice Route Loaded Successfully");