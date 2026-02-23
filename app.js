
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

// ============================================
// STATE MANAGEMENT
// ============================================
// Track current filter and sort settings
let currentFilter = 'all';
let currentSort = 'none';

// NEW: Select all filter and sort buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// Filter recipes by difficulty level
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Filter recipes by maximum cooking time
const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

// Apply the current filter
const applyFilter = (recipes, filterType) => {
    switch(filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterByTime(recipes, 30);
        case 'all':
        default:
            return recipes;  // Return all recipes (no filter)
    }
};
// Sort recipes by name (A-Z)
const sortByName = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort recipes by cooking time (fastest first)
const sortByTime = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.time - b.time);
};

// Apply the current sort
const applySort = (recipes, sortType) => {
    switch(sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return recipes;  // Return as-is (no sorting)
    }
};
// ============================================
// MAIN UPDATE FUNCTION
// ============================================
// This function combines filter + sort + render

const updateDisplay = () => {
    // Step 1: Start with all recipes
    let recipesToDisplay = recipes;
    
    // Step 2: Apply current filter
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Step 3: Apply current sort
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    // Step 4: Render the filtered and sorted recipes
    renderRecipes(recipesToDisplay);
    
    // Step 5: Log for debugging
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};
// ============================================
// UI HELPER FUNCTIONS
// ============================================

// Update which button looks "active"
const updateActiveButtons = () => {
    // Update filter buttons
    filterButtons.forEach(btn => {
        const filterType = btn.dataset.filter;
        if (filterType === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sort buttons
    sortButtons.forEach(btn => {
        const sortType = btn.dataset.sort;
        if (sortType === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};
// ============================================
// EVENT HANDLERS
// ============================================

// Handle filter button clicks
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    
    // Update state
    currentFilter = filterType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

// Handle sort button clicks
const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    
    // Update state
    currentSort = sortType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};
// ============================================
// EVENT LISTENER SETUP
// ============================================

const setupEventListeners = () => {
    // Attach click handlers to all filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Attach click handlers to all sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    console.log('Event listeners attached!');
};
// ============================================
// INITIALIZATION
// ============================================

// Set up event listeners on page load
setupEventListeners();

// Initial render with default filter/sort
updateDisplay();