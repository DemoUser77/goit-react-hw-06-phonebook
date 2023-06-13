import { createSlice } from '@reduxjs/toolkit';


export const filtersSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setContactsFilter(state, {payload}) {
            return payload;
        }
    }
});

export const { setContactsFilter} = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;


