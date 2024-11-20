import React, { useState } from "react";
import AuthPageRefImg from "../../assets/AuthPageImg.jpeg";

function AuthCard() {
    const [activeTab, setActiveTab] = useState("signup"); // 'login' or 'signup'

    return (
        <div className="h-[87vh] flex justify-between p-20">

            {/* AuthCard */}
            <div className="shadow-[20px_20px_60px_#aaaaaa,-20px_-20px_60px_#ffffff] rounded-xl p-5 flex flex-col items-center gap-2 h-[69vh]">
                {/* Tabs */}
                <div className="relative flex justify-between w-80 p-1 font-medium gap-10">
                    <div
                        className={`cursor-pointer w-1/2 text-center ${activeTab === "login" ? "text-black" : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("login")}
                    >
                        Log In
                    </div>
                    <div
                        className={`cursor-pointer w-1/2 text-center ${activeTab === "signup" ? "text-black" : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("signup")}
                    >
                        Sign Up
                    </div>

                    {/* Underline */}
                    <div
                        className={`absolute bottom-0 h-[2.5px] bg-black transition-all duration-300 ease-in-out`}
                        style={{
                            width: "50%",
                            transform: activeTab === "login" ? "translateX(0)" : "translateX(100%)",
                        }}
                    ></div>
                </div>


                {/* Form */}
                {activeTab === "signup" ? (
                    // Sign Up Form
                    <div className="flex flex-col items-center gap-2">
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
                            <input type="password" name="password" className="border p-2 w-96 rounded" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>Confirm Password</p>
                            <input type="password" name="confirm_password" className="border p-2 w-96 rounded" />
                            <div className="flex items-center gap-2 justify-end">
                                <p>Show Password</p>
                                <input type="checkbox" className="size-[14px]" />
                            </div>
                        </div>
                        <button className="border-2 border-black w-96 p-1 rounded font-medium bg-black text-white mt-5">
                            Sign Up
                        </button>
                        <p className="text-xs flex justify-center gap-1">
                            Already Have an account?{" "}
                            <span
                                className="underline text-sky-400 cursor-pointer"
                                onClick={() => setActiveTab("login")}
                            >
                                Log In
                            </span>
                        </p>
                    </div>
                ) : (
                    // Log In Form
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-col gap-1">
                            <p>Email</p>
                            <input type="text" name="email" className="border p-2 w-96 rounded" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>Password</p>
                            <input type="password" name="password" className="border p-2 w-96 rounded" />
                        </div>
                        <div className="flex items-center gap-2 justify-end w-96">
                            <p>Show Password</p>
                            <input type="checkbox" className="size-[14px]" />
                        </div>
                        <button className="border-2 border-black w-96 p-1 rounded font-medium bg-black text-white mt-5">
                            Log In
                        </button>
                        <p className="text-xs flex justify-center gap-1">
                            Don't have an account?{" "}
                            <span
                                className="underline text-sky-400 cursor-pointer"
                                onClick={() => setActiveTab("signup")}
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* AuthPageImage */}
            <div>
                <img
                    src={AuthPageRefImg}
                    alt="ref img"
                    className="size-[500px] rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
                />
            </div>
        </div>
    );
}

export default AuthCard;
