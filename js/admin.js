function getElement(select, selector = document) {
  return selector.querySelector(select);
}

const addImg = getElement("#inp1");
const addTitle = getElement("#inp2");
const addRaiting = getElement("#inp3");
const addValInMonth = getElement("#inp4");
const addOldVal = getElement("#inp5");
const addDiscauontVal = getElement("#inp6");
const addSave = document.querySelector("#save");
const addSaveChanges = document.querySelector("#save-changes");

const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("http://127.0.0.1:5500/Uzum.uz/index.html");
}

const elWrapper = getElement(".hero");
const template = getElement("template");

let products = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    products = json;
    createCards(products);
  });
addSave.addEventListener("click", () => {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: addTitle,
      price: addDiscauontVal,
      description: addValInMonth,
      image: addImg,
      category: addRaiting,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});

function createCards(items) {
  elWrapper.textContent = null;
  let createCards = items.map((item) => {
    const newEl = template.content.cloneNode(true);

    const topImg = getElement(".hero__one-center-img", newEl);
    const title = getElement(".hero__one-center-title", newEl);
    const score = getElement(".hero__one-second-center1-p", newEl);
    const inMonth = getElement(".hero__one-second-center-p", newEl);
    const oldValue = getElement(".hero__one-bootom-sum", newEl);
    const bargainValue = getElement(".hero__one-bootom-title", newEl);
    const elHeart = getElement("#heart", newEl);

    elHeart.dataset.id = item.id;
    if (item.heartIsFavorite) {
      elHeart.src = "./assets/images/fav.png";
    }

    topImg.src = item.image;
    topImg.dataset.id = item.id;
    title.textContent = item.title;
    score.textContent = item.rating;
    inMonth.textContent = item.category;
    // oldValue.textContent = item.oldValue;
    bargainValue.textContent = item.price;

    elWrapper.appendChild(newEl);
  });
}
createCards(products);

let arr = [];
elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className.includes("hero__one-center-img")) {
    const id = evt.target.dataset.id;
    localStorage.setItem("id", id);

    window.location.replace(
      `http://127.0.0.1:5500/Uzum.uz/product.html?id=${id}`
    );
  }
});
