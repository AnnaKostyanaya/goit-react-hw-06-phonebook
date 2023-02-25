import React from 'react';
import ContactElement from '../ContactElement';
import style from '../ContactList/ContactList.module.css';

import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contacts-slice";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";


const ContactList = () => {

const filteredContacts = useSelector(getFilteredContacts);

const dispatch = useDispatch();
const deleteContact = id => {
    dispatch(deleteContacts(id));
};


return (
    <ul className={style.contactlist}>
        {filteredContacts.map(contact => (
            <ContactElement key={contact.id} contact={contact} onDeleteContact={deleteContact}/>
        ))}
    </ul>
);
}

export default ContactList;
