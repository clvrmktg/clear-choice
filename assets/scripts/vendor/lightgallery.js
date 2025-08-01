// Open the Modal
const modal = document.getElementById("modal");
const container = document.getElementById("container");
const body = document.body; // Select the body element

function openModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    html.setAttribute("style", "overflow: hidden");
}

// Close the Modal
const close = document.getElementById('close');

close.onclick = function() {
    closeModal();
};

function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    html.removeAttribute("style");

}

// Next/previous controls
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.onclick = function() {
    plusSlides(-1);
};

next.onclick = function() {
    plusSlides(1);
};

// Event listeners for thumbnails
const thumbnails = document.querySelectorAll('[thumbnail], [galleryImage]');

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
        openModal();
        currentSlide(i + 1);
    });
}

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("image");
    if (slides.length === 0) return; // Guard clause for empty slides array

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    // Optional: Adjust the overflow state of the body based on modal state
    if (modal.style.display === 'block') {
        body.style.overflow = 'hidden'; // Prevent scrolling on the background
    } else {
        body.style.overflow = ''; // Re-enable scrolling on the background
    }
}
