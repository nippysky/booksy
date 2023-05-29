import React from 'react'
import ShopCategoriesNav from '../ShopCategoriesNav/ShopCategoriesNav'
import HairSalonSliderCategories from './HairSalonSliderCategories'

function Hairsalon() {
  return (
    <div
      className="w-full flex flex-col gap-[3rem]"
    >
      <div>
          <ShopCategoriesNav/>
      </div>
      <div
        className="text-[4.5rem] px-[5rem] text-[#484848] font-bold" 
      >
          <h1>
            Hair salons and Hair dressers in USA (2000)
          </h1>
      </div>
      <div className="px-[5rem]">
          <HairSalonSliderCategories/>
      </div>

    </div>
  )
}

export default Hairsalon
