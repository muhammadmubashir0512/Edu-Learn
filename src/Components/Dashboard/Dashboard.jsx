import React, {useState} from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Welcomenote from './Welcomenote'
import LearningProgress from './LearningProgress'
import UpcomingWebinars from './UpcomingWebinars'
import RecomendedCourses from './RecomendedCourse'
import Scehduleweb from '../Webinars/Scehduleweb'

const Dashboard = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

        {/* Pass control */}
        <Navbar
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className='flex flex-col gap-[24px] md:gap-[32px] pt-[16px] md:pt-[24px] pr-[16px] md:pr-[32px] pl-[16px] md:pl-[32px] pb-[16px] md:pb-[24px]'>

          <Welcomenote />

          <div className="flex flex-col gap-6">
            <LearningProgress />
            <Scehduleweb />
            <RecomendedCourses />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard