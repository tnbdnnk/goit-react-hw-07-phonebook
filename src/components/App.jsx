import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';

import css from './App.module.css';

export const App = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Contacts Book</h1>
            <ContactForm />
            <Filter />
            <ContactList />
            <ToastContainer/>
        </div>
    )
};
