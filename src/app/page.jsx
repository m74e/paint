"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/container";
import dynamic from "next/dynamic";
import DonutChartCard from "@/components/circle/DonutChartCard";
import Curls from "@/app/customsIcons/curls";
// import Lines from "./customsIcons/lines";
import NetProfitChart from "@/components/profitChart/NetProfitChart";
const ChartBar = dynamic(() => import("@/components/profitChart/chartbar"), {
  ssr: false,
});
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slider, setSlider] = useState(0);
  const [isOther, setIsOther] = useState(false);
  const partners = [
    {
      id: 1,
      img: "/cib.svg",
    },
    {
      id: 2,
      img: "/bmw.svg",
    },
    {
      id: 3,
      img: "/huawei.svg",
    },
    {
      id: 4,
      img: "/nasa.svg",
    },
  ];
  const services = [
    {
      id: 1,
      img: "/branding.svg",
      text: "Branding",
      des: "Random text",
    },
    {
      id: 2,
      img: "/marketing.svg",
      text: "Marketing strategy",
      des: "Random text",
    },
    {
      id: 3,
      img: "/content.svg",
      text: "content writing ",
      des: "Random text to fill the space",
    },
    {
      id: 4,
      img: "/video.svg",
      text: "Video making ",
      des: "Random text to fill the space",
    },
    {
      id: 5,
      img: "/email.svg",
      text: "Email Marketing ",
      des: "Random text to fill the space",
    },
    {
      id: 6,
      img: "/social.svg",
      text: "social media managing",
      des: "Random text to fill the space",
    },
  ];
  const philosophy = [
    {
      id: 1,
      number: "20+",
      text: "Branches",
    },
    {
      id: 2,
      number: "1,200+",
      text: "Clients",
    },
    {
      id: 3,
      number: "315+",
      text: "Sales Representative",
    },
    {
      id: 4,
      number: "200+",
      text: "Number of Employees",
    },
  ];

  const news = [
    {
      id: 1,
      img: "/assets/speaker.png",
    },
    {
      id: 2,
      img: "/assets/meeting.png",
    },
    {
      id: 3,
      img: "/assets/coffe.png",
    },
  ];
  const simplePricing = [
    {
      id: 1,
      text: "Intro",
    },
    {
      id: 2,
      text: "Based",
    },
    {
      id: 3,
      text: "Pro",
    },
    {
      id: "Enterprise",
      text: "Based",
    },
  ];
  const squer = [
    {
      id: 1,
      name: "Jonathan Sweeney",
    },
    {
      id: 2,
      name: "Barbara Cook",
    },
    {
      id: 3,
      name: "Jonathan Sweeney",
    },
    {
      id: 4,
      name: "Mary Rogers",
    },
  ];

  const handleToggle = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const itemWidth = 300;
  const sliderBtn = () => {
    return -slider * itemWidth;
  };
  const handleNext = () => {
    if (slider < squer.length - 1) {
      setSlider(slider + 1);
    }
  };
  const handlePrev = () => {
    if (slider > 0) {
      setSlider(slider - 1);
    }
  };
  return (
    <>
      <div id="home" className="bg-[#161616]">
        <Container>
          <div className="flex justify-between items-center ">
            {/* header */}
            <div className="xl:hidden">
            <img
                onClick={() => setIsOther(!isOther)}
                className="cursor-pointer"
                src="/others.svg"
                alt="Toggle Menu"
              />
              <div
                className={`${
                  isOther ? "block" : "hidden"
                } gap-y-1 bg-white p-1 rounded-lg absolute top-[80px] left-[30px] z-20`}
              >
                <div>Home</div>
                <div>About us</div>
                <div>Services</div>
                <div>Branches</div>
                <div>
                  Jobs{" "}
                  <span className="bg-[#7D4283] text-[#F1F1F1] p-1 rounded-[99px]">
                    12
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <img className="cursor: pointer;" src="/icon.svg" alt="" />
            </div>
            <div className="hidden  xl:flex gap-x-10 text-white">
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#services">Services</a>
              <a href="#Branches">Branches</a>
              <a className="cursor-pointer">
                Jobs{" "}
                <span className="bg-[#7D4283] text-[#F1F1F1] px-2 rounded-[99px] cursor-pointer">
                  12
                </span>
              </a>
            </div>
            <div className="hidden xl:flex gap-x-4">
              <button className="bg-transparent px-5 py-4 text-white border border-white rounded-[200px] hover:bg-white hover:text-[#161616]">
                Contact us
              </button>
              <button className="bg-[#7D4283] px-5 py-4 text-white rounded-[200px]">
                Join us
              </button>
            </div>
          </div>
          <div className=" xl:flex justify-between items-center gap-x-[185px]">
            <div className=" xl:block">
              <div className="mt-[35px] font-bold text-[#FFFFFF] text-center xl:text-left	text-2xl leading-[48px]">
                Transform your business with our <br />
                <span className="changeColor">
                  6 creative marketing solutions!
                </span>
              </div>
              <div className="flex justify-center items-center text-center xl:text-left text-[#FFFFFF] mt-[40px]">
                Welcome to Focus Marketing Solutions! We're a creative team
                dedicated to driving your business forward with innovative
                marketing strategies. From digital marketing to social media
                management, we're here to help you succeed. Let's build
                something extraordinary together
              </div>
              <div className="mt-[40px] flex gap-4 flex-col xl:flex-row">
                <button className="w-full text-white  bg-[#7D4283] rounded-[200px] xl:w-[102px] xl:py-4">
                  Join us
                </button>
                <button className="w-full border-2 border-white rounded-[200px] bg-transparent xl:w-[132px] xl:py-4 text-white hover:bg-white hover:text-black transition-colors duration-300">
                  Contact us
                </button>
              </div>
            </div>
            <div className="hidden xl:block w-full">
              <img className="w-[535px]" src="/assets/Rectangle.png" alt="" />
            </div>
          </div>
          <div className="hidden xl:flex  xl:justify-between xl:relative ">
            <div className="mt-[60px]">
              <img src="/assets/building.png" alt="" />
            </div>
            <div className="flex justify-between items-start pb-[20px]">
              <img src="/assets/handShake.png" alt="" />
              <div className="w-11"></div>
            </div>
            <div className="hidden xl:block w-full overlay"></div>
          </div>
        </Container>
        <div className="mt-[58px] text-center text-[#FFFFFF] xl:font-medium xl:text-5xl leading-[60px] ">
          Our partners
        </div>
        <div className="mt-4 flex flex-nowrap flex-row justify-start gap-1 overflow-x-auto scrollbar-hide scrollbar xl:mt-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center gap-1 w-[271px] bg-white rounded-md shrink-0 lg:w-[419px]"
            >
              <img
                className="bg-white w-[52px] "
                src={partner.img}
                alt={partner.name || "Partner"}
              />
            </div>
          ))}
        </div>
        <Container>
          <div>
            {" "}
            <div className="relative overflow-hidden">
              <div
                id="about"
                className="mt-20 font-normal text-2xl text-white text-center "
              >
                About us
              </div>

              <p className=" text-white text-center pt-8 font-norma text-basel z-20 xl:text-left">
                Welcome to{" "}
                <span className="text-[#693A70ED] xl:text-[#7D4283ED]">
                  Focus Marketing Solutions
                </span>
                ! We're a creative team dedicated to driving your business
                forward with innovative marketing strategies. From digital
                marketing to social media management, we're here to help you
                succeed.
                <span className="text-[#693A70ED] xl:text-[#7D4283ED]">
                  Let's build something extraordinary together.
                </span>
              </p>
              <div className="flex justify-center items-center pt-20 z-10">
                <button className="w-[351px] bg-transparent border-[1px] border-[#9350F2] rounded-[200px] text-center text-[#9350F2] z-10 xl:border-[#7D4283] xl:w-[148px] xl:py-3 xl:text-[#7D4283]">
                  Read more
                </button>
              </div>
              <div className="mt-[55px] flex flex-col gap-2 text-center text-[#FFFFFF] text-2xl leading-[68px]">
                <div id="services" className="text">
                  Our services
                </div>
                <div className="text-[#646A69] text-lg leading-[16px] ">
                  ransforming your online presence with innovative digital
                  strategies
                </div>
              </div>
              <div className="grid place-items-center grid-cols-2 gap-x-[34px] gap-y-[75px]	mt-[44px] xl:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex justify-center items-center flex-col gap-8"
                  >
                    <div className="bg-white w-[118px] p-1 rounded-xl flex justify-center items-center">
                      <div className="flex justify-center  items-center bg-[#7D4283] rounded-full w-[111px] aspect-square">
                        <img
                          className="bg-[#7D4283]"
                          src={service.img}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3 text-center text-[#FFFFFF]">
                      <div>{service.text}</div>
                      <div className="text-[#646A69]">{service.des}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-5 mt-[45px]">
              <div className="flex items-center gap-2 border-b-[1px]  border-[#D9DEDD] gap-x-2">
                <div className="w-2 h-2 bg-[#ffffff] rounded-full"></div>
                <div className="text-[#7D4283] pb-[4px] ">
                  The company's philosophy
                </div>
              </div>
              <div className="xl:flex xl:flex-row justify-between  gap-4">
                <div id="Branches">
                  <div className="text-[#7D4283] text-[32px] font-medium leading-[40px]">
                    We bear the <br /> responsibility of <br /> developing the{" "}
                    <br /> sector.
                  </div>
                  <div className="text-[#646A69]">
                    Elevate your brand with our comprehensive <br /> marketing
                    solutions, including Digital Marketing, <br /> Content
                    Creation, and Social Media Strategy. <br /> Enhance
                    visibility through expert SEO and PPC <br /> management,{" "}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-[74px] gap-y-[16px] xl:grid-cols-1">
                  {philosophy.map((philosophy) => (
                    <div className="flex flex-col gap-4 xl:gap-y-2 ">
                      <div className=" text-[#ffffff] font-normal text-[27px] leading-[60px]">
                        {philosophy.number}
                      </div>
                      <div className="text-[#646A69]">{philosophy.text}</div>
                    </div>
                  ))}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="mt-[64px] text-center text-white xl:text-left">
            Our charts
          </div>
          <div className="xl:flex xl:gap-x-12 xl:w-full">
            <ChartBar />
            <NetProfitChart />
            <DonutChartCard />
          </div>
          <div className=" flex justify-center xl:justify-between xl:items-center xl:mt-5">
            <div className="text-center text-white font-medium xl:text-left xl:font-medium xl:text-[44px] leading-[54px]">
              News
            </div>
            <div className="hidden xl:block">
              <button className="bg-[#7951B3]  px-6 p-4 rounded-[200px] text-white">
                View all news
              </button>
            </div>
          </div>
          <div className="xl:flex xl:justify-between gap-x-8 items-center">
            <div className="pt-[68px]">
              <div className="pt-4">
                <div>
                  {" "}
                  <Image
                    src="/assets/people.png"
                    alt="My image"
                    width={500}
                    height={500}
                  />
                  <div className="mt-[18px] flex items-start gap-[6px]">
                    {" "}
                    <button className="p-2 text-[#1D1F1E] bg-white rounded-[20px] border-[1px] border-[#D9DEDD]">
                      Company
                    </button>
                    <button className="p-2 text-[#1D1F1E] bg-white rounded-[20px] border-[1px] border-[#D9DEDD]">
                      Contrasts
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="pt-5 font-normal  text-lg leading-[35px] text-white">
                      We specialize in fostering effective partnerships with
                      supportive companies to drive mutual success.
                    </div>
                    <div className="text-[#646A69] flex flex-wrap ">
                      We are committed to building effective partnerships with
                      supporting companies, contributing to the advancement,
                      development, and expansion of the sector through diverse
                      capabilities, expertise, and technological innovation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col item gap-y-10">
              {news.map((news) => (
                <div className="flex gap-4 xl:gap-y-8">
                  <div className="w-[40%]">
                    {" "}
                    <Image
                      src={news.img}
                      alt="speaker girl"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-col w-[60%] gap-y-14">
                    {" "}
                    <h4 className="text-white font-medium text-base leading-[21px]">
                      We incorporate the formation of public partnerships as a
                      core aspect of our operations.
                    </h4>
                    <div className="flex gap-[6px] ">
                      <button className="px-3 py-1 text-[#1D1F1E] bg-white rounded-[20px] border-[1px] border-[#D9DEDD]">
                        Company
                      </button>
                      <button className="px-4 py-1 text-[#1D1F1E] bg-white rounded-[20px] border-[1px] border-[#D9DEDD]">
                        Contrast
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-[29px] py-4 w-full text-white bg-[#7D4283] cursor-pointer rounded-[200px] hover:bg-white hover:text-[#7951B3] xl:hidden ">
            Show all news
          </button>
          <div className="xl:flex xl:justify-between xl:text-left items-start xl:gap-x-[61px]">
            <div className="mt-[49px] flex flex-col text-center justify-center items-center gap-y-[13px] xl:items-start xl:text-left">
              <h2 className="text-white font-bold text-2xl leading-9">
                Simple pricing for your Business
              </h2>
              <p className="text-[#646A69] font-normal">
                We have several powerful plans to showcase your business and get
                discovered <br className="hidden xl:block" />
                as creative entrepreneurs. Everything you need.
              </p>
            </div>

            <div className="xl:w-[50%]">
              {simplePricing.map((item) => (
                <>
                  <div
                    key={item.id}
                    className={`${
                      isOpen[item.id] ? "bg-[#7D4283] " : "bg-[#1A1A1A]"
                    }  relative rounded-md mt-[17px] overflow-hidden cursor-pointer`}
                  >
                    <div
                      onClick={() => handleToggle(item.id)}
                      className="flex flex-col gap-y-4 h-full w-full"
                    >
                      <div
                        className={` ${
                          isOpen[item.id] ? "bg-[#7D4283] " : "bg-[#1A1A1A]"
                        } bg-[#1A1A1A] rounded-t-md flex items-center justify-between w-full p-4 xl:p-[22px]"}`}
                      >
                        <div className="text-white ">{item.text}</div>
                        <div>
                          <img
                            src={
                              isOpen[item.id]
                                ? "/upArrow.svg"
                                : "/downArrow.svg"
                            }
                            alt="Arrow Icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        isOpen[item.id]
                          ? "bg-[#7D4283] block"
                          : "bg-[#1A1A1A] hidden"
                      } rounded-b-md text-white w-full p-4 }`}
                    >
                      <div>
                        {" "}
                        Pro account gives you freedom with uploading HD videos
                        and can also meet all your business needs apasih kamu
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="font-normal text-[19px] leading-[28px]">
                          $ <span>123</span>{" "}
                          <span className="opacity-[68%]">/month</span>
                        </div>
                        <div>
                          <button className="px-4 py-1 rounded-lg cursor-pointer bg-white text-[#161616] font-medium text-[15px] leading-[23px]">
                            Try 1 month
                          </button>
                        </div>
                      </div>
                    </div>
                    <Curls
                      onClick={() => handleToggle(item.id)}
                      className={`${
                        isOpen[item.id] ? "block" : "hidden"
                      } absolute top-0 right-[5px] z-50 xl:top-[5px] xl:left-[200px] }`}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </Container>
        <div className="bg-[#7D4283]">
          <div className="flex overflow-hidden relative">
            <div
              style={{
                marginLeft: `${sliderBtn()}px`,
                transition: "margin-left 0.5s ease-in-out",
              }}
              className="bg-[#7D4283] h-[479px] flex justify-center items-center gap-x-[14px] "
            >
              {squer.map((s) => (
                <>
                  <div>
                    <div className="w-[314px] h-[326px] text-white bg-[#161616] py-8 pl-[26px] pr-[7px]">
                      {s.name}
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div>
              <button
                onClick={handleNext}
                className="absolute bottom-[28px] right-[20px] bg-white border-[1px] rounded-full z-10 cursor-pointer"
              >
                <img className="px-4 py-3" src="/rightArrow.svg" alt="" />
              </button>
              <button
                onClick={handlePrev}
                className="absolute bottom-[28px] left-[20px] bg-white border-[1px] rounded-full z-10 cursor-pointer"
              >
                <img
                  className="px-4 py-3 rotate-180"
                  src="/rightArrow.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <footer className="pt-8 mt-24 text-center text-white bg-[#7D4283] flex justify-center items-center flex-col">
          <Container>
            <div className="flex flex-col gap-y-4">
              <div className="font-medium text-2xl leading-[64px]">
                <h2>What are you waiting for?</h2>
              </div>
              <div className="font-light text-base leading-[29px]">
                <p>
                  Register now to get the best delivery experience for you and
                  your clients in Iraq!
                </p>
              </div>
            </div>
            <div className="pt-[34px] h-fit flex flex-col gap-y-2">
              <input
                className="py-3 px-5 rounded-[200px] text-[#161616] bg-white w-full outline-none"
                type="text"
                placeholder="Your email"
              />
              <button className="font-medium text-lg leading-[24px] py-3 px-5 rounded-[200px] bg-[#161616] w-full">
                register now
              </button>
            </div>
            <div className="mt-[70px]">
              <img src="/icon.svg" alt="" />
            </div>
            <div className="mt-7 flex justify-between text-left">
              <div className="flex flex-col gap-y-3 text-white">
                <div className="font-medium text-base leading-6">
                  The company
                </div>
                <div className="font-normal text-base leading-6">
                  Who are we
                </div>
                <div className="font-normal text-base leading-6">Services</div>
                <div className="font-normal text-base leading-6">
                  Jobs <span className="font-Inter text-xs leading-4">12</span>
                </div>
                <div className="font-normal text-base leading-6">Branches</div>
              </div>
              <div className="flex flex-col gap-y-3 text-left">
                <div className="font-meduim text-base leading-6">
                  Help center
                </div>
                <div className="font-normal text-base leading-6">
                  Common questions
                </div>
                <div className="font-normal text-base leading-6">Services</div>
                <div className="font-normal text-base leading-6">
                  Contact us
                </div>
                <div>Register as merchant</div>
              </div>
            </div>
            <div className="mt-[41px] flex justify-start flex-col gap-y-[9px]">
              <div className="pl-1 w-[150px] flex items-center gap-x-[9px] bg-white bg-opacity-25 rounded-[59px] cursor-pointer">
                <div className="bg-white rounded-full">
                  <img src="/social/facebook.svg" alt="facebook" />
                </div>
                <div className="py-[6px]">Facebook</div>
              </div>
              <div className="pl-1 w-[150px] flex items-center gap-x-[9px] bg-white bg-opacity-25 rounded-[59px] cursor-pointer">
                <div className="bg-white rounded-full">
                  <img src="/social/insta.svg" alt="instagram" />
                </div>
                <div className="py-[6px]">Instagram</div>
              </div>
              <div className="pl-1 w-[150px] flex items-center gap-x-[9px] bg-white bg-opacity-25 rounded-[59px] cursor-pointer">
                <div className="bg-white rounded-full">
                  <img src="/social/linkedin.svg" alt="linkedin" />
                </div>
                <div className="py-[6px]">LinkedIn</div>
              </div>
            </div>
            <div className="flex justify-center mt-[27px] text-center text-white opacity-80 font-light text-sm leading-5">
              © 2024 Leader Express Delivery Company. All rights reserved.
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};
export default Home;
