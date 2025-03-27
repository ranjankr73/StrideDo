import React from 'react'

const TestimonialCard = ({user}) => {
  return (
    <div className='flex flex-col justify-between items-start rounded-xl shadow-xl w-1/4 h-80 bg-[#F4F7F7]'>
        <img src='\images\quotation-marks.png' className='size-24 p-3'/>
        <p className='text-base open-sans-body text-[#516569] px-10'>{user.body}</p>
        <div className='flex justify-start items-center bg-[#D4F3F1] w-full h-20 rounded-b-xl p-4 gap-5'>
            <img src={user.image} className='w-12 h-12 rounded-full'/>
            <div className='flex flex-col items-start justify-center '>
                <span className='open-sans-body text-[#2D3436] text-lg font-semibold'>{user.name}</span>
                <span className='montserrat-heading text-[#FFA0A0] text-base'>{user.title}</span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard;