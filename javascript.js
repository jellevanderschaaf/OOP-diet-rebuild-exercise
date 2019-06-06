// Global variables

var valueRemove;


// Food Items objects

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

var mincedBeef = new FoodItem('minced beef (600 grams)', 72, 1.8, 120, 1140, 6.4);
var egg = new FoodItem('egg (1x)', 6.7, 0.9, 7.7, 95, 0.164);
var butter = new FoodItem('butter (100 grams)', 82.5, 0.7, 0.7, 748, 1.196);
var chickenLegg = new FoodItem('chicken legg (300 grams)', 39, 0, 54, 570, 1.22);
var mackerel = new FoodItem('mackerel (350 grams)', 63, 0, 77, 875, 3.32);
var apple = new FoodItem('apple (100 grams)', 0, 12, 0.4, 54, 0.12);


// Create new Food Item

var entryName;
var entryFat;
var entryCarbs;
var entryProtein;
var entryKcals;
var entryPrice;

function createFoodItem() {
    document.getElementById("createFoodItem").classList.remove('hidden');
}

var properties;

function createItem() {

    entryName = document.getElementById('name').value
    entryFat = document.getElementById('fat').value
    entryCarbs = document.getElementById('carbs').value
    entryProtein = document.getElementById('protein').value
    entryKcals = document.getElementById('kcals').value
    entryPrice = document.getElementById('price').value

    properties = new FoodItem(entryName, entryFat, entryCarbs, entryProtein, entryKcals);

    var newFoodItem = document.createElement('div');
    newFoodItem.innerHTML = "&bull; " + entryName;
    newFoodItem.setAttribute("class", "FoodItem");
    document.getElementById("test").appendChild(newFoodItem);
    newFoodItem.setAttribute("id", entryName);

    var newFoodItemAddButton = document.createElement('button');
    newFoodItemAddButton.innerHTML = '+';
    newFoodItemAddButton.value = entryName;
    newFoodItemAddButton.setAttribute("class", "btn btn-info add");
    newFoodItemAddButton.onclick = function() {
        addFoodItemToList(newFoodItemAddButton.value);
    };
    document.getElementById(entryName).appendChild(newFoodItemAddButton);

}

function cancel() {
    document.getElementById('foodForm').reset();
    document.getElementById("createFoodItem").classList.add('hidden');
}

// Add and remove Food Items

function addFoodItemToList(value) {
    var food = eval(value);

    var foodItem = document.createElement('div');
    foodItem.innerHTML = food.name + "<br />" + "fat: " + food.fat + " grams carbs: " + food.carbs + " grams protein: " + food.protein + " grams kcals: " + food.kcals + " costs: € " + food.price + "<br />";
    document.getElementById('listToday').appendChild(foodItem);
    foodItem.setAttribute("id", value);

    var buttonRemoveItem = document.createElement('button');
    buttonRemoveItem.innerHTML = 'x';
    buttonRemoveItem.value = value;
    buttonRemoveItem.setAttribute("class", "btn btn-danger");
    buttonRemoveItem.onclick = function() {
        document.getElementById(this.value).outerHTML = "";
    };

    document.getElementById(value).appendChild(buttonRemoveItem);

}

//