import React from 'react'
import { SalonServiceTypes } from '../../assets/Dummydata/Dummydata'

function SalonShopServices() {
  return (
        <div >

            {/* MAP ONLY THREE SERVICES FROM EACH SALONSHOP */}
                {SalonServiceTypes.slice(0, 3).map((item , i) => 
                    <div
                        className='w-full'
                        key={i}
                    >
                        <div 
                            className='w-full flex items-center justify-between border-b-2 py-[2rem]'
                        >
                            <div
                              className='w-full flex flex-col gap-[2rem]'
                            >
                                <p 
                                    className='text-[#383734] font-[550]'
                                >
                                    {item.name}
                                </p>
                                <span
                                    className='text-[#818181] w-[60%]'
                                >
                                    {item.description}
                                </span>
                            </div>
                            <div
                                className='flex items-center gap-[2.5rem]' 
                            >
                                <div
                                    className='flex flex-col text-right gap-[2rem]'
                                >
                                    <p
                                        className='text-[#383734] font-semibold'
                                    >
                                        ${item.price}
                                    </p>
                                    <span
                                        className='text-[#a9a9a9]'
                                    >
                                        {item.duration}
                                    </span>
                                </div>
                                <button
                                    className='w-auto px-[1.5rem] py-[1rem] rounded-2xl text-white bg-[#00a3ad]'
                                >
                                    Book
                                </button>
                            </div>
                            </div>
                        </div>
                )}
            </div>
  )
}

export default SalonShopServices
