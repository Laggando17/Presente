const slides = document.getElementById("slides");
const imagens = document.querySelectorAll(".slides img");

let index = 0;
const total = imagens.length;

function proximaImagem() {
    index++;

    if (index >= total) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(proximaImagem, 4000);