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
                    <input type="text" name="name" className="border" />
                </div>
                <div>
                    <p>Email</p>
                    <input type="text" name="email" className="border" />
                </div>
                <div>
                    <p>Password</p>
                    <input type="text" name="password" className="border" />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="text" name="Confirm Password" className="border" />
                    <div className="flex items-center gap-2">
                        <p>Show Password</p>
                        <input type="checkbox" className="size-[14px]" />
                    </div>
                </div>
                <div>
                    <button>Sign Up</button>
                    <p>Already Have an account? <a href="">Log In</a></p>
                </div>
            </div>
            <div>
                <img src={AuthPageRefImg} alt="ref img" className="size-[500px] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]" />
            </div>
        </div>
    )
}

export default AuthCard;