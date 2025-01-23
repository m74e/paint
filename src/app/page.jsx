"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/container";
import dynamic from "next/dynamic";
import DonutChartCard from "@/components/circle/DonutChartCard";
import Curls from "@/app/customsIcons/curls";
const ChartBar = dynamic(() => import("@/components/profitChart/chartbar"), {
  ssr: false,
});
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const handleToggle = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the specific id
    }));
  };
  return (
    <>
      <div className="bg-[#161616] ">
        <Container>
          <div className="flex justify-between items-center ">
            {/* header */}
            <div>
              <img className="cursor: pointer;" src="/others.svg" alt="" />
            </div>
            <div className="">
              <img className="cursor: pointer;" src="/icon.svg" alt="" />
            </div>
          </div>

          <div className=" mt-[35px] font-bold text-[#FFFFFF] text-center	text-2xl leading-[48px] ">
            Transform your business with our <br />
            {/*the color not finish yet*/}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E879F9] to-[#C75ED0]">
              6 creative marketing solutions!
            </span>
          </div>
          <div className="flex justify-center items-center  text-center text-[#FFFFFF] mt-[40px] ">
            Welcome to Focus Marketing Solutions! We're a creative team
            dedicated to driving your business forward with innovative marketing
            strategies. From digital marketing to social media management, we're
            here to help you succeed. Let's build something extraordinary
            together
          </div>
          <div className="mt-[40px] flex gap-4 flex-col">
            <button className="w-full  bg-[#7D4283] rounded-[200px]">
              Join us
            </button>
            <button className="w-full border-2 border-white rounded-[200px] bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300">
              Contact us
            </button>
          </div>
        </Container>
        <div className="mt-[58px] text-center text-[#FFFFFF] ">
          Our partners
        </div>
        <div className="mt-4 flex flex-nowrap flex-row justify-start gap-1 overflow-x-auto scrollbar-hide scrollbar">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center gap-1 w-[271px] bg-white rounded-md shrink-0"
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
            <div className="relative">
              <div className="mt-20 font-normal text-2xl text-white text-center">
                About us
              </div>

              <img
                className="lines"
                src="/assets/Lines.png"
                alt="Decorative lines"
              />

              <p className=" text-white text-center pt-8 font-norma text-basel z-10">
                Welcome to{" "}
                <span className="text-[#693A70ED] z-10">
                  Focus Marketing Solutions
                </span>
                ! We're a creative team dedicated to driving your business
                forward with innovative marketing strategies. From digital
                marketing to social media management, we're here to help you
                succeed.
                <span className="text-[#693A70ED] z-10">
                  Let's build something extraordinary together.
                </span>
              </p>
              <div className="flex justify-center items-center pt-20 z-10">
                <button className="w-[351px] bg-transparent border-[1px] border-[#9350F2] rounded-[200px] text-center text-[#9350F2] z-10 ">
                  Read more
                </button>
              </div>
              <div className="mt-[55px] flex flex-col gap-2 text-center text-[#FFFFFF] text-2xl leading-[68px]">
                <div className="text">Our services</div>
                <div className="text-[#646A69] text-lg leading-[16px] ">
                  ransforming your online presence with innovative digital
                  strategies
                </div>
              </div>
              <div className="grid place-items-center grid-cols-2 gap-x-[34px] gap-y-[75px]	mt-[44px]">
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
              <div className="text-[#7D4283] text-[32px] font-medium leading-[40px]">
                We bear the responsibility of developing the sector.
              </div>
              <div className="text-[#646A69]">
                Elevate your brand with our comprehensive marketing solutions,
                including Digital Marketing, Content Creation, and Social Media
                Strategy. Enhance visibility through expert SEO and PPC
                management,{" "}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[74px] gap-y-[16px]">
            {philosophy.map((philosophy) => (
              <div className="flex flex-col gap-4 ">
                <div className=" text-[#ffffff] font-normal text-[27px] leading-[60px]">
                  {philosophy.number}
                </div>
                <div className="text-[#646A69]">{philosophy.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-[64px] text-center text-white">Our charts</div>

          <ChartBar />
          <DonutChartCard />

          <div className="pt-[68px]">
            <div className="text-center text-white font-medium">News</div>
            <div className="pt-4">
              <div>
                {" "}
                <Image
                  src="/assets/people.png" // Path to the image in the 'public' folder
                  alt="My image"
                  width={500}
                  height={500}
                />
                <div className="mt-[18px] flex justify-items-start gap-[6px]">
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
                  <div className="text-[#646A69] ">
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
              <div className="flex gap-4">
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
                  <div></div>
                </div>
              </div>
            ))}
          </div>
          <button className="py-4 w-full text-white bg-[#7D4283] rounded-[200px]">
            Show all news
          </button>
          <div className="mt-[49px] flex flex-col text-center justify-center items-center gap-y-[13px]">
            <h2 className="text-white font-bold text-2xl leading-9">
              Simple pricing for your Business
            </h2>
            <p className="text-[#646A69] font-normal ">
              We have several powerful plans to showcase your business and get
              discoveredas a creative entrepreneurs. Everything you need.
            </p>
          </div>
          <div>
            {simplePricing.map((item) => (
              <>
                <div
                  key={item.id}
                  className={`${
                    isOpen[item.id] ? "bg-[#7D4283] " : "bg-[#1A1A1A]"
                  }  relative rounded-md mt-[17px]  overflow-hidden cursor-pointer`}
                >
                  <div
                    onClick={() => handleToggle(item.id)}
                    className="flex flex-col gap-y-4 h-full w-full"
                  >
                    <div
                      className={` ${
                        isOpen[item.id] ? "bg-[#7D4283] " : "bg-[#1A1A1A]"
                      } bg-[#1A1A1A] rounded-t-md flex items-center justify-between w-full p-4 "}`}
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
                    } absolute top-0 right-[5px] }`}
                  />
                </div>
              </>
            ))}
          </div>
        </Container>

        <footer className="pt-8 mt-24 text-center text-white bg-[#7D4283] flex justify-center items-center flex-col gap-x-4">
          <Container>
            <div className="font-medium text-2xl leading-9">
              <h2>What are you waiting for?</h2>
            </div>
            <div className="font-light text-base leading-[23px]">
              <p>
                Register now to get the best delivery experience for you and
                your clients in Iraq!
              </p>
            </div>
            <div className="pt-[34px] h-fit flex flex-col gap-y-2">
              <input
                className="py-3 px-5 rounded-[200px] bg-white w-full"
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
                <div className="">The company</div>
                <div>Who are we </div>
                <div>Services</div>
                <div>
                  Jobs <span className="">12</span>
                </div>
                <div>The company</div>
              </div>
              <div className="flex flex-col gap-y-3 text-left">
                <div className="">The company</div>
                <div>Who are we </div>
                <div>Services</div>
                <div>
                  Jobs <span className="">12</span>
                </div>
                <div>The company</div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};
export default Home;
