
// Recipe Data Array

const recipes = [
  {
    id: 1,
    title: "Savoy Truffle",
    time: 25,
    difficulty: "easy",
    description: "Decadent chocolate truffles with a hint of caramel, inspired by the Beetles classic.",
    category: "dessert",
    ingredients: [
      "200g dark chocolate",
      "100ml heavy cream",
      "50g butter",
      "2 tbsp caramel sauce",
      "Cocoa powder for dusting"
    ],
    steps: [
      "Melt chocolate and butter together",
      "Stir in cream and caramel until smooth",
      {
        text: "Form truffles",
        substeps: [
          "Chill mixture until firm",
          "Scoop small balls",
          "Roll in cocoa powder"
        ]
      },
      "Serve chilled"
    ]
  },
  {
    id: 2,
    title: "Chicken Curry",
    time: 45,
    difficulty: "medium",
    description: "A flavorful Indian curry with tender chicken and spices.",
    category: "curry",
    ingredients: [
      "500g chicken pieces",
      "2 onions",
      "2 tomatoes",
      "2 tbsp curry powder",
      "200ml coconut milk",
      "2 tbsp oil",
      "Salt"
    ],
    steps: [
      "Heat oil in a pan",
      "Sauté onions until golden",
      {
        text: "Prepare curry base",
        substeps: [
          "Add tomatoes and cook until soft",
          "Add curry powder and stir well"
        ]
      },
      "Add chicken and cook until browned",
      "Pour in coconut milk and simmer 20 minutes",
      "Season with salt and serve with rice"
    ]
  },
  {
    id: 3,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Classic dish with beef tenderloin wrapped in puff pastry.",
    category: "main course",
    ingredients: [
      "1 beef tenderloin",
      "200g mushrooms",
      "4 slices prosciutto",
      "500g puff pastry",
      "2 tbsp mustard",
      "1 egg yolk"
    ],
    steps: [
      "Season and sear beef tenderloin",
      "Prepare mushroom duxelles",
      "Wrap beef with prosciutto and mushroom mixture",
      "Encase in puff pastry",
      "Brush with egg yolk",
      "Bake at 200°C for 40 minutes",
      "Rest before slicing"
    ]
  },
  {
    id: 4,
    title: "Caesar Salad",
    time: 15,
    difficulty: "easy",
    description: "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
    category: "salad",
    ingredients: [
      "1 romaine lettuce",
      "50g Parmesan cheese",
      "100g croutons",
      "Caesar dressing",
      "Black pepper"
    ],
    steps: [
      "Wash and chop lettuce",
      "Toss with Caesar dressing",
      "Add croutons and Parmesan",
      "Season with black pepper",
      "Serve chilled"
    ]
  },
  {
    id: 5,
    title: "Lasagna",
    time: 75,
    difficulty: "medium",
    description: "Layered pasta with rich meat sauce and creamy béchamel.",
    category: "pasta",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "2 onions",
      "2 cups tomato sauce",
      "500ml béchamel sauce",
      "200g mozzarella"
    ],
    steps: [
      "Cook beef with onions and tomato sauce",
      "Prepare béchamel sauce",
      {
        text: "Layering process",
        substeps: [
          "Spread meat sauce at bottom",
          "Add lasagna sheets",
          "Add béchamel and mozzarella",
          "Repeat layers"
        ]
      },
      "Bake at 180°C for 45 minutes",
      "Cool slightly before serving"
    ]
  },
  {
    id: 6,
    title: "Chocolate Soufflé",
    time: 65,
    difficulty: "hard",
    description: "Delicate French dessert with a rich chocolate flavor.",
    category: "dessert",
    ingredients: [
      "200g dark chocolate",
      "4 eggs",
      "50g sugar",
      "Butter for greasing",
      "Powdered sugar for dusting"
    ],
    steps: [
      "Preheat oven to 190°C",
      "Melt chocolate",
      "Separate eggs",
      "Beat egg whites with sugar until stiff peaks",
      "Fold whites into chocolate mixture",
      "Pour into ramekins",
      "Bake 20 minutes",
      "Dust with powdered sugar"
    ]
  },
  {
    id: 7,
    title: "Grilled Salmon",
    time: 25,
    difficulty: "easy",
    description: "Simple grilled salmon with lemon and herbs.",
    category: "seafood",
    ingredients: [
      "2 salmon fillets",
      "1 lemon",
      "2 tbsp olive oil",
      "Fresh dill",
      "Salt and pepper"
    ],
    steps: [
      "Season salmon with salt, pepper, and dill",
      "Drizzle with olive oil",
      "Grill for 5 to 7 minutes per side",
      "Squeeze lemon juice before serving"
    ]
  },
  {
    id: 8,
    title: "Strawberry Fields Cheesecake",
    time: 80,
    difficulty: "hard",
    description: "A dreamy strawberry cheesecake inspired by the Beatles’ iconic song.",
    category: "dessert",
    ingredients: [
      "200g digestive biscuits",
      "100g butter",
      "500g cream cheese",
      "200g sugar",
      "3 eggs",
      "200g strawberries",
      "Strawberry jam"
    ],
    steps: [
      "Crush biscuits and mix with melted butter",
      "Press into cake tin base",
      "Beat cream cheese, sugar, and eggs",
      "Pour mixture over base",
      "Bake at 160°C for 50 minutes",
      {
        text: "Strawberry topping",
        substeps: [
          "Slice fresh strawberries",
          "Spread jam over cooled cheesecake",
          "Arrange strawberries on top"
        ]
      },
      "Chill before serving"
    ]
  }
];

