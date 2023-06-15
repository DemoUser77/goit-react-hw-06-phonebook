import { createSlice, nanoid } from '@reduxjs/toolkit'


const contactsInitialState = [];
    
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContacts:(state, action)=>{
           state.push(...action.payload);   
            },
            prepare( name, number ) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
        },
         deleteContacts:(state, action) =>{
             return state.filter((contact )=> contact.id !== action.payload);
            },
    },
});


export const contactReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;