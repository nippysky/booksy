import React from 'react'
import { salonJson  } from '../../assets/Dummydata/Dummydata'

function SuggestionSalons() {
  return (
    <div 
        className='w-full flex flex-col gap-[5rem] text-3xl'
    >

        {/* FILTER BY REVIEWS AND RECOMMENDATIONS */}
        <h1>
            FILTER BY REVIEWS AND RECOMMENDATIONS
        </h1>

        {/* MAP SALON JSON DATA */}
        {salonJson?.map((item) =>
            <div
                key={item.id}
                className='w-full flex items-center gap-[3rem] min-h-[40vh]'
            >
                <div
                    className='w-[30%] min-h-[40vh]'
                >
                        <img 
                            className="w-[750px] h-[450px] rounded-2xl object-cover"   
                            src={item.images.length > 1 ? item.images[1] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eEqxqteZ-yqR2AC-W6vv7mY6e4A8cclnkw&usqp=CAU"}
                            alt="image"
                        />
                </div>

                <div
                    className='w-[70%] min-h-[40vh]'
                >
                    <div
                        className='px-[2rem] py-[2.5rem] w-full flex flex-col gap-[5rem]'
                    >
                        <div
                            className='flex flex-col gap-7' 
                        >
                            <h1
                                className='text-[#484848] font-bold text-[2.8rem]'
                            >
                                {item.name}
                            </h1>
                            <p
                                className='text-[#767676]'
                            >
                                {item.address}
                            </p>
                        </div>

                        <hr/>

                        <div
                            className='w-full flex items-center justify-between'
                        >
                            <div
                              className='flex flex-col gap-[2rem]'
                            >
                                <p 
                                    className='text-[#383734]'
                                >
                                    Hair style
                                </p>
                                <span
                                    className='text-[#686765]'
                                >
                                    lweioguiwerrrrrrrrrrrrrrrrrrrrrrrrrrrrviedfbvkednvkownpvon
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
                                        $778
                                    </p>
                                    <span
                                        className='text-[#a9a9a9]'
                                    >
                                        1hr 20min
                                    </span>
                                </div>
                                <button
                                    className='w-auto px-[1.5rem] py-[1rem] rounded-2xl text-white bg-[#00a3ad]'
                                >
                                    Book
                                </button>
                            </div>
                        </div>

                        <hr/>

                    </div>
                </div>

                

            </div>
        )}
      
    </div>
  )
}

export default SuggestionSalons
