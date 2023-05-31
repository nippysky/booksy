import React , { useState } from 'react'
import { popularTreatMents } from '../../assets/Dummydata/Dummydata'
import { BsArrowRight } from 'react-icons/bs'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import { AiFillHome } from 'react-icons/ai'

function MostPoularTreatments() {

    // hide or show more popularitems or less
    const [ show , setShow ] = useState(false)

    //limited mapped data but can display all when show all is clicked
    let slicedArray = !show ? popularTreatMents.slice(0 , 4) : popularTreatMents

  return (
    <div
        className='w-full flex flex-col gap-[5rem]'
    >
        <h1
            className='text-[4.2rem] text-[#484848] font-[580]'
        >
            Most popular treatments
        </h1>

        <div
            className='flex flex-col gap-[2rem]'
        >
            <div
                className='w-full grid gap-[3rem] grid-cols-3 text-[2.3rem]' 
            >
                {/* map popular treatment data from dummy json */}
                {slicedArray.map(item =>
                    <div
                        key={item.id}
                        className='w-auto px-[1.5rem] py-[2rem] border-2 border-[#ececec] rounded-xl'
                    >
                        <div 
                            className='flex items-center justify-between'
                        >
                            <p 
                            className='text-[#383734]'
                            >
                                {item.name}
                            </p>
                            <BsArrowRight
                                className='text-[3rem] text-[#bfbfbf]'
                            />
                        </div>
                    </div>
                )}
            </div>
                {/* SHOW MORE ITEMS */}
                {!show &&
                    <div
                        onClick={()=> setShow(true)}
                        className='flex items-center cursor-pointer gap-[1rem] text-[#767676] text-[1.3rem]'
                    >
                        <RiArrowDownSLine
                            className='text-[2rem]'
                        />
                        <p>
                            SHOW MORE
                        </p>
                    </div>
                }

                {/* SHOW LESS ITEMS */}
                {show &&    
                    <div
                        onClick={()=> setShow(false)}
                        className='flex items-center cursor-pointer gap-[1rem] text-[#767676] text-[1.3rem]'
                    >
                        <RiArrowUpSLine
                            className='text-[2rem]'
                        />
                        <p>
                            SHOW LESS
                        </p>
                    </div>
                }
        </div>

        <div
            className='flex items-center gap-[1rem] text-[2rem]'
        >
            <AiFillHome className='text-[#bfbfbf]'/>
            <i className='text-[1.7rem]'>/</i>
            <p className='text-[#484848] text-[1.7rem] font-semibold'>
                Weave
            </p>
            <i className='text-[1.7rem]'>/</i>
            <p className='text-[#484848] text-[1.7rem] font-semibold'>Weave in Jacksonville , FL</p>
        </div>

    </div>
  )
}

export default MostPoularTreatments
