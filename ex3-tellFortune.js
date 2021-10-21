let numKids = [2, 4, 6, 7, 8];
let partenarNames = ["ALi", "Ahmad", "Mohammed", "Thom", "Taha"];
let positions = ["Amsterdam", "Den Bosch", "Utrecht", "Den Haag", "Rotterdam"];
let jobtitles = ["Doktor", "Lawyer", "Web Developer", "Boss", "Accountant"];


function selectRandomly(list) {
    var index = Math.floor(Math.random() * 4);

    return list[index];

}



function tellFortune(list1, list2, list3, list4) {

    return " You will be a " + selectRandomly(list4) + " in " + selectRandomly(list3) +
        " married to  " + selectRandomly(list2) + " with " + selectRandomly(list1) + " kids";
}



console.log(tellFortune(numKids, partenarNames, positions, jobtitles));

console.log(tellFortune(numKids, partenarNames, positions, jobtitles));

console.log(tellFortune(numKids, partenarNames, positions, jobtitles));