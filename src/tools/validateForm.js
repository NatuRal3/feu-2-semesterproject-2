function validateForm(form) {
  if (!form.checkValidity()) {
    return;
  }

  return Object.fromEntries(new FormData(form).entries());
}

export default validateForm;
