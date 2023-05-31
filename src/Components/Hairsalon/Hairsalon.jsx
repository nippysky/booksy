import React from 'react'
import ShopCategoriesNav from '../ShopCategoriesNav/ShopCategoriesNav'
import HairSalonSliderCategories from './HairSalonSliderCategories'
import SuggestionSalons from './SuggestionSalons'
import MostPoularTreatments from './MostPoularTreatments'

function Hairsalon() {
  return (
    <div
      className="w-full flex flex-col gap-[5rem]"
    >
      {/* NAVBAR*/}
      <div
        className=""
      >
        
      </div>

      {/* SHOPCATEGORYNAV COMPONENT */}
      <div>
          <ShopCategoriesNav/>
      </div>

      {/* HAIRSALON COMPONENT HEADER */}
      <div
        className="text-[4.5rem] px-[5rem] text-[#484848] font-bold" 
      >
          <h1>
            Hair salons and Hair dressers in USA (2000)
          </h1>
      </div>

      {/* HAIRSALONSLIDERCATEGORY COMPONENT */}
      <div 
        className="px-[5rem]"
      >
          <HairSalonSliderCategories/>
      </div>

      {/* BREAK LINE */}
      <div className='px-[5rem]'>
        <hr />
      </div>

      {/* SUGGESTIONSALON COMPONENT */}
      <div 
        className="px-[5rem]"
      >
          <SuggestionSalons/>
      </div>

      {/* BREAK LINE */}
      <div className='px-[5rem]'>
        <hr />
      </div>

      {/* MOST POPULAR TREATMENTS */}
      <div
        className="px-[5rem]"
      >
        <MostPoularTreatments/>
      </div>

      {/* FOOTER*/}
      <div
        className=""
      >

      </div>

    </div>
  )
}

export default Hairsalon
