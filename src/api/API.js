import axios from "axios";

const contactsAPI = axios.create({
    baseURL: 'https://6595c96f04335332df8345e7.mockapi.io/contacts/',
});

export const getContacts = async () => {
    const { data } = await contactsAPI.get();
    return data;
};

export const deleteContact = async id => {
    const { data } = await contactsAPI.delete(id);
    return data;
};

export const addContact = async contact => {
    const { data } = await contactsAPI.post('', contact);
    return data;
};