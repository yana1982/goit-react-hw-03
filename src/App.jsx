import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import dataContacts from "../contacts.json";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(dataContacts);
  const [filterContacts, setFilterContacts] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase().trim())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filterContacts} onFilter={setFilterContacts} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
