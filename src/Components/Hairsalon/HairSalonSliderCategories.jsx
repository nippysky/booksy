import React , { useState , useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai"
import { BsArrowRight , BsArrowLeft } from "react-icons/bs"
import { salonJson } from "../../assets/Dummydata/Dummydata"

function HairSalonSliderCategories() {

    const [ liked , setLike ] = useState(false)
    const sliderRef = useRef(null)

    // UNLIKE HEART ICON
    const setLikedFalse =() =>{
        setLike(false)
    }

    //LIKE HEART ICON
    const setLikedTrue =() =>{
        setLike(true)
    }

    //NEXT SLIDER BUTTON ARROW
    const next = () =>{
        sliderRef.current.slickNext();
    }

    //PREV SLIDER BUTTON ARROW
    const previous = () =>{
        sliderRef.current.slickPrev();
    }


    //slider settings props
    let settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };

  return (
    <div 
        className="relative text-3xl"
    >
       {/* SLIDER ARROWS    */}
        {/* NEXT ARROW */}
            <div
                onClick={next}
                className="absolute cursor-pointer text-[3rem] right-[-2rem] p-[2.4rem] top-[9.5rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[9999999999999]"
            >
                <BsArrowRight/>
            </div>

        {/* PREV ARROW */}
            <div
                onClick={previous}
                className="absolute cursor-pointer text-[3rem] left-[-3rem] p-[2.4rem] top-[9.5rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[9999999999999]"
            >
                <BsArrowLeft/>
            </div>

          {/* SLIDER METHOD */}
            <Slider
                ref={sliderRef }
                {...settings}
            >

              {/* MAP SALON JSON DATA */}
                {salonJson?.map((item) =>
                    <div 
                        className="flex flex-col"
                        key={item.id}
                    >

                        <img 
                            className="w-[615px] h-[430px] rounded-2xl object-cover"   
                            src={item.images[0]}
                            alt="image"
                        />
                        <div
                            className="relative flex items-center gap-[2rem]"
                        >
                            <div
                                className="flex flex-col gap-[2rem]"
                            >
                                <p
                                    className="text-[#222324] text-[2.3rem] mt-[1.5rem] font-[650]"
                                >
                                    {item.name}
                                </p>
                                <span
                                    className="w-[85%] text-[#767676]"
                                >
                                    {item.address}
                                </span>
                            </div>

                            {/* FILL HEART ICON WHEN LIKED  */}
                                {!liked &&
                                    <div
                                        onClick={setLikedTrue}
                                        className="absolute right-[3rem] cursor-pointer top-[5rem] text-[3rem]"
                                    >
                                        <AiOutlineHeart/>
                                    </div>
                                }
                            
                            {/* UNFILL HEART ICON WHEN LIKED  */}
                                {liked &&
                                    <div
                                        onClick={setLikedFalse}
                                        className="absolute right-[3rem] cursor-pointer top-[5rem] text-[#ff003c] text-[3rem]"
                                    >
                                        <AiFillHeart/>
                                    </div>
                                }

                        </div>

                    </div>
                )}
            
            </Slider> 
    </div>
  )
}

export default HairSalonSliderCategories
