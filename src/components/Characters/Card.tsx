import { Character } from "../../system/redux/slices/characters_slice";

interface Props {
    character: Character
}

export const Card = (props: Props) => {

    const {character} = props;

    return (<>
        <div
            className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={character.image}
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="mb-2 text-xl font-medium">
                    {character.name}
                </h5>
                <p className="mb-4 text-base">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </p>
                <p className="text-xs">
                    Last updated 3 mins ago
                </p>
            </div>
        </div>

    </>)
}