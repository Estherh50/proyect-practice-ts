

const Loading = () => {

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white" >
            <div className="flex space-x-2">
                <div className="w-12 h-12 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-12 h-12 bg-gray-700 rounded-full animate-bounce delay-100"></div>
                <div className="w-12 h-12 bg-gray-900 rounded-full animate-bounce delay-200"></div>
            </div>
        </div>
    )
}

export default Loading;