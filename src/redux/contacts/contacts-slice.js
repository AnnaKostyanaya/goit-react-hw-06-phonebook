import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const defaultContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
] 

const contactsSlice = createSlice({
    name: "contacts",
    initialState: defaultContacts,
    reducers: {
        addContacts: {
            reducer: (state, {payload}) =>  {
                state.push(payload);
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    }
                }
            }
        },
        deleteContacts: (state, {payload}) => state.filter(({ id }) => id !== payload),
    }
})

export const {addContacts, deleteContacts} = contactsSlice.actions;
export default contactsSlice.reducer;