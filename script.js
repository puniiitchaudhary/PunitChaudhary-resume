document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('.contact-info a');
    emailLink.addEventListener('mouseover', () => {
        emailLink.style.color = '#ff6347'; // Change color on hover
    });
    emailLink.addEventListener('mouseout', () => {
        emailLink.style.color = ''; // Revert to original color
    });
});
