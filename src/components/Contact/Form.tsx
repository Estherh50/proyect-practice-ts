
import { FormEvent, useState } from "react";
import Input from "../Generics/Input";
import { contactActions, DataForm } from "../../hooks/contactActions";
import { Alert } from "../Alerts/useAlert";


interface Props {
    createAlert: (options: Alert) => void
}

export const Form = (props: Props) => {
    const {createAlert} = props;
    const { sendContact } = contactActions();
    const [state, setState] = useState<DataForm>({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (state?.name && state?.lastName && state?.email && state?.phone && state?.message) {
            sendContact(state);
            setState({
                name: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
            createAlert({
                text: 'Datos enviados',
                variant: 'success'
            });
        }
    }

    const handleInputs = (e: any) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };


    return (<>
        <div className=" px-1 p-0 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-10">Contacto</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Envíanos tu información!
                </p>
            </div>
            <form onSubmit={onSubmit} className="mx-auto max-w-xl ">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <div className="mt-2.5">
                            <Input
                                type="text"
                                label="Nombre"
                                onChange={handleInputs}
                                value={state.name}
                                name="name"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2.5">
                            <Input
                                type="text"
                                label="Apellido"
                                onChange={handleInputs}
                                value={state.lastName}
                                name="lastName"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="mt-2.5">
                            <Input
                                type="email"
                                label="Email"
                                onChange={handleInputs}
                                value={state.email}
                                name="email"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="mt-2.5">
                            <div className="sm:col-span-2 text-left ">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
                                <div>
                                    <input
                                        className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        type="tel"
                                        value={state.phone}
                                        onChange={handleInputs}
                                        name="phone"
                                        required
                                        title="El número debe tener 10 dígitos"
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Mensaje
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={4}
                                onChange={handleInputs}
                                value={state.message}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                    >
                        Enviar datos
                    </button>
                </div>
            </form>
        </div>
    </>)
}

export default Form