
function init() {
    renderDishes();
    renderClearBasket();
}

function renderDishes() {
    let dishRef = document.getElementById('display-dish');
    dishRef.innerHTML = "";
    dishRef.innerHTML = getMainDishHeadline();

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].direction == "Hauptgericht") {
            dishRef.innerHTML += getDishes(indexDish);
        }
    }
}

function renderInsertsDishes() {
    let dishRef = document.getElementById('display-dish');
    dishRef.innerHTML = "";
    dishRef.innerHTML = getInsertsDishHeadline();

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].direction == "Beilage") {
            dishRef.innerHTML += getDishes(indexDish);
        }
    }
}

function renderDessertsDishes() {
    let dishRef = document.getElementById('display-dish');
    dishRef.innerHTML = "";
    dishRef.innerHTML = getDessertDishHeadline();

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].direction == "Nachspeise") {
            dishRef.innerHTML += getDishes(indexDish);
        }
    }
}

function renderClearBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    basketFooterRef = document.getElementById('basket-footer');
    basketFooterRef.innerHTML = "";


    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].quantity == 0) {
            basketRef.innerHTML = getClearBasket();
            basketFooterRef.innerHTML = "";
        } else {
            renderBasket();
        }
    }
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    basketFooterRef = document.getElementById('basket-footer');
    basketFooterRef.innerHTML = "";

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].quantity > 0) {
            basketRef.innerHTML += getBasket(indexDish);
            basketFooterRef.innerHTML = getBasketFooter(indexDish);

            calculateSubtotalBasket();
            calculateSumBasket();
        }
    }
}

function addToBasket(indexDish) {
    allDishes[indexDish].quantity++;

    renderBasket();
}

function removeFromBasket(indexDish) {
    if(allDishes[indexDish].quantity > 0) {
        allDishes[indexDish].quantity--;
        if(allDishes[indexDish].quantity == 0) {
            renderClearBasket();
        } else {
            renderBasket();
        }
    }
}

function deleteFromBasket(indexDish) {
    allDishes[indexDish].quantity = 0;

    renderClearBasket()
}

function calculateSubtotalBasket(indexDish) {
    let subtotal;

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].quantity > 0) {
            let price = allDishes[indexDish].price;
            let quantity = allDishes[indexDish].quantity;

            subtotal = (price * quantity).toFixed(2);
            return subtotal;
        }
    }
}

function calculateSumBasket() {
    let sum;

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].quantity > 0) {
            let price = allDishes[indexDish].price;
            let quantity = allDishes[indexDish].quantity;

            sum = (price * quantity + 5).toFixed(2);
            return sum;
        }
    }
}