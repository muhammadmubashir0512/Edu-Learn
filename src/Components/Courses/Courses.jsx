import React, { useState } from 'react'
import NavbarSearch from '../Dashboard/NavbarSearch'
import RecomendedCourses from '../Dashboard/RecomendedCourse'
import LearningProgress from '../Dashboard/LearningProgress'
import SideBar from '../Dashboard/SideBar'
import CompletedCourse from './CompletedCourse'

const Courses = () => {

  const [searchTerms, setSearchTerms] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] overflow-x-hidden">

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

        <NavbarSearch 
          setSearchTerms={setSearchTerms}
          onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">

          <div className="flex flex-col gap-6">
            <LearningProgress searchTerms={searchTerms}/>
            <CompletedCourse searchTerms={searchTerms}/>
            <RecomendedCourses searchTerms={searchTerms}/>
          </div>

        </div>

      </div>

    </div>
  )
}
export default Courses
