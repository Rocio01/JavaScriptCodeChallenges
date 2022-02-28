const dishes = [
  {
    name: "Eggplant Parmessan",
    vegetarian: true
  },
  {
    name: "Spagghetti and meatballs",
    vegetarian: false
  }
]

const vegetarianDishes= dishes.filter(dish => dish.vegetarian === true)
console.log(vegetarianDishes)