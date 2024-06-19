import React from "react";

import { Link } from "react-router-dom";
import {
  CameraIcon,
  ComputerIcon,
  GamingIcon,
  HeadphoneIcon,
  LeftIcon,
  PhoneIcon,
  RightIcon,
  WatchIcon,
} from "../../../../assets/icons";

function Category() {
  return (
    <section>
      <div className="bg-[#fafafa] py-[80px]">
        <div className="container w-full max-w-[1140px] mx-auto px-[10px]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[#000] text-[24px] font-[600] leading-[133%]">
                Browse By Category
              </h2>
            </div>
            {/* <div className="flex gap-[10px]">
              <button className="w-[36px] h-[36px] flex items-center justify-center rounded-[50%] hover:bg-[#ededed] transition-all">
                <LeftIcon />
              </button>
              <button className="w-[36px] h-[36px] flex items-center justify-center rounded-[50%] hover:bg-[#ededed] transition-all">
                <RightIcon/>
              </button>
            </div> */}
          </div>
          <div className="mt-[32px] flex flex-wrap justify-center gap-[16px] tabel-min:gap-[24px] tabel:px-[24px] tabel:gap-[36px] laptop:justify-between laptop:p-0 laptop:flex-nowrap laptop:gap-[24px]">
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px]">
              <Link>
                <div className="w-full h-full flex items-center justify-center flex-col border-[1px] border-[#ededed] border-[solif] hover:border-[#000] rounded-[15px] transition-all">
                  <span>
                    <PhoneIcon />
                  </span>
                  <p className="font-[500] text-[16px] leading-[150%] text-[#000] mt-[8px]">
                    Phones
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px]">
              <div className="w-full h-full flex items-center justify-center flex-col border-[1px] border-[#ededed] border-[solif] hover:border-[#000] rounded-[15px] transition-all">
                <span>
                  <WatchIcon />
                </span>
                <p className="font-[500] text-[16px] leading-[150%] text-[#000] mt-[8px]">
                  Smart Watches
                </p>
              </div>
            </div>
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px]">
              <div className="w-full h-full flex items-center justify-center flex-col border-[1px] border-[#ededed] border-[solif] hover:border-[#000] rounded-[15px] transition-all">
                <span>
                  <CameraIcon />
                </span>
                <p className="font-[500] text-[16px] leading-[150%] text-[#000] mt-[8px]">
                  Cameras
                </p>
              </div>
            </div>
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px]">
              <div className="w-full h-full flex items-center justify-center flex-col border-[1px] border-[#ededed] border-[solif] hover:border-[#000] rounded-[15px] transition-all">
                <span>
                  <HeadphoneIcon />
                </span>
                <p className="font-[500] text-[16px] leading-[150%] text-[#000] mt-[8px]">
                  Headphones
                </p>
              </div>
            </div>
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px]">
              <div className="w-full h-full flex items-center justify-center flex-col border-[1px] border-[#ededed] border-[solif] hover:border-[#000] rounded-[15px] transition-all">
                <span>
                  <ComputerIcon />
                </span>
                <p className="font-[500] text-[16px] leading-[150%] text-[#000] mt-[8px]">
                  Computers
                </p>
              </div>
            </div>
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px]">
              <div className="w-full h-full flex items-center justify-center flex-col border-[1px] border-[#ededed] border-[solif] hover:border-[#000] rounded-[15px] transition-all">
                <span>
                  <GamingIcon />
                </span>
                <p className="font-[500] text-[16px] leading-[150%] text-[#000] mt-[8px]  ">
                  Gaming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
