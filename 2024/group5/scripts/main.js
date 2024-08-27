document.addEventListener("DOMContentLoaded", function() {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const card = this.closest('.card');
            const content = card.querySelector('.faq-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
