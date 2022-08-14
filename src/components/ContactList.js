import React from "react";
import ContactCard from "./Contactcard";

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contacts) => {
        return(
            <ContactCard contacts={contacts}></ContactCard>
        )
    });

    return (
      <div className="ui celled list">
        {renderContactList}
      </div>  
    );
}

export default ContactList;