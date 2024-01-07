import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'reduxx/filterSlice';
import { getFilter } from 'reduxx/selectors/selectors';

import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const showFilteredContacts = e => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <label className={css.filter__label} >
            Search
            <input
                placeholder="Find contacts by name"
                className={css.filter__input}
                value={filter.filter}
                type="search"
                onChange={showFilteredContacts}
            />
        </label>
    );
};
