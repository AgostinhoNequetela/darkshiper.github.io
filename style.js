let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex = (index + slides.length) % slides.length; // Looping
    slides[slideIndex].style.display = "block";  
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Exibir a primeira imagem
showSlide(slideIndex);

// Mudar a imagem a cada 3 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);
// Variável para controlar a imagem ativa
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

// Função para alterar a imagem
function changeImage(direction) {
    // Esconde a imagem atual
    images[currentImageIndex].classList.remove('active');
    
    // Calcula o índice da próxima imagem
    currentImageIndex += direction;

    // Se ultrapassar os limites, retorna ao início ou ao fim
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    // Exibe a nova imagem
    images[currentImageIndex].classList.add('active');
}
