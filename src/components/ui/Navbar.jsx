function Navbar(){
    return(
        <div className="flex justify-between px-14 py-5">
            <div>
                <p className="text-3xl font-bold">FusionPixel</p>
            </div>
            <ul className="flex gap-8 text-lg font-medium">
                <li>Home</li>
                <li>Services</li>
                <li>Orders</li>
                <li>Contact Us</li>
                <li>Your Account</li>
            </ul>
        </div>
    )
}

export default Navbar;