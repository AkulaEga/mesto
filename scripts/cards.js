import {
  popupImg,
  popupImgImage,
  popupImgTitle,
  openPopup,
  cardTemplate,
} from "./constants.js";

export const createCard = (data) => {
  const cardElement = cardTemplate
    .querySelector(".element__card")
    .cloneNode(true);
  const elementsImg = cardElement.querySelector(".element__img");
  elementsImg.src = data.link;
  elementsImg.alt = data.name;
  elementsImg.addEventListener("click", () => {
    popupImgImage.src = elementsImg.src;
    popupImgImage.alt = elementsImg.alt;
    popupImgTitle.textContent = elementsImg.alt;
    openPopup(popupImg);
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
  item.classList.toggle("element__like-active")
}

function delCard(item) {
  item.remove();
  item = null;
}
