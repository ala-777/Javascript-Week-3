let shoppingCrat = ["Bananas", "Milk"];

function addToShoppingCart(grocery) {

    shoppingCrat.push(grocery);

    if (shoppingCrat.length === 4) {
        shoppingCrat.shift();


    }

    return shoppingCrat;

}

console.log("You bought " + addToShoppingCart("Apples"));
console.log("You bought " + addToShoppingCart("Water"));
console.log("You bought " + addToShoppingCart("Jus"));