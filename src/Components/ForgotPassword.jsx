import { useState } from "react"
import { toast, Toaster } from 'react-hot-toast';

export default function ForgotPassword({ onClose }) {
    const[resetemail, setResetemail] = useState("");

    const handleForgotPassword = () =>{

        const user = JSON.parse(localStorage.getItem("Users")) || []
        const finduser = user.some((use)=> use.Email === resetemail)
        if (finduser) {
            toast.success(`Password reset link sent to ${resetemail}`)
            setResetemail("")
        }else{
            toast.error("Incorrect Email")
        }
    }

    return (
        <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <Toaster/>
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 text-2xl"
            >
                ×
            </button>
            
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Forgot Password</h2>
                <p className="text-gray-500 text-sm mt-2">Enter your email id to reset a password.</p>
            </div>
            
            {/* Body */}
            <div className="space-y-4">
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">Email Address</label>
                    <input 
                        type="email"
                        placeholder="Enter email address"
                        value={resetemail}
                        onChange={(e)=>setResetemail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent transition-all duration-200"
                    />
                </div>
                
                <button
                    onClick={handleForgotPassword}
                    className="w-full bg-[#7E57C2] text-white font-semibold py-3 rounded-xl cursor-pointer hover:bg-[#6c4ab8] transition-all duration-300 active:scale-95 mt-4"
                >
                    Continue
                </button>
                
                <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm">
                        Remember password?{' '}
                        <button 
                            onClick={onClose}
                            className="text-[#7E57C2] font-medium cursor-pointer hover:underline transition-all duration-200"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}