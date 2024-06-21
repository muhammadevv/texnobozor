import React from "react";
import { LikeIcon } from "../../../../assets/icons";

function Discount() {
  return (
    <section>
      <div className="container w-full max-w-[1140px] mx-auto px-[10px]">
        <div className="mt-[80px]">
          <div>
            <h3 className="text-[24px] text-[#000] font-[500] leading-[133%]">
              Discounts up to -50%
            </h3>
          </div>
          <div className="mt-[32px] flex gap-[16px] flex-wrap">
            <div className="w-[268px] h-[432px] py-[24px] px-[16px] bg-[#f6f6f6] flex flex-col items-center rounded-[8px]">
              <div className="w-full flex justify-end mb-[16px]">
                <button>
                  <LikeIcon />
                </button>
              </div>
              <div className="w-[160px] h-[160px] bg-black">
                <img src="" alt="" />
              </div>
              <div className="flex flex-col items-center justify-between gap-[16px]">
                <h3 className="text-[16px] text-[#000] font-[500] leading-[150%] text-center mt-[16px]">
                  Apple iPhone 14 Pro 512GB Gold{" "}
                </h3>
                <p className="text-[24px] text-[#000] font-[600] leading-[100%]">
                  $1437
                </p>
                <button className="text-[#fff] text-[14px] font-[500] leading-[170%] py-[12px] px-[64px] border-[1px] border-[solid] border-[#000] bg-[#000] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-[268px] h-[432px] py-[24px] px-[16px] bg-[#f6f6f6] flex flex-col items-center rounded-[8px]">
              <div className="w-full flex justify-end mb-[16px]">
                <button>
                  <LikeIcon />
                </button>
              </div>
              <div className="w-[160px] h-[160px] bg-black">
                <img src="" alt="" />
              </div>
              <div className="flex flex-col items-center justify-between gap-[16px]">
                <h3 className="text-[16px] text-[#000] font-[500] leading-[150%] text-center mt-[16px]">
                  Apple iPhone 14 Pro 512GB Gold{" "}
                </h3>
                <p className="text-[24px] text-[#000] font-[600] leading-[100%]">
                  $1437
                </p>
                <button className="text-[#fff] text-[14px] font-[500] leading-[170%] py-[12px] px-[64px] border-[1px] border-[solid] border-[#000] bg-[#000] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-[268px] h-[432px] py-[24px] px-[16px] bg-[#f6f6f6] flex flex-col items-center rounded-[8px]">
              <div className="w-full flex justify-end mb-[16px]">
                <button>
                  <LikeIcon />
                </button>
              </div>
              <div className="w-[160px] h-[160px] bg-black">
                <img src="" alt="" />
              </div>
              <div className="flex flex-col items-center justify-between gap-[16px]">
                <h3 className="text-[16px] text-[#000] font-[500] leading-[150%] text-center mt-[16px]">
                  Apple iPhone 14 Pro 512GB Gold{" "}
                </h3>
                <p className="text-[24px] text-[#000] font-[600] leading-[100%]">
                  $1437
                </p>
                <button className="text-[#fff] text-[14px] font-[500] leading-[170%] py-[12px] px-[64px] border-[1px] border-[solid] border-[#000] bg-[#000] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-[268px] h-[432px] py-[24px] px-[16px] bg-[#f6f6f6] flex flex-col items-center rounded-[8px]">
              <div className="w-full flex justify-end mb-[16px]">
                <button>
                  <LikeIcon />
                </button>
              </div>
              <div className="w-[160px] h-[160px] bg-black">
                <img src="" alt="" />
              </div>
              <div className="flex flex-col items-center justify-between gap-[16px]">
                <h3 className="text-[16px] text-[#000] font-[500] leading-[150%] text-center mt-[16px]">
                  Apple iPhone 14 Pro 512GB Gold{" "}
                </h3>
                <p className="text-[24px] text-[#000] font-[600] leading-[100%]">
                  $1437
                </p>
                <button className="text-[#fff] text-[14px] font-[500] leading-[170%] py-[12px] px-[64px] border-[1px] border-[solid] border-[#000] bg-[#000] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] relative">
        <div className="w-[100%]">
          <img className="w-[100%]" src="banner/footer-banner.png" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] flex flex-col items-center justify-center">
          <h1 className="text-[72px] text-[#fff] font-[200] leading-[100%] mb-[16px]">
            Big Summer Sale
          </h1>
          <p className="text-[16px] text-[#787878] font-[400] leading-[200%]">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <button className="text-[16px] text-[#fff] font-[500] leading-[150%] mt-[40px] py-[16px] px-[56px] border-[1px] border-[solid] border-[#fff] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Discount;
