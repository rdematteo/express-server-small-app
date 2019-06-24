const displayList = () => {
  axios.get("http://localhost:3000/movie/all").then(response => {
    const orderedList = document.querySelector(".movieList");
    orderedList.innerHTML = "";
    const list = response.data;
    list.forEach(element => {
      const movieCard = `
          <div class="movie-card">
          <h1> ${element.Title}</h1>
          <img src="${
            element.Poster
          }" onerror="this.src='../images/NO_PHOTO_PROVIDED.jpg';">
          <h1> ${element.Director}</h1>
          <p> ${element.Plot}</p>
          <p> ${element.Year}</p>
          <button id="delete-btn" onclick="deleteMovie('${
            element.imdbID
          }')" type="${element.Title}">delete</button>

            </div>`;

      orderedList.insertAdjacentHTML("beforeend", movieCard);
    });
  });
};

const deleteMovie = id => {
  console.log(id);
  axios
    .delete(`http://localhost:3000/movie/remove/` + id)
    .then(response => {
      alert('Movie deleted')
      console.log(response);
      displayList();
    })
    .catch(error => {
      console.log(error);
    });
};
displayList();
