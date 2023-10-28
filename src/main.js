
document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        let targetElement = event.target; // clicked element

        do {
            if (targetElement == menu || targetElement == menuButton) {
                // This is a click inside the menu or the button
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside the menu and the button
        menu.classList.add('hidden');
    });
});


