import React from 'react'
import Tabs from './Tabs'

function Main({ data }: any) {
  return (
    <div className='main dark:bg-black dark:text-white font-poppins h-screen overflow-scroll px-10 py-6'>


      {/* Top Section */}
      <div className='flex justify-between'>

        <h1 className='font-inter font-semibold px-2 text-lg'>Section</h1>

        <div className='flex bg-[#191B20] rounded-xl w-fit gap-4 p-3'>

          <img className='w-7' src="./Wallet.svg" alt="" />
          
          <h2 className='font-semibold text-base'>0.2 $XYZ</h2>

          <div className='bg-[#A3E3FF] rounded-md px-2 flex items-center'>
            <h2 className='font-semibold text-xs text-[#3772FF]'>Tier 1</h2>
          </div>

        </div>

      </div>

      {/* Grid */}
      <div className='grid grid-rows-[fit-content(100%)_fit-content(100%)_fit-content(100%)] py-8 gap-y-5'>

          {/* First Child */}
          <div className='bg-[#ABE8FF] rounded-xl relative flex justify-between items-center mx-1 px-8 py-6'>
            
            <div className='flex flex-col gap-y-2 w-3/4 text-[#2B2557]'>
              <h2 className='text-sm font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </h2>

              <div className='font-inter bg-white rounded-md max-w-fit text-xs font-semibold px-5 py-1'>
                Tutorial
              </div>

            </div>

              {/* Floating Images */}
              <img className='w-28 absolute right-5 bottom-[-0.6rem]' src="./bit-coin-logo.svg" alt="" />

              <img className='w-6 absolute top-[-0.5rem] right-[-0.5rem] cursor-pointer' src="./close-button.svg" alt="" />

          </div>

          {/* Second Child */}
          <div className='flex flex-col xl:flex-row justify-between xl:items-center xl:gap-0 gap-y-4 rounded-3xl p-7 bg-[#191B20]'>

            {/* Second Child Flex Col */}
            <div className='flex flex-col gap-y-2'>

              <h3 className='text-lg font-medium'>Your rewards</h3>

              <h2 className='font-semibold text-3xl'>$ 0.26231428</h2>

              <div className='flex gap-2'>
                
                <div className='bg-[#353945] text-white rounded-xl font-semibold text-xs py-1 px-2'>
                    $40 AVAX
                </div>
                
                <div className='bg-[#353945] text-white rounded-xl font-semibold text-xs py-1 px-2'>
                    $10 BNB
                </div>
                
                <div className='bg-[#353945] text-white rounded-xl font-semibold text-xs py-1 px-2'>
                    $210 BTC
                </div>

              </div>
  
            </div>

            {/* Second Chils Button */}
            <div className='flex gap-2 bg-[#3772FF] justify-center px-5 py-2 rounded-xl w-fit h-fit cursor-pointer'>
              <img className='w-4' src="./custom-link.svg" alt="" />
              <h2 className=''>Custom link</h2>
            </div>

          </div>


          {/* Third Child */}

          <div className='flex flex-col xl:flex-row gap-6'>
            
            <div className='flex flex-col bg-[#191B20] rounded-2xl p-5 pb-7 gap-4 w-full'>
              
              <div className='flex gap-2'>
                <img src="./money-bag.svg" alt="" />
                <h2 className='font-medium text-xl'><span className='font-bold'>12.5%</span> of fee</h2>
              </div>

              <h3 className='font-inter font-medium text-base text-[#808191]'>Your Referral Link for xyz</h3>

              <div className='flex justify-between bg-[#242731] rounded-lg p-4'>
                <h3 className='font-inter font-bold text-sm'>https://unityexchange.design </h3>
                <img className='hover:cursor-pointer p-1 hover:bg-black rounded-md' src="./copy-logo.svg" alt="" />
              </div>

            </div>

            <div className='flex flex-col bg-[#191B20] rounded-2xl p-5 pb-7 gap-4 w-full'>
              
              <div className='flex gap-2'>
                <img src="./money-bag.svg" alt="" />
                <h2 className='font-medium text-xl'><span className='font-bold'>12.5%</span> of fee</h2>
              </div>

              <h3 className='font-inter font-medium text-base text-[#808191]'>Your Referral Link for xyz</h3>

              <div className='flex justify-between bg-[#242731] rounded-lg p-4'>
                <h3 className='font-inter font-bold text-sm'>https://unityexchange.design </h3>
                <img className='hover:cursor-pointer p-1 hover:bg-black rounded-md' src="./copy-logo.svg" alt="" />
              </div>

            </div>

          </div>

      </div>

      {/* Bottom Table/Tabs */}
      <Tabs data={data} />

    </div>
  )
}

export default Main