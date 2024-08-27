function getElement(select, selector = document) {
  return selector.querySelector(select);
}
const BASIC_URL = "https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/";
const addImg = getElement("#inp1");
const addTitle = getElement("#inp2");
const addRaiting = getElement("#inp3");
const addValInMonth = getElement("#inp4");
const addOldVal = getElement("#inp5");
const addDiscauontVal = getElement("#inp6");
const addSave = document.querySelector("#save");
const addSaveChanges = document.querySelector("#save-changes");

const token = localStorage.getItem("token");
const done = getElement("#done");

if (!token) {
  window.location.replace("http://127.0.0.1:5500/Uzum.uz/index.html");
}

const elWrapper = getElement(".hero");
const template = getElement("template");

let products = [];
function getData() {
  fetch(BASIC_URL + `/products`)
    .then((res) => res.json())
    .then((json) => {
      products = json;
      createCards(products);
      done.style.display = "none";
    });
}
getData();
addSave.addEventListener("click", () => {
  fetch(BASIC_URL + `/products`, {
    method: "POST",
    body: JSON.stringify({
      title: addTitle.value,
      price: addDiscauontVal.value,
      description: addValInMonth.value,
      image: addImg.value,
      category: addRaiting.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      createCards(products);
    });
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
    const how = getElement(".how", newEl);
    const elHeart = getElement("#heart", newEl);
    const elEditBtn = getElement("#edit-btn", newEl);
    const elDeleateBtn = getElement("#deleate-btn", newEl);

    elHeart.dataset.id = item.id;
    if (item.heartIsFavorite) {
      elHeart.src = "./assets/images/fav.png";
    }

    elEditBtn.dataset.id = item.id;
    elDeleateBtn.dataset.id = item.id;
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
  const elForm = document.querySelector("#form");
  if (evt.target.className.includes("btn btn-info")) {
    const id = evt.target.dataset.id;
    fetch(BASIC_URL + `/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        elForm.title.value = json.title;
        elForm.img.value = json.image;
        elForm.raiting.value = json.raiting;
        elForm.oldValue.value = json.price / 2;
        elForm.discountValue.value = json.price;
      });
    const elSaveAll = document.querySelector("#saveAll");
    elSaveAll.addEventListener("click", () => {
      fetch(BASIC_URL + `/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: elForm.title.value,
          image: elForm.img.value,
          raiting: elForm.raiting.value,
          oldValue: elForm.oldValue.value,
          price: elForm.discountValue.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          getData();
          console.log(json);
        });
    });
  }
  if (evt.target.className.includes("btn btn-danger")) {
    const id = evt.target.dataset.id;
    fetch(BASIC_URL + `/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("ishladi");
        getData();
      });
  }
});
