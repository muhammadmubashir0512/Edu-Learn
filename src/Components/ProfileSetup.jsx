import React, { useState} from 'react'
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const ProfileSetup = () => {
    
    const[image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
        const userEmail = loggedInUser?.Email
        if (userEmail) {
                const saveimage = localStorage.getItem(`userimage_${userEmail}`);
                setImage(saveimage)
            }
    }, [])

    const handleImage = (e) =>{
        const image = e.target.files[0]
        const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
        const userEmail = loggedInUser?.Email

        if (image) {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            
            reader.onload = () =>{
                setImage(reader.result)
                localStorage.setItem(`userimage_${userEmail}`, reader.result);
            };
    
            reader.error = () =>{
                toast.error("File format is not correct")
            }
        }
    }

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting }, reset,
    } = useForm();

    const onSubmit = (data) =>{
        const userInfo = JSON.parse(localStorage.getItem("userinfo")) || []
        userInfo.push(data)
        localStorage.setItem("userinfo", JSON.stringify(userInfo))
        toast.success("Profile Set Successfully")
        reset()
        navigate('/Dashboard')
    }

    const onSkip = () =>{
        navigate('/Dashboard')
    }
    

  return (
    <div className='flex justify-center items-center p-4 sm:p-8 md:p-[64px]'>
        <Toaster/>
        <div className='flex flex-col gap-[32px] sm:gap-[48px] md:gap-[64px] items-center justify-center p-4 sm:p-8 md:p-[64px] border rounded-[16px] border-[#D5D7E0] w-full max-w-[1200px]'>
            
            {/* Heading */}
            <div className='flex flex-col gap-[8px] text-center md:text-left'>
                <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold'>Complete Your Learning Profile</h1>
                <p className='text-[14px] sm:text-[16px] font-normal text-[#ACACAC] text-wrap w-full max-w-[750px] mx-auto md:mx-0'>Tell us a bit about yourself so we can personalize your learning experience. Your profile helps us recommend the right courses, webinars, and resources tailored to your goals.</p>
            </div>

            {/* Image */}
            <div>
                <div className='flex flex-col items-center gap-4'>
                    {/* Image Upload */}
                    <div className='relative group'>
                        {image ? (
                            <img 
                                src={image} 
                                alt="Preview" 
                                className='w-[75px] h-[75px] rounded-full object-cover'
                            />
                        ) : (
                            <div className='w-[75px] h-[75px] rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-[#7E57C2] transition-all duration-300'>
                                <svg className='w-8 h-8 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        )}
                    </div>
                    {/* Image input*/}
                    <label className=' text-center flex justify-center items-center text-[14px] sm:text-[16px] text-[#ACACAC] bg-[#F2F2F2] border-[#D5D7E0] border rounded-[6px] font-medium w-[140px] sm:w-[145px] h-[32px] sm:h-[44px] cursor-pointer'>
                        <input
                            type="file"
                            accept='image/*'
                            onChange={handleImage}
                            className='hidden'
                        />
                        {image ? 'Change Photo' : 'Upload Photo'}
                    </label>
                </div>
            </div>

            {/* Profile Form */}
            <form action="" className='w-full'>
                <div className='flex flex-col gap-[24px] sm:gap-[32px] w-full'>
                    <div className='flex flex-col gap-[10px]'>
                        <label htmlFor="" className='text-[18px] sm:text-[20px] font-medium'>Bio/About Me</label>
                        <textarea
                            {...register("Bio",{
                                required: "Bio is required"
                            })}
                            className='border rounded-[8px] border-[#D5D7E0] bg-white p-[12px] sm:p-[16px] text-[14px] sm:text-[16px] font-normal text-[#ACACAC] focus:outline-none focus:ring-2 focus:ring-[#7E57C2]'
                            placeholder='Tell us about yourself and your learning goals....'
                            rows={3}
                        />
                    </div>

                    <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]'>
                        <div className='flex flex-col gap-[10px] w-full sm:w-1/2'>
                            <label htmlFor="" className='text-[18px] sm:text-[20px] font-medium'>Location</label>
                            <select
                                {...register("Location",{
                                    required: "Location is required"
                                })}
                                className='border rounded-[8px] text-[#ACACAC] border-[#D5D7E0] bg-white p-[12px] sm:p-[16px] text-[14px] sm:text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-[#7E57C2]'>
                                <option value="">Select Location</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Multan">Multan</option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Quetta">Quetta</option>
                                <option value="Gujranwala">Gujranwala</option>
                                <option value="Faisalabad">Faisalabad</option>
                                <option value="Sialkot">Sialkot</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-[10px] w-full sm:w-1/2'>
                            <label htmlFor="" className='text-[18px] sm:text-[20px] font-medium'>Education</label>
                            <select
                                className='border rounded-[8px] text-[#ACACAC] border-[#D5D7E0] bg-white p-[12px] sm:p-[16px] text-[14px] sm:text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-[#7E57C2]'
                                {...register("Education", {
                                    required: "Education is required"
                                })}
                            >
                                <option value="">Select Education</option>
                                <option value="Matriculation">Matriculation / O-Level</option>
                                <option value="Intermediate">Intermediate / A-Level</option>
                                <option value="Bachelors">Bachelor's (BS/BSc/BA)</option>
                                <option value="Masters">Master's (MS/MSc/MA)</option>
                                <option value="MPhil">MPhil</option>
                                <option value="PhD">PhD</option>
                                <option value="Diploma">Diploma/Certification</option>
                                <option value="SelfTaught">Self Taught</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <label htmlFor="" className='text-[18px] sm:text-[20px] font-medium'>Field of Interest</label>
                        <select
                            {...register("FieldInterest", {
                                required: "Field of interest is required"
                            })}
                            className='border rounded-[8px] text-[#ACACAC] border-[#D5D7E0] bg-white p-[12px] sm:p-[16px] text-[14px] sm:text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-[#7E57C2]'>
                            <option value="">Select Field of Interest</option>
                            <option value="WebDevelopment">Web Development</option>
                            <option value="MobileDevelopment">Mobile App Development</option>
                            <option value="DataScience">Data Science</option>
                            <option value="ArtificialIntelligence">Artificial Intelligence / Machine Learning</option>
                            <option value="CloudComputing">Cloud Computing</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="DevOps">DevOps</option>
                            <option value="UIUX">UI/UX Design</option>
                            <option value="GraphicDesign">Graphic Design</option>
                            <option value="DigitalMarketing">Digital Marketing</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="GameDevelopment">Game Development</option>
                        </select>
                    </div>
                </div>
            </form>

            <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] w-full'>
                <div className='w-full sm:w-1/2'>
                    <button
                        onClick={onSkip}
                        className='cursor-pointer w-full bg-[#F8F8F8] border rounded-[8px] h-[56px] sm:h-[64px] text-[#7E57C2] text-[16px] sm:text-[20px] font-medium'>Skip for now</button>
                </div>
                <div className='w-full sm:w-1/2'>
                    <button 
                        onClick={handleSubmit(onSubmit)}
                        className='cursor-pointer w-full bg-[#7E57C2] border rounded-[8px] h-[56px] sm:h-[64px] text-white text-[16px] sm:text-[20px] font-medium' disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Continue"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSetup