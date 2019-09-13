// Logical Or with Non-boolean

let drink = true;
let defaultDrink = "Melon Juice";
let chooseDrink = drink || defaultDrink;

console.log(chooseDrink);

// Logical AND with Non-boolean

let food = true;
let defaultFood = "Fried Chicken";
let chooseFood = food && defaultFood;

console.log(chooseFood);

// Short-Circuiting any expression with operator AND

let menu = false;
let menuOne = "Humburger";
let menuTwo = "Pizza";
let chooseMenu = menu && menuOne && menuTwo;

console.log(chooseMenu);