// DOM Selection

const recipeContainer = document.querySelector("#recipe-container");

const renderSteps = (steps, level = 0) => {
    // Determine the CSS class based on nesting level
    const listClass = level === 0 ? 'steps-list' : 'substeps-list';
    
    let html = `<ol class="${listClass}">`;
    
    steps.forEach(step => {
        // TODO: Check if step is a string or object
        if (typeof step === 'string') {
            // Simple step - just add as list item
            html += `<li>${step}</li>`;
        } else {
            // Nested step - has text and substeps
            html += `<li>`;
            html += step.text;  // Main step text
            
            // TODO: Recursively call renderSteps for substeps
            if (step.substeps && step.substeps.length > 0) {
                // RECURSIVE CALL - this is the key!
                html += renderSteps(step.substeps, level + 1);
            }
            
            html += `</li>`;
        }
    });
    
    html += `</ol>`;
    return html;
};
const createStepsHTML = (steps) => {
    // TODO: Check if steps exist
    if (!steps || steps.length === 0) {
        return '<p>No steps available</p>';
    }
    
    // Call the recursive function to generate the nested list
    return renderSteps(steps);
};


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
            
            <!-- NEW: Toggle Buttons -->
            <div class="card-actions">
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                    📋 Show Steps
                </button>
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                    🥗 Show Ingredients
                </button>
            </div>
            
            <!-- NEW: Ingredients Section (hidden by default) -->
            <div class="ingredients-container" data-recipe-id="${recipe.id}">
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <!-- NEW: Steps Section (hidden by default) -->
            <div class="steps-container" data-recipe-id="${recipe.id}">
                <h4>Cooking Steps:</h4>
                ${createStepsHTML(recipe.steps)}
            </div>
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
    // From Part 2 - filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // From Part 2 - sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    // NEW: Event delegation for toggle buttons
    // One listener on parent handles all toggle buttons
    recipeContainer.addEventListener('click', handleToggleClick);
    
    console.log('Event listeners attached!');
};
// ============================================
// INITIALIZATION
// ============================================

// Set up event listeners on page load
setupEventListeners();

// Initial render with default filter/sort
updateDisplay();

