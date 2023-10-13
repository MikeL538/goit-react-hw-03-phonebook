import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '645-17-79' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '459-12-56' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  });

  const { name, number } = state;

  const contactExists = state.contacts.some(
    contact => contact.name === name || contact.number === number
  );

  const handleAddContact = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };

    if (!contactExists) {
      const updatedContacts = [...state.contacts, newContact];
      setState({
        ...state,
        contacts: updatedContacts,
        name: '',
        number: '',
      });

      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    } else {
      alert('There is contact');
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleFilterChange = filter => {
    setState({ ...state, filter });
  };

  const deleteContact = contactId => {
    const updatedContacts = state.contacts.filter(
      contact => contact.id !== contactId
    );
    setState(prevState => ({
      ...prevState,
      contacts: updatedContacts,
    }));

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleContactSearch = () => {
    return state.contacts.filter(contact => {
      const { name, number } = contact;
      return (
        name.toLowerCase().includes(state.filter.toLowerCase()) ||
        number.includes(state.filter)
      );
    });
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setState(prevState => ({ ...prevState, contacts: storedContacts }));
    }
  }, []);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm
        name={state.name}
        number={state.number}
        handleInputChange={handleInputChange}
        handleAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={handleContactSearch()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
