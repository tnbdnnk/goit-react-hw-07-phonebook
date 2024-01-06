import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { addContact, deleteContact, getContacts } from "api/API";
axios.defaults.baseURL = 'https://65986719668d248edf24908a.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const data = await axios.delete(`/contacts/:${contactId}`);
            return data.id;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const res = await axios.post('/contacts', contact);
            return res.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);