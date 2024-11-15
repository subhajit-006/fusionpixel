function HeroElement() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-[88vh]">
            <h1 className="text-6xl font-bold">Welcome to FusionPixel</h1>
            <p className="text-xl text-gray-700">Transform your digital imagery with our cutting-edge pixel manipulation services.</p>
            <div className="flex gap-5">
                <button className="border-[1.5px] border-black p-2 rounded bg-black text-white font-medium hover:bg-black/80 hover:border-black/80">Get Started</button>
                <button className="border-[1.5px] border-black/25 p-2 rounded font-medium hover:bg-black/5">Learn More</button>
            </div>
        </div>
    )
}

export default HeroElement;