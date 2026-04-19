import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import SideBar from '../Dashboard/SideBar'
import Back from '../../assets/Courseinfo/Back.png'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const ChangePassword = () => {

//   const [searchTerms, setSearchTerms] = useState("");
  const navigate = useNavigate('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { 
    register,
    handleSubmit,
    formState: {errors, isSubmitting }, reset,
  } = useForm();

  const onSubmit = (data) =>{

    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
    const userEmail = loggedInUser?.Email
    const userPassword = loggedInUser?.Password

    if (data.CurrentPassword !== userPassword) {
      toast.error("Current Password is not correct")
      return;
    }

    if (data.Password !== data.confirmPassword) {
      toast.error("Password and confirm Password mismatch")
      return;
    }
      

    const alluserinfo = JSON.parse(localStorage.getItem("userinfo")) || []

    const userinfoIndex = alluserinfo.findIndex((item)=>item.Email === userEmail)
        
    if (userinfoIndex !== -1) {
      alluserinfo[userinfoIndex] = { ...alluserinfo[userinfoIndex], Password: data.Password}
    }else{
      alluserinfo.push({ Password: data.Password})
    }

    localStorage.setItem("userinfo", JSON.stringify(alluserinfo))
    toast.success("Password update Successfully")
    reset()
    navigate('/Settings')
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] overflow-x-hidden">

      {/* Sidebar on mobile*/}
      <div className={`fixed h-screen z-20 transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:z-0`}>
        <SideBar />
      </div>

      {/* Overlay sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 w-full min-w-0">

        <Navbar 
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">

          <div className="flex flex-col gap-6">
            {/* Heading and description */}
            <div className='flex flex-col flex-wrap gap-[6px] md:gap-[10px]'>
                <img
                    onClick={()=>navigate('/Settings')}
                    src={Back}
                    alt="" 
                    className='w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer'
                />
                <div className='flex flex-col gap-[6px] '>
                    <h2 className='text-[18px] md:text-[24px] font-semibold'>Account Settings</h2>
                </div>
            </div>
            {/* Prfoile Setup */}
            <div className='flex items-center w-full'>
              <div className='flex justify-center items-center p-4 sm:p-8 md:p-[64px] w-full'>
                  <Toaster/>
                  <div className='flex flex-col gap-[32px] sm:gap-[48px] md:gap-[64px]  justify-center p-4 sm:p-8 md:p-[64px] border rounded-[16px] border-[#D5D7E0] w-full max-w-[1200px]'>
                              
                      {/* Heading */}
                      <div className='flex flex-col gap-[8px]  md:text-left'>
                          <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold'>Change Password</h1>
                          <p className='text-[14px] sm:text-[16px] font-normal text-[#ACACAC] text-wrap w-full max-w-[750px] mx-auto md:mx-0'>Secure your account by updating your password.</p>
                      </div>

                      {/* Profile Form */}
                      <form className='w-full'>
                          <div className='flex flex-col gap-[24px] sm:gap-[32px] w-full'>
                              <div className='flex flex-col gap-[20px] md:gap-[32px]'>

                              {/* Current Password */}
                                <div className="flex flex-col gap-[10px]">
                                    <label className="text-[16px] sm:text-[18px] font-medium">Current Password</label>
                                    <input 
                                        type="password"
                                        placeholder='Enter your Password'
                                        autoComplete='off'
                                        className="text-base w-full h-[56px] sm:h-[64px] px-4 py-3 border rounded-[8px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                        {...register("CurrentPassword", {
                                            required: "CurrentPassword is required",
                                            minLength: {value: 8, message: "Password length must be greater than 8"},
                                            pattern: {
                                                value: /^[A-Za-z0-9@#$%^&*()]+$/,
                                                message: "Password can contain letters, numbers & special characters"
                                            }
                                        })}
                                    />
                                    {errors.CurrentPassword && <p className="text-red-500 text-sm mt-1">{errors.CurrentPassword.message}</p>}
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-[10px]">
                                    <label className="text-[16px] sm:text-[18px] font-medium">Password</label>
                                    <input 
                                        type="password"
                                        placeholder='Enter your Password'
                                        autoComplete='off'
                                        className="text-base w-full h-[56px] sm:h-[64px] px-4 py-3 border rounded-[8px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                        {...register("Password", {
                                            required: "Password is required",
                                            minLength: {value: 8, message: "Password length must be greater than 8"},
                                            pattern: {
                                                value: /^[A-Za-z0-9@#$%^&*()]+$/,
                                                message: "Password can contain letters, numbers & special characters"
                                            }
                                        })}
                                    />
                                    {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>}
                                </div>

                                {/* Confirm Password */}
                                <div className="flex flex-col gap-[10px]">
                                    <label className="text-[16px] sm:text-[18px] font-medium">Confirm Password</label>
                                    <input 
                                        type="password"
                                        placeholder='Enter your Password'
                                        autoComplete='off'
                                        className="text-base w-full h-[56px] sm:h-[64px] px-4 py-3 border rounded-[8px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            minLength: {value: 8, message: "Password length must be greater than 8"},
                                            pattern: {
                                                value: /^[A-Za-z0-9@#$%^&*()]+$/,
                                                message: "Password can contain letters, numbers & special characters"
                                            }
                                        })}
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                                </div>
                                          
                              </div>
                          </div>
                      </form>
                      
                      {/* Cancel and Update Buttons */}
                      <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] w-full'>
                          <div className='w-full sm:w-1/2'>
                              <button
                                  onClick={()=>navigate('/Settings')}
                                  className='cursor-pointer w-full bg-[#F8F8F8] border rounded-[8px] h-[56px] sm:h-[64px] text-[#7E57C2] text-[16px] sm:text-[20px] font-medium'>Cancel</button>
                          </div>
                          <div className='w-full sm:w-1/2'>
                              <button 
                                  onClick={handleSubmit(onSubmit)}
                                  className='cursor-pointer w-full bg-[#7E57C2] border rounded-[8px] h-[56px] sm:h-[64px] text-white text-[16px] sm:text-[20px] font-medium' disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Update Password"}</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChangePassword
