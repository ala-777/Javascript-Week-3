let shoppingCrat = ["Bananas", "Milk"];

function addToShoppingCart(products, grocery) {

    products = [...products, grocery];


    if (products.length === 4) {
        products.shift();
    }
    return products;
}
var newArr = shoppingCrat.slice();

console.log("You bought " + addToShoppingCart(newArr, "Apples"));
console.log("You bought " + addToShoppingCart(newArr, "Water"));
console.log("You bought " + addToShoppingCart(newArr, "Jus"));