import { IconContext } from "react-icons";
import { TodoAndID } from "../../system/redux/slices/todo_slice";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";



export const TabTodo = (props) => {
    const { toDoList, update, removeTodo } = props;
    return(
    <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
            <thead
                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                    <th scope="col" className=" px-6 py-4">Tareas</th>
                    <th scope="col" className=" px-6 py-4">Fecha</th>
                    <th scope="col" className=" px-6 py-4">Aciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    toDoList.map((item: TodoAndID) => (
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">{item.name}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{item.date}</td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                <button onClick={() => update(item.id)} >
                                    <IconContext.Provider value={{ color: "blue", size: "1.3rem", className: "global-class-name" }}>
                                        <div>
                                            <FiEdit />
                                        </div>
                                    </IconContext.Provider>
                                </button>
                                <button
                                    onClick={() => removeTodo(item.id)}
                                >
                                    <IconContext.Provider value={{ color: "red", size: "1.5rem", className: "global-class-name" }}>
                                        <div>
                                            <MdDeleteOutline />
                                        </div>
                                    </IconContext.Provider>

                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>)
}