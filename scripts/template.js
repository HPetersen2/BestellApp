function getDishes(indexDish) {
    return `
    <div class="dish" onclick="addToBasket(${indexDish})">
        <div class="dish-container-information">
            <div class="dish-information">
                <h4>${allDishes[indexDish].title}</h4>
                <span>${allDishes[indexDish].description}</span>
                <p><b>${allDishes[indexDish].price.toFixed(2)} €</b></p>
            </div>
            <div class="add-dish">
                <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#FD8100"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>

        </div>
    </div>
    `
}

function getDishHeadline(dish) {
    return `
        <h3>${dish}</h3>
    `
}

function getBasket(indexDish) {
    return `
        <h4>${allDishes[indexDish].title}</h4>
        <div class="basket-dish-information">
            <a onclick="removeFromBasket(${indexDish})" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FD8100"><path d="M200-440v-80h560v80H200Z"/></svg></a>
            <p>${allDishes[indexDish].quantity} x</p>
            <a onclick="addToBasket(${indexDish})" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FD8100"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></a>
            <p>${(allDishes[indexDish].quantity * allDishes[indexDish].price).toFixed(2)} €</p>
            <a onclick="deleteFromBasket(${indexDish})" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FD8100"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></a>
        </div>
    `
}

function getBasketFooter() {
    return `
    <div class="basket-footer">
        <table class="basket-footer-text">
            <tr>
                <td>Zwischensumme:</td>
                <td class="basket-table-right">${calculateSum(0)} €</td>
            </tr>
            <tr>
                <td>Lieferkosten:</td>
                <td class="basket-table-right">5,00 €</td>
            </tr>
            <tr class="basket-footer-total-cost">
                <td><b>Gesamt:</b></td>
                <td class="basket-table-right"><b>${calculateSum(5)} €</b></td>
            </tr>
        </table>
        <div class="order-button">
            <a onclick="order()" href="#">Bestellen</a>
        </div>
    </div>
    `
}

function getClearBasket() {
    return `
    <div class="basket-clear">
        <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
        <p>Wähle leckere Gerichte aus der Karte und bestelle dein Menü.</p>
    </div>
    `
}
