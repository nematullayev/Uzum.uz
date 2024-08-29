function getElement(select, selector = document) {
  return selector.querySelector(select);
}

// localStorage.setItem("products", JSON.stringify(uzum));

const BASIC_URL = "https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api";

const elWrapper = getElement(".hero");
const template = getElement("template");
const elSearchInput = getElement(".header__top-inp");
const elSearchMobileInput = getElement(".header__top-inp2");
const elMobileBtn = getElement("#header__mobile-btn");

// add
const addImg = getElement("#inp1");
const addTitle = getElement("#inp2");
const addRaiting = getElement("#inp3");
const addValInMonth = getElement("#inp4");
const addOldVal = getElement("#inp5");
const addDiscauontVal = getElement("#inp6");
const addSave = document.querySelector("#save");
const addSaveChanges = document.querySelector("#save-changes");
const catigories = document.querySelector("#catigories");
const all = document.querySelector(".all");
const elLogin = getElement("#login");
const elIsLogin = getElement("#isLogin");
const elIsLogOut = getElement("#logout");
const done = getElement("#done");

elIsLogOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  elIsLogin.style.display = "none";
  elLogin.style.display = "block";
});

let products = [];

fetch(BASIC_URL + `/products`)
  .then((res) => res.json())
  .then((json) => {
    products = json;
    createCards(products);
    done.style.display = "none";
  });

fetch("https://fakestoreapi.com/products/categories/")
  .then((res) => res.json())
  .then((json) => {
    catigories.textContent = "";
    json.forEach((catigory) => {
      const newElement = document.createElement("li");
      newElement.className = "header__bottom-item";
      newElement.textContent = catigory;
      newElement.style.cursor = "pointer";

      catigories.appendChild(newElement);
    });
  });

catigories.addEventListener("click", (evt) => {
  fetch(`https://fakestoreapi.com/products/category/${evt.target.textContent}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      createCards(json);
    });
});

all.addEventListener("click", () => {
  createCards(products);
});

elSearchInput.addEventListener("change", () => {
  if (elSearchInput.value.length > 0) {
    const filteredArray = uzum.filter((item) =>
      item.title.toLowerCase().includes(elSearchInput.value.toLowerCase())
    );

    createCards(filteredArray);
  } else {
    createCards(uzum);
  }
});
// todo mobile inp
elMobileBtn.addEventListener("click", () => {
  if (elSearchMobileInput.value.length > 0) {
    const filteredArray = uzum.filter((item) =>
      item.title.toLowerCase().includes(elSearchMobileInput.value.toLowerCase())
    );

    createCards(filteredArray);
  } else {
    createCards(uzum);
  }
});

const elUsername = getElement("#username");
const elPassword = getElement("#password");
const elSave = getElement("#save");

elSave.addEventListener("click", () => {
  const obj = {
    username: elUsername.value,
    password: elPassword.value,
  };
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Invalid login");
      }
      return res.json();
    })
    .then((json) => {
      console.log(json);

      localStorage.setItem("token", json.token);
      window.location.replace(`http://127.0.0.1:5500/Uzum.uz/admin.html`);
    })
    .catch((err) => {
      alert(err);
    });
});
const token = localStorage.getItem("token");

if (token) {
  elIsLogin.style.display = "block";
  elLogin.style.display = "none";
}

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
    const how = getElement(".how", newEl);
    const elHeart = getElement("#heart", newEl);

    elHeart.dataset.id = item.id;
    if (item.heartIsFavorite) {
      elHeart.src = "./assets/images/fav.png";
    }

    topImg.src = item.image;
    topImg.dataset.id = item.id;
    title.textContent = item.title;
    how.textContent = item.comments;
    score.textContent = item.raiting;
    inMonth.textContent = item.category;
    oldValue.textContent = item.price / 2 + `   so'm`;
    bargainValue.textContent = item.price + `  so'm`;

    elWrapper.appendChild(newEl);
  });
}

let arr = [];
elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className.includes("hero__one-center-img")) {
    const id = evt.target.dataset.id;

    window.location.replace(`./product.html?id=${id}`);
  }
});
