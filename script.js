document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const closeModalButton = document.querySelector(".close-btn");
    const viewLinks = document.querySelectorAll('a[href="#view"], a[href="#buy"]');
    

    viewLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
