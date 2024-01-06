import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = state => state.contacts.items;
// export const selectFilter = state => state.filter;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
        );
    }
);