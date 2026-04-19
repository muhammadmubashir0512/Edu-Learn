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
    <div className="flex min-h-screen bg-[#F9FAFB] overflow-x-hidden ms:gap-[32px]">

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
      <div className="flex-1 w-full min-w-0">

        {/* Pass control */}
        <Navbar
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">

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