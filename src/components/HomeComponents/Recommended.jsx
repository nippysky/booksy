import React from "react";
import { sliderCard } from "../../../utitlities/dummyData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BooksySliderShopCard from "../BooksySliderShopCard";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#0ba3ad",
        width: 50,
        height: 50,
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleArrow />,
  prevArrow: <SampleArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export default function Recommended() {
  return (
    <section className="w-full p-10">
      <h2 className="text-2xl font-bold text-booksyGray">Recommended</h2>
      <div className="my-5">
        <Slider {...settings}>
          {sliderCard.map((card, index) => (
            <BooksySliderShopCard
              key={index}
              title={card.title}
              address={card.address}
              rating={card.rating}
              review={card.reviews}
              imageURL={card.imageURL}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
