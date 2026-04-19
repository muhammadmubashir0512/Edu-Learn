import toast, { Toaster } from 'react-hot-toast';
import webi from '../../assets/WebinarData/webi.png'
import Instuctorprof from '../../assets/WebinarData/Instuctorprof.png'
import webIcon from '../../assets/WebinarData/webIcon.svg'
import WebTime from '../../assets/WebinarData/WebTime.svg'
import Play from '../../assets/WebinarData/Play.svg'

const UpcomingWebinars = () => {

    const data = [
        {
            title: "Future of ML in 2025", description: "Trends and innovations shaping ML in 2025", instrucname: "Dr. Alex Thompsan",
            shecdule: "Aug 20, 2025", time: "4:00 PM", icon: webi, clock: WebTime, webplay: Play, date: webIcon , profile: Instuctorprof
        },
        {
            title: "Cybersecurity 2025", description: "Trends and innovations shaping ML in 2025", instrucname: "Mr. James Vince",
            shecdule: "Dec 19, 2025", time: "4:00 PM", icon: webi, clock: WebTime, webplay: Play, date: webIcon, profile: Instuctorprof 
        },
        {
            title: "Green Future Tech", description: "Trends and innovations shaping ML in 2025", instrucname: "Mr. Buttler",
            shecdule: "Jan 20, 2026", time: "4:00 PM", icon: webi, clock: WebTime, webplay: Play, date: webIcon, profile: Instuctorprof
        }
    ]

    const onbtnClick = () =>{
        toast("Webinar will start at scheduled time")
    }

  return (
    <div className='flex flex-col bg-white rounded-[8px] gap-[32px] sm:gap-[42px] pt-[16px] sm:pt-[20px] pr-[16px] sm:pr-[24px] pl-[16px] sm:pl-[24px] pb-[16px] sm:pb-[20px] w-full overflow-x-auto'>
        <Toaster/>
        {/* Header Section */}
        <div className='flex flex-col  gap-[16px]'>
            {/* Heading and description */}
            <div className='flex flex-col gap-[6px] sm:gap-[10px]'>
            <h1 className='text-[20px] sm:text-[24px] font-semibold'>Upcoming Webinar</h1>
            <p className='text-[14px] sm:text-[16px] font-normal text-[#8F8F8F]'>See your's registered upcoming webinar's.</p>
            </div>
            {/* Webinars Card */}
            <div className='flex flex-row gap-[24px] overflow-x-auto scrollbar-hide'>
                {/* Webinar Card */}
                {data.map((webCard, index) => (
                    <div key={index} className='flex flex-col gap-[18px] rounded-[8px] bg-white shadow p-[16px] min-w-[300px] flex-shrink-0 border border-[#E9E9E9]'>
                        <div className='flex flex-row justify-between items-start'>
                            {/* Image & title */}
                            <div className='flex flex-row gap-[10px]'>
                                <img 
                                    src={webCard.icon}
                                    alt="" 
                                    className='w-[48px] h-[48px]'
                                />
                                <div className='flex flex-col gap-[2px]'>
                                    <p className='text-[20px] font-medium'>{webCard.title}</p>
                                    <p className='text-[12px] text-[#8E8E8E] font-normal'>{webCard.description}</p>
                                </div>
                            </div>
                            <div>
                            <button className='bg-[#F3ECFF] rounded-[36px] py-[2px] px-[8px] text-[12px] font-medium text-[#7E57C2]'>Live now</button>
                            </div>
                        </div>
                        
                        {/* Instructor profile and name */}
                        <div className='flex flex-row items-center gap-[8px]'>
                            <img 
                                src={webCard.profile} 
                                alt="" 
                                className='w-[40px] h-[40px]'
                            />
                            <p className='text-[#8E8E8E] text-[16px] font-normal'>{webCard.instrucname}</p>
                        </div>

                        {/* Webinar date & time */}
                        <div className='flex flex-row gap-[20px] items-center'>
                            <div className='flex flex-row items-center gap-[5px]'>
                                <img 
                                    src={webCard.date} 
                                    alt="" 
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-[16px] text-[#8E8E8E] font-normal'>{webCard.shecdule}</p>
                            </div>

                            <div className='flex flex-row items-center gap-[5px]'>
                                <img 
                                    src={webCard.clock} 
                                    alt="" 
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-[16px] text-[#8E8E8E] font-normal'>{webCard.time}</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div 
                            onClick={onbtnClick}
                            className='cursor-pointer bg-[#F4EEFF] w-[363px] h-[48px] rounded-[8px] flex items-center justify-center'>
                            <div className='flex flex-row gap-[8px] items-center justify-center'> 
                                <img 
                                    src={webCard.webplay} 
                                    alt="" 
                                    className='w-[16px] h-[16px]  text-[#7E57C2]'
                                    />
                                <p className='text-[20px] font-medium text-[#7E57C2]'>Join Webinar</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
