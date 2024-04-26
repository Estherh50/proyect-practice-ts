import { useState } from "react";
import { useAppSelector } from "../../hooks/store"
import { todoActions } from "../../hooks/todoActions";
import Modal from "../Modal";
import { EditTodo } from "./EditTodo";
import { TabTodo } from "./TabTodo";



export const ListToDo = () => {
    const toDoList = useAppSelector((state) => state.todoReducer);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [idUserUpdate, setIdUserUpdate] = useState('');

    const { removeTodo } = todoActions()

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const update = (id: string) => {
        setIdUserUpdate(id);
        toggleModal();
    }

    return (<>
        <div>
            <Modal open={showModal} onClose={toggleModal}>
                <EditTodo
                    idUserUpdate={idUserUpdate}
                    toggleModal={toggleModal}
                />
            </Modal>
        </div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-12">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-12">
                    <TabTodo toDoList={toDoList} update={update} removeTodo={removeTodo} />
                </div>
            </div>
        </div>

    </>)
}