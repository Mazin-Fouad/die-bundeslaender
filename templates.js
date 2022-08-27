function createBoxLink(land, population) {
    return /*html*/ `
    <a class= "land-box" href="${land.url} " target="_blank"> 
      <div>${land.name}</div>
      <span>${population} Millionen</span>
    </a>
    `;
  }

