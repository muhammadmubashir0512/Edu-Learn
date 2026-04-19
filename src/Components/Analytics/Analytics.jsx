// import React from 'react'
// import Navbar from '../Dashboard/Navbar'
// import SideBar from '../Dashboard/SideBar'
// import learningprogress from '../../assets/Analytics/learningprogress.png'
// import fire from '../../assets/Analytics/fire.png'
// import hours from '../../assets/Analytics/hours.png'
// import inprogess from '../../assets/Analytics/inprogess.png'
// import insight from '../../assets/Analytics/insight.png'
// import interest from '../../assets/Analytics/interest.png'

// const Analytics = () => {

//   return (
//     <div className='flex w-full min-h-screen bg-[#F9FAFB]'>
//       <div className='fixed h-screen z-10'>
//         <SideBar/>
//       </div>
      
//       <div className='flex-1 ml-[275px] min-w-0'>
//         <Navbar />
//         <div className='flex flex-col gap-[32px] pt-[24px] pr-[32px] pl-[32px] pb-[24px]'>
//           <div className='flex flex-col gap-[24px]'>
//             <div className='grid grid-cols-2 grid-rows-2 gap-[24px]  '>

//                 {/* Learning Progress */}
//                 <div className='border border-[#E0E0E0] rounded-[16px] p-[24px] flex flex-col gap-[32px] h-[300px]'>
//                     <p className='text-[#100F14] text-[24px] font-semibold'>Learning Progress</p>
//                     <div className='flex flex-row gap-[24px]'>
//                         <div>
//                             <img src={learningprogress} alt="" className='w-[125px] h-[125px]'/>
//                         </div>
//                         <div className='flex flex-col gap-[27px]'>
//                             <div className='flex flex-col gap-[10px]'>
//                                 <p className='text-[#8F8F8F] text-[16px] font-normal'>Current Progress bar</p>
//                                 <p className='text-[20px] font-medium'>7 of 10 Module completed.</p>
//                             </div>
//                             <div className='border rounded-[8px] bg-[#FFFEFE] border-[#FF0000] flex flex-row gap-[10px] py-[15px] px-[10px] items-center w-[315px]'>
//                                 <img src={fire} alt="" className='w-[24px] h-[24px]'/>
//                                 <div className='flex flex-col gap-[3px]'>
//                                     <p className='text-[#FF0000] text-[16px] font-medium'>5 days streak</p>
//                                     <p className='text-[#FF0000] text-[13px] font-normal'>Keep it up</p>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 {/* Course Completion */}
//                 <div className='border border-[#E0E0E0] rounded-[16px] flex flex-col gap-[32px] p-[24px] h-[300px]'>
//                     <p className='text-[#100F14] text-[24px] font-semibold'>Course Completion</p>
//                     <div className='flex flex-col gap-[10px]'>
//                         <div className='flex flex-row place-content-between'>
//                             <div className='flex flex-col gap-[0px]'>
//                                 <p className='text-[#7E57C2] text-[16px] font-semibold'>5</p>
//                                 <p className='text-[#808080] text-[12px] font-normal'>of 10 course completed</p>
//                             </div>
//                             <div className='flex flex-col gap-[0px] text-right'>
//                                 <p className='text-[#10B981] text-[16px] font-semibold'>50%</p>
//                                 <p className='text-[#808080] text-[12px] font-normal'>Completion rate</p>
//                             </div>
//                         </div>
//                         <div className='w-full bg-gray-200 rounded-full h-3'>
//                             <div className='bg-[#7E57C2] rounded-full h-3' style={{ width: '50%' }}></div>
//                         </div>
//                     </div>
//                     <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[17px] w-full'>
  
//                     {/* Avg per course */}
//                     <div className='border rounded-[8px] bg-[#F9F6FF] border-[#7E57C2] flex flex-row gap-[10px] py-[8px] px-[10px] items-center w-full sm:w-[315px] h-[71px]'>
//                         <img src={hours} alt="" className='w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]'/>
//                         <div className='flex flex-col gap-[2px]'>
//                             <p className='text-[#7E57C2] text-[14px] sm:text-[16px] font-medium'>12 hrs</p>
//                             <p className='text-[#7E57C2] text-[11px] sm:text-[13px] font-normal'>Avg per course</p>
//                         </div>
//                     </div>
                    
//                     {/* In Progress */}
//                     <div className='border rounded-[8px] bg-[#FFFCF4] border-[#FBBF24] flex flex-row gap-[10px] py-[8px] px-[10px] items-center w-full sm:w-[315px] h-[71px]'>
//                         <img src={inprogess} alt="" className='w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]'/>
//                         <div className='flex flex-col gap-[2px]'>
//                             <p className='text-[#FBBF24] text-[14px] sm:text-[16px] font-medium'>5</p>
//                             <p className='text-[#FBBF24] text-[11px] sm:text-[13px] font-normal'>In Progress</p>
//                         </div>
//                     </div>
  
