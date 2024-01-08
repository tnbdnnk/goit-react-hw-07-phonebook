import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'reduxx/operations/contactsThunk';
import { getContacts } from 'reduxx/selectors/selectors';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './ContactForm.module.css';

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const notifyNameExist = () => toast('Name exists in your list!');
    const notifyNumberExist = () => toast('Number exists in your list!');


    const handleFormSubmit = e => {
        e.preventDefault();

        const isNameExist = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        const isNumberExist = contacts.some(
            contact => contact.number === number
        );

        if (isNameExist) {
            notifyNameExist();
        } else if (isNumberExist) {
            notifyNumberExist();
        } else {
            const newContact = { name, number };
            dispatch(addContact(newContact));
        }

        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleFormSubmit} className={css.form}>
            <label className={css.label}>
            Name
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                className={css.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
                placeholder="New name"
            />
            </label>
            <label className={css.label}>
            Number
            <input
                value={number}
                onChange={e => setNumber(e.target.value)}
                className={css.input}
                type="tel"
                name="number"
                pattern="^[0-9]*$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Phone number"
            />
            </label>
            <button className={css.btn} type="submit">
            Add new contact
            </button>
        </form>
    );
};
