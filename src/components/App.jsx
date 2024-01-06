import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'reduxx/operations/contactsThunk';
import { getContacts } from 'reduxx/selectors/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const users = useSelector(getContacts);

    return (
        <div className={css.container}>
            <h2 className={css.title}>Phonebook</h2>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            {/* {!users.length ? (
                <h3>Your phonebook is empty. Add your first contact.</h3>
            ) : ( */}
                <>
                    <h3>Your phonebook has {users.length} contacts.</h3>
                    <div className={css.filter}>
                    <Filter />
                    <ContactList />
                    </div>
                </>
            {/* )} */}
        </div>
    );
};
