import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function RecommendedItems() {
  console.log(window.innerWidth);


  return (
    <section>
      <Swiper
        slidesPerView={window.innerWidth >= 900 ? 4 : window.innerWidth < 640 ? 1 : 2}
        slidesPerGroup={1}
        pagination={true}
        modules={[Pagination]}
        className="mt-[56px]"
        style={{
          '--swiper-pagination-color': '#000',
        }}
      >
        <SwiperSlide className="w-[360px] bg-[#fff] flex flex-col items-center justify-center">
          <div className="w-[90%]">
            <img
              className="w-full"
              src="/recommendedItem/recommended-img-1.png"
              alt=""
            />
          </div>
          <div className="mt-[16px] w-full px-[32px] pb-[56px] flex flex-col items-center">
            <h2 className="text-[33px] text-[#000] font-[400] leading-[145%]">
              Popular Products
            </h2>
            <p className="text-[14px] text-[#909090] font-[500] leading-[170%] my-[16px] text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="text-[16px] text-[#000] text-[500] leading-[150%]  py-[16px] px-[56px] border-[1px] border-[solid] border-[#000] rounded-[6px] hover:bg-[#000] hover:text-[#fff] transition-all">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[360px] bg-[#f9f9f9] flex flex-col items-center justify-center">
          <div className="w-[90%]">
            <img
              className="w-full"
              src="/recommendedItem/recommended-img-1.png"
              alt=""
            />
          </div>
          <div className="w-full mt-[16px] px-[32px] pb-[56px] flex flex-col items-center">
            <h2 className="text-[33px] text-[#000] font-[400] leading-[145%]">
              Ipad Pro
            </h2>
            <p className="text-[14px] text-[#909090] font-[500] leading-[170%] my-[16px] text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="text-[16px] text-[#000] text-[500] leading-[150%]  py-[16px] px-[56px] border-[1px] border-[solid] border-[#000] rounded-[6px] hover:bg-[#000] hover:text-[#fff] transition-all">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[360px] bg-[#eaeaea] flex flex-col items-center justify-center">
          <div className="w-[90%]">
            <img
              className="w-full"
              src="/recommendedItem/recommended-img-1.png"
              alt=""
            />
          </div>
          <div className="mt-[16px] w-full px-[32px] pb-[56px]  flex flex-col items-center">
            <h2 className="text-[33px] text-[#000] font-[400] leading-[145%]">
              Samsung Galaxy
            </h2>
            <p className="text-[14px] text-[#909090] font-[500] leading-[170%] my-[16px] text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="text-[16px] text-[#000] text-[500] leading-[150%]  py-[16px] px-[56px] border-[1px] border-[solid] border-[#000] rounded-[6px] hover:bg-[#000] hover:text-[#fff] transition-all">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[360px] bg-[#2c2c2c] flex flex-col items-center justify-center">
          <div className="w-[90%]">
            <img
              className="w-full"
              src="/recommendedItem/recommended-img-1.png"
              alt=""
            />
          </div>
          <div className="mt-[16px] w-full px-[32px] pb-[56px] flex flex-col items-center">
            <h2 className="text-[33px] text-[#fff] font-[400] leading-[145%]">
              Macbook Pro
            </h2>
            <p className="text-[14px] text-[#909090] font-[500] leading-[170%] my-[16px] text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="text-[16px] text-[#fff] text-[500] leading-[150%]  py-[16px] px-[56px] border-[1px] border-[solid] border-[#fff] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default RecommendedItems;
