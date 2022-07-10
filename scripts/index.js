const profileElement = document.querySelector('.profile');
const profileEditButton = profileElement.querySelector('.profile__edit-btn');
const profileAddButton = profileElement.querySelector('.profile__add-btn');
const profileName = profileElement.querySelector('.profile__name');
const profileDescription = profileElement.querySelector('.profile__description');
const popupElement = document.querySelector('.popup');
const popupSubmitButton = popupElement.querySelector('.popup__sumbit-btn');
const popupCloseButton = popupElement.querySelector('.popup__close-btn');
const popupFormElement = popupElement.querySelector('.popup__form');
const profileNameInput = popupFormElement.querySelector('.popup_input_name');
const profileDescriptionInput = popupFormElement.querySelector('.popup_input_description');

const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
}

openPopup();
closePopup();

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

popupSubmitButton.addEventListener('click', closePopup);

popupCloseButton.onclick = function(popupCloseButton) {
    profileNameInput.value !== profileName.textContent;
    profileDescriptionInput.value !== profileName.textContent;
}

function popupFormSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;

    closePopup();
}

popupFormElement.addEventListener('submit', popupFormSubmitHandler);

popupFormSubmitHandler();