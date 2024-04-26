import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { register } from "../../system/utils/auth";
import { authActions } from '../../hooks/authActions'
import Input from "../../components/Generics/Input";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { addUser } = authActions();

    const navigate = useNavigate()


    const onSubmit = async (event: any) => {
        event.preventDefault();
        const dataUser = await register(name, email, password);
        if (dataUser?.uid) {
            addUser({ id: dataUser.uid, email: dataUser.email, isAuth: true });
            navigate('/');
        }

    }

    return (
        <div className="sm:mx-auto sm:max-w-sm">
            <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
                Crea tu cuenta
            </h2>
            <form className="space-y-6 mb-2" onSubmit={onSubmit}>
                <div>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Nombre"
                    />
                </div>
                <div>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Correo"
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Contraseña"
                    />
                </div>
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Crear cuenta
                </button>
            </form>
            <label className=" text-sm leading-6 text-gray-900">¿Ya tienes cuenta? Inicia sesión</label>
            <Link to="/login" className="font-semibold  text-indigo-600 pl-2">
                aquí
            </Link>
        </div>
    )
}

export default Signup;