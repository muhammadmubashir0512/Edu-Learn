import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import SideBar from '../Dashboard/SideBar'
import Back from '../../assets/Courseinfo/Back.png'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Notificationpref = () => {

//   const [searchTerms, setSearchTerms] = useState("");
  const navigate = useNavigate('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOn, setIsOn] = useState({})
  const [selectedNotification, setSelectedNotification] = useState(null)

  const notifications = [
    {heading: "Email notifications for new course launches", desc: "Stay informed whenever a new course matching your interests is available."},
    {heading: "Email notifications for upcoming webinars", desc: "Get timely alerts for webinars so you never miss a live session."},
    {heading: "Reminders for course deadlines", desc: "Receive gentle nudges to complete your lessons before the deadline."},
    {heading: "Promotional offers and updates", desc: "Be the first to know about exclusive discounts and platform news."},
  ]

  const handleToggle = (index) => {
    setIsOn(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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

      {/* Main Content */}
      <div className='flex-1 min-w-0  h-screen overflow-y-auto'>

        <Navbar 
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className='flex flex-col gap-[24px] md:gap-[32px] pt-[16px] md:pt-[24px] pr-[16px] md:pr-[32px] pl-[16px] md:pl-[32px] pb-[16px] md:pb-[24px]'>

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

            {/* Notification Preference */}
            <div className='flex items-center w-full'>
              <div className='flex justify-center items-center p-4 sm:p-8 md:p-[64px] w-full'>
                <Toaster/>
                <div className='flex flex-col gap-[32px] sm:gap-[48px] md:gap-[64px]  justify-center p-4 sm:p-8 md:p-[64px] border rounded-[16px] border-[#D5D7E0] w-full max-w-[1200px]'>           
                  {/* Heading */}
                  <div className='flex flex-col gap-[8px]  md:text-left'>
                      <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold'>Notification Preference</h1>
                      <p className='text-[14px] sm:text-[16px] font-normal text-[#ACACAC] text-wrap w-full max-w-[750px] mx-auto md:mx-0'>Configure how you receive notifications.</p>
                  </div>

                  {/* Notification radio selection */}
                  <div className='flex flex-col gap-[32px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <p className='text-[14px] font-medium'>Notify me about...</p>
                      <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-row gap-[8px]'>
                          <input 
                            type="radio"
                            className="text-start w-[16px] h-[16px]"
                            value={"Notfi"}
                            checked={selectedNotification === "All new messages"}
                            onChange={()=>setSelectedNotification("All new messages")}
                          />
                          <span className="text-[12px] font-normal">All new messages</span>
                        </div>

                        <div className='flex flex-row gap-[8px]'>
                          <input 
                            type="radio"
                            className="text-start w-[16px] h-[16px]"
                            value={"Notfi"}
                            checked={selectedNotification === "Direct messages and mentions"}
                            onChange={()=>setSelectedNotification("Direct messages and mentions")}
                          />
                          <span className="text-[12px] font-normal">Direct messages and mentions</span>
                        </div>

                        <div className='flex flex-row gap-[8px]'>
                          <input 
                            type="radio"
                            className="text-start w-[16px] h-[16px]"
                            value={"Notfi"}
                            checked={selectedNotification === "Nothing"}
                            onChange={()=>setSelectedNotification("Nothing")}
                          />
                          <span className="text-[12px] font-normal">Nothing</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Alert & Updates */}
                  <div className='flex flex-col gap-[16px]'>
                    <h1 className='text-[18px] font-medium'>Manage Your Alerts & Updates</h1>

                    {/* Email  */}
                    {
                      notifications.map((noti, index)=>(
                      <div className='flex flex-row place-content-between items-center border border-[#E4E4E7] rounded-lg p-6'>
                        <div className='flex flex-col gap-[8px]'>
                          <p className='text-[14px] md:text-[16px] font-medium'>{noti.heading}</p>
                          <p className='text-[#71717A] text-[10px] md:text-[12px] font-light md:font-normal'>{noti.desc}</p>
                        </div>

                        <div className='flex justify-end sm:justify-normal'>
                          <button 
                            onClick={() => handleToggle(index)}
                            className={`w-12 h-6 cursor-pointer rounded-full p-1 transition ${isOn[index] ? 'bg-[#7E57C2]' : 'bg-gray-300'}`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full transition transform ${isOn[index] ? 'translate-x-6' : 'translate-x-0'}`} />
                          </button>
                        </div>
                      </div>
                      ))
                    }
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
export default Notificationpref
