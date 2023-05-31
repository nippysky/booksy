import React from 'react'
import { salonJson  } from '../../assets/Dummydata/Dummydata'
import SalonShopServices from './SalonShopServices'

function SuggestionSalons() {
  return (
    <div 
        className='w-full flex flex-col gap-[5rem] text-3xl'
    >

        {/* FILTER BY REVIEWS AND RECOMMENDATIONS */}
        <h1>
            FILTER BY REVIEWS AND RECOMMENDATIONS
        </h1>

        {/* MAP SALONSHOP JSON DATA */}
        {salonJson?.map((item) =>
            <div
                key={item.id}
                className='w-full flex gap-[2rem] min-h-[40vh]'
            >

               {/* SALON SHOP IMAGE */}
                <div
                    className='w-[30%] min-h-[40vh]'
                >
                        <img 
                            className="w-[750px] h-[450px] rounded-2xl object-cover"   
                            src={item.images.length > 1 ? item.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eEqxqteZ-yqR2AC-W6vv7mY6e4A8cclnkw&usqp=CAU"}
                            alt="image"
                        />
                </div>

                {/* SALON NAME , ADDRESS AND ITS SERVICES AND PRICE  */}
               <div
                    className='w-[70%] min-h-[40vh]'
                >
                    <div
                        className='px-[2rem] w-full flex flex-col'
                    >
                        <div
                            className='flex flex-col gap-[2rem] pb-[2rem] border-b-2' 
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

                        <div 
                            className='w-full'
                        >
                            <SalonShopServices />
                        </div>

                    </div>
                </div>

            </div>
        )}
      
    </div>
  )
}

export default SuggestionSalons
