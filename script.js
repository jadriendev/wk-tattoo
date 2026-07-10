const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("opacity-0", "invisible");
}

function closeMenu() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("opacity-0", "invisible");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

const video = document.getElementById("heroVideo");

video.pause();

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
    offset: 100,
    disable: () => window.innerWidth < 768
});

const reviews = [
    {
        text: "Every session I have had at WK Tattoo has been absolutely phenomenal. From the quality of the tattoo to the professionalism and kindness of the WK Tattoo team. They really make you feel like friend rather than just a customer. Additionally, the team is very understanding and patient and will accommodate any requests to the best of their abilities. I will have the rest of my tattoos done at WK Tattoo.",
        name: "Holden D.",
        stars: `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    },
    {
        text: "I've gotten multiple tattoos from Kai and they always turn out amazing. The shop is super clean and has such a welcoming vibe. I love the decor, It's got a really cool, comfortable atmosphere. Kai always makes me feel at ease, and honestly, the whole team at WK Tattoo feels like family. Definitely my go-to spot!",
        name: "Connie L.",
        stars: `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    },
    {
        text: "I came here Friday the 13th to get matching tattoos with two of my friends. This is my first tattoo, Abel was super sweet & gentle. He moved fast but with precision. I'm super excited about my tattoo & the whole experience I had. Thank you Abel, you made my first tattoo experience a really good memory!",
        name: "Korlan J.",
        stars: `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    },
    {
        text: "I got my first Tattoo at 57!! Sarah was amazing her touch was gentle and the designed was terrific. The shop clean and the staff is friendly! Would 100 percent recommend and return here!!",
        name: "Katherine T.",
        stars: `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    },
    {
        text: "Everett is a great tattoo artist and his work is top notch. The shop is clean and well maintained. Everyone working was so friendly and welcoming. Will definitely come back for more work.",
        name: "Joanna H.",
        stars: `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    },
    {
        text: "Went to Haley for a forward helix, and I can't say enough how awesome she was! Very knowledgeable; she made it a really smooth experience and walked through every step with you. Highly recommend! Can't wait to come back for more! Cool people, clean shop, good vibes!",
        name: "Nik",
        stars: `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    }
];

const card = document.getElementById("reviewCard");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const reviewStars = document.getElementById("reviewStars");
const prevBtn = document.getElementById("prevReview");
const nextBtn = document.getElementById("nextReview");
const prevBtnMobile = document.getElementById("prevReviewMobile");
const nextBtnMobile = document.getElementById("nextReviewMobile");

let current = 0;

function loadReview(index) {
    reviewText.textContent = `"${reviews[index].text}"`;
    reviewName.textContent = reviews[index].name;
    reviewStars.innerHTML = reviews[index].stars;
}

function animateReview(index) {
    card.classList.add("opacity-0", "translate-y-6", "scale-95");

    setTimeout(() => {
        loadReview(index);

        card.classList.remove("opacity-0", "translate-y-6", "scale-95");
    }, 300);
}

loadReview(current);

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        current = (current + 1) % reviews.length;
        animateReview(current);
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        current = (current - 1 + reviews.length) % reviews.length;
        animateReview(current);
    });
}

if (nextBtnMobile) {
    nextBtnMobile.addEventListener("click", () => {
        current = (current + 1) % reviews.length;
        animateReview(current);
    });
}

if (prevBtnMobile) {
    prevBtnMobile.addEventListener("click", () => {
        current = (current - 1 + reviews.length) % reviews.length;
        animateReview(current);
    });
}

if (reviews.length > 1) {
    setInterval(() => {
        current = (current + 1) % reviews.length;
        animateReview(current);
    }, 5000);
}