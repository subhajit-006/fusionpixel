function NotFoundContent() {
    return (
        <div className="h-[83vh] flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-8xl">404</h1>
                <h2 className="font-semibold text-5xl">Page Not Found</h2>
            </div>

            <div className="w-[45vw] text-center">
                <p className="text-2xl text-black/60">Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
            </div>

            <div className="flex gap-5 font-medium">
                <button className="text-white border-[1.5px] border-black py-2 px-3 rounded flex gap-2 justify-center items-center bg-black hover:bg-black/85 hover:border-black/85">
                    <i className="fa-solid fa-house"></i>
                    Back To Home
                </button>
                <button className="border-[1.5px] border-black/20 py-2 px-4 rounded hover:bg-black/5">
                    Contact Support
                </button>
            </div>
        </div>
    )
}

export default NotFoundContent;