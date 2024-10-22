document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const items = Array.from(carouselTrack.children);
    let currentIndex = 0;

    // Clone the items to create an infinite loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carouselTrack.appendChild(clone);
    });

    function moveCarousel() {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = 'translateX(0)';
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 1s ease';
                moveCarousel();
            }, 50);
        } else {
            carouselTrack.style.transform = `translateX(-${currentIndex * 20}%)`;
        }
    }

    setInterval(moveCarousel, 3000); // Adjust the interval as needed
});