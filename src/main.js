async function loadItems() {
  const response = await fetch("./data/data.json");
  const data = await response.json();
  const result = data.items;
  return result;
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `<li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`;
}

function setEventListeners(items) {
  //   console.log(items);
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => {
    displayItems(items);
  });
  buttons.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.dataset.key);
    const key = e.target.dataset.key;
    const value = e.target.dataset.value;
    if (key == null || value == null) {
      return;
    }
    // console.log(items);
    // console.log(key);
    // console.log(value);
    // console.log(items[0][key]);
    // console.log(items.filter((item) => item[key] === value));
    displayItems(items.filter((item) => item[key] === value));
  });
}

// loadItems().then((items) => displayItems(items));
loadItems().then((items) => {
  displayItems(items);
  setEventListeners(items);
});
