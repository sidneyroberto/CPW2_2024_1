import {
  onSubmitContactForm,
  renderContactsList,
} from "./views/ContactView.js";

document.getElementById("contact-form").onsubmit = onSubmitContactForm;

renderContactsList();
