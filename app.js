const listRecipe = [
  {
    title: "pepperoni",
    calories: 25,
    cook: 35,
    price: 45,
    img: "./img/pepperoni.jpg",
    rate: "⭐⭐⭐⭐⭐",
    prep: 45,
    serves: 4,
    fat: 20,
    fibre: 7,
    protein: 5,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
  {
    title: "spaghetti",
    calories: 5,
    cook: 10,
    price: 15,
    img: "./img/Spaghetti.jpg",
    rate: "⭐⭐⭐⭐⭐",
    prep: 20,
    serves: 2,
    fat: 20,
    fibre: 9,
    protein: 15,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
  {
    title: "cheeseburger",
    calories: 30,
    cook: 24,
    price: 19,
    img: "./img/Cheeseburger.jpg",
    rate: "⭐⭐⭐⭐",
    prep: 10,
    serves: 1,
    fat: 30,
    fibre: 17,
    protein: 6,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
  {
    title: "chicken",
    calories: 45,
    cook: 50,
    price: 45,
    img: "./img/chicken.jpg",
    rate: "⭐⭐⭐",
    prep: 60,
    serves: 2,
    fat: 24,
    fibre: 12,
    protein: 12,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
  {
    title: "pizza",
    calories: 36,
    cook: 15,
    price: 22,
    img: "./img/Pizza.jpg",
    rate: "⭐⭐⭐⭐",
    prep: 35,
    serves: 4,
    fat: 15,
    fibre: 8,
    protein: 4,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
  {
    title: "hamburger",
    calories: 34,
    cook: 9,
    price: 22,
    img: "./img/hamburger.jpg",
    rate: "⭐⭐",
    prep: 40,
    serves: 2,
    fat: 22,
    fibre: 4,
    protein: 17,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
  {
    title: "falafel",
    calories: 14,
    cook: 5,
    price: 14,
    img: "./img/Falafel.jpg",
    rate: "⭐⭐⭐⭐",
    prep: 20,
    serves: 4,
    fat: 17,
    fibre: 5,
    protein: 11,
    recipe: `STEP 1
    Put a large saucepan on a medium heat and add 1 tbsp olive oil.
    STEP 2
Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.
STEP 3
Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.`,
  },
];
let $ = document;
let listRecipesSelect = $.querySelector("#list-recipes");
let imgRecipe = $.querySelector(".img-recipe");
let titleRecipe = $.querySelector(".title-recipe");
let rateRecipe = $.querySelector(".rate-recipe");
let viewRecipe = $.querySelector(".btn");
let caloriesRecipe = $.querySelector(".calories");
let cookRecipe = $.querySelector(".cook");
let prepRecipe = $.querySelector(".prep");
let servesRecipe = $.querySelector(".serves");
let priceRecipe = $.querySelector(".price");
let fatRecipe = $.querySelector(".fat");
let fibreRecipe = $.querySelector(".fibre");
let proteinRecipe = $.querySelector(".protein");
let recipeRecipe = $.querySelector(".recipe-recipes");
listRecipesSelect.addEventListener("change", () => {
  console.log(listRecipesSelect.value);
  let listValue = listRecipesSelect.value;
  let mainData = listRecipe.find(
    (item) => item.title === listRecipesSelect.value
  );
  console.log(mainData);
  if (mainData) {
    $.querySelector(".item").classList.remove("visibility");
    console.log(`url(${mainData.img})`);
    recipeRecipe.innerHTML = `${mainData.recipe}`
    $.body.style.background = `url(${mainData.img})`;
    $.body.style.backgroundSize = "cover";
    titleRecipe.innerHTML = `${mainData.title}`;
    rateRecipe.innerHTML = `${mainData.rate}`;
    caloriesRecipe.innerHTML = `calories : ${mainData.calories} kcal`;
    cookRecipe.innerHTML = `cook : ${mainData.cook} mins`;
    prepRecipe.innerHTML = `Prep : ${mainData.prep} mins`;
    servesRecipe.innerHTML = `Serves : ${mainData.serves}`;
    priceRecipe.innerHTML = `Price : ${mainData.price}$`;
    fatRecipe.innerHTML = `Fat : ${mainData.fat}g`;
    fibreRecipe.innerHTML = `Fibre : ${mainData.fibre}g`;
    proteinRecipe.innerHTML = `Protein : ${mainData.protein}g`;
  }
});
