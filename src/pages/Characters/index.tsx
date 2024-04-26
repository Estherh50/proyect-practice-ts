import React from "react";
import { charactersActions } from "../../hooks/charactersActions";
import { useAppSelector } from "../../hooks/store";
import { Card } from "../../components/Characters/Card";

const Characters = () => {
    const { getCharacters } = charactersActions();
    const listCharacteres = useAppSelector((state) => state.characterReducer);


    React.useEffect(() => {
        getCharacters()
    }, []);

    return (
        <div style={{marginTop: '70vh'}}>
            <h1>Lista de personajes</h1>
            <div className="flex flex-wrap">
                {listCharacteres.map((character) => (
                    <div className="lg:w-1/3 p-3 w-1/2">
                        <Card character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;