import React, { useState, useEffect }from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./Addcontact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const[contacts,setContacts] = useState([]);

  const addcontactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // setContacts(retrieveContacts);
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className='ui container '>
      <Header />
      <AddContact addcontactHandler = {addcontactHandler} />
      <ContactList contacts = {contacts}/> 
    </div>
  );
}

export default App;
