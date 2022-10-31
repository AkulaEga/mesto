const btnPlus = document.querySelector(".profile__add-card-button");
const popupCard = document.querySelector(".popup-card__wrapper");
const closeCard = document.querySelector(".popup-card__close");
const placeName = document.getElementById("placeName");
const imgUrl = document.getElementById("imgUrl");
const btnSubmit = document.querySelector("#btnSubmit");
const popupCardForm = document.getElementById("popup-card-form");

btnPlus.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName !== "BUTTON") return;
  popupCard.classList.add('visible');
});

closeCard.addEventListener("click", () => {
  popupCard.classList.remove('visible');
});

popupCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = {};
  newCard.name = placeName.value;
  newCard.link = imgUrl.value;
  const rendredCard = renderCard(newCard);

  cards.insertAdjacentHTML("afterbegin", rendredCard);
  popupCard.className = "popup-card__wrapper__hidden";
});
