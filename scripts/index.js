const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__vector");

function openPopup(popup) {
  const popupCloseButton = popup.querySelector(".popup__close-button");

  popupCloseButton.addEventListener("click", clickCloseButtonPopup);
  window.addEventListener("keydown", pressKeyInPopup);
  popup.addEventListener("click", clickAreaPopup);

  popup.classList.add("popup_opened");
  document.body.classList.add("overflow-hidden");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.body.classList.remove("overflow-hidden");
}

function clickCloseButtonPopup(event) {
  closePopup(popup);
}

function pressKeyInPopup(event) {
  if (event.key === "Escape") {
    closePopup(popup);
  }
}

function clickAreaPopup(event) {
  const popupContent = popup.querySelector(".popup__content");
  const clickPopupContent = event.composedPath().includes(popupContent);

  if (clickPopupContent === false) {
    closePopup(popup);
  }
}

openPopupButton.addEventListener("click", () => {
  openPopup(popup);
});

function createCard(card) {
  const buttonLike = cardElement.querySelector(".elements__like");
  buttonLike.addEventListener("click", handleLikeClick);
}

let formElement = document.querySelector("form");
let nameInput = formElement.querySelector(".popup__input-name");
let jobInput = formElement.querySelector(".popup__input-about");
let profileName = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameInput.addEventListener("input", (evt) => {
    profileName.textContent = evt.target.value;
  });

  jobInput.addEventListener("input", (evt) => {
    profileSubtitle.textContent = evt.target.value;
  });

}

formElement.addEventListener("click", formSubmitHandler);  // было 'submit'


let likes = document.querySelectorAll('.elements__like');
likes.forEach((like) => {
    like.addEventListener('click', () => {
        if (like.classList.contains('elements__like-active')) {
            like.className = 'elements__like';
        } else like.className ='elements__like-active';
    })
})