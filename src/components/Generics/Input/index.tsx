

interface propsInput {
    type: string,
    value:string,
    onChange:(e: any) => void,
    label: string,
    name: string
}

const Input = (props: propsInput) => {
    const {type, value, onChange, label, name} = props;


    return (
        <div className="sm:col-span-2 text-left ">
            <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <div>
                <input
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name}
                    required
                />
            </div>
        </div>
    )
}

export default Input;