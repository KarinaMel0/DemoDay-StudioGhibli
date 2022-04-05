import { sortArray } from "../src/js/data.js";



describe("filter Species DropDown", () => {

  it("O filterSpeciesDropDown precisa ser uma funcao", () => {
    expect(typeof sortArray.filterSpeciesDropDown).toBe("function");
  });

  it("O retorno precisa ser `Wolf`", () => {
    expect(sortArray.filterSpeciesDropDown()).toContain("Wolf");
  });

  // it("O retorno precisa ser `My Neighbor Totoro`", () => {
  //   expect(sortArray.search("my n")[0].title).toBe("My Neighbor Totoro");
  // });
});

describe("Teste do Search", () => {
  it("O filterArray precisa ser uma funcao", () => {
    expect(typeof sortArray.filterArray).toBe("function");
  });

  it("O retorno precisa ser `Castle in the Sky`", () => {
    expect(sortArray.search("Castle in")[0].title).toBe("Castle in the Sky");
  });

  it("O retorno precisa ser `My Neighbor Totoro`", () => {
    expect(sortArray.search("my n")[0].title).toBe("My Neighbor Totoro");
  });
});

describe("search Characters", () => {
  it("O searchCharacters precisa ser uma funcao", () => {
    expect(typeof sortArray.searchCharacters).toBe("function");
  });

  it("O retorno precisa ser `Pazu`", () => {
    expect(sortArray.searchCharacters("P")[0].name).toBe("Pazu");
  });

  it("O retorno precisa ser `Kazuhiko`", () => {
    expect(sortArray.searchCharacters("z")[13].name).toBe("Kazuhiko");
  });
});

describe("filter Species", () => {

  it("O retorno precisa ser `newArray`", () => {
    expect(typeof sortArray.filterSpecies).toBe("function");
  });

  it("O retorno precisa ser `Catbus`", () => {
    expect(sortArray.filterSpecies('Cat')[0].name).toBe("Catbus");
  });

  it("O retorno precisa ser `Zeniba`", () => {
    expect(sortArray.filterSpecies('Witch')[2].name).toBe("Zeniba");
  });


});

describe("Calc", () => {

  it("O retorno precisa ser `1.75`", () => {
    expect(sortArray.calc(sortArray.filterSpecies("Witch").length).toFixed(2)).toBe("1.75");
  });

  it("O retorno precisa ser ` 6.43`", () => {
    expect(sortArray.calc(sortArray.compareMovies("Only Yesterday").length).toFixed(2)).toBe("6.43");
  });

  it("O retorno precisa ser `9.94`", () => {
    expect(sortArray.calc(sortArray.searchCharacters("p").length).toFixed(2)).toBe("9.94");
  });

});

describe("filter Characters AZ", () => {

  it("O retorno precisa ser `newArray`", () => {
    expect(typeof sortArray.filterCharactersAZ).toBe("function");
  });

  it("O retorno precisa ser `Aiko`", () => {
    expect(sortArray.filterCharactersAZ('A-Z', sortArray.filterSpecies(""))[0].name).toBe("Aiko");
  });

  it("O retorno precisa ser `Yubaba`", () => {
    expect(sortArray.filterCharactersAZ('Z-A', sortArray.filterSpecies("Witch"))[1].name).toBe("Yubaba");
  });

});

describe("to Comparer Producer And Director", () => {

  it("O retorno precisa ser `newArray`", () => {
    expect(typeof sortArray.toComparerProducerAndDirector).toBe("function");
  });

  it("O retorno precisa ser `Castle in the Sky`", () => {
    expect(sortArray.toComparerProducerAndDirector("Isao Takahata", 'producer')[0].title).toBe("Castle in the Sky");
  });

  it("O retorno precisa ser `The Tale of the Princess Kaguya`", () => {
    expect(sortArray.toComparerProducerAndDirector("Isao Takahata", 'director')[4].title).toBe("The Tale of the Princess Kaguya");
  });

  it("O retorno precisa ser `Only Yesterday`", () => {
    expect(sortArray.toComparerProducerAndDirector("", 'director')[4].title).toBe("Only Yesterday");
  });

});

describe("filterCreatorProducerAndDirector", () => {

  it("O retorno precisa ser `newArray`", () => {
    expect(typeof sortArray.filterCreatorProducerAndDirector).toBe("function");
  });

  it("O retorno precisa ser `Hayao Miyazaki`", () => {
    expect(sortArray.filterCreatorProducerAndDirector('director')).toContain("Hayao Miyazaki");
  });
  it("O retorno precisa ser `Isao Takahata`", () => {
    expect(sortArray.filterCreatorProducerAndDirector('producer')).toContain("Isao Takahata");
  });

});

describe("filter FilmsDropDown", () => {

  it("O retorno precisa ser `newArray`", () => {
    expect(typeof sortArray.filterFilmsDropDown).toBe("function");
  });

  it("O retorno precisa ser `My Neighbor Totoro`", () => {
    expect(sortArray.filterFilmsDropDown()).toContain("My Neighbor Totoro");
  });

});

describe("compare Movies", () => {

  it("O retorno precisa ser `newArray`", () => {
    expect(typeof sortArray.compareMovies).toBe("function");
  });

  it("O retorno precisa ser `Pazu`", () => {
    expect(sortArray.compareMovies("Castle in the Sky")[0].name).toBe("Pazu");
  });

  it("O retorno precisa ser `Pazu`", () => {
    expect(sortArray.compareMovies("")[0].name).toBe("Pazu");
  });

});

describe("Movies filter Array", () => {
  it("O filterArray precisa ser uma funcao", () => {
    expect(typeof sortArray.filterArray).toBe("function");
  });


  // toBe

  it("O retorno precisa ser `Castle in the Sky`", () => {
    expect(sortArray.filterArray("A-Z").films[0].title).toBe("Castle in the Sky");
  });

  it("O retorno precisa ser `From Up on Poppy Hill`", () => {
    expect(sortArray.filterArray("Z-A").films[0].title).toBe("Whisper of the Heart");
  });

  it("O retorno tem que ser `The Tale of the Princess Kaguya`", () => {
    expect(sortArray.filterArray("highestScore").films[0].title).toBe("The Tale of the Princess Kaguya");
  });

  it("O retorno tem que ser `Tales from Earthsea`", () => {
    expect(sortArray.filterArray("lowestScore").films[0].title).toBe("Tales from Earthsea");
  });

  it("O retorno tem que ser `When Marnie Was There`", () => {
    expect(sortArray.filterArray("Newest").films[0].title).toBe("When Marnie Was There");
  });


  it("O retorno tem que ser `Kiki's Delivery Service`", () => {
    expect(sortArray.filterArray("Oldest").films[3].title).toBe("Kiki's Delivery Service");
  });

  // Not toBe

  it("O retorno nao pode ser `Castle in the Sky`", () => {
    expect(sortArray.filterArray("Oldest").films[1].title).not.toBe("Castle in the Sky");
  });

  it("O retorno nao pode ser `From Up on Poppy Hill`", () => {
    expect(sortArray.filterArray("Z-A").films[0].title).not.toBe("Castle in the Sky");
  });

});
