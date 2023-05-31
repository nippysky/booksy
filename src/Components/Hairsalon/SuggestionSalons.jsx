import React , { useState , useEffect } from 'react'
import { salonJson  } from '../../assets/Dummydata/Dummydata'
import SalonShopServices from './SalonShopServices'
import { IoMdThumbsUp } from "react-icons/io"
import { BsArrowRight } from "react-icons/bs"

import ReactPaginate from 'react-paginate';
import "./Paginate.css"

function SuggestionSalons() {

    
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount,setPageCount] = useState(0)
    const [ currentItems , setCurrentItems ] = useState(null)

    let itemsPerPage = 2 ;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(salonJson?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(salonJson?.length / itemsPerPage));

    }, [itemsPerPage , salonJson , itemOffset])

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % salonJson.length;
        console.log(newOffset)
        setItemOffset(newOffset);
    };

  return (
    <div 
        className='w-full flex flex-col gap-[5rem] text-3xl'
    >

        {/* FILTER BY REVIEWS AND RECOMMENDATIONS */}
        <h1>
            FILTER BY REVIEWS AND RECOMMENDATIONS
        </h1>

        {/* MAP SALONSHOP JSON DATA */}
        {currentItems?.map((item) =>
            <div
                key={item.id}
                className='w-full flex gap-[2rem] min-h-[40vh]'
            >

               {/* SALON SHOP IMAGE */}
                <div
                    className='relative w-[30%] min-h-[40vh]'
                >
                        <img 
                            className="w-[750px] h-[450px] rounded-2xl object-cover"   
                            src={item.images.length > 1 ? item?.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eEqxqteZ-yqR2AC-W6vv7mY6e4A8cclnkw&usqp=CAU"}
                            alt="image"
                        />

                        {/* RATINGS AND REVIEWS*/}
                        <div 
                            className='absolute flex flex-col items-center gap-[1rem] top-[0rem] right-[0rem] bg-[#181717] opacity-[0.9] text-white px-[1.6rem] py-[1rem] rounded-bl-2xl  rounded-tr-2xl'
                        >
                            <p 
                                className='text-[2.2rem] font-bold'
                            >
                                {item.ratings}
                            </p>
                            <span
                                className='text-[1.3rem]'
                            >
                                {item.reviews} reviews
                            </span>
                        </div>

                        {/* Recommended */}
                        <div
                            className='absolute left-[1.5rem] top-[1.5rem] rounded-lg text-[1.4rem] font-[590] flex items-center gap-[0.8rem] w-auto px-[1rem] py-[0.6rem] bg-white text-[#161718]'
                        >
                            <IoMdThumbsUp
                                className='text-[2.5rem] text-[black]'
                            />
                            <p>
                                BOOKSY RECOMMENDED
                            </p>
                        </div>
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

      <div
        className='Reactpaginate' 
      >
        <ReactPaginate
             breakLabel={"..."}
             nextLabel={
                <div
                    className='w-auto rounded-full px-[1.1rem] py-[1.1rem] mt-[-1.1rem] bg-[white] shadow-2xl border-2 text-[2rem]'
                >
                    <BsArrowRight/>
                </div>
             }
             onPageChange={handlePageClick}
             pageRangeDisplayed={2}
             pageCount={pageCount}
             marginPagesDisplayed={1}
             previousLabel=""
             renderOnZeroPageCount={null}
             containerClassName="pagination"
             pageLinkClassName="page-nums"
             nextLinkClassName="page-num"
             activeLinkClassName="active-box"
             breakClassName="breakClassName"
        />
       </div>

    </div>
  )
}

export default SuggestionSalons
