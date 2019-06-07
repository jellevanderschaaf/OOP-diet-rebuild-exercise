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

console.log(foodItems['minced beef']);