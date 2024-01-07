import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "reduxx/operations/contactsThunk";

import css from './ContactListItem.module.css';

function ContactItem({ id, name, number }) {
    const dispatch = useDispatch();

    return (
        <li className={css.contacts__item}>
            <span className={css.contacts_span}>{name}</span>
            <span className={css.contacts_span}>{number}</span>
            <button
                className={css.contacts__btn}
                onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </li>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string,
    userName: PropTypes.string,
    phoneNumber: PropTypes.string,
}

export default ContactItem;