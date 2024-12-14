import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../ui/Navbar";
import AuthPageRefImg from "../../assets/AuthPageImg.jpeg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function AuthCard() {
    const [activeTab, setActiveTab] = useState("signup");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const { login, signup, sendOTP } = useAuth();

    // Reset form and error when switching tabs
    useEffect(() => {
        setFormData({
            name: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
        });
        setError("");
    }, [activeTab]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = [];

        if (activeTab === "signup") {
            if (!formData.name || formData.name.trim().length < 2) {
                errors.push("Name must be at least 2 characters long");
            }

            if (formData.password !== formData.confirmPassword) {
                errors.push("Passwords do not match");
            }

            if (formData.password.length < 8) {
                errors.push("Password must be at least 8 characters long");
            }

            // Password complexity check
            if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
                errors.push("Password must include uppercase, lowercase, number, and special character");
            }
        }

        if (!formData.phoneNumber) {
            errors.push("Please enter a valid phone number");
        }

        if (errors.length > 0) {
            setError(errors.join(". "));
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!validateForm()) return;

        try {
            setLoading(true);

            if (activeTab === "login") {
                await login(formData.phoneNumber, formData.password);
                navigate("/dashboard");
            } else {
                const signupResult = await signup({
                    name: formData.name,
                    phoneNumber: formData.phoneNumber,
                    password: formData.password,
                });

                if (signupResult.requiresVerification) {
                    navigate("/verify-otp", {
                        state: { phoneNumber: formData.phoneNumber },
                    });
                } else {
                    navigate("/dashboard");
                }
            }
        } catch (error) {
            console.error(`Authentication error:`, error);
            setError(error.response?.data?.message || "Authentication failed");
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const switchTab = () => {
        setActiveTab((prev) => (prev === "login" ? "signup" : "login"));
    };

    return (
        <div className="bg-[#DFF2EB] min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-grow flex-wrap justify-between px-4 sm:px-20 py-10 sm:py-20 items-center">
                <div className="w-full sm:w-1/2 max-w-md bg-[#ecf9f4] rounded-xl p-6 shadow-lg">
                    {/* Tabs */}
                    <div className="flex justify-between mb-6 relative">
                        {["login", "signup"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`w-1/2 pb-2 ${activeTab === tab ? "text-black font-semibold" : "text-gray-500"}`}
                                aria-selected={activeTab === tab}
                            >
                                {tab === "login" ? "Log In" : "Sign Up"}
                            </button>
                        ))}
                        <div
                            className="absolute bottom-0 h-0.5 bg-black transition-transform duration-300"
                            style={{
                                width: "50%",
                                transform: activeTab === "login" ? "translateX(0)" : "translateX(100%)",
                            }}
                        />
                    </div>

                    {/* Error Handling */}
                    {error && (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                            role="alert"
                            aria-live="polite"
                        >
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        {activeTab === "signup" && (
                            <div>
                                <label htmlFor="name" className="block mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                />
                            </div>
                        )}

                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2">
                                Phone Number
                            </label>
                            <PhoneInput
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={(value) => setFormData((prev) => ({ ...prev, phoneNumber: value }))}
                                defaultCountry="IN" // Change based on your default region
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded pr-10"
                                    placeholder="Enter your password"
                                    autoComplete={activeTab === "login" ? "current-password" : "new-password"}
                                />
                                <button
                                    type="button"
                                    onClick={handlePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? "👁️" : "👁️‍🗨️"}
                                </button>
                            </div>
                        </div>

                        {activeTab === "signup" && (
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Confirm your password"
                                    autoComplete="new-password"
                                />
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            {activeTab === "login" && (
                                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                                    Forgot Password?
                                </Link>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Processing..." : activeTab === "login" ? "Log In" : "Sign Up"}
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p className="text-sm">
                            {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
                            <button onClick={switchTab} className="text-blue-600 hover:underline ml-1">
                                {activeTab === "login" ? "Sign Up" : "Log In"}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="hidden sm:flex w-1/2 justify-center items-center">
                    <img
                        src={AuthPageRefImg}
                        alt="Authentication illustration"
                        className="max-w-[500px] rounded-2xl shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

export default AuthCard;
