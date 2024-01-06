import React from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'reduxx/operations/contactsThunk';
import { getContacts } from 'reduxx/selectors/selectors';

import css from './ContactForm.module.css';

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();

        const newContact = {
            name: e.target.elements.name.value,
            number: e.target.elements.number.value,
        };

        const normalizedName = e.target.elements.name.value.toLowerCase();

        if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        }

        dispatch(addContact(newContact));

        e.target.reset();
    };

    return (
        <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label} htmlFor="nameInput">
            Name
            <input
                id="nameInput"
                className={css.input}
                placeholder="Name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
            />
        </label>
        <label className={css.label} htmlFor="numberInput">
            Number
            <input
                id="numberInput"
                className={css.input}
                placeholder="Phone number"
                type="tel"
                name="number"
                pattern="^[0-9]*$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button className={css.btn} type="submit">
            Add contact
        </button>
        </form>
    );
};
