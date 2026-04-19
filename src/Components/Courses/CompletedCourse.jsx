import React from 'react'
import FullStack from '../../assets/RecomCourses/FullStack.png'
import Javascript from '../../assets/RecomCourses/Javascript.png'
import Animation from '../../assets/RecomCourses/Animation.png'

const CompletedCourse = (props) => {

    const CompleteCourse = [
          {
            image: FullStack, title:"Full-Stack Web Development with MERN", price:"Free", description: "Completed on 20 August 2025",
            name: "Dr Alex Thompson", level: "Advanced"
          },
          {
            image: Javascript, title:"Advanced JavaScript for Modern Web Development", price:"$15", description: "Completed on 20 August 2025",
            name: "Mrs Alya", level: "Advanced"
          },
          {
            image: Animation, title:"UI Animation Essentials with After Effects & Lottie", price:"$25", description: "Completed on 20 August 2025",
            name: "Mr Cummins", level: "Advanced"
          },
    ]

    const filteredCourse = CompleteCourse.filter((course) => course.title.toLowerCase().includes(props.searchTerms.toLowerCase()) || course.name.toLowerCase().includes(props.searchTerms.toLowerCase()))


  return (
    <div className='flex flex-col bg-white rounded-[8px] gap-[24px] sm:gap-[32px] pt-[16px] sm:pt-[20px] pr-[16px] sm:pr-[24px] pl-[16px] sm:pl-[24px] pb-[16px] sm:pb-[20px] w-full'>
        
        {/* Header Section */}
        <div className='flex flex-col gap-[16px]'>
            {/* Heading and description */}
            <div className='flex flex-col gap-[6px] sm:gap-[10px]'>
              <h1 className='text-[20px] sm:text-[24px] font-semibold'>Completed Courses</h1>
              <p className='text-[14px] sm:text-[16px] font-normal text-[#8F8F8F]'>Celebrate your Acheivements.</p>
            </div>
            
            {/* Courses Cards*/}
            <div className='flex flex-row gap-[24px] overflow-x-auto scrollbar-hide pb-4'>
                {filteredCourse.map((course, index) => (
                  <div key={index} className='flex flex-col gap-[16px] rounded-[8px] bg-white shadow p-[16px] w-[318px] flex-shrink-0 border border-[#E9E9E9]'>
                    
                    {/* Course Image */}
                    <img 
                      src={course.image} 
                      alt="" 
                      className='w-[286px] h-[150px] rounded-[6px] object-cover'
                    />
                    
                    {/* Title and Price Row */}
                    <div className='flex flex-row justify-between items-start gap-[13px]'>
                      <p className='text-[16px] font-medium w-[200px] line-clamp-2'>{course.title}</p>
                      <p className='text-[#10a313] font-semibold text-[12px]'>
                        {course.level}
                      </p>
                    </div>

                    {/* Description */}
                    <p className='text-[#8F8F8F] text-[14px] font-light line-clamp-2'>{course.description}</p>

                    {/* Instructor */}
                    <div className='flex flex-row gap-[8px] items-center'>
                      <img 
                        src={course.image}
                        alt=""
                        className='w-[32px] h-[32px] rounded-full object-cover'
                      />
                      <p className='text-[#8E8E8E] text-[14px] font-normal'>
                        {course.name}
                      </p>
                    </div>
                    
                    {/* Enroll Button */}
                    <button className='bg-[#7E57C2] text-white border rounded-[6px] border-[#D9D9D9] text-[16px] font-medium text-[#263137] text-center py-[8px] cursor-pointer'>
                      View Certifacte
                    </button>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CompletedCourse