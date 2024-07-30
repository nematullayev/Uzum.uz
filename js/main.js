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
    oldValue: "4 900 000",
    bargainValue: "4 849 000 s'om",
  },
  {
    id: 2,
    img: "./assets/images/sams.png",
    title: "Samsung Galaxy S10+ Q8/256 Awesome Navy Smartfoni",
    score: "5.0 (22 ta sharh)",
    inMonth: "408 216 s'om/oyiga",
    oldValue: "4 900 000",
    bargainValue: "4 849 000 s'om",
  },
  {
    id: 3,
    img: "./assets/images/sams.png",
    title: "Samsung Galaxy S10+ Q8/256 Awesome Navy Smartfoni",
    score: "5.0 (22 ta sharh)",
    inMonth: "408 216 s'om/oyiga",
    oldValue: "4 900 000",
    bargainValue: "4 849 000 s'om",
  },
  {
    id: 4,
    img: "./assets/images/sams.png",
    title: "Samsung Galaxy S10+ Q8/256 Awesome Navy Smartfoni",
    score: "5.0 (22 ta sharh)",
    inMonth: "408 216 s'om/oyiga",
    oldValue: "4 900 000",
    bargainValue: "4 849 000 s'om",
  },
];
const elWrapper = getElement(".hero");

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

    topImg.src = item.img;
    title.textContent = item.title;
    score.textContent = item.score;
    inMonth.textContent = item.inMonth;
    oldValue.textContent = item.oldValue;
    bargainValue.textContent = item.bargainValue;

    elWrapper.appendChild(newEl);
    console.log(newEl);
  });
}
createCards();
