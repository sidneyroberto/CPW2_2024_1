const savedContactsJSON = localStorage.getItem("contacts");

// Nosso pseudo banco de dados
const contacts = savedContactsJSON ? JSON.parse(savedContactsJSON) : [];

export const saveContact = (contact) => {
  contacts.push(contact);
  const contactsJSON = JSON.stringify(contacts);
  console.log(contactsJSON);
  localStorage.setItem("contacts", contactsJSON);
};

export const getContacts = () => contacts;
