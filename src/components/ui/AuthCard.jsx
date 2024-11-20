import AuthPageRefImg from "../../assets/AuthPageImg.jpeg"

function AuthCard() {
    return (
        <div className="h-[83vh] flex justify-between p-20">
            <div className="border-2 border-black shadow-[20px_20px_60px_#aaaaaa,-20px_-20px_60px_#ffffff] rounded-lg">
                <div className="border-2 border-black flex">
                    <div>Log In</div>
                    <div>Sign Up</div>
                </div>
                <div>
                    <p>Name</p>
                    <input type="name" className="border"/>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" className="border" />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" className="border" />
                </div>
                <div>
                    <p>Confirm Passeword</p>
                    <input type="Confirm Password" className="border" />
                </div>
            </div>
            <div>
                <img src={AuthPageRefImg} alt="ref img" className="size-[500px] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]" />
            </div>
        </div>
    )
}

export default AuthCard;