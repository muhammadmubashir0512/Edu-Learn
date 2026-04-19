import React from 'react'
import { useState } from 'react';
import SideBar from '../Dashboard/SideBar';
import Navbar from '../Dashboard/Navbar';
import Back from '../../assets/Courseinfo/Back.png'
import { useNavigate } from 'react-router-dom';

const upgradePlan = () => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate('')

  return (
    <div className='flex w-full min-h-screen bg-[#F9FAFB]'>
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
      
      <div className='flex-1 w-full min-w-0'>

        <Navbar 
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content */}
        <div className='flex flex-col gap-[32px] p-4 md:p-6 lg:p-8'>
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
                    <h2 className='text-[18px] md:text-[24px] font-semibold'>Subscription Plan renew</h2>
                    <p className='text-[#9C9C9C] text-[11px] md:text-[13px] font-normal text-wrap flex-1'>Compare options and switch to a plan that fits your learning pace.</p>
                </div>
            </div> 

            {/* Pricing Cards */}
            <div className='flex flex-col md:flex-row gap-[20px] md:gap-[24px] p-2 items-center w-full'>
                {/* Monthly Plan */}
                <div className='bg-white rounded-lg shadow w-full md:flex-1 p-4 flex flex-col gap-[75px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <h1 className='text-[24px] font-semibold'>Monthly</h1>
                            <div className='flex flex-row items-end'>
                                <h1 className='text-[24px] font-bold text-[#7E57C2]'>$19/</h1>
                                <p className='text-[#9D9D9D] font-medium text-[12px]'>month</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[16px]'>
                            <p className='text-[#1F2937] text-[14px] font-normal'>Everything in monthly</p>
                            <p className='text-[#1F2937] text-[14px] font-normal'>Priority Q&A</p>
                            <p className='text-[#1F2937] text-[14px] font-normal'>Exclusive recordings</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-row items-end'>
                            <h1 className='text-[24px] font-bold text-[#7E57C2]'>$19/</h1>
                            <p className='text-[#7E57C2] font-normal text-[12px]'>month</p>
                        </div>
                        <button 
                            onClick={()=> navigate('/Payment')}
                            className='bg-[#F8F4FF] cursor-pointer hover:bg-[#F6F1FF] text-[#7E57C2] text-[16px] font-bold py-2 rounded-lg'>Renew Plan</button>
                    </div>
                </div>

                {/* Quartley Plan */}
                <div className='bg-white rounded-lg shadow w-full md:flex-1 p-4 flex flex-col gap-[75px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <h1 className='text-[24px] font-semibold'>Quaterly</h1>
                            <div className='flex flex-row items-end'>
                                <h1 className='text-[24px] font-bold text-[#7E57C2]'>$40/</h1>
                                <p className='text-[#9D9D9D] font-medium text-[12px]'>3 month</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[16px]'>
                            <p className='text-[#1F2937] text-[14px] font-normal'>Everything in monthly</p>
                            <p className='text-[#1F2937] text-[14px] font-normal'>Priority Q&A</p>
                            <p className='text-[#1F2937] text-[14px] font-normal'>Exclusive recordings</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-row items-end'>
                            <h1 className='text-[24px] font-bold text-[#7E57C2]'>$40/</h1>
                            <p className='text-[#7E57C2] font-normal text-[12px]'>3 month</p>
                        </div>
                        <button 
                            onClick={()=> navigate('/Payment')}
                            className='bg-[#F8F4FF] cursor-pointer hover:bg-[#F6F1FF] text-[#7E57C2] text-[16px] font-bold py-2 rounded-lg'>Upgrade Plan</button>
                    </div>
                </div>

                {/* Yearly Plan */}
                <div className='bg-[#7E57C2] text-white rounded-lg shadow w-full md:flex-1 p-4 flex flex-col gap-[75px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[8px] text-white'>
                            <h1 className='text-[24px] font-semibold'>Yearly</h1>
                            <div className='flex flex-row items-end text-white'>
                                <h1 className='text-[24px] font-bold text-white'>$179/</h1>
                                <p className='text-white font-medium text-[12px]'>yearly</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[16px] text-white'>
                            <p className='text-[#1F2937] text-[14px] font-normal text-white'>Everything in monthly</p>
                            <p className='text-[#1F2937] text-[14px] font-normal text-white'>Priority Q&A</p>
                            <p className='text-[#1F2937] text-[14px] font-normal text-white'>Exclusive recordings</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[16px] text-white'>
                        <div className='flex flex-row items-end text-white'>
                            <h1 className='text-[24px] font-bold text-white'>$179/</h1>
                            <p className='text-[#7E57C2] font-normal text-[12px]'>yearly</p>
                        </div>
                        <button 
                            onClick={()=> navigate('/Payment')}
                            className='bg-white cursor-pointer hover:bg-[#F6F1FF] text-[#7E57C2] text-[16px] font-bold py-2 rounded-lg'>Upgrade Plan</button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default upgradePlan