// Handle toggle button clicks using event delegation
const handleToggleClick = (event) => {
    // Check if clicked element is a toggle button
    if (!event.target.classList.contains('toggle-btn')) {
        return;  // Not a toggle button, ignore
    }
    
    const button = event.target;
    const recipeId = button.dataset.recipeId;
    const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
    
    // TODO: Find the corresponding container
    const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
    const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
    
    // TODO: Toggle visibility
    if (container) {
        container.classList.toggle('visible');
        
        // Update button text
        const isVisible = container.classList.contains('visible');
        if (toggleType === 'steps') {
            button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
        } else {
            button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
        }
    }
};
const RecipeApp = (() => {
    const recipes = [
  {
    id: 1,
    title: "Savoy Truffle",
    time: 25,
    difficulty: "easy",
    description: "Decadent chocolate truffles with a hint of caramel, inspired by the Beetles classic.",
    category: "dessert",
    ingredients: [
      "200g dark chocolate",
      "100ml heavy cream",
      "50g butter",
      "2 tbsp caramel sauce",
      "Cocoa powder for dusting"
    ],
    steps: [
      "Melt chocolate and butter together",
      "Stir in cream and caramel until smooth",
      {
        text: "Form truffles",
        substeps: [
          "Chill mixture until firm",
          "Scoop small balls",
          "Roll in cocoa powder"
        ]
      },
      "Serve chilled"
    ]
  },
  {
    id: 2,
    title: "Chicken Curry",
    time: 45,
    difficulty: "medium",
    description: "A flavorful Indian curry with tender chicken and spices.",
    category: "curry",
    ingredients: [
      "500g chicken pieces",
      "2 onions",
      "2 tomatoes",
      "2 tbsp curry powder",
      "200ml coconut milk",
      "2 tbsp oil",
      "Salt"
    ],
    steps: [
      "Heat oil in a pan",
      "Sauté onions until golden",
      {
        text: "Prepare curry base",
        substeps: [
          "Add tomatoes and cook until soft",
          "Add curry powder and stir well"
        ]
      },
      "Add chicken and cook until browned",
      "Pour in coconut milk and simmer 20 minutes",
      "Season with salt and serve with rice"
    ]
  },
  {
    id: 3,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Classic dish with beef tenderloin wrapped in puff pastry.",
    category: "main course",
    ingredients: [
      "1 beef tenderloin",
      "200g mushrooms",
      "4 slices prosciutto",
      "500g puff pastry",
      "2 tbsp mustard",
      "1 egg yolk"
    ],
    steps: [
      "Season and sear beef tenderloin",
      "Prepare mushroom duxelles",
      "Wrap beef with prosciutto and mushroom mixture",
      "Encase in puff pastry",
      "Brush with egg yolk",
      "Bake at 200°C for 40 minutes",
      "Rest before slicing"
    ]
  },
  {
    id: 4,
    title: "Caesar Salad",
    time: 15,
    difficulty: "easy",
    description: "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
    category: "salad",
    ingredients: [
      "1 romaine lettuce",
      "50g Parmesan cheese",
      "100g croutons",
      "Caesar dressing",
      "Black pepper"
    ],
    steps: [
      "Wash and chop lettuce",
      "Toss with Caesar dressing",
      "Add croutons and Parmesan",
      "Season with black pepper",
      "Serve chilled"
    ]
  },
  {
    id: 5,
    title: "Lasagna",
    time: 75,
    difficulty: "medium",
    description: "Layered pasta with rich meat sauce and creamy béchamel.",
    category: "pasta",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "2 onions",
      "2 cups tomato sauce",
      "500ml béchamel sauce",
      "200g mozzarella"
    ],
    steps: [
      "Cook beef with onions and tomato sauce",
      "Prepare béchamel sauce",
      {
        text: "Layering process",
        substeps: [
          "Spread meat sauce at bottom",
          "Add lasagna sheets",
          "Add béchamel and mozzarella",
          "Repeat layers"
        ]
      },
      "Bake at 180°C for 45 minutes",
      "Cool slightly before serving"
    ]
  },
  {
    id: 6,
    title: "Chocolate Soufflé",
    time: 65,
    difficulty: "hard",
    description: "Delicate French dessert with a rich chocolate flavor.",
    category: "dessert",
    ingredients: [
      "200g dark chocolate",
      "4 eggs",
      "50g sugar",
      "Butter for greasing",
      "Powdered sugar for dusting"
    ],
    steps: [
      "Preheat oven to 190°C",
      "Melt chocolate",
      "Separate eggs",
      "Beat egg whites with sugar until stiff peaks",
      "Fold whites into chocolate mixture",
      "Pour into ramekins",
      "Bake 20 minutes",
      "Dust with powdered sugar"
    ]
  },
  {
    id: 7,
    title: "Grilled Salmon",
    time: 25,
    difficulty: "easy",
    description: "Simple grilled salmon with lemon and herbs.",
    category: "seafood",
    ingredients: [
      "2 salmon fillets",
      "1 lemon",
      "2 tbsp olive oil",
      "Fresh dill",
      "Salt and pepper"
    ],
    steps: [
      "Season salmon with salt, pepper, and dill",
      "Drizzle with olive oil",
      "Grill for 5 to 7 minutes per side",
      "Squeeze lemon juice before serving"
    ]
  },
  {
    id: 8,
    title: "Strawberry Fields Cheesecake",
    time: 80,
    difficulty: "hard",
    description: "A dreamy strawberry cheesecake inspired by the Beatles’ iconic song.",
    category: "dessert",
    ingredients: [
      "200g digestive biscuits",
      "100g butter",
      "500g cream cheese",
      "200g sugar",
      "3 eggs",
      "200g strawberries",
      "Strawberry jam"
    ],
    steps: [
      "Crush biscuits and mix with melted butter",
      "Press into cake tin base",
      "Beat cream cheese, sugar, and eggs",
      "Pour mixture over base",
      "Bake at 160°C for 50 minutes",
      {
        text: "Strawberry topping",
        substeps: [
          "Slice fresh strawberries",
          "Spread jam over cooled cheesecake",
          "Arrange strawberries on top"
        ]
      },
      "Chill before serving"
    ]
  }
];

// DOM Selection

const recipeContainer = document.querySelector("#recipe-container");

const renderSteps = (steps, level = 0) => {
    // Determine the CSS class based on nesting level
    const listClass = level === 0 ? 'steps-list' : 'substeps-list';
    
    let html = `<ol class="${listClass}">`;
    
    steps.forEach(step => {
        // TODO: Check if step is a string or object
        if (typeof step === 'string') {
            // Simple step - just add as list item
            html += `<li>${step}</li>`;
        } else {
            // Nested step - has text and substeps
            html += `<li>`;
            html += step.text;  // Main step text
            
            // TODO: Recursively call renderSteps for substeps
            if (step.substeps && step.substeps.length > 0) {
                // RECURSIVE CALL - this is the key!
                html += renderSteps(step.substeps, level + 1);
            }
            
            html += `</li>`;
        }
    });
    
    html += `</ol>`;
    return html;
};
const createStepsHTML = (steps) => {
    // TODO: Check if steps exist
    if (!steps || steps.length === 0) {
        return '<p>No steps available</p>';
    }
    
    // Call the recursive function to generate the nested list
    return renderSteps(steps);
};


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
            
            <!-- NEW: Toggle Buttons -->
            <div class="card-actions">
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                    📋 Show Steps
                </button>
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                    🥗 Show Ingredients
                </button>
            </div>
            
            <!-- NEW: Ingredients Section (hidden by default) -->
            <div class="ingredients-container" data-recipe-id="${recipe.id}">
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <!-- NEW: Steps Section (hidden by default) -->
            <div class="steps-container" data-recipe-id="${recipe.id}">
                <h4>Cooking Steps:</h4>
                ${createStepsHTML(recipe.steps)}
            </div>
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
    currentFilter = filterType;
    updateActiveButtons();
    
    // Still works because updateDisplay is in the return object
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
    // From Part 2 - filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // From Part 2 - sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    // NEW: Event delegation for toggle buttons
    // One listener on parent handles all toggle buttons
    recipeContainer.addEventListener('click', handleToggleClick);
    
    console.log('Event listeners attached!');
};
// ============================================
// INITIALIZATION
// ============================================

