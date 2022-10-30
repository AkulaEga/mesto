const initialCards = [
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

const cards = document.querySelector(".elements");

const renderCard = (item) => `<article class="elements__card">
<div class="popup-wrapper">
<img class="elements__img" src=${item.link} />
<div class="elements__basket"></div>

</div>
<div class="elements__container">
<h2 class="elements__caption">${item.name}</h2>
<button
type="button"
class="elements__like "
></button>
</div>
</article>`;

const renderPage = (document.querySelector(".elements").innerHTML = initialCards
  .map((item) => renderCard(item))
  .join(""));
renderPage;

const delCards = document.querySelectorAll(".elements__basket");
delCards.forEach((delCard) => {
  delCard.addEventListener("click", () => {
    delCard.parentElement.parentElement.remove();
  });
});



const likes = document.querySelectorAll(".elements__like");

likes.forEach((like) => {
  like.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("elements__like-active")) {
      like.classList.remove("elements__like-active");
    } else {
      like.classList.add("elements__like-active");
    }
  });
});

