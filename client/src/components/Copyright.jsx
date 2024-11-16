import { LiaCopyright } from "react-icons/lia"

const Copyright = () => {
  return (
    <div className='flex items-center justify-center gap-1 bg-white py-6 poppins-regular text-[#fb5607]'>
        <p>Taskyte</p>
        <LiaCopyright/>
        <p>2024</p>
    </div>
  )
}

export default Copyright;