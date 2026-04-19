import React from 'react'
import { useState } from 'react';
import SideBar from '../Dashboard/SideBar';
import Navbar from '../Dashboard/Navbar';
import Back from '../../assets/Courseinfo/Back.png'
import { useNavigate } from 'react-router-dom';
import appple from '../../assets/Subsriptiondata/apple.svg'
import paypal from '../../assets/Subsriptiondata/paypal.svg'
import credit from '../../assets/Subsriptiondata/credit.svg'
import { useForm } from "react-hook-form"
import { toast, Toaster } from 'react-hot-toast';

const Payment = () => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate('')

    const selectPayment = [
        { name: "Card", img: credit },
        { name: "Paypal", img: paypal },
        { name: "Apple", img: appple },
    ]

    const {
        register,
        handleSubmit,
        formState:  reset,
    } = useForm()
    const onSubmit = (data) => {
        if (data.CardNumber?.length !== 16) {
            toast.error("Card numbers must be 16 char")
            return;
        }
        if (data.CVC?.length !== 4) {
            toast.error("CVC must be 4 numbers")
            return;
        }

        const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
        const userEmail = LoggedInUser.Email

        const allpayment = JSON.parse(localStorage.getItem("Payments")) || []
        allpayment.push({user: userEmail, Payment: data})
        localStorage.setItem("Payments",JSON.stringify(allpayment))
        
        toast.success("Payment Verified Succuessfully")
        setTimeout(() => {
            navigate('/SubscriptionPlan')
        }, 1000);
        reset()
    }



  return (
    <div className='flex w-full min-h-screen bg-[#F9FAFB]'>
        <Toaster/>
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
      
      <div className='flex-1 min-w-0  h-screen overflow-y-auto'>

        <Navbar 
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content */}
        <div className='flex flex-col gap-[24px] md:gap-[32px] pt-[16px] md:pt-[24px] pr-[16px] md:pr-[32px] pl-[16px] md:pl-[32px] pb-[16px] md:pb-[24px]'>
          <div className='flex flex-col gap-[32px] '>

            {/* Heading and description */}
            <div className='flex flex-col flex-wrap gap-[6px] md:gap-[10px]'>
                <img
                    onClick={()=>navigate('/SubscriptionPlan')}
                    src={Back}
                    alt="" 
                    className='w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer'
                />
                <div className='flex flex-col gap-[6px] '>
                    <h2 className='text-[18px] md:text-[24px] font-semibold'>Payment Method</h2>
                    <p className='text-[#9C9C9C] text-[11px] md:text-[13px] font-normal text-wrap flex-1'>Compare options and switch to a plan that fits your learning pace.</p>
                </div>
            </div>

            {/* Payment Method */}
            <div className='flex flex-col w-full md:w-auto p-4 gap-[24px] items-center'>
                <div>
                    <div className='flex flex-col w-full gap-[24px] bg-white rounded-md border border-[#E4E4E7] p-8'>
                        <div className='flex flex-col items-center gap-[6px]'>
                            <p className='text-[#09090B] text-[20px] font-semibold'>Payment Method</p>
                            <p className='text-[#71717A] text-[12px] md:text-[14px] font-normal'>Add a payment method for subscription.</p>

                        </div>
                        <div className='flex flex-row gap-[16px]'>
                            {
                                selectPayment.map((Payment)=>(
                                    <div className='flex flex-1'>
                                        <div className='flex  flex-col gap-[8px] items-center border border-[#F4F4F5] w-[75px] py-2 rounded-md'>
                                            <img src={Payment.img} alt="" className='w-[16px] h-[16px]'/>
                                            <p className='text-[#09090B] text-[14px] font-normal'>{Payment.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[24px]'>
                            <div className='flex flex-col gap-[24px]'>
                                {/* Name on card */}
                                <div className='flex flex-col gap-[10px] w-full'>
                                    <label htmlFor="">Name on Card</label>
                                    <input type="text" placeholder='Enter your name on card' {...register("Name",{ 
                                        required: "Name is require",
                                        pattern: {
                                            value: /^[A-Za-z]/,
                                            message: "Only letters and space allowed"
                                        }
                                    })}className="text-base w-full h-[56px] sm:h-[64px] px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"/>
                                </div>

                                {/* Card Number */}
                                <div className='flex flex-col gap-[10px] w-full'>
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" placeholder='Enter card number' {...register("CardNumber",{ 
                                        required: "CardNumber is require",
                                        maxLength: 16,
                                        pattern: {
                                            value: /^[0-9]/,
                                            message: "Only number allowed"
                                        }
                                    })}className="text-base w-full h-[56px] sm:h-[64px] px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"/>
                                </div>

                                {/* Card Number */}
                                <div className='flex flex-row gap-[10px] w-full'>
                                    <div className='flex flex-col gap-[10px] flex-1'>
                                        <label htmlFor="">Expires</label>
                                        <input type="month" placeholder='Enter your name on card' {...register("Exp",{ 
                                            required: "Exp is require",
                                            pattern: {
                                                value: /^[0-9]/,
                                                message: "Only number allowed"
                                            }
                                        })}className="text-base w-full h-[56px] sm:h-[64px] px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"/>
                                    </div>

                                    <div className='flex flex-col gap-[10px] flex-1'>
                                        <label htmlFor="">Cvc</label>
                                        <input type="text" placeholder='CVC' {...register("CVC",{ 
                                            required: "CVC is require",
                                            maxLength: 4,
                                            pattern: {
                                                value: /^[0-9]/,
                                                message: "Only number allowed"
                                            }
                                        })}className="text-base w-full h-[56px] sm:h-[64px] px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E57C2] focus:border-transparent"/>
                                    </div>
                                </div>

                            </div>

                            <button 
                                type='submit'
                                className='bg-[#7E57C2] cursor-pointer rounded-lg py-2 text-white text-[14px] font-medium w-full'
                            >Confirm</button>
                        </form>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
