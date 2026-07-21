const artistWorks = {
    kai: [
        "images/WK Files (Website)/Kai/4410E2A8-F110-442F-AB7C-3449B0564FC9.webp",
        "images/WK Files (Website)/Kai/CC3BB41A-9248-4B73-86A2-E1ECBAC746FE.webp",
        "images/WK Files (Website)/Kai/IMG_0111.webp",
        "images/WK Files (Website)/Kai/IMG_0194.webp",
        "images/WK Files (Website)/Kai/IMG_0458.webp",
        "images/WK Files (Website)/Kai/IMG_1349.webp",
        "images/WK Files (Website)/Kai/IMG_1530.webp",
        "images/WK Files (Website)/Kai/IMG_1661.webp",
        "images/WK Files (Website)/Kai/IMG_1977.webp",
        "images/WK Files (Website)/Kai/IMG_2173.webp"
    ],
    abel: [
        "images/WK Files (Website)/Abel/IMG_0372.webp",
        "images/WK Files (Website)/Abel/IMG_1795.webp",
        "images/WK Files (Website)/Abel/IMG_2067.webp",
        "images/WK Files (Website)/Abel/IMG_3096.webp",
        "images/WK Files (Website)/Abel/IMG_3133.webp",
        "images/WK Files (Website)/Abel/IMG_3238.webp",
        "images/WK Files (Website)/Abel/IMG_3239.webp",
        "images/WK Files (Website)/Abel/IMG_3917.webp",
        "images/WK Files (Website)/Abel/IMG_5302.webp",
        "images/WK Files (Website)/Abel/IMG_5965.webp"
    ],
    everett: [
        "images/WK Files (Website)/Everett/IMG_0440.webp",
        "images/WK Files (Website)/Everett/IMG_1414.webp",
        "images/WK Files (Website)/Everett/IMG_1905.webp",
        "images/WK Files (Website)/Everett/IMG_1906.webp",
        "images/WK Files (Website)/Everett/IMG_1910.webp",
        "images/WK Files (Website)/Everett/IMG_1911.webp",
        "images/WK Files (Website)/Everett/IMG_1913.webp",
        "images/WK Files (Website)/Everett/IMG_3271.webp",
        "images/WK Files (Website)/Everett/IMG_3278.webp",
        "images/WK Files (Website)/Everett/IMG_3279.webp"
    ],
    sara: [
        "images/WK Files (Website)/Sara/IMG_0313.webp",
        "images/WK Files (Website)/Sara/IMG_1245.webp",
        "images/WK Files (Website)/Sara/IMG_1593.webp",
        "images/WK Files (Website)/Sara/IMG_3171.webp",
        "images/WK Files (Website)/Sara/IMG_3173.webp",
        "images/WK Files (Website)/Sara/IMG_3174.webp",
        "images/WK Files (Website)/Sara/IMG_3175.webp",
        "images/WK Files (Website)/Sara/IMG_4119.webp",
        "images/WK Files (Website)/Sara/IMG_5190.webp"
    ],
    haley: [
        "images/WK Files (Website)/Haley-Piercer/Google reviews - 3.webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews - 7(1).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews - 7.webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews - 8.webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews - 10.webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews - 15.webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(1).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(2).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(3).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(4).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(5).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(6).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(7).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(8).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(9).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews(10).webp",
        "images/WK Files (Website)/Haley-Piercer/Google reviews.webp"
    ]
};

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("portfolioModal");
    const modalContainer = document.getElementById("modalContainer");
    const image = document.getElementById("portfolioImage");

    const title = document.getElementById("artistTitle");
    const role = document.getElementById("artistRole");

    const closeBtn = document.getElementById("closePortfolio");
    const prevBtn = document.getElementById("prevImage");
    const nextBtn = document.getElementById("nextImage");

    const dots = document.getElementById("carouselDots");

    const buttons = document.querySelectorAll(".viewWorks");

    let currentArtist = "";
    let currentIndex = 0;

    function preloadNearbyImages() {

    const images = artistWorks[currentArtist];

    const next = (currentIndex + 1) % images.length;
    const prev = (currentIndex - 1 + images.length) % images.length;

    [next, prev].forEach(i => {

        const img = new Image();
        img.src = images[i];

    });

}

    function renderDots() {

        dots.innerHTML = "";

        artistWorks[currentArtist].forEach((_, i) => {

            const dot = document.createElement("button");

            dot.className =
                "h-2.5 w-2.5 rounded-full bg-zinc-600 transition-all";

            if (i === currentIndex) {

                dot.classList.remove("bg-zinc-600");
                dot.classList.add("bg-white", "scale-125");

            }

            dot.onclick = () => {

                currentIndex = i;
                updateImage();

            }

            dots.appendChild(dot);

        });

    }

    function updateImage() {

        image.classList.add("opacity-0");
        const img = new Image();

        img.onload = () => {

            image.src = img.src;

            image.classList.remove("opacity-0");

            renderDots();

            preloadNearbyImages();

        };

img.src = artistWorks[currentArtist][currentIndex];

    }

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            currentArtist = btn.dataset.artist;
            currentIndex = 0;

            title.textContent = btn.dataset.name;
            role.textContent = btn.dataset.role;

            updateImage();

            modal.classList.remove("hidden");
            modal.classList.add("flex");

            document.body.classList.add("overflow-hidden");

            setTimeout(() => {

                modalContainer.classList.remove("opacity-0", "scale-95");
                modalContainer.classList.add("opacity-100", "scale-100");

            }, 10);

        });

    });

    function closeModal() {

        modalContainer.classList.remove("opacity-100", "scale-100");
        modalContainer.classList.add("opacity-0", "scale-95");

        setTimeout(() => {

            modal.classList.remove("flex");
            modal.classList.add("hidden");

            document.body.classList.remove("overflow-hidden");

        }, 250);

    }

    closeBtn.onclick = closeModal;

    modal.onclick = e => {

        if (e.target === modal) {

            closeModal();

        }

    };

    nextBtn.onclick = () => {

        currentIndex++;

        if (currentIndex >= artistWorks[currentArtist].length) {

            currentIndex = 0;

        }

        updateImage();

    };

    prevBtn.onclick = () => {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = artistWorks[currentArtist].length - 1;

        }

        updateImage();

    };

    document.addEventListener("keydown", e => {

        if (modal.classList.contains("hidden")) return;

        if (e.key === "Escape") closeModal();

        if (e.key === "ArrowRight") nextBtn.click();

        if (e.key === "ArrowLeft") prevBtn.click();

    });

});