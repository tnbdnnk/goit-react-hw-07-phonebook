import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65986719668d248edf24908a.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', newContact);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);