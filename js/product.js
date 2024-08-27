const BASIC_URL = "https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api";

const oneTem = document.querySelector("#one-product");
const oneTopImg = document.querySelector("#last-img");
const oneRaiting = document.querySelector(
  "#one-product__right-top-left-raiting"
);
const oneOrder = document.querySelector("#more-than");
const like = document.querySelector("#like");
const oneTitle = document.querySelector(".one-product__right-hero-title");
const oneRealPrice = document.querySelector(
  ".one-product__right-last-one-senter-real-price"
);
const oneDiscountPrice = document.querySelector(
  ".one-product__right-last-one-senter-discount-price"
);
const elDescription = document.querySelector(".description");

// const id = localStorage.getItem("id");

let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // is the string "Jonathan"

fetch(BASIC_URL + `/products` + `${id}`)
  .then((res) => res.json())
  .then((json) => {
    oneTopImg.src = json.image;
    oneRaiting.textContent = json;
    oneOrder.textContent = json.nm;
    oneTitle.textContent = json.title;
    oneDiscountPrice.textContent = json.price;
    oneRealPrice.textContent = json.oldValue;
    elDescription.textContent = json.description;
    console.log(json);
  });
// function createCards(items) {
//   elWrapper.textContent = null;
//   let createCards = items.map((item) => {
//     const newEl = template.content.cloneNode(true);

//     const topImg = getElement(".hero__one-center-img", newEl);
//     const title = getElement(".hero__one-center-title", newEl);
//     const score = getElement(".hero__one-second-center1-p", newEl);
//     const inMonth = getElement(".hero__one-second-center-p", newEl);
//     const oldValue = getElement(".hero__one-bootom-sum", newEl);
//     const bargainValue = getElement(".hero__one-bootom-title", newEl);
//     const how = getElement(".how", newEl);
//     const elHeart = getElement("#heart", newEl);

//     elHeart.dataset.id = item.id;
//     if (item.heartIsFavorite) {
//       elHeart.src = "./assets/images/fav.png";
//     }

//     topImg.src = item.image;
//     topImg.dataset.id = item.id;
//     title.textContent = item.title;
//     how.textContent = item.comments;
//     score.textContent = item.raiting;
//     inMonth.textContent = item.category;
//     oldValue.textContent = item.price / 2 + `   so'm`;
//     bargainValue.textContent = item.price + `  so'm`;

//     elWrapper.appendChild(newEl);
//   });
// }
