import React, { useState } from 'react'
import Htmlcourse from '../../assets/LearningProgess/Htmlcourse.png'
import MachineLearn from '../../assets/LearningProgess/MachineLearn.png'
import Mobile from '../../assets/LearningProgess/Mobile.png'
import UIUX from '../../assets/LearningProgess/UIUX.png'
import video from "../../assets/LearningProgess/video.jpg"
import CourseInfo from '../Courses/CoursesInfo'
import { useNavigate } from 'react-router-dom'
  
const LearningProgress = (props) => {

  const navigate = useNavigate("");
  const [isactive, setIsactive] = useState("All Courses");

  const buttonsName = [
    {name: "All Courses"},
    {name: "Free Courses"},
    {name: "Paid Courses"},
  ]

  const data = [
    {id: 1, vid:video,  icon: Htmlcourse, title: "HTML & CSS Basics", instructor: "Dr. Alex Thompson", datejoin: "30 Aug 2025", progress: "8/10", percent: "80%", status: "Paid"},
    {id: 2, vid:video, icon: UIUX, title: "Ui/Ux Principles", instructor: "Mr Andrew", datejoin: "30 Aug 2025", progress: "6/10", percent: "60%", status: "Free"},
    {id: 3, vid:video, icon: Mobile, title: "Mobile Development", instructor: "Mr John Ex", datejoin: "30 Aug 2025", progress: "4/10", percent: "40%", status: "Paid"},
    {id: 4, vid:video, icon: MachineLearn, title: "Machine Learning", instructor: "Mrs Alya", datejoin: "30 Aug 2025", progress: "9/10", percent: "90%", status: "Free"},
  ]

  let filteredData = data;
  if (props.searchTerms && props.searchTerms.trim() !== "") {
    filteredData = data.filter((course) => course.title.toLowerCase().includes(props.searchTerms.toLowerCase()) || course.instructor.toLowerCase().includes(props.searchTerms.toLowerCase()))
  }

  const finalData = filteredData.filter((course) => {
    if (isactive === "All Courses") return course;
    if (isactive === "Free Courses") return course.status === "Free";
    if (isactive === "Paid Courses") return course.status === "Paid";
    return null;
  })

  const allCourses = JSON.parse(localStorage.getItem("AllCourses")) || []
  const updateCourses = [...allCourses, ...finalData];
  // allCourses.push(data)
  localStorage.setItem("AllCourses", JSON.stringify(updateCourses))

  return (
    <div className='flex flex-col bg-white rounded-[8px] gap-[32px] pt-[20px] pr-[24px] pl-[24px] pb-[20px] w-full overflow-x-auto'>
      
      {/* Header Section */}
      <div className='flex flex-row place-content-between items-center max-md:flex-col max-md:gap-[16px] max-md:items-start'>
        {/* Heading and description */}
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[24px] font-semibold max-md:text-[20px]'>Learning Progress</h1>
          <p className='text-[16px] font-normal text-[#8F8F8F] max-md:text-[14px]'>See how far you've come in your learning.</p>
        </div>
        
        {/* Filter Buttons */}
        <div className='flex flex-row gap-[16px] items-center max-md:gap-[12px]'>
          {buttonsName.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => setIsactive(btn.name)}
              className={`cursor-pointer text-[12px] font-medium rounded-md p-[8px] transition-all duration-300 max-md:p-[6px] ${
                isactive === btn.name 
                  ? 'bg-[#7E57C2] text-white' 
                  : 'border border-[#D9D9D9] text-[#666] hover:bg-gray-50'
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Details*/}
      <div className='overflow-x-auto'>
        <div className='min-w-[800px] lg:min-w-full'>
          {/* Header Row */}
          <div className='grid grid-cols-6 bg-[#F7F2FF] w-full p-[16px] rounded-[8px] max-md:p-[12px]'>
            <p className='text-[16px] font-medium text-[#7E57C2] max-md:text-[14px]'>Course Name</p>
            <p className='text-[16px] font-medium text-[#7E57C2] max-md:text-[14px]'>Instructor</p>
            <p className='text-[16px] font-medium text-[#7E57C2] max-md:text-[14px]'>Date Joined</p>
            <p className='text-[16px] font-medium text-[#7E57C2] max-md:text-[14px]'>Progress</p>
            <p className='text-[16px] font-medium text-[#7E57C2] max-md:text-[14px]'>Status</p>
            <p className='text-[16px] font-medium text-[#7E57C2] max-md:text-[14px]'>Action</p>
          </div>

          {/* Course Rows */}
          <div className='flex flex-col gap-[8px] mt-[8px]'>
            {finalData.map((course, index) => (
              <div key={index} className='grid grid-cols-6 items-center p-[16px] rounded-[8px] border border-[#D9D9D9] hover:shadow-sm transition-shadow duration-200 max-md:p-[12px]'>
                
                {/* Course icon*/}
                <div className='flex flex-row items-center gap-[12px] max-md:gap-[8px]'>
                  <img
                    src={course.icon} 
                    alt=""
                    className='w-[40px] h-[40px] rounded-[6px] object-cover max-md:w-[32px] max-md:h-[32px]'
                  />
                  <h3 className='text-[13px] font-medium text-[#1A1A1A] max-w-[100px] truncate max-md:text-[12px]'>
                    {course.title}
                  </h3>
                </div>

                {/* Instructor */}
                <p className='text-[#8E8E8E] text-[14px] font-normal truncate max-md:text-[12px]'>
                  {course.instructor}
                </p>

                {/* Date Joined */}
                <p className='text-[#8E8E8E] text-[14px] font-normal max-md:text-[12px]'>
                  {course.datejoin}
                </p>

                {/* Progress */}
                <div className='flex flex-col gap-[4px] w-full pr-4'>
                  <div className='flex flex-row justify-between'>
                    <p className='text-[#8E8E8E] font-normal text-[10px] max-md:text-[9px]'>{course.progress} Lessons</p>
                    <p className='text-[#7E57C2] font-medium text-[10px] max-md:text-[9px]'>{course.percent}</p>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-[6px] max-md:h-[5px]'>
                    <div 
                      className='bg-[#7E57C2] h-[6px] rounded-full transition-all duration-300 max-md:h-[5px]' 
                      style={{ width: course.percent }}
                    ></div>
                  </div>
                </div>

                {/* Status Button */}
                <button className={`text-[12px] font-medium py-[4px] px-[21px] rounded-[36px] w-fit ml-4 max-md:text-[10px] max-md:px-[12px] max-md:ml-0 ${
                  course.status === "Paid" 
                    ? 'text-[#7E57C2] bg-[#F3ECFF]' 
                    : 'text-white bg-[#10B981]'
                }`}>
                  {course.status}
                </button>

                {/* Continue Button */}
                <button 
                  onClick={()=> navigate(`/CourseInfo/${course.id}`)}
                  className='bg-[#7E57C2] cursor-pointer py-[8px] px-[23px] rounded-[6px] text-[12px] font-medium text-white w-fit hover:bg-[#6c4ab8] transition-all duration-300 active:scale-95 max-md:py-[6px] max-md:px-[16px] max-md:text-[11px]'>
                  Continue
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningProgress