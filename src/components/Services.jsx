function Services() {
    return (
        <div className="p-5 bg-gray-100 h-[80vh] flex flex-col justify-center items-center gap-16">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <div className="flex flex-col gap-5">
                <div className="flex text-center p-2 items-center justify-between gap-5">
                    <div className="w-[30vw] text-center flex flex-col justify-center border-black border-2">
                        <i class="fa-solid fa-camera"></i>
                        <h2>Photo Editing</h2>
                        <p>Transform your photos with our professional editing services.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center border-black border-2">
                        <i class="fa-solid fa-video"></i>
                        <h2>Video Editing</h2>
                        <p>Create stunning videos with our expert editing techniques.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center border-black border-2">
                        <i class="fa-solid fa-pen-nib"></i>
                        <h2>Graphics Designing</h2>
                        <p>Bring your ideas to life with our creative graphic design solutions.</p>
                    </div>
                </div>
                <div className="flex text-center p-2 items-center justify-between gap-5">
                    <div className="w-[30vw] text-center flex flex-col justify-center border-black border-2">
                        <i class="fa-solid fa-paintbrush"></i>
                        <h2>Poster Making</h2>
                        <p>Create eye-catching posters that grab attention and convey your message.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center border-black border-2">
                        <i class="fa-solid fa-code"></i>
                        <h2>Website Making</h2>
                        <p>Build responsive and functional websites tailored to your needs.</p>
                    </div>
                    <div className="w-[30vw] text-center flex flex-col justify-center border-black border-2">
                        <i class="fa-solid fa-palette"></i>
                        <h2>Web Designing</h2>
                        <p>Create visually appealing and user-friendly web designs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;