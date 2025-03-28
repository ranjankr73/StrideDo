import React from 'react'

const TestimonialCard = ({ user }) => {
  return (
    <div className='flex flex-col justify-between items-start rounded-xl border border-[var(--border-color)] bg-[var(--background)] p-6 h-full transition-all hover:shadow-lg'>
      <div className='flex-1'>
        <svg 
          className='w-12 h-12 text-[var(--primary-color)] mb-4'
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
        </svg>
        <p className='text-[var(--text-secondary)] mb-6 text-base leading-relaxed'>
          "{user.text}"
        </p>
      </div>
      <div className='flex items-center gap-4 w-full pt-4 border-t border-[var(--border-color)]'>
        <img 
          src={user.image} 
          alt={user.name}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <h4 className='font-medium text-[var(--text-primary)]'>{user.name}</h4>
          <p className='text-sm text-[var(--text-secondary)]'>{user.role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard