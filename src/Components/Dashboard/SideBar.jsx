import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.png'
import Dashboard from '../../assets/Navigation/Dashboard.svg'
import Sideline from '../../assets/Navigation/Sideline.svg'
import Courses from '../../assets/Navigation/Courses.svg'
import Webinar from '../../assets/Navigation/Webinar.svg'
import Anlytics from '../../assets/Navigation/Anlytics.svg'
import Subscription from '../../assets/Navigation/Subscription.svg'
import Settings from '../../assets/Navigation/Settings.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard')
  const navigate = useNavigate('')
  const location = useLocation('')

  const menuItems = [
    { name: 'Dashboard', icon: Dashboard, path: '/Dashboard' },
    { name: 'Courses', icon: Courses, path: '/Courses' },
    { name: 'Webinars', icon: Webinar, path: '/Webinars' },
    { name: 'Analytics', icon: Anlytics, path: '/Analytics' },
    { name: 'Subscription Plan', icon: Subscription, path: '/SubscriptionPlan'},
    { name: 'Settings', icon: Settings, path:  '/Settings'},
  ]

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenu = menuItems.find(items => items.path === currentPath)
    if (activeMenu) {
      setActiveItem(activeMenu.name)
    }
  }, [location.pathname])
  



  return (
    <div className='bg-white w-[275px] h-full flex flex-col gap-[16px] border border-[#E9E9E9] h-screen'>
      {/* Logo */}
      <div className='flex flex-row gap-[10px] items-center p-[24px]'>
        <img 
          src={Logo}
          alt="Logopng" 
          className='w-[40px] h-[40px]'
        />
        <h1 className='text-[24px] font-semibold text-[#7E57C2]'>EduLearn</h1>
      </div>

      {/* Navigation */}
      <div className='flex flex-col gap-[8px]'>
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => {
              setActiveItem(item.name); 
              navigate(`/${item.path}`)
            }}
            className={`flex flex-row gap-[21px] items-center pt-[10px] pb-[10px] rounded-r-[8px] cursor-pointer transition-all duration-300 ${
              activeItem === item.name 
                ? 'bg-[#F6F1FF]' 
                : 'bg-white'
            }`}
          >
            <img 
              src={Sideline} 
              alt="" 
              className={`h-[30px] w-[3px]  ${
                activeItem === item.name ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className={`flex flex-row gap-[7px] text-[15px] font-medium  ${
              activeItem === item.name 
                ? 'text-[#7E57C2] font-semibold' 
                : 'text-[#9C84C7] font-medium'
            }`}>
              <img
                src={item.icon}
                className={`w-[20px] h-[20px] fill-current text-[#7E57C2] ${
                  activeItem === item.name ? 'text-[#7E57C2] opacity-100' : ' text-[#ACACAC] opacity-60'
                }`}
              />
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
