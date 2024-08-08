const imagesContainerSection = document.querySelector("#images-container-section");

let currentSlide = 1, maxSlide = 4;

const images = Array.from({ length: 20 }, (_, i) => `./images/wallpaper \(${i + 1}\).jpg`);
const months = ["Jan", "Feb", "Mars", "April", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const imageDates = Array.from({ length: 20 }, (_, i) => `${Math.floor(Math.random() * 20) + 1} 
${months[Math.floor(Math.random() * 11) + 1]}`);
const imageViews = Array.from({ length: 20 }, (_, i) => `${Math.floor(Math.random() * 1000)} views`);

for (let i = 0; i < 16; i++) {
    let imageAlt = images[i].slice(9, images[i].length - 4);
    let imgContainer = imagesContainerSection.insertAdjacentHTML("beforeend",
        `<div class="img-container"><img class="img" alt="${imageAlt}" src="${images[i]}" />
                <div class="img-info">
                <p class="img-date">${imageDates[i]}</p> <p class="img-views">${imageViews[i]}</p>
                <div>
                <div>`
    );
}

function updateImages() {
    document.querySelectorAll(".img").forEach(image => {
        let randomIdx = Math.floor(Math.random() * 20);
        let imageSrc = images[randomIdx];
        let imageAlt = images[randomIdx].slice(9, images[randomIdx].length - 4);
        image.alt = `${imageAlt}`
        image.src = `${imageSrc}`;
    });

    document.querySelectorAll(".img-date").forEach(date => {
        date.innerHTML = `${imageDates[Math.floor(Math.random() * 20)]}`
    });

    document.querySelectorAll(".img-views").forEach(view => {
        view.innerHTML = `${imageViews[Math.floor(Math.random() * 20)]}`
    });
}

document.querySelector("#dots-container").addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
        const { dot } = e.target.dataset;
        updateActiveDot(dot);
        updateImages();
    }
});

function goToPrevious() {
    if (currentSlide === 1) currentSlide = maxSlide;
    else currentSlide--;

    updateActiveDot(currentSlide);
    updateImages();
}

function goToNext() {
    if (currentSlide === maxSlide) currentSlide = 1;
    else currentSlide++;

    updateActiveDot(currentSlide);
    updateImages();
}

function updateActiveDot(currentSlide) {
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active-dot"));

    document.querySelector(`.dot[data-dot="${currentSlide}"]`).classList.add("active-dot");
}

document.querySelector("#previous-button").addEventListener("click", goToPrevious);
document.querySelector("#next-button").addEventListener("click", goToNext);