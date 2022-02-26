import React from 'react'
import comps from './LpComps'


// Left Pane
function LeftPane() {
  return (
    <div className='flex flex-col gap-9 dark:bg-black dark:text-white border-r-2 border-[#242731] h-screen px-6 py-6'>

        {/* Name and Closing Icon */}
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3 cursor-pointer'>
                <div className='bg-blue-700 w-8 h-8 rounded-full flex justify-center items-center font-bold'>N</div>
                <h1 className='text-2xl font-bold '>Name</h1>
            </div>
            <img className='cursor-pointer hover:bg-[#353945] rounded-lg' src="./closing-icon.svg" alt="" />
        </div>

        {/* Section/Sub Components mapped with an array*/}
        <div className='flex flex-col justify-between items-start gap-4'>
          {
            comps.map((comp, index) => (
              <div className='flex gap-6 w-full py-2 rounded-xl cursor-pointer hover:bg-[#353945] hover:px-4' key={index}>
                <img src={`./LpComps/` + comp + `.svg`} alt={`404`} />
                <h2>{comp}</h2>
              </div>
            ))
          }
        </div>


        {/* Left Pane Bottom Comps */}
        <div className='mt-auto grid grid-cols-2 grid-rows-2 xl:gap-x-8  gap-x-3 gap-y-1'>
            <div className='flex justify-center items-center xl:px-0 px-3 py-2 rounded-xl gap-2 bg-[#353945]'>
              <div className='bg-blue-700 w-5 h-5 rounded-full flex justify-center items-center font-bold text-xs'>N</div>
              <h3 className='text-xs font-semibold'>$0.90</h3>
            </div>

            <div className='xl:px-0 px-3 py-2 rounded-xl bg-[#A3E3FF]'>
              <h3 className='text-xs font-semibold text-center text-[#3772FF]'>BUY $XYZ</h3>
            </div>

            {/* Lang and DarkMode Switch */}
            <div className='flex items-center col-span-2'>
              <img className='w-5 h-5' src="./Lang.svg" alt="" />
              {/* Added Switch but not implementing Light Mode in current build */}
            </div>
        </div>

    </div>
  )
}

export default LeftPane