import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
    episode: string[],
    url: string,
    created: string
}

const initialState: Character[] = [];

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        listCharacters: (state, action: PayloadAction<Character[]>) => {
            const list = action.payload;
            return list;
        },
    }
});

export default charactersSlice.reducer;

export const { listCharacters } = charactersSlice.actions;
