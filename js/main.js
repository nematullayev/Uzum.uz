function getElement(select, selector = document) {
  return selector.querySelector(select);
}
const uzum = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        id: 1,
        img: "./assets/images/sams.png",
        title: "Samsung Galaxy S10+ Q8/256 Awesome Navy Smartfoni",
        score: "5.0 (22 ta sharh)",
        inMonth: "408 216 s'om/oyiga",
        oldValue: "4 900 000 s'om",
        bargainValue: "4 849 000 s'om",
        moreThan: "24",
        heartIsFavorite: false,
      },
      {
        id: 2,
        img: "./assets/images/oil.png",
        title: "Kungaboqar yog'i ,tozalangan va xidsizlantirilgan",
        score: "4.9 (4092 sharsh)",
        inMonth: "1 560 s'om/oyiga",
        oldValue: "15 000 s'om",
        bargainValue: "13 000 s'om",
        moreThan: "90",
        heartIsFavorite: false,
      },
      {
        id: 3,
        img: "./assets/images/redmi.png",
        title: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,…",
        score: "5.0 (8 sharsh)",
        inMonth: "299 880 s'om/oyiga",
        oldValue: "3 010 000 s'om",
        bargainValue: "2 490  000 s'om",
        moreThan: "3",
        heartIsFavorite: false,
      },
      {
        id: 4,
        img: "./assets/images/family.png",
        title: "Kir yuvish kukuni Oila tanlovi Ayoztazeligi, avtomat, 3 kg",
        score: "4.5 (123 ta sharh)",
        inMonth: "4 290 s'om/oyiga",
        oldValue: "57 s'om",
        bargainValue: "41 s'om",
        moreThan: "456",
        heartIsFavorite: false,
      },
      {
        id: 5,
        img: "./assets/images/tv.png",
        title: "Televizor Samsung Crystal UHD 4K43, 50, 55, 65 CU7100 Smart TV",
        score: "5.0 (5 ta sharh)",
        inMonth: "587 880 s'om/oyiga",
        oldValue: "5 830 000 s'om",
        bargainValue: "4 890 000 s'om",
        moreThan: "34",
        heartIsFavorite: false,
      },
      {
        id: 6,
        img: "./assets/images/krasofka.png",
        title: "Erkaklar uchun krossovka Jomar.vitaly men 2201 black",
        score: "5.0 (20 ta sharh)",
        inMonth: "41 880 s'om/oyiga",
        oldValue: "687 000 s'om",
        bargainValue: "349 000 s'om",
        moreThan: "3240",
        heartIsFavorite: false,
      },
      {
        id: 7,
        img: "./assets/images/laptop.png",
        title: "Noutbuk HP AMD Ryzen 7-5825U,DDR4 16GB SSD 512GB",
        score: "5.0 (1 ta sharh)",
        inMonth: "864 000 s'om/oyiga",
        oldValue: "8 200 000 s'om",
        bargainValue: "7 200 000 s'om",
        moreThan: "324",
        heartIsFavorite: false,
      },
      {
        id: 8,
        img: "./assets/images/himoya.png",
        title: "Sport va raqs uchun tizzalar,voleybol basketboli uchun .",
        score: "4.8 (21 ta sharh)",
        inMonth: "14 160 s'om/oyiga",
        oldValue: "200 000 s'om",
        bargainValue: "118 000 s'om",
        moreThan: "324",
        heartIsFavorite: false,
      },
    ];

// localStorage.setItem("products", JSON.stringify(uzum));

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

elIsLogOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  elIsLogin.style.display = "none";
  elLogin.style.display = "block";
});

let products = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    products = json;
    createCards(products);
  });

fetch("https://fakestoreapi.com/products/categories")
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
createCards(uzum);

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
