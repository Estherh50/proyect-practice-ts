import { useState } from "react";
import { todoActions } from "../../hooks/todoActions"
import { VarianAlerts } from "../Alerts/useAlert";
import Input from "../Generics/Input";

interface CreateTodoProps {
    toggleModal: () => any;
    addAlert: (textAlert: string, variant: VarianAlerts) => void;
}

export const CreateTodo = (props: CreateTodoProps) => {
    const { toggleModal, addAlert } = props;
    const [name, setName] = useState('');
    const { addTodo } = todoActions();


    const onSubmit = (event: any) => {
        event.preventDefault();
        const date = new Date().toLocaleDateString();
        if (!name) {
            addAlert('Agrega el nombre del To Do', 'warning');
            return
        }
        addTodo(name, date);
        setName('');
        toggleModal();
        addAlert('To Do agregado', 'success');
    }



    return (<>
        <div className="mb-10">
            <h3 className="mb-5">Crear To-Do</h3>
            <form onSubmit={onSubmit}>
                <div className="flex gap-2">
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label=""
                    />
                    <div>
                        <button
                            type="submit"
                            className="flex items-center gap-1 rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
                        >
                            <label>Agregar</label>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}