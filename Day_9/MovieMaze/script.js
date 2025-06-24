    document.addEventListener('DOMContentLoaded',()=>{
      let result = localStorage.getItem('obj');
      result = JSON.parse(result);
      if(result) createCard(result);
    })
    
    async function searchMovie() {
      const movieName = document.getElementById('searchInput').value;
      const resultDiv = document.getElementById('results');
      
      if (!movieName.trim()) {
        resultDiv.innerHTML = '<p style="color: orange;">Please enter a movie name.</p>';
        return;
      }

      // For now, we'll just mock the result.
      let result = await fetchData(movieName.trim());
      localStorage.setItem('obj',JSON.stringify(result));
      createCard(result);
    }

    async function fetchData(value){
        let json = await axios(`https://www.omdbapi.com/?s=${value}&apikey=89e044e1`);
        console.log(json.data.Search);
        return json.data.Search;
    }

    const container = document.getElementById('container');

    function createCard(movies){
        container.innerHTML = "";
        movies.forEach(movie => {
            const div = document.createElement("div");
            const img = document.createElement("img");

            img.src = movie.Poster;
            img.className = "movie-banner";
            div.innerHTML = `<h2>${movie.Title}</h2> <span> ${movie.Year}</span>`
            div.prepend(img);
            container.append(div);
        });
    }