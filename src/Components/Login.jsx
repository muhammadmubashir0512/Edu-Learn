import { useForm } from "react-hook-form"
import SidebarNav from '../assets/SidebarNav.png'
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";

export default function Login() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, reset,
    } = useForm()

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("Users")) || []

        const user = users.find((user) => user.Email === data.Email && user.Password === data.Password)

        if (user) {
            toast.success("Logged in Successfully")
            localStorage.setItem("LoggedInUser", JSON.stringify(user))
            navigate('/Dashboard')
        } else {
            toast.error("Invalid email or password")
        }
        reset()
    }

    const handleForgotClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className={`flex flex-col md:flex-row min-h-screen transition-all duration-300 ${isModalOpen ? 'blur-sm pointer-events-none' : ''}`}>
                <Toaster />

                {/* Image */}
                <div className="w-full md:w-1/2 h-[250px] h-screen">
                    <img 
                        src={SidebarNav} 
                        alt="Sidebar" 
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 flex justify-center items-center overflow-y-auto h-full items-center md:py-18 order-2 md:order-2">
                    <div className="px-4 sm:px-6 md:px-0 md:ml-[72px] md:mr-[73px] w-full max-w-lg mx-auto md:mx-0">
                        <div className="flex flex-col gap-[40px]">
                            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-center md:text-left">
                                Sign In to your Account
                            </h1>
                            
                            <div className="flex flex-col gap-[10px]">
                                <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit(onSubmit)}>

                                    {/* Email */}
                                    <div className="flex flex-col gap-[10px]">
                                        <label className="text-[16px] sm:text-[18px] font-medium">Email</label>
                                        <input 
                                            type="email"
                                            placeholder='Enter your email'
                                            autoComplete='off'
                                            className="text-base w-full h-[56px] sm:h-[56px] px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                            {...register("Email", {
                                                required: "Email is required",
                                                minLength: {value: 3, message: "Email must be in proper format"},
                                                pattern: {
                                                    value: /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/,
                                                    message: "Invalid email format"
                                                }
                                            })}
                                        />
                                        {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>}
                                    </div>

                                    {/* Password */}
                                    <div className="flex flex-col gap-[10px]">
                                        <label className="text-[16px] sm:text-[18px] font-medium">Password</label>
                                        <input 
                                            type="password"
                                            placeholder='Enter your Password'
                                            autoComplete='off'
                                            className="text-base w-full h-[56px] sm:h-[56px] px-4 py-3 border rounded-[8px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                            {...register("Password", {
                                                required: "Password is required",
                                                minLength: {value: 3, message: "Password length must be greater than 3"},
                                                pattern: {
                                                    value: /^[A-Za-z0-9@#$%^&*()]+$/,
                                                    message: "Password can contain letters, numbers & special characters"
                                                }
                                            })}
                                        />
                                        {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>}
                                    </div>
                                </form>
                                
                                {/* Forgot Password*/}
                                <p 
                                    onClick={handleForgotClick}
                                    className="text-right hover:underline text-[#7E57C2] font-medium text-[14px] sm:text-[16px] cursor-pointer "
                                >
                                    Forgot password?
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center mt-[40px] md:mt-[64px] gap-[24px]">
                            <div className="flex justify-center">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    onClick={handleSubmit(onSubmit)}
                                    className="bg-[#7E57C2] text-white font-medium text-[18px] sm:text-[20px] border rounded-[8px] w-full max-w-[488px] h-[56px] sm:h-[64px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-[#6c4ab8] active:scale-95"
                                >
                                    {isSubmitting ? "Signing In..." : "Sign In"}
                                </button>
                            </div>
                            <p className="text-[16px] sm:text-[19px] text-center">
                                <span className="text-[#727272]">Don't have an account?</span> 
                                <span className="text-[#7E57C2] hover:underline cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#5a3d8f] active:scale-95" onClick={()=>navigate('/Signup')}> Sign up</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*ForgotPassword Component */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Dark Overlay */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={handleCloseModal}
                    ></div>
                    
                    {/*ForgotPassword Component */}
                    <div className="relative w-full max-w-md mx-4 animate-[modal-popup_0.25s_ease-out]">
                        <ForgotPassword onClose={handleCloseModal} />
                    </div>
                </div>
            )}

            {/* */}
            <style>{`
                @keyframes modal-popup {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}