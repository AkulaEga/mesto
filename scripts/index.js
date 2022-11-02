import {
  cards,
  initialCards,
  openPopup,
  openPopupButton,
  popupProfile,
  btnPlus,
  popupCard,
  nameInput,
  jobInput,
  title,
  subTitle,
  formElement,
  closePopup,
  popupCardForm,
  placeName,
  imgUrl,
  closeBtns,
} from "./constants.js";
import { createCard, renderCard } from "./cards.js";

initialCards.forEach((card) => {
  cards.append(createCard(card));
});

// попап profile
openPopupButton.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;
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

closeBtns.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => {
    closePopup(popup);
  });
});