//                     </div>
//                 </div>

//                 {/* Webinar's attented */}
//                 <div className='border border-[#E0E0E0] rounded-[16px] flex flex-col gap-[24px] sm:gap-[32px] p-[16px] sm:p-[24px] w-full '>
  
//                     {/* Heading */}
//                     <p className='text-[#100F14] text-[20px] sm:text-[24px] font-semibold'>Webinars Attended</p>
                    
//                     {/* Progress Section */}
//                     <div className='flex flex-col gap-[10px]'>
                        
//                         {/* Stats Row */}
//                         <div className='flex flex-row justify-between items-start'>
                        
//                         {/* Left Side */}
//                         <div className='flex flex-col gap-[0px]'>
//                             <p className='text-[#7E57C2] text-[20px] sm:text-[24px] font-semibold'>5</p>
//                             <p className='text-[#808080] text-[10px] sm:text-[12px] font-normal'>of 10 Webinar's watched</p>
//                         </div>
                        
//                         {/* Right Side */}
//                         <div className='flex flex-col gap-[0px] text-right'>
//                             <p className='text-[#10B981] text-[20px] sm:text-[24px] font-semibold'>50%</p>
//                             <p className='text-[#808080] text-[10px] sm:text-[12px] font-normal'>Completion rate</p>
//                         </div>
//                         </div>
                        
//                         {/* Progress Bar */}
//                         <div className='w-full bg-gray-200 rounded-full h-2 sm:h-3'>
//                         <div 
//                             className='bg-[#7E57C2] rounded-full h-2 sm:h-3 transition-all duration-300'
//                             style={{ width: '50%' }}
//                         ></div>
//                         </div>
//                     </div>
                    
//                     {/* Learning Insight Card */}
//                     <div className='rounded-[8px] bg-[#F1FFFA] flex flex-row gap-[10px] py-[12px] sm:py-[15px] px-[10px] items-start w-full'>
//                         <img src={insight} alt="" className='w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mt-1'/>
//                         <div className='flex flex-col gap-[2px] sm:gap-[3px] flex-1'>
//                         <p className='text-[#100F14] text-[16px] sm:text-[20px] font-medium'>Your Learning Insight</p>
//                         <p className='text-[#808080] text-[11px] sm:text-[12px] font-medium leading-relaxed'>
//                             Track your consistency, preferences, and progress to shape a smarter learning journey
//                         </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Personalized insight */}
//                 <div className='border border-[#E0E0E0] rounded-[16px] p-[24px] flex flex-col gap-[32px] w-full'>
//                     {/* Header */}
//                     <p className='text-[#100F14] text-[24px] font-semibold'>Personalized Insight</p>
                    
//                     {/* Main Content */}
//                     <div className='flex flex-col lg:flex-row gap-[24px]'>
                        
//                         {/* Left Side - Learning Insight */}
//                         <div className='flex-1 rounded-[8px] bg-[#F1FFFA] flex flex-row gap-[10px] py-[15px] px-[10px] items-start'>
//                         <img src={interest} alt="" className='w-[24px] h-[24px] mt-1'/>
//                         <div className='flex flex-col gap-[3px] flex-1'>
//                             <p className='text-[#100F14] text-[20px] font-medium'>Your Learning Insight</p>
//                             <p className='text-[#808080] text-[12px] font-medium leading-relaxed'>
//                             Track your consistency, preferences, and progress to shape a smarter learning journey
//                             </p>
//                         </div>
//                         </div>
                        
//                         {/* Right Side - Your Interest */}
//                         <div className='flex-1 rounded-[8px] bg-[#FFFCF4] p-[15px]'>
//                         <div className='flex flex-col gap-[12px]'>
                            
//                             {/* Interest Header */}
//                             <div className='flex flex-row items-center gap-[8px]'>
//                             <img src={interest} alt="" className='w-[20px] h-[20px]'/>
//                             <p className='text-[#100F14] text-[16px] font-medium'>Your Interest</p>
//                             </div>
                            
//                             {/* Focus Areas */}
//                             <div className='flex flex-col gap-[8px]'>
//                             <p className='text-[#808080] text-[12px] font-medium'>Focus Areas</p>
//                             <div className='flex flex-row flex-wrap gap-[10px]'>
//                                 <span className='px-[12px] py-[4px] bg-white border border-[#E0E0E0] rounded-full text-[#7E57C2] text-[12px] font-medium'>
//                                 UI Design
//                                 </span>
//                                 <span className='px-[12px] py-[4px] bg-white border border-[#E0E0E0] rounded-full text-[#7E57C2] text-[12px] font-medium'>
//                                 Front End Development
//                                 </span>
//                             </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Analytics


