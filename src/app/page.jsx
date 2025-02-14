"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Container from "@/components/container";
import dynamic from "next/dynamic";
import Curls from "@/app/customsIcons/curls";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SquerSlider from "@/components/SquerSlider";

const DonutChartCard = dynamic(
  () => import("@/components/circle/DonutChartCard"),
  {
    ssr: false,
  }
);
const NetProfitChart = dynamic(
  () => import("@/components/profitChart/NetProfitChart"),
  {
    ssr: false,
  }
);
const ChartBar = dynamic(() => import("@/components/profitChart/chartbar"), {
  ssr: false,
});

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

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
      id: 4,
      text: "Enterprise",
    },
  ];

  const handleToggle = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div id="home" className="bg-[#161616] relative">
        <Container>
          <div className="flex justify-between items-center ">
            <div className="xl:hidden">
              <img
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="cursor-pointer"
                src="/others.svg"
                alt="Toggle Menu"
              />
            </div>
            <div>
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
                dedicated to driving your business{" "}
                <br className="hidden xl:block" /> forward with innovative
                marketing strategies. From digital marketing to social media
                management,
                <br className="hidden xl:block" /> we're here to help you
                succeed. Let's build something extraordinary together
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
            <div className="hidden xl:block mt-[85px]">
              <img className="w-[535px]" src="/assets/Rectangle.png" alt="" />
            </div>
          </div>
          <div className="hidden xl:flex xl:justify-between xl:relative mt-[28px]">
            <div className="mt-[60px]">
              <img src="/assets/building.png" alt="" />
            </div>
            <div className="flex justify-between items-start pb-[20px]">
              <img src="/assets/handShake.png" alt="" />
              <div className="w-[160px]"></div>
            </div>
            <div className="hidden xl:block w-full overlay"></div>
          </div>
        </Container>
        <div>
          <div className="mt-[58px] text-center text-[#FFFFFF] xl:font-medium xl:text-5xl leading-[60px] ">
            Our partners
          </div>
          <div className="mt-4 xl:mt-16">
            <Marquee speed={50} pauseOnHover={true}>
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex justify-center items-center gap-4 ml-4 w-[271px] aspect-[271/57] bg-white rounded-md shrink-0 lg:w-[419px]"
                >
                  <Image
                    className="bg-white object-cover"
                    src={partner.img}
                    width={52}
                    height={52}
                    alt={partner.name || "Partner"}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <Container>
          <div>
            <img className="absolute left-0" src="/lines.svg" alt="" />{" "}
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
                  {philosophy.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 xl:gap-y-2"
                    >
                      <div className=" text-[#ffffff] font-normal text-[27px] leading-[60px]">
                        {item.number}
                      </div>
                      <div className="text-[#646A69]">{item.text}</div>
                    </div>
                  ))}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className=" mt-[64px] text-center text-white xl:text-left xl:font-semibold text-[34px] leading-[36px] xl:pl-6">
            Our charts
          </div>
          <div className="xl:flex items-start justify-start gap-8 ">
            <div>
              <ChartBar />
            </div>
            <div>
              <NetProfitChart />
            </div>
            <div>
              {" "}
              <DonutChartCard />
            </div>
          </div>
          <div className=" flex justify-center xl:justify-between xl:items-center xl:mt-5">
            <div className="text-center text-white font-medium xl:text-left xl:font-medium xl:text-[44px] leading-[54px]">
              News
            </div>
            <div className="hidden xl:block xl:mt-12">
              <button className="bg-[#7951B3]  px-6 p-4 rounded-[200px] text-white">
                View all news
              </button>
            </div>
          </div>
          <div className="xl:flex xl:justify-between gap-x-8 items-center xl:mt-5">
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
              {news.map((newsItem) => (
                <div key={newsItem.id} className="flex gap-4 xl:gap-y-8">
                  <div className="w-[30%] ">
                    {" "}
                    <Image
                      src={newsItem.img}
                      alt="speaker girl"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col w-[50%] gap-y-14">
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
          <div className="xl:flex xl:justify-between xl:text-left items-start xl:gap-x-[61px] xl:mt-14">
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
                <div
                  key={item.id}
                  className={`${
                    isOpen[item.id] ? "bg-[#7D4283]" : "bg-[#1A1A1A]"
                  } relative rounded-md mt-[17px] overflow-hidden cursor-pointer`}
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
                            isOpen[item.id] ? "/upArrow.svg" : "/downArrow.svg"
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
                      Pro account gives you freedom with uploading HD videos and
                      can also meet all your business needs apasih kamu
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
              ))}
            </div>
          </div>
        </Container>
        <div className="bg-[#7D4283] mt-7">
          <SquerSlider />
        </div>
        <footer className="pt-8 mt-24 text-center text-white bg-[#7D4283] flex justify-center items-center flex-col xl:text-left xl:mt-28 xl:relative">
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
            <div className="pt-[34px] h-fit flex flex-col gap-y-2 xl:flex-row xl:gap-x-2">
              <input
                className="py-3 px-5 rounded-[200px] text-[#161616] bg-white w-full outline-none xl:w-[349px]"
                type="text"
                placeholder="Your email"
              />
              <button className="font-medium text-lg leading-[24px] py-3 px-5 rounded-[200px] bg-[#161616] w-full xl:w-[157px]">
                register now
              </button>
            </div>
            <div className="xl:flex xl:justify-between">
              <div className="xl:flex xl:gap-x-[67px] mt-[70px]">
                <div className="flex items-start cursor-pointer">
                  <img src="/icon.svg" alt="Icon" />
                </div>
                <div className="flex justify-between w-full text-left mt-[27px]">
                  <div className="flex flex-col gap-y-3 text-white">
                    <div className="font-medium text-base leading-6">
                      The company
                    </div>
                    <div className="font-normal text-base leading-6">
                      Who are we
                    </div>
                    <div className="font-normal text-base leading-6">
                      Services
                    </div>
                    <div className="font-normal text-base leading-6">
                      Jobs{" "}
                      <span className="font-Inter text-xs leading-4 xl:bg-[#000000] xl:px-1 xl:py-[1px] xl:rounded-[99px]">
                        12
                      </span>
                    </div>
                    <div className="font-normal text-base leading-6">
                      Branches
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3 text-left">
                    <div className="font-medium text-base leading-6">
                      Help center
                    </div>
                    <div className="font-normal text-base leading-6">
                      Common questions
                    </div>
                    <div className="font-normal text-base leading-6">
                      Services
                    </div>
                    <div className="font-normal text-base leading-6">
                      Contact us
                    </div>
                    <div className="font-normal text-base leading-6">
                      Register as merchant
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[41px] flex justify-start flex-col gap-y-[9px]">
                <div className="pl-1 w-[150px] flex items-center gap-x-[9px] bg-white bg-opacity-25 rounded-[59px] cursor-pointer xl:w-64">
                  <div className="bg-white rounded-full">
                    <img src="/social/facebook.svg" alt="facebook" />
                  </div>
                  <div className="py-[6px]">Facebook</div>
                </div>
                <div className="pl-1 w-[150px] flex items-center gap-x-[9px] bg-white bg-opacity-25 rounded-[59px] cursor-pointer xl:w-64">
                  <div className="bg-white rounded-full">
                    <img src="/social/insta.svg" alt="instagram" />
                  </div>
                  <div className="py-[6px]">Instagram</div>
                </div>
                <div className="pl-1 w-[150px] flex items-center gap-x-[9px] bg-white bg-opacity-25 rounded-[59px] cursor-pointer xl:w-64">
                  <div className="bg-white rounded-full">
                    <img src="/social/linkedin.svg" alt="linkedin" />
                  </div>
                  <div className="py-[6px] xl:">LinkedIn</div>
                </div>
              </div>{" "}
            </div>
            <div className=" mt-[27px] flex justify-center  text-center text-white opacity-80 font-light text-sm leading-5 ">
              © 2024 Leader Express Delivery Company. All rights reserved.
            </div>
          </Container>
          <img
            className="hidden xl:block absolute left-[10px] bottom-0"
            src="/footerLines.svg"
            alt=""
          />
        </footer>
        <div
          ref={sidebarRef}
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 h-full w-[80%] bg-[#1E1E1E] shadow-xl z-30 transform transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.293a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-8">
              <div className="flex flex-col gap-y-4 text-white">
                <a
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  href="#home"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Home
                </a>
                <a
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  href="#about"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  About us
                </a>
                <a
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  href="#services"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Services
                </a>
                <a
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  href="#Branches"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Branches
                </a>
                <a
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="flex py-2 px-4 hover:bg-gray-700 rounded cursor-pointer items-center justify-between"
                >
                  Jobs
                  <span className="bg-[#7D4283] text-[#F1F1F1] px-2 py-1 rounded-[99px] text-xs">
                    12
                  </span>
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-y-2">
                <button className="bg-transparent px-5 py-4 text-white border border-white rounded-[200px] hover:bg-white hover:text-[#161616]">
                  Contact us
                </button>
                <button className="bg-[#7D4283] px-5 py-4 text-white rounded-[200px]">
                  Join us
                </button>
              </div>
            </nav>
          </div>
        </div>
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 xl:hidden"></div>
        )}{" "}
      </div>
    </>
  );
};
export default Home;
