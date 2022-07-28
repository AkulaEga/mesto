const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__vector");
const popupCloseButton = popup.querySelector(".popup__close-button");
const subTitle = document.querySelector('.profile__subtitle')
const title = document.querySelector('.profile__title')

popupCloseButton.addEventListener("click", () => {
  closePopup(); 
});
function openPopup() { 

  document.querySelector('#inputName').value = title.textContent;
  document.querySelector('#inputAbout').value = subTitle.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
 
}

function clickAreaPopup(event) {
  const popupContent = popup.querySelector(".popup__content");
  const clickPopupContent = event.composedPath().includes(popupContent);

  if (clickPopupContent === false) {
    closePopup();
  }
}

openPopupButton.addEventListener("click", () => {
  openPopup();
});

let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector("#inputName");
let jobInput = formElement.querySelector("#inputAbout");
let profileName = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

function formSubmitHandler(evt) {
  evt.preventDefault();

  title.textContent = nameInput.value;
  subTitle.textContent = jobInput.value; 

  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);  


let likes = document.querySelectorAll('.elements__like');
likes.forEach((like) => {
    like.addEventListener('click', () => {
        if (like.classList.contains('elements__like-active')) {
            like.className = 'elements__like';
        } else like.className ='elements__like-active';
    })
})