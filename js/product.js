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

fetch("https://fakestoreapi.com/products/" + id)
  .then((res) => res.json())
  .then((json) => {
    oneTopImg.src = json.image;
    oneRaiting.textContent = json.rating.rate;
    oneOrder.textContent = json.nm;
    oneTitle.textContent = json.title;
    oneDiscountPrice.textContent = json.price;
    oneRealPrice.textContent = json.oldValue;
    elDescription.textContent = json.description;
    console.log(json);
  });
