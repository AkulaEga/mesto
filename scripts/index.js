const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__open-popup");
const popupCloseButton = popup.querySelector(".popup__close-button");
const subTitle = document.querySelector(".profile__subtitle");
const title = document.querySelector(".profile__title");

popupCloseButton.addEventListener("click", closePopup);
function openPopup() {
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

openPopupButton.addEventListener("click", openPopup);

let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector("#inputName");
let jobInput = formElement.querySelector("#inputAbout");

function formSubmitHandler(evt) {
  evt.preventDefault();

  title.textContent = nameInput.value;
  subTitle.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
