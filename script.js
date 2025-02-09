// let index = 0;
// const slides = document.querySelector(".populer-cards");
// const totalSlides = document.querySelectorAll(".card").length;

// function showSlide() {
//     slides.style.transform = `translateX(-${index * 324}px)`;
// }
// function nextSlide() {
//     if (index < totalSlides - 1) index++;
//     showSlide();
// }
// function prevSlide() {
//     if (index > 0) index--;
//     showSlide();
// }


document.addEventListener("DOMContentLoaded", () => {
    // Carousel functionality
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".carousel-arrow.prev");
    const nextButton = document.querySelector(".carousel-arrow.next");
    
    let index = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 20; // Add spacing between items
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < totalItems - 1) {
            index++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    window.addEventListener("resize", updateCarousel);
    
    // Ensure proper positioning on load
    updateCarousel();
});

// Request a Dish Modal
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("requestDishModal");
    const overlay = document.getElementById("modalOverlay");
    const openBtn = document.getElementById("requestDishBtn");
    const closeBtn = document.getElementById("cancelBtn");

    // Open modal
    openBtn.addEventListener("click", function() {
        modal.style.display = "flex";
        overlay.style.display = "block";
    });

    // Close modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Close modal when clicking outside
    overlay.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Handle form submission
    document.getElementById("requestDishForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user input
        const dishName = document.getElementById("dishName").value.trim();
        const dishImage = document.getElementById("dishImage").value.trim();

        if (dishName) {
            // Add new dish to the Kitchen Section
            const kitchenSection = document.querySelector(".kitchen-section .cards");

            const newDish = document.createElement("div");
            newDish.classList.add("card");
            newDish.innerHTML = `
                <img src="${dishImage || './images/default-food.png'}" alt="${dishName}">
                <div class="card-content">
                    <p class="name-and-price">
                        <span class="item-name">${dishName}</span>
                        <span class="price">₹200</span>
                    </p>
                    <p class="rating-and-button">
                        <span class="rating">★ 4.5</span>
                        <span class="delivery-time">45-60 min</span>
                        <button class="add-to-cart-btn">+</button>
                    </p>
                </div>
            `;

            kitchenSection.appendChild(newDish);
            modal.style.display = "none"; // Close modal
            overlay.style.display = "none";

            // Reset the form fields
            document.getElementById("requestDishForm").reset();
        }
    });
});


// cart  form
document.addEventListener("DOMContentLoaded", function () {
    const cartPopup = document.getElementById("cartPopup");
    const cartIcon = document.getElementById("cartIcon");
    const closeCart = document.querySelector(".close-cart");
    const backToMenuBtn = document.getElementById("backToMenuBtn");

    // Open Cart Popup
    cartIcon.addEventListener("click", function () {
        cartPopup.style.display = "flex";
    });

    // Close Cart Popup
    closeCart.addEventListener("click", function () {
        cartPopup.style.display = "none";
    });

    // Close when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === cartPopup) {
            cartPopup.style.display = "none";
        }
    });

    // Close on "Back to Menu" Button Click
    backToMenuBtn.addEventListener("click", function () {
        cartPopup.style.display = "none";
    });
});
