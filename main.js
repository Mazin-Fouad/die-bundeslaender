let bundeslaender = [];
let letters = [];

async function init() {
  let response = await fetch('./bundesland.json');
  bundeslaender = await response.json();
  //console.log(bundesland);
  render();
}

function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  for (let i = 0; i < bundeslaender.length; i++) {
    const land = bundeslaender[i];
    const population = (land.population + '').replace('.', ','); //string connected, replace methode works only with string
    content.innerHTML += createBoxLink(land, population);
    const firstLetter = land['name'].charAt(0);
    console.log(firstLetter);
    if (!letters.includes(firstLetter)) {
      letters.push(firstLetter);
    }
  }

  renderLetters();
}

  function renderLetters(){
    let lettersContainer = document.getElementById('letters_container');
    lettersContainer.innerHTML = '';
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      lettersContainer.innerHTML += /*html*/ `
      <div class="letter-box">${letter}</div>
      `;
    }
  }


function createBoxLink(land, population) {
  return /*html*/ `
  <a class= "land-box" href="${land.url} " target="_blank"> 
    <div>${land.name}</div>
    <span>${population} Millionen</span>
  </a>
  `;
}
