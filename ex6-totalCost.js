const cartForParty = {
    Cake: 2,
    Soda: 2.5,
    Cookies: 1,
    french_fries: 3,
    Ice_cream: 6

};

function calculateTotalPrice(partyProducts) {
    let totalPrice = 0;
    for (let item in cartForParty) {
        totalPrice += cartForParty[item];

    }
    console.log("Total: € " + totalPrice);
}



function test1() {
    console.log('\nTest 1: calculateTotalPrice should take one parameter');
    calculateTotalPrice(cartForParty)
}

function test2() {
    console.log('\nTest 2: return correct output when passed cartForParty');
    calculateTotalPrice(cartForParty)
}

function test() {
    test1();
    test2();
}

test();