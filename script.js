document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all necessary elements
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.portfolio-section');
    const mainContent = document.querySelector('.scrollable-content');
    
    /**
     * Shows the target section and hides all others.
     * @param {string} targetId - The ID of the section to show (e.g., 'overview').
     */
    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Show the target section by removing the 'hidden' class
            targetSection.classList.remove('hidden');
        }

        // Reset scroll to top when changing sections for better UX
        if (mainContent) {
            mainContent.scrollTop = 0;
        }
    }

    /**
     * Sets the active state on the clicked tab button.
     * @param {HTMLElement} clickedButton - The button element that was clicked.
     */
    function setActiveTab(clickedButton) {
        tabButtons.forEach(button => {
            // Reset all buttons to inactive state
            button.classList.remove('active');
        });
        // Set the clicked button to active state
        clickedButton.classList.add('active');
    }

    // 2. Attach Event Listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the ID of the section to open from the data-section attribute
            const targetId = this.getAttribute('data-section'); 
            
            showSection(targetId);
            setActiveTab(this);
        });
    });

    // 3. Initialization: Ensure the 'overview' tab is active and visible on page load
    const initialTab = document.querySelector('.tab-button[data-section="overview"]');
    if (initialTab) {
        setActiveTab(initialTab);
        // Extract 'overview' from data-section
        showSection(initialTab.getAttribute('data-section'));
    }
});