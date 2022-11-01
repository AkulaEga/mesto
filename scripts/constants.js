export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const cards = document.querySelector(".elements");
export const subTitle = document.querySelector(".profile__subtitle");
export const title = document.querySelector(".profile__title");
export const openPopupButton = document.querySelector(".profile__open-popup");
export const btnPlus = document.querySelector(".profile__add-card-button");
export const nameInput = formElement.querySelector("#inputName");
export const jobInput = formElement.querySelector("#inputAbout");

export const popup = document.querySelector(".popup");
export const popupCard = document.querySelector(".popup-card");
export const popupCardForm = document.getElementById("popup-card-form");
export const popupProfile = document.querySelector(".popup-profile");
export const formElement = document.querySelector(".popup__form");

export const popupImg = document.querySelector(".popup-img");
export const popupImgImage = document.querySelector(".popup-img__pictures");
export const placeName = document.getElementById("placeName");
export const imgUrl = document.getElementById("imgUrl");
export const popupImgTitle = document.querySelector(".popup-img__title");

export const likes = document.querySelectorAll(".elements__like");

export const popupCloseBtn = (popup) => {
  const btnClose = popup.querySelector(".popup__close-button");
  btnClose.addEventListener("click", () => {
    closePopup(popup);
  });
};

const closeEscButton = (ev) => {
  if (ev.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscButton);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscButton);
}
