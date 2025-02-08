document.addEventListener('mousemove', (event) => {
    const { clientX: mouseX, clientY: mouseY } = event; // Pozycja myszy
    const centerX = window.innerWidth / 2; // Środek ekranu X
    const centerY = window.innerHeight / 2; // Środek ekranu Y

    // Wyliczenie przesunięcia względem środka
    const offsetX = (mouseX - centerX) / centerX;
    const offsetY = (mouseY - centerY) / centerY;

    // Pobieramy wszystkie gradienty
    const gradients = document.querySelectorAll('.mouse-move-img');

    gradients.forEach((gradient, index) => {
        const intensity = 40 + index * 10; // Im większy index, tym większy ruch

        const translateX = offsetX * intensity;
        const translateY = offsetY * intensity;

        // Przesuwamy gradient
        gradient.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});