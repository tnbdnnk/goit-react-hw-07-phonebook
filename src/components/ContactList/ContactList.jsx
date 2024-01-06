import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'reduxx/operations/contactsThunk';
import { getFilteredContacts } from 'reduxx/selectors/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getFilteredContacts);

    return (
        <ul className={css.contacts__list}>
        {contacts.map(item => (
            <li className={css.contacts__item} key={item.id}>
                <p>{item.name}</p>{' '}
                <span className={css.contacts__span}>{item.number}</span>
                <button
                    className={css.contacts__btn}
                    type="button"
                    onClick={() => dispatch(deleteContactThunk(item.id))}
                >
                    Delete
                </button>
            </li>
        ))}
        </ul>
    );
};
