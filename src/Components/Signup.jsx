import { useForm } from "react-hook-form"
import SidebarNav from '../assets/SidebarNav.png'
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, reset,
    } = useForm()

    const onSubmit = (data) => {
        // if (data.Password !== data.confirmPassword) {
        //     toast.error("Password and confirm Password mismatch")
        //     return;
        // }

        const users = JSON.parse(localStorage.getItem("Users")) || []

        const existingUser = users.some((user)=>user.Email === data.Email)
        if (existingUser) {
            toast.error("Email already existed")
            return;
        }

        users.push(data)
        localStorage.setItem("Users", JSON.stringify(users))
        localStorage.setItem("LoggedInUser", JSON.stringify(data))
        toast.success("Signup Successfully")
        reset()
        navigate("/ProfileSetup")
    }


    return (
        <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
            <Toaster />

            {/* Image Section*/}
            <div className="md:block md:w-1/2 h-screen h-screen">
                <img 
                    src={SidebarNav} 
                    alt="Sidebar" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Form Section*/}
            <div className="w-full md:w-1/2 flex justify-center items-center h-screen overflow-y-auto py-8 md:py-0 order-2 md:order-2">
                <div className="px-4 sm:px-6 md:px-0 md:ml-[72px] md:mr-[73px] w-full max-w-lg mx-auto md:mx-0">
                    <div className="flex flex-col gap-[16px]">
                        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-center md:text-left">
                            Create New Account
                        </h1>
                        
                        <div className="flex flex-col gap-[24px]">
                            <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit(onSubmit)}>

                                {/* Full Name */}
                                <div className="flex flex-col gap-[10px]">
                                    <label className="text-[16px] sm:text-[18px] font-medium">Full Name</label>
                                    <input 
                                        type="text"
                                        placeholder='Enter your FullName'
                                        autoComplete='off'
                                        className="text-base w-full h-[56px] sm:h-[48px] px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                        {...register("FullName", {
                                            required: "Full Name is required",
                                            minLength: {value: 3, message: "Invalid name format"},
                                            pattern: {
                                                value: /^[A-Za-z]/,
                                                message: "Only letters and space allowed"
                                            }
                                        })}
                                    />
                                    {errors.FullName && <p className="text-red-500 text-sm mt-1">{errors.FullName.message}</p>}
                                </div>
                                
                                {/* Email */}
                                <div className="flex flex-col gap-[10px]">
                                    <label className="text-[16px] sm:text-[18px] font-medium">Email</label>
                                    <input 
                                        type="email"
                                        placeholder='Enter your email'
                                        autoComplete='off'
                                        className="text-base w-full h-[56px] sm:h-[48px] px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
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
                                        className="text-base w-full h-[56px] sm:h-[48px] px-4 py-3 border rounded-[8px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
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

                                {/* Confirm Password
                                <div className="flex flex-col gap-[10px]">
                                    <label className="text-[16px] sm:text-[18px] font-medium">Confirm Password</label>
                                    <input 
                                        type="password"
                                        placeholder='Enter your Password'
                                        autoComplete='off'
                                        className="text-base w-full h-[56px] sm:h-[64px] px-4 py-3 border rounded-[8px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            minLength: {value: 3, message: "Password length must be greater than 3"},
                                            pattern: {
                                                value: /^[A-Za-z0-9@#$%^&*()]+$/,
                                                message: "Password can contain letters, numbers & special characters"
                                            }
                                        })}
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                                </div> */}
                            </form>

                            <div className="flex flex-col gap-[32px] justify-start">
                                <div className="flex flex-col gap-[10px]">
                                    <p className="text-[16px] sm:text-[18px] font-medium">Select Your Role</p>
                                    <div className="flex flex-row gap-[32px]">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <input
                                                className="text-start w-[16px] h-[16px]"
                                                type="radio"
                                                value={"Learner"}
                                                {...register("Role",{
                                                    required: "Role is Required"
                                                })}
                                            />
                                            <span className="text-[16px] font-normal">Learner</span>
                                        </div>

                                        <div className="flex flex-row items-center gap-[10px]">
                                            <input
                                                className="text-start w-[16px] h-[16px]"
                                                type="radio" 
                                                value={"Instructor"}
                                                {...register("Role",{
                                                    required: "Role is Required"
                                                })}
                                            />
                                            <span className="text-[16px] font-normal">Instructor</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-[10px] items-center">
                                        <input
                                            className="w-[16px] h-[16px]"
                                            type="checkbox"
                                            {...register("terms",{
                                                required: "You must agree to terms."
                                            })}
                                        />
                                        <p className="text-[14px] font-medium"><span className="text-[#727272]">I agree to all </span><span className="text-[#7E57C2]">Terms </span><span className="text-[#727272]">and </span><span className="text-[#7E57C2]">Privacy Policy.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-[40px] md:mt-[24px] gap-[24px]">
                        <div className="flex justify-center">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                                className="bg-[#7E57C2] text-white font-medium text-[18px] sm:text-[20px] border rounded-[8px] w-full max-w-[488px] h-[56px] sm:h-[64px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Signing In..." : "Sign Up"}
                            </button>
                        </div>
                        <p className="text-[16px] sm:text-[19px] text-center">
                            <span className="text-[#727272]">Already have an account?</span> 
                            <span className="text-[#7E57C2] hover:underline cursor-pointer" onClick={()=>navigate('/')}> Sign in</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}