export const validationForm = (formData, data) => {
  const popupInputs = [...data.querySelectorAll(formData.inputSelector)];
  const btnSubmit = data.querySelector(formData.submitButtonSelector);

  const showError = (input, popupError) => {
    input.classList.add(formData.errorClass);
    popupError.textContent = input.validationMessage;
  };

  const hideError = (input, popupError) => {
    input.classList.remove(formData.errorClass);
    popupError.textContent = "";
  };

  const disableBtn = () => {
    btnSubmit.setAttribute("disabled", "true");
    btnSubmit.classList.add(formData.inactiveButtonClass);
  };

  const restartError = () => {
    popupInputs.forEach((input) => {
      const popupError = data.querySelector(
        `.${formData.inputErrorClass}-${input.id.toLowerCase()}`
      );
      hideError(input, popupError);
    });
  };

  const resetValidation = () => {
    if (btnSubmit) {
      disableBtn();
      restartError();
    }
  };

  const toggleInputError = (input) => {
    const popupError = data.querySelector(
      `.${formData.inputErrorClass}-${input.id.toLowerCase()}`
    );
    if (!popupError) return;
    if (input.validity.valid) {
      hideError(input, popupError);
    } else {
      showError(input, popupError);
    }
  };

  const checkInputValidity = () => {
    for (let i = 0; i < popupInputs.length; i++) {
      if (!popupInputs[i].validity.valid) {
        return false;
      } 
    }
    return true;
  };

  const toggleSaveButtonStatus = () => {
    if (!checkInputValidity()) {
        disableBtn()
    } else {
        btnSubmit.removeAttribute("disabled");
        btnSubmit.classList.remove(formData.inactiveButtonClass);
    }
  }

   const setListeners = () => {
    popupInputs.forEach(input => {
        input.addEventListener('input', () => {
            toggleInputError(input);
            toggleSaveButtonStatus()
        })
    })}

    setListeners()
    resetValidation()
};



