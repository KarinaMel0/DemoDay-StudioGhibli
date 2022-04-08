import dataGhibli from "../../data/ghibli/ghibli.js";
import { sortArray } from "../data.js";

const cardsContainer = document.createElement("section");
const modalContainer = document.querySelector(".modalContainer");



export function renderScreen(data) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
  cardsContainer.innerHTML = "";

  if (data.films != undefined) {
    data = data.films;
  }

  data.map((items) => {
    const card = document.createElement("ul");
    const title = document.createElement("h1");
    const poster = document.createElement("img");
    const divTitle = document.createElement("div");

    divTitle.appendChild(title);
    card.appendChild(poster);
    card.appendChild(divTitle);
    cardsContainer.appendChild(card);

    card.dataset.modal = items.id
    poster.dataset.modal = items.id
    title.dataset.modal = items.id

    card.classList.add("cards");
    title.classList.add("titleWithinCard");
    poster.classList.add("poster");
    divTitle.classList.add("divTitle");
    poster.src = items.poster;
    poster.title = items.title;
    title.innerHTML = items.title;


    card.addEventListener("click", (e) => {
      dataGhibli.films.forEach((ItemAtual) => {
        if (ItemAtual.id == e.target.dataset.modal) {
          renderModal(ItemAtual);
        }
      });
    });
  });

}

renderScreen(dataGhibli);

document.querySelector("#search").addEventListener("keyup", (e) => {
   if(e.target.value != ""){
   document.querySelector("#calculoFilms").style.display = "none"}else{
    document.querySelector("#calculoFilms").style.display = "initial"
   }
  renderScreen(sortArray.search(e.target.value));
});

document.getElementById("directors").addEventListener("change", (e) => {
  const calculoFilms = sortArray.toComparerProducerAndDirector(e.target.value,'director')
  renderScreen(calculoFilms);
  document.querySelector("#calculoFilms").remove()
  if(calculoFilms.length == 20){
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoFilms">The amount of films the studio owns is ${calculoFilms.length}</p>`)
  } else{
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoFilms">The amount of films the Directors owns is ${calculoFilms.length}</p>`)
  }
});

document.getElementById("Producer").addEventListener("change", (e) => {

  const calculoFilms = sortArray.toComparerProducerAndDirector(e.target.value,'producer')
  renderScreen(calculoFilms);
  document.querySelector("#calculoFilms").remove()
  if(calculoFilms.length == 20){
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoFilms">The amount of films the studio owns is ${calculoFilms.length}</p>`)
  } else{
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoFilms">The amount of films the Producer owns is ${calculoFilms.length}</p>`)
  }
});

document.getElementById("inputSelect").addEventListener("change", (e) => {
  renderScreen(sortArray.filterArray(e.target.value));
});



const calculoFilms = dataGhibli.films.length
document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoFilms">The amount of films the studio owns is ${calculoFilms}</p>`)





sortArray.search("Castle");

sortArray.filterCreatorProducerAndDirector('producer').forEach(function(newFilter){
  document.querySelector("#Producer").insertAdjacentHTML('beforeend', `<option value="${newFilter}" class= "dropdown">${newFilter}`)
})

sortArray.filterCreatorProducerAndDirector('director').forEach(function(newFilter){
  document.querySelector("#directors").insertAdjacentHTML('beforeend', `<option value="${newFilter}" class= "dropdown">${newFilter}`)
})

function renderModal(infoFilme) {
  const modal = document.querySelector(".modal");


  modal.innerHTML = "";

  modal.innerHTML = `
  <img class="closeModal" src="./assets/Vector.png" alt="closeButton">
    <h1>${infoFilme.title}</h1>
      <img class="poster" src="${infoFilme.poster}">
        <p>Description: ${infoFilme.description}</p>

          <h3>Director:${infoFilme.director}</h3>
          <h3>Producer: ${infoFilme.producer}</h3>
          <h3>Release Date: ${infoFilme.release_date}</h3>
          <h3> Score: ${infoFilme.rt_score}</h3>

  `;
  const buttonCloseModal = document.querySelector(".closeModal");
  buttonCloseModal.addEventListener("click", () => {
    modalContainer.classList.remove("showModal");

  });

  modalContainer.classList.add("showModal");
}
