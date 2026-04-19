import React, {useState} from 'react'
import NavbarSearch from '../Dashboard/NavbarSearch'
import SideBar from '../Dashboard/SideBar'
import alex from '../../assets/Subsriptiondata/alex.png'
import brook from '../../assets/Subsriptiondata/brook.png'
import fletcher from '../../assets/Subsriptiondata/fletcher.png'
import marc from '../../assets/Subsriptiondata/marc.png'
import leon from '../../assets/Subsriptiondata/leon.png'
import studentsIcon from '../../assets/Subsriptiondata/studentsIcon.png'
import { useNavigate } from 'react-router-dom'

const SubscriptionPlan = () => {

  const [searchTerms, setSearchTerms] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate('')

  const instructorsData = [
    {
      id: 71, name: "Alex Thompson", role: "UX Expert", students: "1.3k", courses: 8, date: "20 Nov 2025", image: alex, icon: studentsIcon, payment: "$25"
    },
    {
      id: 72, name: "Brook", role: "Designer", students: "1.3k", courses: 8, date: "20 Nov 2025", image: brook, icon: studentsIcon, payment: "$15"
    },
    {
      id: 73, name: "Fletcher", role: "Consultant", students: "1.3k", courses: 8, date: "20 Nov 2025", image: fletcher, icon: studentsIcon, payment: "$17"
    },
    {
      id: 74, name: "Marc", role: "Officer", students: "1.3k", courses: 8, date: "20 Nov 2025", image: marc, icon: studentsIcon, payment: "$30"
    },
    {
      id: 75, name: "Leon", role: "Liaison", students: "1.3k", courses: 8, date: "20 Nov 2025",image: leon, icon: studentsIcon, payment: "$45"
    },
  ];

  const filteredData = instructorsData.filter((sub) => sub.name.toLowerCase().includes(searchTerms.toLowerCase()))

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

        <NavbarSearch 
          setSearchTerms={setSearchTerms}
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className='flex flex-col gap-[32px] p-4 md:p-6 lg:p-8'>
          <div className='flex flex-col gap-[32px] '>
            {/* Heading and description */}
            <div className='flex flex-col gap-[8px] lg:gap-[12px]'>
                <h2 className='text-[20px] lg:text-[24px] font-semibold text-gray-900'>My Subscription</h2>
                <p className='text-[#8F8F8F] text-[14px] lg:text-[16px] font-normal leading-relaxed'>
                  Manage your plan and billing settings.
                </p>
            </div>

            {/* Renew Plan */}
            <div className='w-full'>
              <div className='bg-[#F5EFFF] border border-[#7E57C2] flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 rounded-lg p-4 w-full max-w-2xl mx-auto'>
                <div className='flex flex-col gap-1'>
                  <p className='text-[#1F2937] text-sm md:text-base font-medium '>You are currently on the Monthly Plan with Alex Jhonsan</p>
                  <p className='text-[#7E57C2] text-xs md:text-sm '>Next billing date:30 Sept</p>
                </div>
                <button
                  onClick={()=>navigate('/upgradePlan')}
                  className='bg-[#7E57C2] cursor-pointer rounded-md w-full md:w-auto text-white text-sm py-2 px-2'>Renew Plan</button>
              </div>
            </div>

            {/* Subscribed Creator */}
            <div className='flex flex-col bg-white rounded-[8px] gap-[32px] pt-[20px] pr-[24px] pl-[24px] pb-[20px] w-full overflow-x-auto'>
      
              {/* Header Section */}
              <div className='flex flex-row place-content-between items-center max-md:flex-col max-md:gap-[16px] max-md:items-start'>
                {/* Heading and description */}
                <div className='flex flex-col gap-[10px]'>
                  <h1 className='text-[24px] font-semibold max-md:text-[20px]'>Subscribed Creator</h1>
                  <p className='text-[16px] font-normal text-[#8F8F8F] max-md:text-[14px]'>View plan of your subscribed creator</p>
                </div>
              </div>

              {/* Courses Details*/}
              <div className='overflow-x-auto'>
                <div className='min-w-[800px] lg:min-w-full'>
                  {/* Header Row */}
                  <div>
                    <div className='grid grid-cols-6 bg-white border border-[#E4E4E7] rounded-t-lg w-full p-[16px]  max-md:p-[12px]'>
                      <p className='text-[16px] font-medium text-[#71717A] max-md:text-[14px]'>Course Name</p>
                      <p className='text-[16px] font-medium text-[#71717A] max-md:text-[14px]'>Instructor</p>
                      <p className='text-[16px] font-medium text-[#71717A] max-md:text-[14px]'>Date Joined</p>
                      <p className='text-[16px] font-medium text-[#71717A] max-md:text-[14px]'>Progress</p>
                      <p className='text-[16px] font-medium text-[#71717A] max-md:text-[14px]'>Status</p>
                      <p className='text-[16px] font-medium text-[#71717A] max-md:text-[14px]'>Billing</p>
                    </div>
                    
                    {/* subscribed Rows */}
                    <div className='flex flex-col'>
                      {
                        filteredData.map((item) =>(
                          <div className='grid grid-cols-6 items-center bg-white border border-[#E4E4E7]  w-full p-[16px]  max-md:p-[12px]'>
                              {/* creator profile and name */}
                              <div key={item.id} className='flex flex-row gap-[8px] items-center'>
                                <img src={item.image} alt="" className='w-[36px] h-[36px]'/>
                                <p className='text-[#09090B] text-[14px] font-normal truncate'>{item.name}</p>
                              </div>

                              {/* creator role's */}
                              <div>
                                <p className='text-[#09090B] text-[14px] font-normal truncate'>{item.role}</p>
                              </div>

                              {/* creator subscriber */}
                              <div className='flex flex-row gap-[8px] items-center'>
                                <img src={item.icon} alt="" className='w-[16px] h-[16px]'/>
                                <p className='text-[#09090B] text-[14px] font-normal truncate'>{item.students}</p>
                              </div>

                              {/* purchased curses */}
                              <p className='text-[#09090B] text-[14px] font-normal truncate'>{item.courses} courses</p>

                              {/* date creator subscription */}
                              <p className='text-[#09090B] text-[14px] font-normal truncate'>{item.date}</p>

                              {/* Course payment */}
                              <p className='text-[#09090B] text-[14px] font-normal truncate'>{item.payment}</p>
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
    </div>
  )
}

export default SubscriptionPlan
