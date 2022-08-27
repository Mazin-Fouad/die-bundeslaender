let bundeslaender = [];
let letters = [];

async function init() {
  let response = await fetch('./bundesland.json');
  bundeslaender = await response.json();
  //console.log(bundesland);
  render();
}

function render(filter) {
  let content = document.getElementById('content');
  content.innerHTML = '';
  for (let i = 0; i < bundeslaender.length; i++) {
    const land = bundeslaender[i];
    const population = (land.population + '').replace('.', ','); //string connected, replace methode works only with string
    const firstLetter = land['name'].charAt(0);
    if (!filter || filter == firstLetter) {
      content.innerHTML += createBoxLink(land, population);
    }
    //console.log(firstLetter);
    if (!letters.includes(firstLetter)) {
      letters.push(firstLetter);
    }
  }
  renderLetters();
}

function renderLetters() {
  let lettersContainer = document.getElementById('letters_container');
  lettersContainer.innerHTML = '';
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    lettersContainer.innerHTML += /*html*/ `
    <div onclick="setFilter('${letter}')" class="letter-box">${letter}</div>
    `;
  }
}

function setFilter(letter) {
  render(letter);
}
