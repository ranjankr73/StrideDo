import React from 'react'

const FormDisplayPage = ({children}) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <h3 className="mochiy-pop-p-one-regular text-[#fb5607] text-4xl font-bold">Taskyte</h3>
        <div className="md:w-1/3 sm:w-2/3">
            {children}
        </div>
  </div>
  )
}

export default FormDisplayPage;