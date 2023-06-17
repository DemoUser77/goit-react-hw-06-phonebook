import { createSlice, nanoid } from '@reduxjs/toolkit'


const contactsInitialState = { items: [] };
    
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact:(state, action)=> {
            state.items.push({ ...action.payload, id: nanoid() });
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
    deleteContacts:(state, action)=>{
        state.items = state.items.filter(item => item.id !== action.payload);
    },
 },
});


export const contactReducer = contactsSlice.reducer;
export const { addContact, deleteContacts } = contactsSlice.actions;