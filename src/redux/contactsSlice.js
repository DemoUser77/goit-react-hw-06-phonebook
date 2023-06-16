import { createSlice, nanoid } from '@reduxjs/toolkit'


const contactsInitialState = { items: [] };
    
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact:(state, action)=> {
            state.items.push(...action.payload);
        },
        prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
               
                };
            
    },
    deleteContacts:(state, action)=> {
        return state.items.filter(item => item.id !== action.payload);
    },
 },
});


export const contactReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;