function giveCompliment(name) {
    let compliments = ["Good", "Very Good", "Smart", "Clever", "Clever", "Witty", "Bright", "Intelligent", "Sane", "logical"];
    var index = Math.floor(Math.random() * 9);
    return "You are: " + compliments[index] + " " + name;

}
console.log(giveCompliment("Ala"));