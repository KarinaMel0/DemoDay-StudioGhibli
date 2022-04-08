import dataGhibli from "../data/ghibli/ghibli.js";



export const sortArray = {

  filterArray(inputValue) {
    let selectValueDropDown = inputValue;

    dataGhibli.films.sort((a, b) => {
      let titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase(),
        ratingA = parseInt(a.rt_score),
        ratingB = parseInt(b.rt_score),
        DataA = parseInt(a.release_date),
        DataB = parseInt(b.release_date);

      if (selectValueDropDown == "A-Z") {
        return sortArray.order(titleA, titleB);
      }
      if (selectValueDropDown == "Z-A") {
        return sortArray.orderInverse(titleA, titleB);
      }
      if (selectValueDropDown == "highestScore") {
        return sortArray.orderInverse(ratingA, ratingB);
      }
      if (selectValueDropDown == "lowestScore") {
        return sortArray.order(ratingA, ratingB);
      }
      if (selectValueDropDown == "Newest") {
        return sortArray.orderInverse(DataA, DataB);
      }
      if (selectValueDropDown == "Oldest") {
        return sortArray.order(DataA, DataB);
      }
    });

    return dataGhibli;
  },
  order(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  },
  orderInverse(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  },

  search(Data) {
    const Filtro = dataGhibli.films.filter((value) => {
      return value.title.toLowerCase().indexOf(Data.toLowerCase()) > -1;
    });

    return Filtro;
  },

  searchCharacters(Data){
    const personagens = dataGhibli.films.map((item)=>{ return item.people.map((NameCharacters) => {
      return NameCharacters
    })})

    const Filtro = personagens.flat().filter((nam) =>{
      return nam.name.toLowerCase().indexOf(Data.toLowerCase()) > -1
    })// a forma como o name e chamado com chaves faz com que eu consiga pegar apenas ele

    return Filtro
  },

 filterSpecies(valorinput){
    let filterArray = []
    let inputValue = valorinput;
    const dadosArray = dataGhibli.films.map((items) => { return items.people.map((itemAtual) => { return itemAtual})} )

    dadosArray.forEach(function (genderValueof){
      filterArray = filterArray.concat(genderValueof)
    })

    if(inputValue == "" ){
      return filterArray
    }

    const newArray = filterArray.filter((itemAtual)=>{
      return itemAtual.specie.toLowerCase() == inputValue.toLowerCase()
    })

    return newArray
  },

 filterCharactersAZ(Valorinput,Data){

  let filterArray = []
  let inputValue = Valorinput
  const dadosArray = dataGhibli.films.map((items) => { return items.people.map((itemAtual) => { return itemAtual})} )

    dadosArray.forEach(function (genderValueof){
      filterArray = filterArray.concat(genderValueof)
    })

    const newArray = Data.sort((a, b) => {
      let titleA = a.name.toLowerCase(),
        titleB = b.name.toLowerCase();


        switch(inputValue){

          case 'A-Z':
          return sortArray.order(titleA, titleB);

          case 'Z-A':
          return sortArray.orderInverse(titleA, titleB);

          }
    });
   return newArray

},

 filterSpeciesDropDown(){
  let filterArray = []
  const charactersType = dataGhibli.films.map((items) => { return items.people.map((itemAtual) => { return itemAtual.specie})} )

  charactersType.forEach(function (genderValueof){
    filterArray = filterArray.concat(genderValueof)
  })


  // eslint-disable-next-line no-undef
  const filter = [...new Set(filterArray)]

  return filter
},

 filterCreatorProducerAndDirector(TypeInfo){
  let filterArray = []
  const data = dataGhibli.films.map((items) => { return items[TypeInfo] } )

  data.forEach(function (genderValueof){
    filterArray = filterArray.concat(genderValueof)
  })


  // eslint-disable-next-line no-undef
  const filter = [...new Set(filterArray)]


  return filter
},

 toComparerProducerAndDirector(value,TypeInfo){
  let filterArray = []
  let inputValue = value;
  const dadosArray = dataGhibli.films.map((items) => { return items} )

  dadosArray.forEach(function (genderValueof){
    filterArray = filterArray.concat(genderValueof)
  })

  if(inputValue == "" ){
    return filterArray
  }

  const newArray = filterArray.filter((itemAtual)=>{
    return itemAtual[TypeInfo].toLowerCase() == inputValue.toLowerCase()
  })

  return newArray
},

 filterFilmsDropDown(){
  let filterArray = []
  const films = dataGhibli.films.map((items) => { return items.title} )

  films.forEach(function (genderValueof){
    filterArray = filterArray.concat(genderValueof)
  })


  // eslint-disable-next-line no-undef
  const filter = [...new Set(filterArray)]


  return filter
 },

 compareMovies(value){
  let filterArray = []
  let inputValue = value;
  const dadosArray = dataGhibli.films.map((items) => { return items} )

  let ArrayPadrao = []
  dadosArray.forEach(function (genderValueof){
    filterArray = filterArray.concat(genderValueof)
    ArrayPadrao = ArrayPadrao.concat(genderValueof.people)
  })
  if(inputValue == "" ){

    return ArrayPadrao
  }

  const newArray = filterArray.filter((itemAtual)=>{
    return itemAtual.title.toLowerCase() == inputValue.toLowerCase()
  })



  return newArray[0].people

},

 calc(calculoFilms){

  let calculo =  100 * calculoFilms / 171

  return calculo
}
}




