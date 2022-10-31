const pictures = document.querySelectorAll(".elements__img");
const popupImg = document.querySelector(".popup-img");
const image = document.querySelector(".popup-img__pictures");
const btnClose = document.querySelector(".popup-img__close");
const popupImgTitle = document.querySelector(".popup-img__title");

pictures.forEach((picture) => {
  picture.addEventListener("click", (ev) => {
    if (picture.classList.contains('popup__open')){
      picture.classList.remove('popup__open')
    }
    popupImg.classList.add("popup__open");
    image.src = ev.target.src;
    popupImgTitle.textContent =
      ev.target.parentElement.parentElement.querySelector(
        ".elements__caption"
      ).textContent;
  });
});

btnClose.addEventListener("click", () => {
  popupImg.classList.remove("popup__open");
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && popupImg.classList.contains("popup__open")) {
    popupImg.classList.remove("popup__open");
  }
});
