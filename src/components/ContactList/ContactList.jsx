import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'reduxx/operations/contactsThunk';
import { getContacts, getFilter, getLoading, getError } from 'reduxx/selectors/selectors';
import ContactItem from 'components/ContactListItem/ContactListItem';

import css from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const loading = useSelector(getLoading);
    const error = useSelector(getError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const getFilteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    });

    return (
        <div className={css.contacts}>
            <h2 className={css.contacts__label}>Contacts list</h2>
            <div>
                {loading && <h3>Loading...</h3>}
                {error && <h3>{error}</h3>}
            </div>

            {getFilteredContacts?.length !== 0 ? (
                <ul className={css.contacts__list}>
                    {getFilteredContacts?.map(contact => (
                        <ContactItem
                            key={contact.id} {...contact}
                        />
                    ))}
                </ul>
            ) : (
                <h3>You don't have any contacts yet...</h3>
            )}
        </div>
    )
}
