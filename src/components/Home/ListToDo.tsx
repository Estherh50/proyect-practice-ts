import { useState } from "react";
import { useAppSelector } from "../../hooks/store"
import { todoActions } from "../../hooks/todoActions";
import Modal from "../Modal";
import { EditTodo } from "./EditTodo";
import { TabTodo } from "./TabTodo";
import LoadingLight from "../Generics/Loading/LoadingLight";
import { VarianAlerts } from "../Alerts/useAlert";

interface Props {
    addAlert: (textAlert: string, variant: VarianAlerts) => void
}

export const ListToDo = (props: Props) => {
    const { addAlert } = props;
    const toDoList = useAppSelector((state) => state.todoReducer);
    const loading = useAppSelector((state) => state?.loadingReducer.isLoadingLight);
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
        {loading ? <LoadingLight /> : null }
        <div>
            <Modal open={showModal} onClose={toggleModal}>
                <EditTodo
                    idUserUpdate={idUserUpdate}
                    toggleModal={toggleModal}
                    addAlert={addAlert} 
                />
            </Modal>
        </div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-12">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-12">
                    <TabTodo toDoList={toDoList} update={update} removeTodo={removeTodo} addAlert={addAlert} />
                </div>
            </div>
        </div>

    </>)
}