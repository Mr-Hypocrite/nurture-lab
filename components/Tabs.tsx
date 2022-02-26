import { GetStaticProps } from 'next';
import React from 'react'
import { Data } from '../typings';

interface Props {
  data: Data[];
}

function handleClick() {
  
}

function Tabs({ data }: Props) {
  
  return (
    <div className='flex flex-col gap-y-6'>

        <div className='flex gap-5 w-fit'>
            <h1 onClick={handleClick} className='p-1 border-b-2 border-transparent hover:border-[#3772FF] cursor-pointer'>First Tab</h1>
            <h1 className='p-1 border-b-2 border-transparent hover:border-[#3772FF] cursor-pointer'>Second Tab</h1>
        </div>

        <div className=' flex flex-row xl:flex-col gap-2'>

            {/* Top Row */}
            <div className='grid xl:grid-cols-4 xl:grid-row-1 items-center xl:w-full xl:py-4 pt-6 xl:gap-0 gap-4 w-1/3 grid-row-4 grid-col-1 bg-[#191B20] rounded-lg py-4'>
              
              <div>
                <h3 className='font-inter font-semibold text-xs text-center text-[#808191]'>ASSET</h3>
              </div>

              <div>
                <h3 className='font-inter font-semibold text-xs text-center text-[#808191]'>AMOUNT</h3>
              </div>
              
              <div>
                <h3 className='font-inter font-semibold text-xs text-center text-[#808191]'>USER ACCOUNT</h3>
              </div>

              <div>
                <h3 className='font-inter font-semibold text-xs text-center text-[#808191]'>REFERRAL EARNING</h3>
              </div>

            </div>

            {/* Table Data */}

            {data.map((element, index) => (
              <div className='grid xl:grid-cols-4 xl:grid-rows-1 items-center justify-center xl:w-full w-1/3 grid-rows-4 grid-col-1 xl:gap-[2%] gap-5 bg-[#24273166] rounded-md px-6 py-4 h-fit' key={index}>

                <div className='flex items-center gap-4 justify-self-start'>

                  <img className='w-8' src={element.img} alt="" />

                  <div className="flex flex-col gap-1">

                    <h2 className='font-inter font-semibold text-md'>{element.asset}</h2>

                    <div className='flex gap-2 items-center'>

                      <h3 className='font-inter font-medium text-sm text-[#808191]'>{element.type}</h3>
                      <div className='flex items-center gap-1 bg-[#353945] p-1 rounded-lg'>
                        
                        <img className='w-3' src={element.chain.img} alt="" />
                        <h3 className='font-semibold text-[10px]'>{element.chain.name}</h3>

                      </div>

                    </div>

                  </div>

                </div>

                <div className='text-center'>
                  <h2 className='font-inter font-semibold text-md'>{element.amount} BNB</h2>
                  <h3 className='font-inter font-medium text-sm text-[#808191]'>{element.state}</h3>
                </div>

                <div className='text-center'>
                  <h2 className='font-inter font-semibold text-md'>
                    {element.user.substr(0,5) + '..' + element.user.substr(element.user.length - 5)}
                  </h2>
                </div>

                <div className='text-center justify-self-end'>
                  <h2 className='font-inter font-semibold text-md'>{element.referral_earnings} BNB</h2>
                  <div className='flex gap-1'>
                    <h3 className='font-inter font-medium text-sm text-[#808191]'>View on BSC Scan</h3>
                    <img className='cursor-pointer' src="./link-logo.svg" alt="" />
                  </div>
                </div>

              </div>
            ))}

        </div>

    </div>
  )
}

export default Tabs