import React , {useState} from 'react'

function ShopCategoriesNav() {
    const [ isHovered , setIsHovered ] = useState(false)
  return (
    <div
        className='grid items-center w-full h-[12rem] bg-[#1b1d21] text-3xl text-[#ffffff]' 
    >
        <div
            className="w-full px-[5rem]"
        >
            <ul
                className="flex items-center justify-between"
            >
                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Hair Salon
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Barbershop
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Nail Salon
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Skin Care
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Eyebrows & Lashes
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Massage
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Makeup artist
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                    Day spa
                </li>

                <li
                    className="cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-[2.6rem]" 
                >
                   More...
                </li>

            </ul>
        </div>
    </div>
  )
}

export default ShopCategoriesNav