import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'

import learningprogress from '../../assets/Analytics/learningprogress.png'
import fire from '../../assets/Analytics/fire.png'
import hours from '../../assets/Analytics/hours.png'
import inprogess from '../../assets/Analytics/inprogess.png'
import insight from '../../assets/Analytics/insight.png'
import interest from '../../assets/Analytics/interest.png'

const Analytics = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] overflow-x-hidden">

      {/* MOBILE SIDEBAR */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">

          <div 
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-[250px] h-full bg-white">
            <SideBar />
          </div>

        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block lg:w-[275px] shrink-0">
        <div className="h-full bg-white">
          <SideBar />
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 w-full min-w-0">

        <Navbar onMobileMenuClick={() => setIsOpen(true)} />

        <div className="p-4 md:p-6 lg:p-8 flex flex-col gap-6">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Learning Progress */}
            <div className="border border-[#E0E0E0] rounded-xl p-4 md:p-6 flex flex-col gap-6 bg-white">
              <p className="text-lg md:text-xl font-semibold">Learning Progress</p>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">

                <img src={learningprogress} className="w-24 h-24 md:w-[125px] md:h-[125px]" />

                <div className="flex flex-col gap-4 w-full">
                  
                  <div>
                    <p className="text-gray-500 text-sm">Current Progress</p>
                    <p className="text-base md:text-lg font-medium">7 of 10 Module completed.</p>
                  </div>

                  <div className="flex gap-3 p-3 border border-red-500 rounded-lg bg-red-50">
                    <img src={fire} className="w-5 h-5 md:w-6 md:h-6"/>
                    <div>
                      <p className="text-red-500 text-sm font-medium">5 days streak</p>
                      <p className="text-red-400 text-xs">Keep it up</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Course Completion */}
            <div className="border border-[#E0E0E0] rounded-xl p-4 md:p-6 flex flex-col gap-6 bg-white">
              <p className="text-lg md:text-xl font-semibold">Course Completion</p>

              <div className="flex justify-between">
                <div>
                  <p className="text-purple-600 font-semibold">5</p>
                  <p className="text-xs text-gray-500">of 10 completed</p>
                </div>

                <div className="text-right">
                  <p className="text-green-500 font-semibold">50%</p>
                  <p className="text-xs text-gray-500">Completion rate</p>
                </div>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-purple-600 h-3 rounded-full w-1/2"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

                <div className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-600 rounded-lg w-full">
                  <img src={hours} className="w-5 h-5"/>
                  <div>
                    <p className="text-purple-600 text-sm">12 hrs</p>
                    <p className="text-xs text-purple-500">Avg per course</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-500 rounded-lg w-full">
                  <img src={inprogess} className="w-5 h-5"/>
                  <div>
                    <p className="text-yellow-500 text-sm">5</p>
                    <p className="text-xs text-yellow-400">In Progress</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Webinars */}
            <div className="border border-[#E0E0E0] rounded-xl p-4 md:p-6 flex flex-col gap-6 bg-white">
              <p className="text-lg md:text-xl font-semibold">Webinars Attended</p>

              <div className="flex justify-between">
                <div>
                  <p className="text-purple-600 text-lg font-semibold">5</p>
                  <p className="text-xs text-gray-500">of 10 watched</p>
                </div>

                <div className="text-right">
                  <p className="text-green-500 text-lg font-semibold">50%</p>
                  <p className="text-xs text-gray-500">Completion</p>
                </div>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-purple-600 h-2 rounded-full w-1/2"></div>
              </div>

              <div className="flex gap-3 p-3 bg-green-50 rounded-lg">
                <img src={insight} className="w-5 h-5"/>
                <p className="text-sm text-gray-600">
                  Track your consistency and progress
                </p>
              </div>
            </div>

            {/* Personalized */}
            <div className="border border-[#E0E0E0] rounded-xl p-4 md:p-6 flex flex-col gap-6 bg-white">
              <p className="text-lg md:text-xl font-semibold">Personalized Insight</p>

              <div className="flex flex-col gap-4">

                <div className="flex gap-3 bg-green-50 p-3 rounded-lg">
                  <img src={interest} className="w-5 h-5"/>
                  <p className="text-sm">Your learning insights</p>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-2">Your Interest</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border rounded-full text-xs">UI Design</span>
                    <span className="px-3 py-1 bg-white border rounded-full text-xs">Frontend</span>
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

export default Analytics