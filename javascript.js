// Food Items objects

let foodItems = [];

class FoodItem {
    constructor(name, fat, carbs, protein, kcals, price) {
        this.name = name;
        this.fat = fat;
        this.carbs = carbs;
        this.protein = protein;
        this.kcals = kcals;
        this.price = price;
    }
}

function newFoodItem(name, fat, carbs, protein, kcals, price) {

    foodItems[name] = new FoodItem(name, fat, carbs, protein, kcals, price);

}

newFoodItem('minced beef', 72, 1.8, 120, 1140, 6.4);
newFoodItem('egg', 6.7, 0.9, 7.7, 95, 0.164);
newFoodItem('butter', 82.5, 0.7, 0.7, 748, 1.196);
newFoodItem('chicken legg', 39, 0, 54, 570, 1.22);
newFoodItem('mackerel', 63, 0, 77, 875, 3.32);
newFoodItem('apple', 0, 12, 0.4, 54, 0.12);

console.log(foodItems);

//

function createFoodItem() {
    document.getElementById("createFoodItem").classList.remove('hidden');
}

function createItem() {

    var entryName = document.getElementById('name').value;
    var entryFat = document.getElementById('fat').value;
    var entryCarbs = document.getElementById('carbs').value;
    var entryProtein = document.getElementById('protein').value;
    var entryKcals = document.getElementById('kcals').value;
    var entryPrice = document.getElementById('price').value;


    newFoodItem(entryName, entryFat, entryCarbs, entryProtein, entryKcals, entryPrice);
    console.log(foodItems);


    var newFoodItem2 = document.createElement('div');
    newFoodItem2.innerHTML = "&bull; " + entryName;
    newFoodItem2.setAttribute("class", "FoodItem");
    document.getElementById("test").appendChild(newFoodItem2);
    newFoodItem2.setAttribute("id", entryName);

    var newFoodItemAddButton = document.createElement('button');
    newFoodItemAddButton.innerHTML = '+';
    newFoodItemAddButton.value = entryName;
    newFoodItemAddButton.setAttribute("class", "btn btn-info add");
    newFoodItemAddButton.onclick = "addFoodItemToList(this.value)";
    document.getElementById(entryName).appendChild(newFoodItemAddButton);

}

function cancel() {
    document.getElementById('foodForm').reset();
    document.getElementById("createFoodItem").classList.add('hidden');
}