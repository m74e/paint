"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SquerSlider = () => {
  const squer = [
    {
      id: 1,
      name: "Jonathan Sweeney",
      text: '"I love that model. I [used to have to] call all around, and I absolutely love that model that you could save me the time and headache of doing that."',
      avatar: "/assets/oldMan.png",
    },
    {
      id: 2,
      name: "Barbara Cook",
      text: '"I am so happy with your company. Ever since my insurer switched to you, everything and everybody I\'ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!"',
      avatar: "/assets/oldWoman.png",
    },
    {
      id: 3,
      name: "Mary Rogers",
      text: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."',
      avatar: "/assets/bigSmileWoman.png",
    },
    {
      id: 4,
      name: "Mary Rogers",
      text: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."',
      avatar: "/assets/bigSmileWoman.png",
    },
    {
      id: 5,
      name: "Mary Rogers",
      text: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."',
      avatar: "/assets/bigSmileWoman.png",
    },
    {
      id: 6,
      name: "Mary Rogers",
      text: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."',
      avatar: "/assets/bigSmileWoman.png",
    },
    {
      id: 7,
      name: "Mary Rogers",
      text: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."',
      avatar: "/assets/bigSmileWoman.png",
    },
    {
      id: 8,
      name: "Mary Rogers",
      text: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."',
      avatar: "/assets/bigSmileWoman.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className="w-[10px] h-[10px] border-2 rounded-full transition-all duration-300"></div>
      );
    },
    appendDots: (dots) => (
      <div className="slick-dots">
        <ul className="flex gap-2 justify-center items-center"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="bg-[#7D4283] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="hidden xl:block text-white text-center text-[48.67px] leading-[62px] font-normal mb-20">
          Our clients openions
        </h2>
        <div className="relative">
          <Slider {...settings} className="custom-slider">
            {squer.map((s) => (
              <div key={s.id} className="p-4">
                <div className="bg-[#161616] rounded-lg p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6">
                      <div className="relative w-16 mb-2 h-16 rounded-full overflow-hidden">
                        <Image
                          src={s.avatar}
                          alt={s.name}
                          width={68}
                          height={60}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolote bottom-2 bg-green-600 rounded-full w-[10px] h-[10px] rotate-180 flex justify-center items-center">
                          ,,
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {s.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white text-base leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx global>{`
        .slick-dots div {
          background-color: white;
          border-color: white;
        }
        .slick-dots .slick-active div {
          scale: 1.5;
          background-color: black;
          border-color: black;
        }
        .custom-slider {
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
};

export default SquerSlider;
