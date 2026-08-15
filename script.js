/* =========================
   GET POPUP
========================= */

const popup = document.getElementById("offerPopup");


/* =========================
   OPEN OFFER
========================= */

function openOffer() {

    popup.classList.add("active");

    // Prevent page from scrolling
    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE OFFER
========================= */

function closeOffer() {

    popup.classList.remove("active");

    // Allow page scrolling again
    document.body.style.overflow = "auto";
}


/* =========================
   CLICK OUTSIDE POPUP
========================= */

popup.addEventListener("click", function(event) {

    // If user clicks the dark background
    // instead of the popup itself

    if (event.target === popup) {

        closeOffer();

    }

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeOffer();

    }

});


/* =========================
   CLAIM OFFER
========================= */

function claimOffer() {

    alert(
        "🎉 Yay! Your Anniversary Waffle Offer is ready! 🧇\n\n" +
        "Enjoy your delicious waffle for just ₹70!"
    );

}