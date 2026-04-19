import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import SideBar from '../Dashboard/SideBar'
import Changepass from '../../assets/Settings/Changepass.png'
import Editprof from '../../assets/Settings/Editprof.png'
import Help from '../../assets/Settings/Help.png'
import Logout from '../../assets/Settings/Logout.png'
import Notificationpref from '../../assets/Settings/Notificationpref.png'
import Blue from '../../assets/Settings/Blue.png'
import Red from '../../assets/Settings/Red.png'
import { useNavigate } from 'react-router-dom';

const Settings = () => {

//   const [searchTerms, setSearchTerms] = useState("");
  const navigate = useNavigate('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const settingdata = [
    {title: "Edit Profile", des: "Update your photo,personal info and bio.", adv: "Manage Settings", icon: Editprof, arr: Blue, path:"Editprofile"},
    {title: "Change Password", des: "Keep your account secure with a new password.", adv: "Manage Settings", icon: Changepass, arr: Blue, path:"ChangePassword"},
    {title: "Notification Preferences", des: "Choose how you receive update.", adv: "Manage Settings", icon: Notificationpref, arr: Blue, path:"Notificationpref"},
    {title: "Logout", des: "Sign out from your account securely.", adv: "Proceed with caution", icon: Logout, arr: Red, path:"Logout"},
  ]

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
      <div className="flex-1 w-full min-w-0 lg:ml-[275px]">

        <Navbar 
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex flex-col gap-[40px] md:gap-[80px] p-4 md:p-6 lg:p-8">

          <div className="flex flex-col gap-6">
            {/* Heading and description */}
            <div className='flex flex-col gap-[8px] lg:gap-[12px]'>
                <h2 className='text-[20px] lg:text-[24px] font-semibold text-gray-900'>Account Settings</h2>
                <p className='text-[#8F8F8F] text-[14px] lg:text-[16px] font-normal leading-relaxed'>
                  Manage your personal details, security, and preferences all in one place. Keep your account information up to date and customize your learning experience.
                </p>
            </div>

            {/* Settings Card */}
            <div className='grid grid-row-4 md:grid-cols-2 gap-[40px]'>
              {
                settingdata.map((item)=>(
                  <div 
                    onClick={()=>navigate(`/${item.path}`)}
                    className='flex flex-row gap-[20px] p-5 border border-[#D5D7E0] cursor-pointer hover:bg-[#f3eff9] rounded-lg items-center'>
                    <img src={item.icon} alt="" className='w-[50px] h-[50px]'/>
                    <div className='flex flex-col gap-[12px]'>
                      <p className='text-[16px] md:text-[20px] font-medium'>{item.title}</p>
                      <p className='text-[#7E7E7E] text-[12px] font-normal'>{item.des}</p>
                      <div className='flex flex-row gap-[5px] items-center'>
                        <p className='text-[#7E57C2] text-[12px] font-medium'>{item.adv}</p>
                        <img src={item.arr} alt="" className='w-[20px] h-[20px]'/>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Need Help */}
          <div className='flex flex-col gap-[24px] p-4 border border-[#D5D7E0] rounded-lg'>
            <div className='flex flex-row gap-[20px]'>
              <img src={Notificationpref} alt="" className='w-[50x] h-[50px]'/>
              <div className='flex flex-col gap-[8px]'>
                <p className='text-[16px] md:text-[20px] font-semibold'>Need Help?</p>
                <p className='text-[#7E7E7E] text-[10px] md:text-base font-normal'>If you have questions about your account settings or need assistance, please contact our support team. We're here to help you manage your account safely.</p>
                <button className='bg-[#7E57C2] text-[16px]  font-medium rounded-lg py-2 text-white w-[160px]'>Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Settings
