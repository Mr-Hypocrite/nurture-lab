import React from 'react'
import StyleSheet from '../styles/rp.module.css'

function RightPane() {

  return (
    <div className='right-0 dark:bg-black dark:text-white border-l-2 border-[#242731] h-screen xl:px-12 px-8 py-6 flex flex-col gap-10'>
        
        <div className='flex xl:justify-start justify-between gap-4'>

          <div className='bg-[#353945] flex justify-between items-center gap-2 p-2 rounded-lg cursor-pointer'>
              <div className='dd1 flex flex-col gap-2'>
                <div className='flex gap-1'>
                  <img src="./Avalanche-logo.svg" alt="" />
                  <h2 className='text-sm'>Avalanche</h2>
                </div>

                <div className='hidden gap-1'>
                  <img src="./Avalanche-logo.svg" alt="" />
                  <h2 className='text-sm'>Avalanche</h2>
                </div>

                <div className='hidden gap-1'>
                  <img src="./Avalanche-logo.svg" alt="" />
                  <h2 className='text-sm'>Avalanche</h2>
                </div>

              </div>
              <img className='w-2 h-2' src="./Rdd1.svg" alt="" />
          </div>

          <div className='flex justify-between items-center gap-2 xl:px-4 py-2 px-3 rounded-lg border border-[#3772FF] cursor-pointer'>
            <img src="./Wallet.svg" alt="" />
            <h2 className='text-sm'>0XF6...1353</h2>
            <img className='w-2 h-2' src="./Rdd2.svg" alt="" />
          </div>

        </div>

        <div className='flex flex-col gap-8'>
          <div className='flex items-center gap-4'>
            <img className='w-3 h-3' src="./arrow-left.svg" alt="" />
            <h2 className='text-lg'>Custom link</h2>
          </div>

          <h2>https://testnet.xyz.xyz/trade?ref=</h2>

          <input className='bg-[#242731] rounded-xl text-xs p-4' type="text" placeholder="ENTER" />

          <div className='flex flex-col xl:flex-row gap-5 mx-auto'>

            <div className='flex gap-2 bg-[#3772FF] justify-center px-5 py-2 rounded-xl cursor-pointer'>
              <img className='w-4' src="./custom-link.svg" alt="" />
              <h2 className=''>Custom link</h2>
            </div>

            <div className='flex gap-2 border border-[#242731] justify-center px-5 py-2 rounded-xl cursor-pointer'>
              <img className='w-4' src="./cancel.svg" alt="" />
              <h2 className=''>Cancel</h2>
            </div>

          </div>
        </div>


    </div>
  )
}

export default RightPane