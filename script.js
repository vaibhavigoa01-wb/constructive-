/* =========================
   COUNTDOWN TIMER
========================= */

/*
    Change this date to your actual
    waffle website launch date.
*/

const launchDate = new Date("December 31, 2026 12:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = launchDate - now;


    /* If countdown is finished */

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }


    /* Calculate time */

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    /* Display */

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


/* Update every second */

setInterval(updateCountdown, 1000);


/* Run immediately */

updateCountdown();



/* =========================
   NEWSLETTER VALIDATION
========================= */

const form =
    document.getElementById("newsletterForm");

const email =
    document.getElementById("email");

const message =
    document.getElementById("message");


form.addEventListener("submit", function(event) {

    /* Stop form from refreshing page */

    event.preventDefault();


    const emailValue =
        email.value.trim();


    /* Basic email pattern */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    /* Empty email */

    if (emailValue === "") {

        message.innerText =
            "⚠️ Please enter your email address.";

        message.style.color = "#d62828";

        return;

    }


    /* Invalid email */

    if (!emailPattern.test(emailValue)) {

        message.innerText =
            "❌ Please enter a valid email address.";

        message.style.color = "#d62828";

        return;

    }


    /* Successful submission */

    message.innerText =
        "🎉 You're on the list! We'll notify you when we launch.";

    message.style.color = "#2a9d8f";


    /* Clear input */

    email.value = "";

});