import React, { useState } from "react";
import AuthPageRefImg from "../../assets/AuthPageImg.jpeg";
import Navbar from "../ui/Navbar";

function AuthCard() {
    const [activeTab, setActiveTab] = useState("signup"); // 'login' or 'signup'
    const [showPassword, setShowPassword] = useState(false); // Visibility toggle

    return (
        <div className="bg-[#DFF2EB]">
            <Navbar />
            <div className="flex flex-wrap justify-between px-4 sm:px-20 py-10 sm:py-20 h-auto sm:h-[97vh] font-thin font-fontDyan">
                {/* AuthCard */}
                <div
                    className={`w-full sm:w-auto ${
                        activeTab === "signup" ? "sm:h-[580px]" : "sm:h-[400px]"
                    } shadow-[20px_20px_60px_#aaaaaa,-20px_-20px_60px_#ffffff] bg-[#ecf9f4] rounded-xl p-5 flex flex-col items-center gap-4 h-auto sm:h-[79vh] mb-10 sm:mb-0 transition-all duration-300 ease-in-out`}
                >
                    {/* Tabs */}
                    <div className="relative flex justify-between w-full sm:w-80 p-1 font-medium gap-10">
                        <div
                            className={`cursor-pointer w-1/2 text-center ${
                                activeTab === "login" ? "text-black" : "text-gray-500"
                            }`}
                            onClick={() => setActiveTab("login")}
                        >
                            Log In
                        </div>
                        <div
                            className={`cursor-pointer w-1/2 text-center ${
                                activeTab === "signup" ? "text-black" : "text-gray-500"
                            }`}
                            onClick={() => setActiveTab("signup")}
                        >
                            Sign Up
                        </div>

                        {/* Underline */}
                        <div
                            className="absolute bottom-0 h-[2.5px] bg-black transition-all duration-300 ease-in-out"
                            style={{
                                width: "50%",
                                transform: activeTab === "login" ? "translateX(0)" : "translateX(100%)",
                            }}
                        ></div>
                    </div>

                    {/* Form */}
                    {activeTab === "signup" ? (
                        // Sign Up Form
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <p>Name</p>
                                <input type="text" name="name" className="border p-2 w-full sm:w-96 rounded" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <p>Phone Number</p>
                                <input type="text" name="email" className="border p-2 w-full sm:w-96 rounded" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <p>Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="border p-2 w-full sm:w-96 rounded"
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <p>Confirm Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirm_password"
                                    className="border p-2 w-full sm:w-96 rounded"
                                />
                                <div className="flex items-center gap-2 justify-end">
                                    <p>Show Password</p>
                                    <input
                                        type="checkbox"
                                        className="size-[14px]"
                                        checked={showPassword}
                                        onChange={(e) => setShowPassword(e.target.checked)}
                                    />
                                </div>
                            </div>
                            <button className="border-2 border-black w-full sm:w-96 p-2 rounded font-medium bg-black text-white mt-5 hover:bg-black/80 hover:border-black/80">
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
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <p>Phone Number</p>
                                <input type="text" name="email" className="border p-2 w-full sm:w-96 rounded" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <p>Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="border p-2 w-full sm:w-96 rounded"
                                />
                            </div>
                            <div className="flex items-center gap-2 justify-end w-full sm:w-96">
                                <p>Show Password</p>
                                <input
                                    type="checkbox"
                                    className="size-[14px]"
                                    checked={showPassword}
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                />
                            </div>
                            <button className="border-2 border-black w-full sm:w-96 p-2 rounded font-medium bg-black text-white mt-5 hover:bg-black/80 hover:border-black/80">
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
                <div className="hidden sm:flex w-full sm:w-auto justify-center items-center">
                    <img
                        src={AuthPageRefImg}
                        alt="ref img"
                        className="w-full sm:w-[500px] rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
                    />
                </div>
            </div>
        </div>
    );
}

export default AuthCard;
