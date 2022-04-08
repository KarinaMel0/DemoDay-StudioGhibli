import dataGhibli from "../../data/ghibli/ghibli.js"
import {sortArray} from "../../js/data.js"

const modalContainer = document.querySelector(".modalContainer");
const cardsContainer = document.createElement("section");
let personagens = sortArray.filterSpecies("")
// Array global de personagens, esta sendo utilizado no InputFilmes e no InputAZ, serve para conseguir ordernar de A-Z e Z-A para


 function renderScreen(data) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
  cardsContainer.innerHTML = "";

  if (data == undefined) {
    return
  }

     data.map((characters) => {
     const card = document.createElement("ul");
     const name = document.createElement("h1");
     const img = document.createElement("img");
     const divName = document.createElement("div");

     cardsContainer.appendChild(card);
     divName.appendChild(name);
     card.appendChild(divName);
     card.appendChild(name);
     card.appendChild(img);

     card.dataset.modal = characters.id
     img.dataset.modal = characters.id
     name.dataset.modal = characters.id

     card.classList.add("cards");
     name.classList.add("nameCharacters");
     img.classList.add("img");
     divName.classList.add("divname");

      img.src = characters.img;
      name.innerHTML = characters.name;

      card.addEventListener("click", (e) => {
        dataGhibli.films.forEach((itemAtual) => { itemAtual.people.forEach((i)=> {if (i.id == e.target.dataset.modal) {
          renderModal(i); }})});});
  })}


document.getElementById("inputAZ").addEventListener("change", (e) => {
    renderScreen(sortArray.filterCharactersAZ(e.target.value,personagens));

});

document.querySelector("#search").addEventListener("keyup", (e) => {
  document.querySelector("#calculoCharaters").remove()   // remove o calculo da tela, sem isso fica se repetindo sem parar.

  renderScreen(sortArray.searchCharacters(e.target.value));
  personagens = sortArray.searchCharacters(e.target.value)

  document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">there are ${sortArray.calc(sortArray.searchCharacters(e.target.value).length).toFixed(2)}% of characters  </p>`)
});

document.getElementById("inputFilmes").addEventListener("change", (e) => {
  const calculoFilms = sortArray.compareMovies(e.target.value)
  const calculo =  100 * calculoFilms.length / 171
  renderScreen(calculoFilms);
  document.querySelector("#calculoCharaters").remove()

  personagens = calculoFilms


  if(calculoFilms.length != 171){
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters"> ${e.target.value} has ${calculo.toFixed(2)}% characters </p>`)
  } else{
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">there are ${sortArray.calc(personagens.length).toFixed(2)}% of characters  </p>`)
  }

});

document.getElementById("InputSpecies").addEventListener("change", (e) => {

  const calculoFilms = sortArray.filterSpecies(e.target.value)
  renderScreen(calculoFilms);
  document.querySelector("#calculoCharaters").remove()
  personagens = calculoFilms

  document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">there are ${sortArray.calc(calculoFilms.length).toFixed(2)}% of characters  </p>`)
});



function renderModal(infoFilme) {

  const modal = document.querySelector(".modal");

  dataGhibli.films.filter(itematual => {
    return itematual.people.filter((personagemAtual) => {
      return personagemAtual.id == infoFilme.id
    })
  })

  modal.innerHTML = "";

  modal.innerHTML = `
  <img class="closeModal" src="./assets/Vector.png" alt="closeButton">
    <h1>${infoFilme.name}</h1>
      <img class="poster" src="${infoFilme.img}">
          <h3>Age:${infoFilme.age}</h3>
          <h3>Gender: ${infoFilme.gender}</h3>
          <h3> Specie: ${infoFilme.specie}</h3>
          <h3>Hair Color: ${infoFilme.hair_color}</h3>
          <h3>Eye Color: ${infoFilme.eye_color}</h3>
  `;
  const buttonCloseModal = document.querySelector(".closeModal");
  buttonCloseModal.addEventListener("click", () => {
    modalContainer.classList.remove("showModal");

  });

  modalContainer.classList.add("showModal");
}




 document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">there are ${sortArray.calc(personagens.length).toFixed(2)}% of characters  </p>`)




renderScreen(sortArray.searchCharacters(""))

sortArray.filterFilmsDropDown().forEach(function(newFilter){
  document.querySelector('#inputFilmes').insertAdjacentHTML('beforeend', `<option value="${newFilter}" class= "dropdown">${newFilter}`)
})

sortArray.filterSpeciesDropDown().forEach(function(newFilter){
  document.querySelector('#InputSpecies').insertAdjacentHTML('beforeend', `<option value="${newFilter}" class= "dropdown">${newFilter}`)
})
