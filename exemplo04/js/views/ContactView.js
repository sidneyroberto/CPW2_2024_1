import { getContacts, saveContact } from "../controllers/ContactController.js";
import Contact from "../models/Contact.js";

$(document).ready(function () {
  $("#phone").mask("(00) 00000-0000");
});

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const contactForm = document.getElementById("contact-form");
const contactsList = document.getElementById("contacts-list");
const contactsAreaTitle = document.getElementById("contacts-area-title");

const getContact = () => {
  /**
   * Cria um novo objeto de contato
   */
  const contact = new Contact();
  contact.name = nameInput.value;
  contact.email = emailInput.value;
  contact.phone = phoneInput.value;

  return contact;
};

export const onSubmitContactForm = (event) => {
  /**
   * Esta linha de código SEMPRE deve
   * ser executada logo no início!!!
   */
  event.preventDefault();
  const contact = getContact();
  saveContact(contact);
  contactForm.reset();
  renderContact(contact);
  contactsAreaTitle.innerText = "Contatos salvos";
};

const renderContact = (contact) => {
  const contactCardContent = `
    <div class="box-card contact-card">
        <div class="contact-row">
            <span class="contact-label">Nome:</span>
            <span class="contact-value">${contact.name}</span>
        </div>

        <div class="contact-row">
            <span class="contact-label">Telefone:</span>
            <span class="contact-value">${contact.phone}</span>
        </div>

        ${
          contact.email
            ? `
                <div class="contact-row">
                    <span class="contact-label">E-mail:</span>
                    <span class="contact-value">${contact.email}</span>
                </div>
            `
            : ""
        }
    </div>
  `;

  contactsList.insertAdjacentHTML("beforeend", contactCardContent);
};

export const renderContactsList = () => {
  const contacts = getContacts();
  contacts.forEach((c) => renderContact(c));
};
