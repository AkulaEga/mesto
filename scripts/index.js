let popup = document.querySelector('.popup')
let openPopupButton = document.querySelector('.profile__vector')

openPopupButton.forEach((button) => {
    button.addEventListener('click'.(e) => {
        e.preventDefault()
        popup.classList.add('popup_opened')
    })
})