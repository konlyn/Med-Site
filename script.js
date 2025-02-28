document.addEventListener('DOMContentLoaded', function () {
    // Select all the links
    const links = document.querySelectorAll('a:not([target="_blank"])');
    //Add the transition at the load of the page
    document.body.style.opacity = 1;

    // Add the transition on each link
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Stop the default link behavior
            const href = this.getAttribute('href');

            // Add the fade-out class to the body
            document.body.classList.add('fade-out');

            // Wait for the transition to complete, then change the page
            setTimeout(() => {
                window.location.href = href;
            }, 300); // 500ms = 0.5 seconds (same as the transition duration)
        });
    });
});
