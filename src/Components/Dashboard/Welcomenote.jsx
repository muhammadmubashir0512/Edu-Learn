import React, { useState, useEffect } from 'react'
import Activecourse from '../../assets/Welcome/Activecourse.png'
import Completecourse from '../../assets/Welcome/Completecourse.png'
import Webinars from '../../assets/Welcome/Webinars.png'
import Analytics from '../../assets/Welcome/Analytics.png'
import sample from '../../assets/Welcome/sample.png'


const Welcomenote = () => {

    const [name, setName] = useState("")
    
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
        const userEmail = loggedInUser?.Email
    
        const allUser = JSON.parse(localStorage.getItem("Users")) || []
        const currentUser = allUser.find((user)=> user.Email === userEmail)
    
        setName(currentUser?.FullName)
        
      }, [])

    const stats = [
        {name: "Active Courses", progress: 5, icon: Activecourse},
        {name: "Completed Course", progress: 5, icon: Completecourse},
        {name: "Webinars", progress: 5, icon: Webinars},
        {name: "Avg Progress", progress: '72%', icon: Analytics},
    ]

  return (
    <div className='bg-[#9272CC] rounded-[16px] p-[20px] md:p-[34px]'>
        <div className='flex flex-col gap-[24px] md:gap-[32px]'>
          
          <div className='flex flex-col md:flex-row w-full place-content-between items-start md:items-center gap-[16px] md:gap-0'>
            <div className='flex flex-col gap-[6px] md:gap-[8px]'>
                <h2 className='text-[24px] md:text-[32px] font-semibold text-white'>Welcome, {name}</h2>
                <p className='text-[14px] md:text-[16px] font-normal text-white'>Continue your learning journey and achieve your goals.</p>
            </div>

            <img 
              src={sample} 
              alt="" 
              className='w-[80px] h-[55px] md:w-[113px] md:h-[75px] rounded-[8px]'
            />
          </div>

          <div className='flex flex-row flex-wrap gap-[16px] md:gap-[24px] w-full'>
            {stats.map((item)=>(
              <div key={item.name} className='flex-1 min-w-[150px] md:min-w-[180px]'>
                <div className='flex flex-col justify-center items-center gap-[8px] md:gap-[10px] p-[12px] md:p-[16px] bg-[#7E57C2] rounded-[8px] h-[120px] md:h-[150px]'>
                  <img 
                      src={item.icon} 
                      alt=""
                      className='h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-[8px]' 
                    />
                    <div className='flex flex-col items-center gap-[0px]'>
                      <p className='text-[20px] md:text-[24px] font-semibold text-white'>{item.progress}</p>
                      <p className='text-[12px] md:text-[16px] font-normal text-white text-center'>{item.name}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Welcomenote