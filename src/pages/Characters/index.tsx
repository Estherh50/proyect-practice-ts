import React, { useState } from "react";
import { charactersActions } from "../../hooks/charactersActions";
import { useAppSelector } from "../../hooks/store";
import { Card } from "../../components/Characters/Card";
import LoadingLight from "../../components/Generics/Loading/LoadingLight";

const Characters = () => {
    const { getCharacters } = charactersActions();
    const [loading, setLoading] = useState(false);
    const listCharacteres = useAppSelector((state) => state.characterReducer);


    React.useEffect(() => {
        getCharacters()
    }, []);

    React.useEffect(() => {
        if(listCharacteres.length > 0){
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [listCharacteres]);

    return ( 
        <div style={{marginTop: '130vh'}}>
            {loading ? <LoadingLight /> : null }
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