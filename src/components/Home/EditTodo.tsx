import React, { useEffect, useState } from "react";
import { todoActions } from "../../hooks/todoActions"
import { useAppSelector } from "../../hooks/store";
import Input from "../Generics/Input";
import { VarianAlerts } from "../Alerts/useAlert";

interface EditTodoProps {
    toggleModal: () => any;
    idUserUpdate: string;
    addAlert: (textAlert: string, variant: VarianAlerts) => void
}

export const EditTodo = (props: EditTodoProps) => {
    const { idUserUpdate, toggleModal, addAlert } = props;
    const [name, setName] = useState('');
    const { updateTodo } = todoActions();

    const listTodo = useAppSelector((state) => state.todoReducer);
    const dataTodo = listTodo.filter((todo) => todo.id === idUserUpdate);


    const onSubmit = (event: any) => {
        event.preventDefault();
        const id = dataTodo?.[0]?.id;
        const date = dataTodo?.[0]?.date;
        updateTodo(id, name, date);
        toggleModal();
        addAlert('Tarea modificada', 'success');
    }


    useEffect(() => {
        setName(dataTodo?.[0]?.name);
    }, [idUserUpdate]);



    return (<>
        <div className="mb-10">
        <h3 className="mb-5">Modificar tarea</h3>
            <form onSubmit={onSubmit}>
                <div className="flex gap-2">
                    {React.useMemo(() => (
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label=""
                            name="name"
                        />
                    ), [name])}
                    <div>
                        <button
                            type="submit"
                            className="flex items-center gap-1 rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
                        >
                            <label>Modificar</label>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}