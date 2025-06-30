const apiKey = 'df47501ddd654ab0ae676de7e6bbe3e0';
const apiUrl = 'https://api.spoonacular.com/recipes';

async function searchRecipe() {
    const query = document.getElementById('recipe').value.trim();
    if (!query) {
        alert("Please enter a recipe or ingredient name!");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/complexSearch?apiKey=${apiKey}&query=${query}&number=1&addRecipeInformation=true&fillIngredients=true`);
        const data = await response.json();
        console.log(data.results[0])
        displayResults(data.results[0]);
    } catch (error) {
        console.error("Error fetching recipe data:", error);
        document.getElementById("results").innerHTML = "<p class='text-red-300 text-center font-bold'>Failed to fetch recipes. Please try again later.</p>";
    }
}

function displayResults(recipe) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (recipe.length === 0) {
        resultsDiv.innerHTML = "<p class='text-red-300 text-center font-bold pt-10'>No recipes found.</p>";
        return;
    }

    //   recipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "bg-white p-6 rounded-lg shadow-md m-auto mt-10 w-[80vw] max-w-2xl";

    // Convert HTML in summary to plain text
    const summaryText = recipe.summary.replace(/<[^>]*>?/gm, "");

    // Extract top 5 ingredients
    const ingredientsList = recipe.extendedIngredients
        ?.slice(0, 5)
        .map(ing => `<li class="list-disc ml-5">${ing.original}</li>`)
        .join("");

    recipeCard.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" class="rounded-lg w-full max-h-[300px] object-cover mb-4">
    <h3 class='font-bold text-xl mb-2'>${recipe.title}</h3>
    <p class="text-gray-600 mb-2"><strong>Ready in:</strong> ${recipe.readyInMinutes} minutes</p>
    <p class="text-gray-600 mb-2"><strong>Servings:</strong> ${recipe.servings}</p>
    <p class="text-gray-700 mb-4">${summaryText}</p>
    ${ingredientsList ? `<h4 class="font-semibold mt-4">Ingredients:</h4><ul class="text-sm mb-4">${ingredientsList}</ul>` : ""}
    <a href="${recipe.sourceUrl}" target="_blank" class="text-blue-500 underline">View full recipe</a>
  `;

    resultsDiv.appendChild(recipeCard);
    //   });
}
