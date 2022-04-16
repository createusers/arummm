const baloons = document.querySelectorAll('.baloons');
const filter = [

]

baloons.forEach(baloon => {
    baloon.style.left = `${Math.floor(Math.random() * 100)}vw`;
    baloon.style.filter = `invert(80%) sepia(23%) saturate(1352%) hue-rotate(${Math.floor(Math.random() * 360)}deg) brightness(119%) contrast(119%)`;
    baloon.style.animation = `move ${(Math.floor(Math.random() * 5)) + 5}s ease-out infinite`;
    const rect = baloon.getBoundingClientRect();
});