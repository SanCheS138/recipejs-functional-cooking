
// Recipe Data Array

const recipes = [
  {
    id: 1,
    title: "Savoy Truffle",
    time: 25,
    difficulty: "easy",
    description: "Decadent chocolate truffles with a hint of caramel, inspired by the Beetles(with double e) classic.",
    category: "dessert"
  },
  {
    id: 2,
    title: "Chicken Curry",
    time: 45,
    difficulty: "medium",
    description: "A flavorful Indian curry with tender chicken and spices.",
    category: "curry"
  },
  {
    id: 3,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Classic dish with beef tenderloin wrapped in puff pastry.",
    category: "main course"
  },
  {
    id: 4,
    title: "Caesar Salad",
    time: 15,
    difficulty: "easy",
    description: "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
    category: "salad"
  },
  {
    id: 5,
    title: "Lasagna",
    time: 75,
    difficulty: "medium",
    description: "Layered pasta with rich meat sauce and creamy béchamel.",
    category: "pasta"
  },
  {
    id: 6,
    title: "Chocolate Soufflé",
    time: 65,
    difficulty: "hard",
    description: "Delicate French dessert with a rich chocolate flavor.",
    category: "dessert"
  },
  {
    id: 7,
    title: "Grilled Salmon",
    time: 25,
    difficulty: "easy",
    description: "Simple grilled salmon with lemon and herbs.",
    category: "seafood"
  },
  {
    id: 8,
    title: "Strawberry Fields Cheesecake",
    time: 80,
    difficulty: "hard",
    description: "A dreamy strawberry cheesecake inspired by the Beatles’ iconic song.",
    category: "dessert"
  }

];

// DOM Selection

const recipeContainer = document.querySelector("#recipe-container");


// Create Recipe Card Function

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// Render Recipes Function

const renderRecipes = (recipesArray) => {
  recipeContainer.innerHTML = recipesArray
    .map((recipe) => createRecipeCard(recipe))
    .join('');
};

// Initialize App

renderRecipes(recipes);