function Services() {
    return (
        <div className="p-5 bg-gray-100 h-[80vh] flex flex-col justify-center items-center gap-16">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <div className="flex flex-col gap-5">
                <div className="flex text-center p-2 items-center justify-between gap-5">
                    <div className="w-[30vw] text-center flex flex-col justify-center p-4 gap-2">
                        <i className="fa-solid fa-paintbrush text-4xl"></i>
                        <h2 className="font-bold text-xl">Photo Editing</h2>
                        <p className="text-sm text-black/60 font-normal">Transform your photos with our professional editing services.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center p-4 gap-2">
                        <i className="fa-solid fa-video text-4xl"></i>
                        <h2 className="font-bold text-xl">Video Editing</h2>
                        <p className="text-sm text-black/60 font-normal">Create stunning videos with our expert editing techniques.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center p-4 gap-2">
                        <i className="fa-solid fa-pen-nib text-4xl"></i>
                        <h2 className="font-bold text-xl">Graphics Designing</h2>
                        <p className="text-sm text-black/60 font-normal">Bring your ideas to life with our creative graphic design solutions.</p>
                    </div>
                </div>
                <div className="flex text-center p-2 items-center justify-between gap-5">
                    <div className="w-[30vw] text-center flex flex-col justify-center p-4 gap-2">
                        <i className="fa-solid fa-camera text-4xl"></i>
                        <h2 className="font-bold text-xl">Photo & Videography</h2>
                        <p className="text-sm text-black/60 font-normal">Capture your moments with our professional photo and video services.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center px-4 h-[19vh] gap-2 mb-5">
                        <i className="fa-solid fa-code text-4xl"></i>
                        <h2 className="font-bold text-xl">Website Making</h2>
                        <p className="text-sm text-black/60 font-normal">Build responsive and functional websites tailored to your needs.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center px-4 h-[19vh] gap-2 mb-5">
                        <i className="fa-solid fa-palette text-4xl"></i>
                        <h2 className="font-bold text-xl">Web Designing</h2>
                        <p className="text-sm text-black/60 font-normal">Create visually appealing and user-friendly web designs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;