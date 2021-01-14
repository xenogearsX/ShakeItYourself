const cards = document.querySelector(".cards");

const cocktailsToAdopt = [
  {
    name: "Gin Fizz",
    picture: "Image/ginfizz.jpg",
    url: "html/ginFizz.html",
    ingredients: "gin citron sucre de canne eau gazeuse"
  },
  {
    name: "Aperol Spritz",
    picture: "Image/aperolSpritz.jpg",
    url: "html/aperolSpritz.html",
    ingredients: "aperol prosecco soda"
  },
  {
    name: "Kir Royal",
    picture: "Image/kirRoyal.jpg",
    url: "html/kirRoyal.html",
    ingredients: "crème de cassis champagne"
  },
  {
    name: "Manhattan",
    picture: "Image/manhattan.jpg",
    url: "html/manhattan.html",
    ingredients: "whisky martini rouge angostrura bitter"
  },
  {
    name: "Gimlet",
    picture: "Image/gimlet.jpg",
    url: "html/gimlet.html",
    ingredients: "gin citron jaune sirop sucre"
  },
  {
    name: "Piña colada",
    picture: "Image/pinaColada.jpg",
    url: "html/pinaColada.html",
    ingredients: "rhum ananas crème coco"
  },
  {
    name: "Hot Toddie",
    picture: "Image/hotToddie.jpg",
    url: "html/hotToddie.html",
    ingredients: "whisky citron jaune cannelle eau chaude noix de muscade miel"
  },
  {
    name: "Vodka Sour",
    picture: "Image/vodkaSour.jpg",
    url: "html/vodkaSour.html",
    ingredients: "vodka citron jaune sirop sucre angostrura bitter œuf"
  },
  {
    name: "God Father",
    picture: "Image/godFather.jpg",
    url: "html/godFather.html",
    ingredients: "whisky amaretto"
  },
  {
    name: "Negroni",
    picture: "Image/negroni.jpg",
    url: "html/negroni.html",
    ingredients: "gin campari martini rouge"
  },
  {
    name: "Old Fashioned",
    picture: "Image/oldFashioned.jpg",
    url: "html/oldFashioned.html",
    ingredients: "whisky angostrura bitter sirop sucre"
  },
  {
    name: "Margarita",
    picture: "Image/margarita.jpg",
    url: "html/margarita.html",
    ingredients: "tequila citron cointreau sirop sucre"
  },
  {
    name: "Mai Tai",
    picture: "Image/maiTai.jpg",
    url: "html/maiTai.html",
    ingredients: "rhum orgeat citron falernum angostrura bitter"
  },
  {
    name: "French Martini",
    picture: "Image/frenchmartini.jpg",
    url: "html/frenchMartini.html",
    ingredients: "vodka chambord ananas"
  },
  {
    name: "Dry Martini",
    picture: "Image/drymartini.jpg",
    url: "html/dryMartini.html",
    ingredients: "vodka martini extra dry noilly prat"
  },
  {
    name: "Naked And Famous",
    picture: "Image/nakednfamous.jpg",
    url: "html/nakedNFamous.html",
    ingredients: "mescal chartreuse jaune aperol citron"
  },
  {
    name: "Toreador",
    picture: "Image/toreador.jpg",
    url: "html/toreador.html",
    ingredients: "tequila liqueur abricot peychaud's bitter"
  },
  {
    name: "Paloma",
    picture: "Image/paloma.jpg",
    url: "html/paloma.html",
    ingredients: "tequila pamplemousse sirop sucre eau gazeuse"
  },
  {
    name: "Between The Sheets",
    picture: "Image/betweenTheSheets.jpg",
    url: "html/betweenTheSheets.html",
    ingredients: "cognac citron benedectine"
  },
  {
    name: "Jack Rose",
    picture: "Image/jackRose.jpg",
    url: "html/jackRose.html",
    ingredients: "calvados citron grenadine œuf"
  },
  {
    name: "Cosmopolitan",
    picture: "Image/cosmopolitan.jpg",
    url: "html/cosmopolitan.html",
    ingredients: "vodka triple sec cranberrie citron vert"
  }
];
function createCard(title, image, adress) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("onclick", `window.location.href='${adress}'`);
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${image})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
    cardButton.innerHTML = "Shake It Yourself";
  cardBody.appendChild(cardButton);
}

const search = document.querySelector("#recherche");

search.addEventListener("click", function () {
  const search1 = document.querySelector('#ingredient1').value;
  const search2 = document.querySelector('#ingredient2').value;
  cards.innerHTML = '';
  document.querySelector('#empty').setAttribute('style', "display: none");
  document.querySelector('#empty1').setAttribute('style', "display: none");
  document.querySelector('#empty2').setAttribute('style', "display: none");
  if(search1 === "1" && search2 === "2"){
    document.querySelector('#empty').removeAttribute('style');
  } else if(search1 === "1") {
    for (let i = 0; i < cocktailsToAdopt.length; i++) {
    if (cocktailsToAdopt[i].ingredients.includes(search2)) {
      createCard(cocktailsToAdopt[i].name, cocktailsToAdopt[i].picture, cocktailsToAdopt[i].url);
    }}} else if(search1 === search2) {
      for (let i = 0; i < cocktailsToAdopt.length; i++) {
      if (cocktailsToAdopt[i].ingredients.includes(search2)) {
        createCard(cocktailsToAdopt[i].name, cocktailsToAdopt[i].picture, cocktailsToAdopt[i].url);
      }}document.querySelector('#empty2').removeAttribute('style');} else if(search2 === "2") {
      for (let i = 0; i < cocktailsToAdopt.length; i++) {
      if (cocktailsToAdopt[i].ingredients.includes(search1)) {
        createCard(cocktailsToAdopt[i].name, cocktailsToAdopt[i].picture, cocktailsToAdopt[i].url);
      }}} else {
          for (let i = 0; i < cocktailsToAdopt.length; i++) {
        if (cocktailsToAdopt[i].ingredients.includes(search1) && cocktailsToAdopt[i].ingredients.includes(search2)) {
          createCard(cocktailsToAdopt[i].name, cocktailsToAdopt[i].picture, cocktailsToAdopt[i].url);
      }}if(cards.innerHTML == ''){document.querySelector('#empty1').removeAttribute('style');}
      }
});
