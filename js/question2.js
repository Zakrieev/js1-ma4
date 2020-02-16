const URL = "https://api.rawg.io/api/games";

fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGames(json);
    console.dir(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

function createGames(json) {
    const results = json.results;
    const resultsDiv = document.querySelector(".results");

    let html = "";

    results.forEach(function (result) {
        html += `<div class="game">
        <h2>${result.name}</h2>
        <img src="${result.background_image}" alt="${result.name}">
    </div>`
    })

    resultDiv.innerHTML = html;
}
