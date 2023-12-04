async function loadItems() {
  const response = await fetch("./data/data.json");
  const data = await response.json();
  const result = data.items;
  return result;
}

// function displayItems(items) {
//   const container = document.querySelector(".items");
//   console.log(items);
//   container.innerHTML = items.map(
//     (e) => "<li class='item'>" + e.type + "</li>"
//   );
// }
// container.innerHTML = "<li class='item'>예시 : " + items[0].type + "</li>";
// container.innerHTML += "<li class='item'>예시 : " + items[1].type + "</li>";
// container.innerHTML += "<li class='item'>예시 : " + items[2].type + "</li>";
// container.innerHTML = items.map((item) => {});
// container.innerHTML = items.map((item) => {
// console.log(item.type);
// });
// }

/*
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items
    .map((item) => "<li class='item'>" + item.type + "</li>")
    .join("");
  // container.innerHTML = items
  //   .map((item) =>
  //     // createHTMLString(item));
  //     createHTMLString(item)
  //   )
  //   .join("");
}
*/

// function displayItems(items) {
//   const container = document.querySelector(".items");
//   container.innerHTML = items
//     .map(
//       (item) =>
//         `<li class="item">
//       <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
//       <span class="item__description">${item.gender}, ${item.size}</span>
//     </li>`
//     )
//     .join("");
// }

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

// // Create HTML list item from the given data item
// function createHTMLString(item) {
//   return `
//     <li class="item">
//         <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
//         <span class="item__description">${item.gender}, ${item.size} </span>
//     </li>
//     `;
// }

// main
// loadItems()
//   .then((items) => {
//     displayItems(items);
//     // setEventListeners(items);
//   })
//   .catch(console.log);

// const items = loadItems();
// console.log(items);

loadItems().then((items) => displayItems(items));

// displayItems(items);
