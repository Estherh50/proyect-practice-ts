import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: string;
    email: string;
    isAuth: boolean;
    name?: string;
}

const initialState: User = {
    isAuth: false,
    email: '',
    id: '',
    name: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveUser: (_state, action: PayloadAction<User>) => {
            return {...action.payload};
        }
    }
});

export default authSlice.reducer;
export const {saveUser} = authSlice.actions;