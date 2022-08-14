import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email } = props.contacts;

    return(
        <div className="item" style={{padding:"8px"}}>
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon right floated" style = {{color: "red", margin:"5px"}}></i>
        </div>
    )
};

export default ContactCard