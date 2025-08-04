import React from 'react'

const Progress = ({percentage,text}) => {
  return (
    <div className='w-[270px] h-[282px] bg-white-500 shadow-2xl flex flex-col justify-center items-center gap-y-6'>
        <div className='w-[167px] h-[167px] rounded-full border-[10px] border-[#E5745D] text-[#E5745D] text-[34px] font-semibold font-vol flex justify-center items-center'>
            {percentage}%
        </div>
        <h3 className='font-vol text-[26px] text-[#00413D] font-semibold'>{text}</h3>
    </div>
  )
}

export default Progress