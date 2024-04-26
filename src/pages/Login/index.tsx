import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../system/utils/auth';
import { authActions } from '../../hooks/authActions'
import { todoActions } from '../../hooks/todoActions';
import Input from '../../components/Generics/Input';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { addUser } = authActions();
    const { getListTodos } = todoActions();

    const onSubmit = async (event: any) => {
        event.preventDefault();
        const dataUser = await login(email, password);
        if (dataUser?.email) {
            addUser({ id: dataUser.uid, email: dataUser.email, isAuth: true });
            getListTodos(dataUser.uid);
            navigate('/');
        }
    }

    return (
        <div className="sm:mx-auto sm:max-w-sm">
            <div >
                <img
                    className="mx-auto h-20 w-auto"
                    src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid"
                    alt="logo"
                />
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Accede a tu cuenta
                </h2>
            </div>
            <div className="mt-5">
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Correo"
                            name='email'
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Contraseña"
                            name="password"
                        />
                    </div>
                    <div className="mb-20">
                        <button
                            type="submit"
                            className="block w-full mb-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Acceder
                        </button>
                    </div>
                    <label className=" text-sm leading-6 text-gray-900">¿No tienes una cuenta?</label>
                     <Link to="/signup" className="font-semibold  text-indigo-600 pl-2">
                        Regístrate
                    </Link>
                </form>
            </div>
            </div>
    )
}

export default Login;