const Loader = () => {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
        <div className="flex justify-center items-center mt-[50vh]">
            <svg className="animate-spin h-12 w-12 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                <path d="M4 12a8 8 0 018-8" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    </div>
    
    )
}

export default Loader