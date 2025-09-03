// This code makes the page scroll smoothly when you click on certain links.

// Wait until the whole HTML page is loaded before running the code
document.addEventListener('DOMContentLoaded', function() {

    // Find all the links (<a> tags) that have an 'href' attribute starting with '#'
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    // Go through each of the links that we found
    scrollLinks.forEach(link => {
        // Add a 'click' event listener to each link. This will run a function when the link is clicked.
        link.addEventListener('click', function(event) {
            
            // Stop the link from its normal, jumpy behavior
            event.preventDefault();

            // Get the ID of the section we want to scroll to (e.g., '#stories')
            const targetId = this.getAttribute('href');

            // Find the actual section on the page that has that ID
            const targetSection = document.querySelector(targetId);

            // If we found the section...
            if (targetSection) {
                // ...scroll the page smoothly to that section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
