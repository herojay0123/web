    // Dark mode toggle functionality
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Save user preference in localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load saved preference from localStorage when the page loads
    window.addEventListener('DOMContentLoaded', () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    });


    // Select all
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    //each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the text of the button
            const category = button.textContent.toLowerCase().replace(' ', '-');

            //Show or hide products based on the clicked category
            productCards.forEach(card => {
                if (card.getAttribute('data-category') === category || category === 'all') {
                    card.style.display = 'block'; // Show
                } else {
                    card.style.display = 'none'; // Hide
                }
            });
        });
    });