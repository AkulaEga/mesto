export const enableValidation = (formData) => {
  const allForms = [...document.querySelectorAll(formData.formSelector)];

  const connectAllEventListeners = (
    form,
    formInput,
    btn,
    inputErrorClass,
    inactiveButtonClass
  ) => {
    const inputsList = [...form.querySelectorAll(formInput)];
    const saveBtn = form.querySelector(btn);

    inputsList.forEach((input) => {
      input.addEventListener("input", (e) => {
        const popupForm = e.target.closest("form");
        toggleInputError(form, input, inputErrorClass);
        toggleSaveButtonStatus(popupForm, saveBtn, inactiveButtonClass);
      });
    });
  };

  allForms.forEach((form) => {
    connectAllEventListeners(
      form,
      formData.inputSelector,
      formData.submitButtonSelector,
      formData.inputErrorClass,
      formData.inactiveButtonClass
    );
  });
};

export const disableBtn = (btn, btnDisabled) => {
  btn.setAttribute("disabled", "true");
  btn.classList.add(btnDisabled);
};

const showError = (input, popupError, errorClass) => {
  input.classList.add(errorClass);
  popupError.textContent = input.validationMessage;
};
const hideError = (input, popupError, errorClass) => {
  input.classList.remove(errorClass);
  popupError.textContent = "";
};
const toggleInputError = (form, input, errorClass) => {
  const popupError = form.querySelector(
    `.popup__error-${input.id.toLowerCase()}`
  );
  if (!popupError) return;
  if (input.validity.valid) {
    hideError(input, popupError, errorClass);
  } else {
    showError(input, popupError, errorClass);
  }
};

const toggleSaveButtonStatus = (form, btn, btnDisabled) => {
  if (!form.checkValidity()) {
    disableBtn(btn, btnDisabled);
  } else {
    btn.removeAttribute("disabled");
    btn.classList.remove(btnDisabled);
  }
};

const restartForm = (form) => {
  form.reset();
};

// функция очистки полей
export const restartFromState = (popup, formData) => {
  const saveBtn = popup.querySelector(formData.submitButtonSelector);
  const form = popup.querySelector(formData.formSelector);

  disableBtn(saveBtn, formData.inactiveButtonClass);

  const restartError = (errors, inputs, formData) => {
    errors.forEach((error) => {
      error.textContent = "";
    });
    inputs.forEach((input) => {
      input.classList.remove(formData.inputErrorClass);
    });
  };

  if (saveBtn) {
    const errorList = [
      ...form.querySelectorAll(`.${formData.inputErrorClass}`),
    ];
    const inputsList = [...form.querySelectorAll(formData.inputSelector)];

    restartError(errorList, inputsList, formData);
    toggleInputError(form, saveBtn, formData.inactiveButtonClass);
  }
};

export const restartPopupCard = (popup, formData) => {
  const form = popup.querySelector(formData.formSelector);
  restartFromState(popup, formData);
  restartForm(form);
};
