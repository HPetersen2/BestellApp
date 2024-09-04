
function init() {
    renderDishes('Hauptgerichte');
    renderClearBasket();
    currentYear();
}

function renderDishes(dish) {
    let dishRef = document.getElementById('display-dish');
    dishRef.innerHTML = "";
    dishRef.innerHTML = getDishHeadline(dish);

    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {
        if(allDishes[indexDish].direction == dish) {
            dishRef.innerHTML += getDishes(indexDish);
        }
    }
}

function renderClearBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    basketFooterRef = document.getElementById('basket-footer');
    basketFooterRef.innerHTML = "";

    let allQuantitiesAreZero = allDishes.every(dish => dish.quantity === 0);
    if(allQuantitiesAreZero) {
        basketRef.innerHTML = getClearBasket();
        basketFooterRef.innerHTML = "";
    } else {
        renderBasket();
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
        }
    }
}

function addToBasket(indexDish) {
    allDishes[indexDish].quantity++;

    renderBasket();
}

function removeFromBasket(indexDish) {
    allDishes[indexDish].quantity--;
    renderClearBasket();
}

function deleteFromBasket(indexDish) {
    allDishes[indexDish].quantity = 0;
    renderClearBasket();
}

function calculateSum(x) {
    let totalSum = 0;

    for (let index = 0; index < allDishes.length; index++) {
        let amount = allDishes[index].quantity;
        let price = allDishes[index].price;
        let sum = amount * price;

        totalSum += sum
    }
    return (totalSum + x).toFixed(2);
}

function currentYear() {
    document.getElementById('current-year').innerHTML = new Date().getFullYear();
}