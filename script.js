// Script para alternar a visibilidade dos overlays
document.addEventListener('DOMContentLoaded', () => {
    const overlayItems = document.querySelectorAll('.overlay-item');

    overlayItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const iframe = item.querySelector('iframe');
            if (iframe.style.display === 'none') {
                iframe.style.display = 'block';
            } else {
                iframe.style.display = 'none';
            }
        });
    });
});
