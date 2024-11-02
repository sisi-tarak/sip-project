import React from "react";

function home(props) {
  return (
    <>
      <div className="container bg-white-500 flex flex-col lg:flex-row  justify-center ">
        <div className="w-[280px] p-6">
          <div className="Inter">
            <img src="BLACK.png" />
            <p className="text-[14px] leading-5 font-normal pt-1">SIP</p>
            <h1 className="text-[20px] leading-7 font-semibold pt-1">
              Discovery call
            </h1>
            <p className="text-[14px] leading-5 font-normal pt-1">
              {props.name}, Thank you for your interest in {props.branch}.
              <p className="text-[14px] leading-5 font-normal pt-3">
                Talk soon! 👋
              </p>
            </p>
            <div className="flex gap-2 mb-2">
              <img src="SVG.png" />
              <p>30m</p>
            </div>
            <div className="flex gap-2 mb-2">
              <img src="icon.svg.png" />
              <p>video call</p>
            </div>
            <div className="flex gap-2 mb-2">
              <img src="SVG (1).png" />
              <p className="text-[14px] leading-5 font-normal pt-1">
                select...
              </p>
              <img src="" />
            </div>
          </div>
        </div>
        <div className="w-[720px] bg-violet-700" style={{ color: "#ffffff" }}>
          Thank you for your interest in collaborating with 33labs.
        </div>
        <div className="w-[280px]">
          <div className="flex gap-1 pt-3 ">
            <p className="text-[16px] leading-8 font-medium ml-3">Mon</p>
            <p className="text-[14px] leading-8 ">11</p>
            <div className=" flex ml-[55px] border-solid border-[1px] rounded-md w-[100px]  h-9">
              <p className="bg-[#E5E7EB] h-5 m-2 w-9 text-center">12h</p>
              <p className="pl-2 w-9 mt-2">24h</p>
            </div>
            <div className="pt-[60px] w-[239px] space-y-2 ml-[-200px] mt-[-10px]">
              <button className="border-solid border-[1px] w-60 py-[6px] rounded-md">
                4:30am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                5:00am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                5:30am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                6:00am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                6:30am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                7:00am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                7:30am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                8:00am
              </button>
              <button className="border-solid border-[1px] w-[239px] py-[6px] rounded-md">
                8:30am
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
