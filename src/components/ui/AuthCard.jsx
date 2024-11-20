import AuthPageRefImg from "../../assets/AuthPageImg.jpeg"

function AuthCard() {
    return (
        <div className="h-[87vh] flex justify-between p-20">

            {/*AuthCard: SignUp Tab*/}
            <div className="shadow-[20px_20px_60px_#aaaaaa,-20px_-20px_60px_#ffffff] rounded-xl p-5 flex flex-col items-center gap-2 h-[69vh]">
                <div className="border-2 border-black flex justify-between w-80 p-1 font-medium">
                    <div>Log In</div>
                    <div>Sign Up</div>
                </div>
                <div className="flex flex-col gap-1">
                    <p>Name</p>
                    <input type="text" name="name" className="border p-2 w-96 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <p>Email</p>
                    <input type="text" name="email" className="border p-2 w-96 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <p>Password</p>
                    <input type="text" name="password" className="border p-2 w-96 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <p>Confirm Password</p>
                    <input type="text" name="Confirm Password" className="border p-2 w-96 rounded" />
                    <div className="flex items-center gap-2 justify-end">
                        <p>Show Password</p>
                        <input type="checkbox" className="size-[14px]" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <button className="border-2 border-black w-96 p-1 rounded font-medium bg-black text-white">Sign Up</button>
                    <p className="text-xs flex justify-center gap-1">Already Have an account? <a href="#" className="underline text-sky-400">Log In</a></p>
                </div>
            </div>

            {/*AuthPageImage*/}
            <div>
                <img src={AuthPageRefImg} alt="ref img" className="size-[500px] rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]" />
            </div>
        </div>
    )
}

export default AuthCard;