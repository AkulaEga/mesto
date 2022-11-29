import {
  cards,
  initialCards,
  openPopupButton,
  popupProfile,
  btnPlus,
  popupCard,
  nameInput,
  jobInput,
  title,
  subTitle,
  formElement,
  popupCardForm,
  placeName,
  imgUrl,
  btnsClose,
  formData,
} from "./constants.js";
import { createCard, renderCard } from "./cards.js";
import {
  enableValidation,
  restartFromState,
  restartPopupCard,
} from "./validate.js";

initialCards.forEach((card) => {
  cards.append(createCard(card));
});

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

// попап profile
openPopupButton.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;
  restartFromState(popupProfile, formData);
});

formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subTitle.textContent = jobInput.value;

  closePopup(popupProfile);
});

// попап добавления карточки
btnPlus.addEventListener("click", () => {
  openPopup(popupCard);
  restartPopupCard(popupCard, formData);
});

popupCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = {};
  newCard.name = placeName.value;
  newCard.link = imgUrl.value;
  renderCard(newCard, cards);
  evt.target.reset();
  closePopup(popupCard);
});

btnsClose.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => {
    closePopup(popup);
    popup.querySelector(".popup__form")?.reset();
  });
});

const closeOnOverlay = (e) => {
  if (
    e.target.classList.contains("popup_opened") ||
    e.target.classList.contains("popup__close-button")
  ) {
    e.target.classList.remove("popup_opened");
  }
};

document.addEventListener("click", closeOnOverlay);

enableValidation(formData);
