document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Function to open or close the mobile menu
    function toggleMenu() {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('is-visible');
    }

    // Toggle the menu when the hamburger icon is clicked
    hamburger.addEventListener('click', function(event) {
        toggleMenu();
        event.stopPropagation(); // Prevents the document click listener from firing
    });

    // Clicking outside the mobile menu to close it, if it is visible
    document.addEventListener('click', function(event) {
        if (mobileMenu.classList.contains('is-visible') && !mobileMenu.contains(event.target)) {
            toggleMenu();
        }
    });
});
