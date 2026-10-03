let recipesContainer = document.getElementById("recipesContainer");
let btnPizza = document.getElementById("pizza");
let btnBurger = document.getElementById("burger");
let btnPasta = document.getElementById("pasta");
let btnSalad = document.getElementById("salad");
let input = document.getElementById("input");
let btnSearch = document.getElementById("btn-search");

 function fetchRecipes(food){
fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}`)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.data.recipes);
    let data = result.data.recipes;

    recipesContainer.innerHTML = "";

    data.forEach((recipe) => {
      console.log(recipe.title);
      console.log(recipe.image_url);
      recipesContainer.innerHTML += `

      <div class="recipe-card">
  <img src="${recipe.image_url}" alt="" class="recipe-img" />
  <div class="recipe-info">
    <div>
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="recipe-publisher">By: ${recipe.publisher}</p>
    </div>
    <a href="#" class="btn-view">View Recipe</a>
  </div>
</div>
      `;
    });
  });
}
  btnPizza.addEventListener("click", function () {
    fetchRecipes("pizza");
});

btnBurger.addEventListener("click", function () {
    fetchRecipes("burger");
});

btnPasta.addEventListener("click", function () {
    fetchRecipes("pasta");
});

btnSalad.addEventListener("click", function () {
    fetchRecipes("salad");
});

btnSearch.addEventListener("click", function () {
  console.log("search");
  fetchRecipes(input.value);
});