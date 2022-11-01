import {
  popupImg,
  popupImgImage,
  popupImgTitle,
  openPopup,
  popupCloseBtn,
  closePopup,
} from "./constants.js";

export const createCard = (data) => {
  const cardTemplate = document.querySelector(".element").content;
  const cardElement = cardTemplate
    .querySelector(".element__card")
    .cloneNode(true);
  const elementsImg = cardElement.querySelector(".element__img");
  elementsImg.src = data.link;
  elementsImg.alt = data.name;
  elementsImg.addEventListener("click", () => {
    popupImgImage.src = elementsImg.src;
    popupImgTitle.textContent = elementsImg.alt;
    openPopup(popupImg);
    popupCloseBtn(popupImg);
  });

  const elementTitle = cardElement.querySelector(".element__caption");
  elementTitle.textContent = data.name;

  const likeBtn = cardElement.querySelector(".element__like");
  likeBtn.addEventListener("click", (ev) => {
    checkLikes(ev.target);
  });

  const delBtn = cardElement.querySelector(".element__basket");
  delBtn.addEventListener("click", () => {
    delCard(cardElement);
  });

  return cardElement;
};

export const renderCard = (data, cardsContainer) => {
  const cardElement = createCard(data);
  cardsContainer.prepend(cardElement);
};

function checkLikes(item) {
  if (item.tagName !== "BUTTON") return;
  if (item.classList.contains("element__like-active")) {
    item.classList.remove("element__like-active");
  } else {
    item.classList.add("element__like-active");
  }
}

function delCard(item) {
  item.remove();
  item = null;
}
