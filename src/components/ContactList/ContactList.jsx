import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'reduxx/operations/contactsThunk';
import { getContacts, getFilter, getLoading, getError } from 'reduxx/selectors/selectors';
// import { getFilteredContacts } from 'reduxx/selectors/selectors';
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
        <div>
            <h2>Contacts list</h2>
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


// export const ContactList = () => {
//     const dispatch = useDispatch();

//     const contacts = useSelector(getFilteredContacts);

//     return (
//         <ul className={css.contacts__list}>
//         {contacts.map(item => (
//             <li className={css.contacts__item} key={item.id}>
//                 <p>{item.name}</p>{' '}
//                 <span className={css.contacts__span}>{item.number}</span>
//                 <button
//                     className={css.contacts__btn}
//                     type="button"
//                     onClick={() => dispatch(deleteContact(item.id))}
//                 >
//                     Delete
//                 </button>
//             </li>
//         ))}
//         </ul>
//     );
// };
