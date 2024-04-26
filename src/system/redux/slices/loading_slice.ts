import { createSlice } from '@reduxjs/toolkit';

export interface Loading {
    isLoading: boolean;
    isLoadingLight: boolean;
}

const initialState: Loading = {
    isLoading: false,
    isLoadingLight: false
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setStateLoading: (state, action) => {
            return {...state, isLoading: action.payload}
        },
        setLoadLight: (state, action) => {
            return {...state, isLoadingLight: action.payload}
        }
    }
});

export default loadingSlice.reducer;
export const { setStateLoading, setLoadLight} = loadingSlice.actions;