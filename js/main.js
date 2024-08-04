function getElement(select, selector = document) {
  return selector.querySelector(select);
}
let uzum = [
  {
    id: 1,
    img: "./assets/images/sams.png",
    title: "Samsung Galaxy S10+ Q8/256 Awesome Navy Smartfoni",
    score: "5.0 (22 ta sharh)",
    inMonth: "408 216 s'om/oyiga",
    oldValue: "4 900 000 s'om",
    bargainValue: "4 849 000 s'om",
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
    heartIsFavorite: false,
  },
];
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

    topImg.src = item.img;
    title.textContent = item.title;
    score.textContent = item.score;
    inMonth.textContent = item.inMonth;
    oldValue.textContent = item.oldValue;
    bargainValue.textContent = item.bargainValue;

    elWrapper.appendChild(newEl);
  });
}
createCards(uzum);
// ! is favorite ni ki
function createIsFavorite(items, where) {
  where.textContent = null;
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

    topImg.src = item.img;
    title.textContent = item.title;
    score.textContent = item.score;
    inMonth.textContent = item.inMonth;
    oldValue.textContent = item.oldValue;
    bargainValue.textContent = item.bargainValue;

    elWrapper.appendChild(newEl);
    console.log(newEl);

    where.appendChild(newEl);
  });
}

addSave.addEventListener("click", () => {
  // Get values from input fields
  const imgValue = addImg.value;
  const titleValue = addTitle.value;
  const scoreValue = addRaiting.value;
  const inMonthValue = addValInMonth.value;
  const oldValue = addOldVal.value;
  const bargainValue = addDiscauontVal.value;

  // Generate new ID
  const newID = uzum.length;

  const addNewProduct = {
    id: newID + 1,
    img: imgValue,
    title: titleValue,
    score: scoreValue,
    inMonth: inMonthValue,
    oldValue: oldValue,
    bargainValue: bargainValue,
    heartIsFavorite: false,
  };
  uzum.push(addNewProduct);

  // Add the new product to the array

  // Clear the input fields
  addImg.value = "";
  addTitle.value = "";
  addRaiting.value = "";
  addValInMonth.value = "";
  addOldVal.value = "";
  addDiscauontVal.value = "";

  // Create and display the updated cards
  createCards(uzum);
  console.log(uzum);
});

let arr = [];
elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className === "hero__one-top-img") {
    const id = Number(evt.target.dataset.id);
    arr.length = 0;

    uzum.forEach((card) => {
      if (card.id === id) {
        card.heartIsFavorite = !card.heartIsFavorite;
      }
      if (card.heartIsFavorite) {
        arr.push(card);
      }
    });
    console.log(arr);
    createCards(uzum);
    localStorage.setItem("favorites", JSON.stringify(arr));
    // createIsFavorite(arr, menu);
  }
});
const em = JSON.parse(localStorage.getItem("favorites"));
// console.log(em);
