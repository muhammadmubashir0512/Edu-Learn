import React, { useState } from 'react'
import NavbarSearch from '../Dashboard/NavbarSearch'
import SideBar from '../Dashboard/SideBar'
import UpcomingWeb from './UpcomingWeb'
import Scehduleweb from './Scehduleweb'

const Webinars = () => {

  const [searchTerms, setSearchTerms] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex w-full min-h-screen bg-[#F9FAFB]'>
      
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className={`fixed h-screen z-20 transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:z-0`}>
        <SideBar />
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <div className='flex-1 min-w-0  h-screen overflow-y-auto'>
        <NavbarSearch 
          setSearchTerms={setSearchTerms}
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <div className='flex flex-col gap-[24px] md:gap-[32px] pt-[16px] md:pt-[24px] pr-[16px] md:pr-[32px] pl-[16px] md:pl-[32px] pb-[16px] md:pb-[24px]'>
          <div className='flex flex-col gap-[20px] md:gap-[24px]'>
            <UpcomingWeb />
            <Scehduleweb searchTerms={searchTerms} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webinars