let bundeslaender = [];

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

    content.innerHTML += /*html*/ `
    <a class= "land-box" href="${land.url} " target="_blank"> 
      <div>${land.name}</div>
      <span>${population} Millionen</span>
    </a>
    `;
  }
}
