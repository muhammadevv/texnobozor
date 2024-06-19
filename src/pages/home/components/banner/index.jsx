const Banner = () => {
  return (
    <section>
      <div className="overflow-hidden  bg-[#211C24]">
        <div className="container w-full max-w-[1140px] mx-auto px-[10px]">
          <div className="flex flex-col items-center laptop:flex-row laptop:justify-between">
            <div className="flex flex-col items-center mt-[60px]">
              <p className="font-[600] text-[18px] leading-[128%] text-[#fff] opacity-40 mb-[10px]">
                Pro.Beyond.
              </p>
              <h1 className="tracking-[-0.01em] text-[56px] leading-[100%] text-[#fff] font-[600] text-center">
                <span className="font-[200] text-center">IPhone 14</span> Pro
              </h1>
              <p className="text-[18px] text-[#909090] font-[133%] mt-[24px] text-center px-[16px]">
                Created to change everything for the better. For everyone
              </p>
              <button className="text-[#fff] border-[1px] border-solid border-[#fff] rounded-[6px] py-[14px] px-[48px] mt-[24px] text-[14px] leading-[150%] hover:text-[#211C24] hover:bg-white transition-all">
                Shop Now
              </button>
            </div>
            <div className="w-[80%]">
              <img
                className="w-full"
                src="banner/banner-iphone.png"
                alt="Iphone Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col laptop:flex-row">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col items-center p-[40px] laptop:p-0 laptop:flex-row">
            <div className="laptop:w-[50%]">
              <img
                className="laptop:hidden"
                src="banner/PlayStation.png"
                alt=""
              />
              <img
                className="hidden laptop:block w-full"
                src="banner/banner-playstation.png"
                alt=""
              />
            </div>
            <div className="w-[50%] flex flex-col items-center laptop:items-start">
              <h2 className="text-[34px] text-[#000] leading-[118%] font-[400] mt-[24px] laptop:mt-[16px]">
                Playstation 5
              </h2>
              <p className="text-[14px] text-[#909090] leading-[170%] mt-[16px] font-[500] text-center laptop:text-start laptop:pr-[22px]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full bg-[#ededed] flex flex-col items-center p-[40px] laptop:p-0 laptop:flex-row laptop:gap-[24px]">
              <div className="laptop:w-[40%]">
                <img
                  className="laptop:hidden"
                  src="banner/hero__gnfk5g59t0qe_xlarge_2x 1.png"
                  alt=""
                />
                <img
                  className="hidden laptop:block w-full"
                  src="banner/banner-airpodsmax.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center mt-[24px] laptop:py-[22px] laptop:pr-[34px]">
                <h2 className="text-[29px] text-[#000] leading-[138%] font-[300]">
                  Apple AirPods <span className="font-[500]"> Max</span>
                </h2>
                <p className="text-[14px] text-[#909090] leading-[170%] font-[500]">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="w-full bg-[#353535] flex items-center flex-col p-[40px] laptop:p-0 laptop:flex-row laptop:gap-[24px]">
              <div className="laptop:w-[80%]">
                <img
                  className="laptop:hidden"
                  src="banner/image 36.png"
                  alt=""
                />
                <img
                  className="hidden laptop:block w-full"
                  src="banner/banner-applevisionpro.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center laptop:items-start laptop:pr-[34px]">
                <h2 className="text-[#fff] text-[29px] font-[300] leading-[138%]">
                  Apple Vision <span className="font-[500]">Pro</span>
                </h2>
                <p className="text-[#909090] text-[14px] font-[500] leading-[170%] mt-[8px]">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#ededed] flex items-center flex-col-reverse p-[40px] laptop:p-0 laptop:flex-row">
          <div className="mt-[24px] flex flex-col items-center laptop:items-start laptop:ml-[56px]">
            <h2 className="text-[#000] text-[34px] leading-[100%] font-[100] laptop:text-[62px]">
              Macbook <span className="font-[600]">Air</span>
            </h2>
            <p className="font-[500] text-[14px] leading-[170%] text-[#909090] my-[16px]">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="text-[#000] text-[16px] font-[500] leading-[150%] py-[16px] px-[56px] border-[1px] border-[#000] rounded-[6px] hover:bg-[#000] hover:text-[#fff] transition-all">
              Shop Now
            </button>
          </div>
          <div className="laptop:w-[60%]">
            <img
              className="laptop:hidden"
              src="banner/MacBook Pro 14.png"
              alt=""
            />
            <img
              className="hidden laptop:block w-full"
              src="banner/banner-macbook.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
