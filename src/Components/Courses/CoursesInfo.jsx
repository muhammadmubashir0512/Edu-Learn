import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'
import Back from '../../assets/Courseinfo/Back.png'
import Next from '../../assets/Courseinfo/Next.svg'
import Timebar from '../../assets/Courseinfo/Timebar.png'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import certificate from '../../assets/Courseinfo/certificate.png'
import community from '../../assets/Courseinfo/community.png'
import mobile_web from '../../assets/Courseinfo/mobile_web.png'
import resources from '../../assets/Courseinfo/resources.png'
import rating from '../../assets/Courseinfo/rating.png'
import user from '../../assets/Courseinfo/user.png'
import playtag from '../../assets/Courseinfo/playtag.png'
import { allCoursesData } from './coursesData'

const Courses = () => {

    const navigate = useNavigate("")
    const {id} = useParams()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const course = allCoursesData.find(c => c.id === parseInt(id))

    const included = [
        {img: certificate, tag: "Certificate of Completion"},
        {img: community, tag: "Community Support"},
        {img: resources, tag: "Downloadable Resources"},
        {img: mobile_web, tag: "Mobile & Web Access"},
    ]

    const content1 = [{content: "Course Video 1", time: "2:00"},{content: "Course Video 2", time: "2:00"},{content: "Course Video 3", time: "2:00"}]
    const content2 = [{content: "Course Video 4", time: "2:00"},{content: "Course Video 5", time: "2:00"},{content: "Course Video 6", time: "2:00"},{content: "Course Video 7", time: "2:00"}]
    const content3 = [{content: "Course Video 8", time: "2:00"},{content: "Course Video 9", time: "2:00"},{content: "Course Video 10", time: "2:00"},{content: "Course Video 11", time: "2:00"}]
    const content4 = [{content: "Course Video 12", time: "2:00"},{content: "Course Video 13", time: "2:00"},{content: "Course Video 14", time: "2:00"},{content: "Course Video 15", time: "2:00"}]
    const content5 = [{content: "Course Video 16", time: "2:00"},{content: "Course Video 17", time: "2:00"},{content: "Course Video 18", time: "2:00"}]

    const allPhases = [
        { title: "Phase 1", content: content1 },
        { title: "Phase 2", content: content2 },
        { title: "Phase 3", content: content3 },
        { title: "Phase 4", content: content4 },
        { title: "Phase 5", content: content5 }
    ]

  return (
    <div className='flex w-full min-h-screen bg-[#F9FAFB]'>
      
      {/* Sidebar */}
      <div className={`fixed h-screen z-20 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <SideBar />
      </div>

      {/* Overlay*/}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <div className={`flex-1 min-w-0 transition-all duration-300 ${isSidebarOpen ? 'ml-0' : 'ml-0'} lg:ml-[275px]`}>
        <Navbar onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className='flex flex-col gap-[24px] md:gap-[32px] pt-[16px] md:pt-[24px] pr-[16px] md:pr-[32px] pl-[16px] md:pl-[32px] pb-[16px] md:pb-[24px]'>
          
          {/* back to courses*/}
          <div className='flex flex-row flex-wrap gap-[6px] md:gap-[10px] items-center'>
            <img
                onClick={()=>navigate('/Courses')}
                src={Back}
                alt="" 
                className='w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer'
            />
            <h2 className='text-[18px] md:text-[24px] font-semibold'>Courses</h2>
            <img 
                src={Next}
                alt="" 
                className='w-[16px] h-[16px] md:w-[20px] md:h-[20px]'
            />
            <p className='text-[#9C9C9C] text-[11px] md:text-[13px] font-normal truncate flex-1'>{course?.title}</p>
          </div>          
          
          {/* Main Content*/}
          <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[24px]'>
            
            {/* Left Column */}
            <div className='flex flex-col gap-[20px] lg:gap-[24px] flex-1'>
              
              {/* Video Player */}
              <div className='relative w-full bg-black rounded-[12px] overflow-hidden'>
                <img 
                    src={course?.icon} 
                    alt="" 
                    className='w-full h-[200px] md:h-[280px] lg:h-[320px] object-cover'
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className='absolute bottom-3 left-3 right-3 lg:bottom-5 lg:left-5 lg:right-5'>
                    <img 
                        src={Timebar}
                        alt="" 
                        className='w-full'
                    />
                </div>
              </div>

              {/* Course Title & Description */}
              <div className='flex flex-col gap-[8px] lg:gap-[12px]'>
                <h2 className='text-[20px] lg:text-[28px] font-bold text-gray-900'>{course?.title}</h2>
                <p className='text-[#555] text-[14px] lg:text-[16px] leading-relaxed'>
                    This comprehensive course covers everything you need to know to master this subject. With practical examples, real-world projects, and expert guidance, you'll gain the skills needed to excel in your career.
                </p>
              </div>

              {/* What's Included */}
              <div className='border rounded-xl border-[#E0E0E0] p-5 flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>What's Included</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {included.map((item, idx) => (
                    <div key={idx} className='flex items-center gap-3'>
                      <img src={item.img} alt="" className='w-8 h-8' />
                      <span className='text-[#444] text-sm'>{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor Section */}
              <div className='border rounded-xl border-[#E0E0E0] p-5 flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>Your Instructor</h2>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <img src={course?.icon} alt="" className='w-14 h-14 rounded-full object-cover' />
                  <div>
                    <p className='text-lg font-semibold'>{course?.instructor}</p>
                    <p className='text-[#7E57C2] text-sm mb-2'>Instructor</p>
                    <p className='text-[#555] text-sm leading-relaxed'>
                      {course?.instructor} is an experienced software engineer and educator with over a decade of expertise in full-stack development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className='border rounded-xl border-[#E0E0E0] p-5 flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>Student Reviews</h2>
                {[1, 2, 3].map((_, idx) => (
                  <div key={idx} className='flex flex-col sm:flex-row gap-3 p-4 shadow rounded-lg'>
                    <img src={user} alt="" className='w-12 h-12 rounded-full' />
                    <div>
                      <p className='font-semibold'>Steve Smith</p>
                      <img src={rating} alt="" className='w-20 h-4 my-1' />
                      <p className='text-[#555] text-sm'>
                        Excellent course! {course?.instructor} explains everything clearly and the projects are very practical.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className='w-full lg:w-[360px] xl:w-[400px] flex-shrink-0'>
              <div className='border border-[#E0E0E0] rounded-xl p-4 bg-white'>
                <button className='w-full bg-[#F3ECFF] text-[#7E57C2] text-sm font-semibold py-2 rounded-lg mb-4'>
                  Course Content
                </button>
                
                <div className='space-y-3'>
                  {allPhases.map((phase, idx) => (
                    <div key={idx} className='shadow rounded-lg overflow-hidden'>
                      <div className='bg-[#7E57C2] text-white font-medium px-3 py-2 text-sm'>
                        {phase.title}
                      </div>
                      <div className='bg-white p-2 space-y-2'>
                        {phase.content.map((video, vIdx) => (
                          <div key={vIdx} className='flex items-center gap-3 p-2'>
                            <img src={playtag} alt="" className='w-5 h-5' />
                            <div className='flex-1'>
                              <p className='text-xs font-medium'>{video.content}</p>
                              <p className='text-[#888] text-[10px]'>{video.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses