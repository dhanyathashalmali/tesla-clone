import React from 'react'

export const Button = ({button = []}) => {
  return (
    <div className='flex flex-col md:flex-row sm:gap-y-0 sm:gap-x-4 px-12'>
        {
            button.map((text,id) => (
                <button key={id}
                className={`w-full ${
                  id == 0 ? " bg-[#393c41] text-white" : "bg-[#e5e6e5] "
                } cursor-pointer rounded-md  p-2 font-medium  sm:w-80`}
              >
                {text}
              </button>
            ))
        }
    </div>
  )
}