// Set up event listeners on page load
setupEventListeners();

// Initial render with default filter/sort
updateDisplay();

// Handle toggle button clicks using event delegation
const handleToggleClick = (event) => {
    // Check if clicked element is a toggle button
    if (!event.target.classList.contains('toggle-btn')) {
        return;  // Not a toggle button, ignore
    }
    
    const button = event.target;
    const recipeId = button.dataset.recipeId;
    const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
    
    // TODO: Find the corresponding container
    const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
    const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
    
    // TODO: Toggle visibility
    if (container) {
        container.classList.toggle('visible');
        
        // Update button text
        const isVisible = container.classList.contains('visible');
        if (toggleType === 'steps') {
            button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
        } else {
            button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
        }
    }
};

    

    
    // ============================================
    // INITIALIZATION FUNCTION
    // ============================================
    const init = () => {
        console.log('RecipeApp initializing...');
        setupEventListeners();
        updateDisplay();
        console.log('RecipeApp ready!');
    };
    
    // ============================================
    // PUBLIC API - What's accessible from outside
    // ============================================
    return {
        init: init,
        // Expose updateDisplay so filter/sort handlers can call it
        updateDisplay: updateDisplay
    };
    
})();  // <-- IIFE is immediately invoked

// ============================================
// START THE APP
// ============================================
RecipeApp.init();
