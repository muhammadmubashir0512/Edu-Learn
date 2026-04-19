import React, { useState, useEffect } from 'react'
import Notification from '../../assets/Notification.png'
import DownIcon from '../../assets/DownIcon.svg'

const Navbar = ({ onMobileMenuClick }) => {
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
      <div className="flex items-center justify-between p-4 md:p-5 border-b border-[#E9E9E9] bg-white shadow-sm">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">

          {/* MOBILE */}
          <button
            onClick={onMobileMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* DESKTOP  */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xl"></span>
            <p className="text-lg font-medium text-gray-900">
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
        <div className="flex items-center gap-3 md:gap-4">

          {/* NOTIFICATION */}
          {/* <img
            className="w-9 h-9 md:w-11 md:h-11 p-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            src={Notification}
            alt=""
          /> */}

          {/* USER */}
          <div className="flex items-center gap-2 bg-[#efefef] rounded-full p-2 md:p-[7px]">

            <img
              src={image || 'https://via.placeholder.com/36'}
              alt="profile"
              className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover bg-gray-400"
            />

            <div className="hidden sm:block space-y-0.5 min-w-0 pr-2">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {name}
              </p>
              <p className="text-xs text-[#7E57C2] truncate">
                {role}
              </p>
            </div>

            {/* <img
              src={DownIcon}
              alt="down"
              className="w-4 h-4 md:w-5 md:h-5 opacity-60"
            /> */}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar