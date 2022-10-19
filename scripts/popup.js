
const btnPlus = document.querySelector(".profile__add-card-button");

const popupCard = document.querySelector(".popup-card__wrapper__hidden");
const closeCard = document.querySelector(".close-card");
const placeName = document.getElementById("placeName");
const imgUrl = document.getElementById("imgUrl");
const btnSubmit = document.querySelector("#btnSubmit");
const popupCardForm = document.getElementById("popup-card-form");



btnPlus.addEventListener("click", (e) => {
 
  e.preventDefault();
  if (e.target.tagName !== "BUTTON") return;
  popupCard.className = "popup-card__wrapper";
});

closeCard.addEventListener("click", () => {
  popupCard.className = "popup-card__wrapper__hidden";
});



let newCard = {};

popupCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newCard.name = placeName.value;
  newCard.link = `${imgUrl.value}`;
  cards.insertAdjacentHTML("afterbegin", renderCard(newCard));
});



