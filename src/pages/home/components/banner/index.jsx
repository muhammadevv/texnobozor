const Banner = () => {
  return (
    <section>
      <div className="overflow-hidden  bg-[#211C24] h-[630px]">
        <div className="container w-full max-w-[1140px] mx-auto px-[10px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-[600] text-[24px] leading-[128%] text-[#fff] opacity-40 mb-[10px]">
                Pro.Beyond.
              </p>
              <h1 className="tracking-[-0.01em] text-[72px] leading-[75%] text-[#fff] font-[600]">
                {" "}
                <span className="font-[200]">IPhone 14</span> Pro
              </h1>
              <p className="text-[18px] text-[#909090] font-[133%] mt-[24px]">
                Created to change everything for the better. For everyone
              </p>
              <button className="text-[#fff] border-[1px] border-solid border-[#fff] rounded-[6px] py-[16px] px-[56px] mt-[24px] text-[16px] leading-[150%] hover:text-[#211C24] hover:bg-white transition-all">
                Shop Now
              </button>
            </div>
            <div>
              <img
                className="w-full"
                src="banner/banner-iphone.png"
                alt="Iphone Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[50%]">
          <div className="w-full flex items-center pr-[48px]">
            <div className="w-[92%] ">
              <img
                className="w-full"
                src="banner/banner-playstation.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-[50px] text-[#000] leading-[82%] font-[500]">
                Playstation 5
              </h2>
              <p className="text-[14px] text-[#909090] leading-[170%] mt-[16px] font-[500]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%] bg-[#ededed] flex items-center">
              <div className="w-[40%]">
                <img
                  className="w-full"
                  src="banner/banner-airpodsmax.png"
                  alt=""
                />
              </div>
              <div className="px-[48px]">
                <h2 className="text-[29px] text-[#000] leading-[138%] font-[300]">
                  Apple AirPods <span className="font-[500]"> Max</span>
                </h2>
                <p className="text-[14px] text-[#909090] leading-[170%] font-[500]">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="w-[50%] bg-[#353535] flex items-center">
              <div className="w-[50%]">
                <img
                  className="w-full"
                  src="banner/banner-applevisionpro.png"
                  alt=""
                />
              </div>
              <div className="pl-[16px] pr-[48px]">
                <h2 className="text-[#fff] text-[29px] font-[300] leading-[138%] ">
                  Apple <br /> Vision <span className="font-[500]">Pro</span>
                </h2>
                <p className="text-[#909090] text-[14px] font-[500] leading-[170%]">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[#ededed] flex items-center justify-between">
          <div className="ml-[56px]">
            <h2 className="text-[#000] text-[64px] leading-[100%] font-[100]">
              {" "}
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
          <div className="w-[50%]">
            <img className="w-full" src="banner/banner-macbook.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
