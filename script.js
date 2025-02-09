
    const carouselCard = document.querySelectorAll('.carousel-card');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');

    let cards =[];

    for(let i=0;i<carouselCard.length;i++){
        cards.push(carouselCard[i]);
    }

    
    nextButton.addEventListener('click', () => {
        let lastCard = cards.pop();
        cards.unshift(lastCard);

        let x ='';

        cards.forEach((card)=>{
            x+=`<div class="card on-hover carousel-card">${card.innerHTML}</div>`
        })

        carouselTrack.innerHTML=x;
        
    });

    prevButton.addEventListener('click', () => {
        let firstCard = cards.shift();
        cards.push(firstCard);

        let x ='';

        cards.forEach((card)=>{
            x+=`<div class="card on-hover carousel-card">${card.innerHTML}</div>`
        })

        carouselTrack.innerHTML=x;
    });


document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("requestDishModal");
    const overlay = document.getElementById("modalOverlay");
    const openBtn = document.getElementById("requestDishBtn");
    const closeBtn = document.getElementById("cancelBtn");

    openBtn.addEventListener("click", function() {
        modal.style.display = "flex";
        overlay.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    document.getElementById("requestDishForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const dishName = document.getElementById("dishName").value.trim();
        const dishImage = document.getElementById("dishImage").value.trim();

        if (dishName) {
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
            modal.style.display = "none";
            overlay.style.display = "none";

            document.getElementById("requestDishForm").reset();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cartPopup = document.getElementById("cartPopup");
    const cartIcon = document.getElementById("cartIcon");
    const closeCart = document.querySelector(".close-cart");
    const backToMenuBtn = document.getElementById("backToMenuBtn");

    cartIcon.addEventListener("click", function () {
        cartPopup.style.display = "flex";
    });

    closeCart.addEventListener("click", function () {
        cartPopup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === cartPopup) {
            cartPopup.style.display = "none";
        }
    });

    backToMenuBtn.addEventListener("click", function () {
        cartPopup.style.display = "none";
    });
});
