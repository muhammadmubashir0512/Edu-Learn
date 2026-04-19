import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Live from '../../assets/WebinarSection/Live.png'
import Liveprof from '../../assets/WebinarSection/Liveprof.png'
import webIcon from '../../assets/WebinarData/webIcon.svg'
import WebTime from '../../assets/WebinarData/WebTime.svg'
import remind from '../../assets/WebinarSection/remind.png'
  
const Scehduleweb = (props) => {

  const webinarData = [
    {
      id: 1,
      instructor: "Joss Butler",
      role: "AI/ML Consultant",
      title: "Ui/UX Design Fundamentals",
      description: "Master the principles of user interface and user experience design and enhance your design skill.",
      date: "May 01, 2026",
      time: "4:00 PM",
      duration: "90 mins",
      image: Liveprof
    },
    {
      id: 2,
      instructor: "Sarah Johnson",
      role: "Full-Stack Developer",
      title: "Advanced React Patterns",
      description: "Learn advanced React concepts and patterns for building scalable apps.",
      date: "May 15, 2026",
      time: "2:00 PM",
      duration: "120 mins",
      image: Liveprof
    },
    {
      id: 3,
      instructor: "Dr. Michael Chen",
      role: "Data Scientist",
      title: "Machine Learning Basics",
      description: "Introduction to machine learning algorithms and their applications.",
      date: "Jun 05, 2026",
      time: "11:00 AM",
      duration: "90 mins",
      image: Liveprof
    },
    {
      id: 4,
      instructor: "Emma Watson",
      role: "UI/UX Designer",
      title: "Design Systems Masterclass",
      description: "Learn to create and maintain scalable design systems that streamline product development across teams and ensure consistency.",
      date: "Jun 20, 2026",
      time: "3:30 PM",
      duration: "75 mins",
      image: Liveprof
    }
  ]
    let filteredWebinar = webinarData
    if (props.searchTerms && props.searchTerms.trim() !== "") {
      filteredWebinar = webinarData.filter(web => 
        web.title.toLowerCase().includes(props.searchTerms.toLowerCase())
      )
    }
    
  return (
    <div className='flex flex-col bg-white rounded-[8px] gap-[24px] sm:gap-[32px] pt-[16px] sm:pt-[20px] pr-[16px] sm:pr-[24px] pl-[16px] sm:pl-[24px] pb-[16px] sm:pb-[20px] w-full'>
      <Toaster/>
      
      {/* Header Section */}
      <div className='flex flex-row place-content-between items-center max-md:flex-col max-md:gap-[16px] max-md:items-start'>
        <div className='flex flex-col gap-[8px] sm:gap-[10px]'>
          <h1 className='text-[20px] sm:text-[24px] font-semibold max-md:text-[20px]'>Schedule Webinar</h1>
          <p className='text-[14px] sm:text-[16px] font-normal text-[#8F8F8F] max-md:text-[14px]'>Stay ahead with our next learning sessions</p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className='overflow-x-auto scrollbar-hide pb-4'>
        <div className='flex flex-row gap-[20px] sm:gap-[24px] w-max'>
          
          {filteredWebinar.map((webinar) => (
            <div key={webinar.id} className='flex flex-col gap-[20px] sm:gap-[24px] shadow bg-white p-[16px] sm:p-[24px] w-[320px] sm:w-[380px] md:w-[420px] lg:w-[449px] rounded-[12px] flex-shrink-0'>
              
              {/* Instructor Info */}
              <div className='flex flex-row gap-[10px] items-center'>
                <img src={webinar.image} alt="" className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full object-cover'/>
                <div className='flex flex-col gap-[2px] sm:gap-[4px]'>
                  <p className='text-[#1F2937] text-[16px] sm:text-[20px] font-medium'>{webinar.instructor}</p>
                  <p className='text-[#7E57C2] text-[12px] sm:text-[14px] font-normal'>{webinar.role}</p>
                </div>
              </div>

              {/* Webinar Details */}
              <div className='flex flex-col gap-[8px] sm:gap-[10px]'>
                <p className='text-[14px] sm:text-[16px] font-medium'>{webinar.title}</p>
                <p className='text-[#747474] text-[11px] sm:text-[12px] font-normal line-clamp-2'>{webinar.description}</p>
              </div>

              {/* Date & Time */}
              <div className='flex flex-col gap-[12px] sm:gap-[16px]'>
                <div className='flex flex-row items-center gap-[5px]'>
                  <img src={webIcon} alt="" className='h-[18px] w-[18px] sm:h-[24px] sm:w-[24px]'/>
                  <p className='text-[14px] sm:text-[16px] text-[#8E8E8E] font-normal'>{webinar.date}</p>
                </div>

                <div className='flex flex-row items-center gap-[15px] sm:gap-[20px] flex-wrap'>
                  <div className='flex flex-row items-center gap-[5px]'>
                    <img src={WebTime} alt="" className='h-[18px] w-[18px] sm:h-[24px] sm:w-[24px]'/>
                    <p className='text-[14px] sm:text-[16px] text-[#8E8E8E] font-normal'>{webinar.time}</p>
                  </div>

                  <div className='flex flex-row items-center gap-[8px] sm:gap-[10px]'>
                    <div className='w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#D9D9D9] rounded-full'></div>
                    <p className='text-[14px] sm:text-[16px] text-[#8E8E8E] font-normal'>{webinar.duration}</p>
                  </div>
                </div>
              </div>

              {/* Remind Me Button */}
              <div
                onClick={() => toast.success(`Reminder set for ${webinar.title}`)}
                className='cursor-pointer bg-white border border-[#7E57C2] rounded-[8px] flex flex-row gap-[8px] sm:gap-[10px] py-[7px] sm:py-[9px] items-center justify-center hover:bg-[#F3ECFF] transition-all duration-300'
              >
                <img src={remind} alt="" className='w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]'/>
                <p className='text-[#7E57C2] text-[16px] sm:text-[20px] font-medium'>Remind Me</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Scehduleweb