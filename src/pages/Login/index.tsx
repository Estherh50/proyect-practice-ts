import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../system/utils/auth';
import { authActions } from '../../hooks/authActions'
import { todoActions } from '../../hooks/todoActions';
import Input from '../../components/Generics/Input';
import Loading from '../../components/Generics/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { addUser } = authActions();
    const { getListTodos } = todoActions();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)
        const dataUser = await login(email, password);
        if (dataUser?.email) {
            addUser({ id: dataUser.uid, email: dataUser.email, isAuth: true });
            localStorage.setItem('sesion', JSON.stringify({ id: dataUser.uid, email: dataUser.email, isAuth: true }));
            getListTodos(dataUser.uid);
            navigate('/');
            setLoading(false)
        }
    }

    return (
        <div className="sm:mx-auto w-screen">
            <div className="sm:mx-auto sm:max-w-sm mt-20">
                <div>
                    {loading ? <Loading /> : null}
                </div>
                <div >
                    <img
                        className="mx-auto h-40 w-auto"
                        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
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
                                className="block w-full mb-5 rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
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

        </div>
    )
}

export default Login;