import {
  cards,
  initialCards,
  likes,
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
  popupCloseBtn,
  popupCardForm,
  placeName,
  imgUrl,
} from "./constants.js";
import { createCard, renderCard } from "./cards.js";

initialCards.forEach((card) => {
  cards.append(createCard(card));
});

likes.forEach((like) => {
  like.addEventListener("click", () => {
    if (ev.target.classList.contains("elements__like-active")) {
      like.classList.remove("elements__like-active");
    } else {
      like.classList.add("elements__like-active");
    }
  });
});

// попап profile
openPopupButton.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;
  popupCloseBtn(popupProfile);
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
  popupCloseBtn(popupCard);
});

popupCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = {};
  newCard.name = placeName.value;
  newCard.link = imgUrl.value;
  renderCard(newCard, cards);
  closePopup(popupCard);
});
