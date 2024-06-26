
import { useAppDispatch } from "./store"
import { characters } from "../api/characters";
import { Character, listCharacters} from "../system/redux/slices/characters_slice";


export const charactersActions = () => {
    const dispatch = useAppDispatch();

    const getCharacters = async() => {
        characters.getAll({page: 1}).then((data) => {
            const list: Character[] = data.data.results;
            dispatch(listCharacters(list));
        }).catch((err) => {
            console.log(err)
        })
        
    }

    return { getCharacters };
}