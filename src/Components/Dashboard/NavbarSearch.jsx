import React, { useState, useEffect } from 'react'
import Notification from '../../assets/Notification.png'
import DownIcon from '../../assets/DownIcon.svg'

const NavbarSearch = ({ onMobileMenuClick, setSearchTerms }) => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
    const userEmail = loggedInUser?.Email

    const allUser = JSON.parse(localStorage.getItem("Users")) || []
    const currentUser = allUser.find((user) => user.Email === userEmail)

    if (currentUser) {
      const saveimage = localStorage.getItem(`userimage_${userEmail}`)
      setImage(saveimage)
      setName(currentUser?.FullName)
      setRole(currentUser?.Role)
    }
  }, [])

  return (
    <div className="w-full">

      {/* NAVBAR */}
      <div className="flex items-center justify-between gap-3 p-3 md:p-5 border-b border-[#E9E9E9] bg-white shadow-sm">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 flex-1">

          {/* HAMBURGER Mobile */}
          <button
            onClick={onMobileMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* SEARCH BAR - desktop */}
          <div className="flex-1 md:flex-none">
            <input 
              className='w-full md:w-[350px] lg:w-[450px] xl:w-[595px] h-[40px] md:h-[44px] lg:h-[52px] p-3 md:p-[14px] border rounded-[8px] border-[#7E57C2] text-[#B3B3B3] text-sm md:text-base font-normal bg-white focus:ring-2 focus:ring-[#7E57C2] focus:outline-none'
              type="search"
              placeholder="Search Courses, Webinar's and Creators"
              onChange={(e) => setSearchTerms(e.target.value)}
            />
          </div>

          {/* DATE - Desktop only */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <span className="text-xl"></span>
            <p className="text-base font-medium text-gray-900 whitespace-nowrap">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">

          {/* NOTIFICATION ICON */}
          {/* <img
            className="w-8 h-8 md:w-9 md:h-9 p-1.5 md:p-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            src={Notification}
            alt=""
          /> */}

          {/* USER PROFILE */}
          <div className="flex items-center gap-1 md:gap-2 bg-[#efefef] rounded-full p-1 md:p-[7px] px-2">

            <img
              src={image || 'https://via.placeholder.com/36'}
              alt="profile"
              className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full object-cover bg-gray-400"
            />

            {/* Name & Role - Hidden on small, visible on md+ */}
            <div className="hidden md:block space-y-0.5 min-w-0 pr-2">
              <p className="text-xs lg:text-sm font-semibold text-gray-900 truncate max-w-[80px] lg:max-w-none">
                {name}
              </p>
              <p className="text-[10px] lg:text-xs text-[#7E57C2] truncate">
                {role}
              </p>
            </div>

            {/* <img
              src={DownIcon}
              alt="down"
              className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 opacity-60"
            /> */}

          </div>

        </div>

      </div>

    </div>
  )
}

export default NavbarSearch