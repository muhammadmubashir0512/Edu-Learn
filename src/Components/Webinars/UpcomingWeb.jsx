// import React from 'react'
// import toast, { Toaster } from 'react-hot-toast';
// import Live from '../../assets/WebinarSection/Live.png'
// import Liveprof from '../../assets/WebinarSection/Liveprof.png'
// import videoweb from '../../assets/WebinarSection/videoweb.png'
  
// const UpcomingWeb = () => {


//   return (
//     <div className='flex flex-col bg-white rounded-[8px] gap-[24px] sm:gap-[32px] pt-[16px] sm:pt-[20px] pr-[16px] sm:pr-[24px] pl-[16px] sm:pl-[24px] pb-[16px] sm:pb-[20px] w-full'>
//         <Toaster/>
        
//         {/* Header Section */}
//         <div className='flex flex-row place-content-between items-center max-md:flex-col max-md:gap-[16px] max-md:items-start'>
//             <div className='flex flex-col gap-[8px] sm:gap-[10px]'>
//                 <h1 className='text-[20px] sm:text-[24px] font-semibold max-md:text-[20px]'>Upcoming Webinar</h1>
//                 <p className='text-[14px] sm:text-[16px] font-normal text-[#8F8F8F] max-md:text-[14px]'>Join interactive session with expert instructors.</p>
//             </div>
//         </div>

//         {/* Webinar Content - Responsive */}
//         <div className='flex flex-col md:flex-row gap-[20px] md:gap-[24px] items-start md:items-center'>
            
//             {/* Webinar Image */}
//             <img 
//                 src={Live} 
//                 alt="" 
//                 className='w-full md:w-[300px] lg:w-[350px] h-[180px] sm:h-[200px] object-cover rounded-[8px]'
//             />
            
//             {/* Webinar Details */}
//             <div className='flex flex-col gap-[16px] sm:gap-[24px] flex-1'>
                
//                 {/* Title & Description */}
//                 <div className='flex flex-col gap-[8px] sm:gap-[10px]'>
//                     <p className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold'>Future of Machine Learning in 2025</p>
//                     <p className='text-[14px] sm:text-[16px] text-[#747474] font-normal'>Explore how Machine Learning is transforming industries in 2025 — join our exclusive webinar to stay ahead of the future.</p>
//                 </div>
                
//                 {/* Instructor & Join Button */}
//                 <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[20px] items-start sm:items-center justify-between'>
                    
//                     {/* Instructor Info */}
//                     <div className='flex flex-row gap-[10px] items-center'>
//                         <img 
//                             src={Liveprof} 
//                             alt="" 
//                             className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full object-cover'
//                         />
//                         <div className='flex flex-col gap-[2px] sm:gap-[4px]'>
//                             <p className='text-[#1F2937] text-[16px] sm:text-[20px] font-medium'>Joss Butler</p>
//                             <p className='text-[#7E57C2] text-[12px] sm:text-[14px] font-normal'>AI/ML Consultant</p>
//                         </div>
//                     </div>
                    
//                     {/* Join Button */}
//                     <div 
//                         onClick={()=> toast.error("Webinar will be Live on Scheduled time")}
//                         className='cursor-pointer flex flex-row items-center justify-center gap-[8px] sm:gap-[10px] rounded-[8px] bg-[#7E57C2] py-[10px] sm:py-[13px] px-[20px] sm:px-[24px] text-white text-[16px] sm:text-[20px] font-medium hover:bg-[#6c4ab8] transition-all duration-300 w-full sm:w-auto'
//                     >
//                         <img src={videoweb} alt="" className='w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]'/>
//                         Join
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default UpcomingWeb


import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Live from '../../assets/WebinarSection/Live.png'
import Liveprof from '../../assets/WebinarSection/Liveprof.png'
import videoweb from '../../assets/WebinarSection/videoweb.png'
  
const UpcomingWeb = () => {

  return (
    <div className='flex flex-col bg-white rounded-[8px] gap-[20px] md:gap-[32px] p-4 md:p-6 w-full'>
      <Toaster/>
      
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0'>
        <div className='flex flex-col gap-1 md:gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Upcoming Webinar</h1>
          <p className='text-sm md:text-base font-normal text-[#8F8F8F]'>Join interactive session with expert instructors.</p>
        </div>
      </div>

      {/* Webinar Content */}
      <div className='flex flex-col md:flex-row gap-5 md:gap-6 items-start md:items-center'>
        
        {/* Webinar Image */}
        <img 
          src={Live} 
          alt="" 
          className='w-full md:w-[280px] lg:w-[350px] h-[180px] md:h-[200px] object-cover rounded-lg'
        />
        
        {/* Webinar Details */}
        <div className='flex flex-col gap-4 md:gap-5 flex-1'>
          
          {/* Title & Description */}
          <div className='flex flex-col gap-2 md:gap-2.5'>
            <p className='text-lg md:text-xl lg:text-2xl font-semibold leading-tight'>
              Future of Machine Learning in 2025
            </p>
            <p className='text-sm md:text-base text-[#747474] font-normal leading-relaxed'>
              Explore how Machine Learning is transforming industries in 2025 — join our exclusive webinar to stay ahead of the future.
            </p>
          </div>
          
          {/* Instructor & Join Button */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center justify-between'>
            
            {/* Instructor Info */}
            <div className='flex flex-row gap-2.5 md:gap-3 items-center'>
              <img 
                src={Liveprof} 
                alt="" 
                className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover'
              />
              <div className='flex flex-col gap-0.5 md:gap-1'>
                <p className='text-sm md:text-base lg:text-lg font-semibold text-gray-900'>Joss Butler</p>
                <p className='text-xs md:text-sm text-[#7E57C2] font-normal'>AI/ML Consultant</p>
              </div>
            </div>
            
            {/* Join Button */}
            <div 
              onClick={() => toast.error("Webinar will be Live on Scheduled time")}
              className='cursor-pointer flex flex-row items-center justify-center gap-2 md:gap-2.5 rounded-lg bg-[#7E57C2] py-2.5 md:py-3 px-5 md:px-6 text-white text-sm md:text-base lg:text-lg font-medium hover:bg-[#6c4ab8] transition-all duration-300 w-full sm:w-auto'
            >
              <img src={videoweb} alt="" className='w-5 h-5 md:w-6 md:h-6' />
              Join
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWeb