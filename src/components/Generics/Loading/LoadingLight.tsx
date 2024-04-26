
const LoadingLight = () => {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 flex justify-center items-center z-50">
            <div className="w-16 h-16 border-t-4 border-gray-700 rounded-full animate-spin"></div>
        </div>
    )
}

export default LoadingLight;