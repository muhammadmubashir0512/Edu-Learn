import toast, { Toaster } from 'react-hot-toast';
import FullStack from '../../assets/RecomCourses/FullStack.png'
import Javascript from '../../assets/RecomCourses/Javascript.png'
import Animation from '../../assets/RecomCourses/Animation.png'
import { useNavigate } from 'react-router-dom';

const RecomendedCourses = (props) => {

  const navigate = useNavigate('')

    const recomedCourse = [
      {
        id:20, icon: FullStack, title:"Full-Stack Web Development with MERN", price:"Free", description: "Learn how to create compelling brand identities that resonate with your...",
        instructor: "Dr Alex Thompson", crBtn : [{Level : "Advanced", Category: "Development", Duration: "12 Lessons"}]
      },
      {
        id:21, icon: Javascript, title:"Advanced JavaScript for Modern Web Development", price:"$15", description: "Learn how to create compelling brand identities that resonate with your...",
        instructor: "Mrs Alya", crBtn : [{Level : "Advanced", Category: "Programming", Duration: "10 Lessons"}]
      },
      {
        id:22, icon: Animation, title:"UI Animation Essentials with After Effects & Lottie", price:"$25", description: "Learn how to create compelling brand identities that resonate with your...",
        instructor: "Mr Cummins", crBtn : [{Level : "Intermediate", Category: "Design", Duration: "8 Lessons"}]
      },
      {
        id:23, icon: FullStack, title:"Building Responsive Websites with HTML", price:"Free", description: "Learn how to create compelling brand identities that resonate with your...",
        instructor: "Mr Smith", crBtn : [{Level : "Beginner", Category: "Design", Duration: "7 Lessons"}]
      },
    ]

    let filteredCourse = recomedCourse
    const searchTerm = props.searchTerms ? String(props.searchTerms).toLowerCase().trim() : ''

    if (searchTerm) {
      filteredCourse = recomedCourse.filter((course) => 
        (course.title?.toLowerCase().includes(searchTerm) || false) || 
        (course.instructor?.toLowerCase().includes(searchTerm) || false)
      )
    }

    const AddCourse = (singleCourse) =>{
      const allcourse = JSON.parse(localStorage.getItem("AllCourses")) || []

      const existes = allcourse.some(c => c.id === singleCourse.id)
      if (!existes) {
        const updateCourses = [...allcourse, singleCourse]
        localStorage.setItem("AllCourses", JSON.stringify(updateCourses))
      }
    }

  return (
    <div className='flex flex-col bg-white rounded-[8px] gap-[24px] sm:gap-[32px] pt-[16px] sm:pt-[20px] pr-[16px] sm:pr-[24px] pl-[16px] sm:pl-[24px] pb-[16px] sm:pb-[20px] w-full'>
        <Toaster/>
        
        {/* Header Section */}
        <div className='flex flex-col gap-[16px]'>
            {/* Heading and description */}
            <div className='flex flex-col gap-[6px] sm:gap-[10px]'>
              <h1 className='text-[20px] sm:text-[24px] font-semibold'>Recommended Courses</h1>
              <p className='text-[14px] sm:text-[16px] font-normal text-[#8F8F8F]'>Hand-picked courses just for you based on your interests.</p>
            </div>
            
            {/* Courses Cards*/}
            <div className='flex flex-row gap-[24px] overflow-x-auto scrollbar-hide pb-4'>
                {filteredCourse.map((course, index) => (
                  <div key={index} className='flex flex-col gap-[16px] rounded-[8px] bg-white shadow p-[16px] w-[318px] flex-shrink-0 border border-[#E9E9E9]'>
                    
                    {/* Course Image */}
                    <img 
                      src={course.icon} 
                      alt="" 
                      className='w-[286px] h-[150px] rounded-[6px] object-cover'
                    />
                    
                    {/* Title and Price Row */}
                    <div className='flex flex-row justify-between items-start gap-[13px]'>
                      <p className='text-[16px] font-medium w-[200px] line-clamp-2'>{course.title}</p>
                      <p className={`${course.price === "Free" ? 'text-[#10B981] font-semibold text-[14px]' : 'text-[#7E57C2] font-semibold text-[16px]'} whitespace-nowrap`}>
                        {course.price}
                      </p>
                    </div>

                    {/* Description */}
                    <p className='text-[#8F8F8F] text-[14px] font-light line-clamp-2'>{course.description}</p>

                    {/* Instructor */}
                    <div className='flex flex-row gap-[8px] items-center'>
                      <img 
                        src={course.icon}
                        alt=""
                        className='w-[32px] h-[32px] rounded-full object-cover'
                      />
                      <p className='text-[#8E8E8E] text-[14px] font-normal'>
                        {course.instructor}
                      </p>
                    </div>
                    
                    {/* Buttons */}
                    {course.crBtn.map((btn, idx) => (
                      <div key={idx} className='flex flex-row gap-[9px] flex-wrap'>
                        <button className='w-[100px] h-[24px] text-center rounded-[4px] text-[12px] font-medium py-0 px-0 text-[#1F2937] border border-[#D9D9D9] bg-[#F6F6F6]'>
                          {btn.Level}
                        </button>
                        <button className='w-[100px] h-[24px] text-center rounded-[4px] text-[12px] font-medium py-0 px-0 text-[#1F2937] border border-[#D9D9D9] bg-[#F6F6F6]'>
                          {btn.Category}
                        </button>
                        <button className='w-[100px] h-[24px] text-center rounded-[4px] text-[12px] font-medium py-0 px-0 text-[#1F2937] border border-[#D9D9D9] bg-[#F6F6F6]'>
                          {btn.Duration}
                        </button>
                      </div>
                    ))}

                    {/* Enroll Button */}
                    <button 
                      onClick={()=>{
                        AddCourse(course);
                        course.price === "Free" 
                          ? navigate(`/CourseInfo/${course.id}`) 
                          : toast.error(`Subscribe to access Course ${course.title}`)
                      }}
                      className='bg-[#F6F6F6] border rounded-[6px] border-[#D9D9D9] text-[16px] font-medium text-[#263137] text-center py-[8px] hover:bg-[#7E57C2] hover:text-white hover:border-[#7E57C2] transition-all duration-300 cursor-pointer'>
                      Enroll Now
                    </button>
                  </div>
                  
                ))}
            </div>
        </div>
    </div>
  )
}

export default RecomendedCourses