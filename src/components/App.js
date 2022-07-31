import React    from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./Addcontact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Rahul",
      email: "rahul61@gmail.com"
    },
    {
      id: "2",
      name: "Tanush",
      email: "tanush61@gmail.com"
    }
  ]

  return (
    <div className='ui container '>
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/> 
    </div>
  );
}

export default App;
