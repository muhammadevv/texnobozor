import React, { useState } from 'react'

function ProductPage() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className='container w-full max-w-[1140px] mx-auto px-[10px]'>
        <div className='w-full'>
          <div className='w-full mt-[40px] flex items-center justify-center'>
            <div className='w-[80%]'>
              <img className='w-full' src="product/iphone.png" alt="" />
            </div>
          </div>
          <div className='w-full mt-[30px] flex justify-between'>
            <div className='w-[74px] h-[66px] flex justify-center'>
              <img className='w-[70%] h-full' src="product/iphone.png" alt="" />
            </div>
            <div className='w-[74px] h-[66px] flex justify-center'>
              <img className='w-[70%] h-full' src="product/iphone.png" alt="" />
            </div>
            <div className='w-[74px] h-[66px] flex justify-center'>
              <img className='w-[70%] h-full' src="product/iphone.png" alt="" />
            </div>
            <div className='w-[74px] h-[66px] flex justify-center'>
              <img className='w-[70%] h-full' src="product/iphone.png" alt="" />
            </div>
          </div>
          <div className='mt-[40px]'>
            <h1 className='text-[40px] font-[700] leading-[100%]'>Apple iPhone 15 Pro Max</h1>
            <div className='mt-[24px] flex items-center gap-[16px]'>
              <p className='text-[32px] font-[500] leading-[150%]'>$1399</p>
              <span className='text-[24px] text-[#a0a0a0] line-through font-[400] leading-[133%]'>$1499</span>
            </div>
            <div className='flex items-center gap-[10px]'>
              <div>
                <p className='text-[14px] text-[#0c0c0c] leading-[160%] font-[400] '>Select color: </p>
              </div>
              <div className='flex gap-[12px]'>
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
            <div className='mt-[24px] flex gap-[8px]'>
              <button className='text-[14px] text-[#d5d5d5] leading-[144%] font-[500] px-[23px] py-[15px] rounded-[8px] border-[1px] border-solid border-[#d5d5d5]'>128GB</button>
              <button className='text-[14px] text-[#6f6f6f] leading-[144%] font-[500] px-[23px] py-[15px] rounded-[8px] border-[1px] border-solid border-[#d5d5d5]'>256GB</button>
              <button className='text-[14px] text-[#6f6f6f] leading-[144%] font-[500] px-[23px] py-[15px] rounded-[8px] border-[1px] border-solid border-[#d5d5d5]'>512GB</button>
              <button className='text-[14px] text-[#6f6f6f] leading-[144%] font-[500] px-[23px] py-[15px] rounded-[8px] border-[1px] border-solid border-[#000000]'>1TB</button>
            </div>
            {/* <div className='mt-[24px] flex'>
              <div className='w-[166px] h-[64px] p-[16px] flex items-center'>
                <div>Icon</div>
                <div>
                  <p>Screen size</p>
                  <p>6.8"</p>
                </div>
              </div>
              <div>
                <div>Icon</div>
                <div>
                  <p>Screen size</p>
                  <p>6.8"</p>
                </div>
              </div>
              <div>
                <div>Icon</div>
                <div>
                  <p>Screen size</p>
                  <p>6.8"</p>
                </div>
              </div>
            </div> */}
            <div>
              <p className='text-[14px] text-[#6c6c6c] font-[400] leading-[170%] break-after-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias minima explicabo sed voluptates sint repellat at praesentium, atque provident doloribus deleniti est ut blanditiis ratione.</p>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <button className='text-[16px] text-[#000] font-[500] leading-[150%] bg-[#fff] px-[56px] py-[16px] border-[1px] border-solid border-[#000] rounded-[6px] hover:bg-[#000] hover:text-[#fff] transition-all'>Add to Wishlist</button>
              <button className='text-[16px] text-[#fff] font-[500] leading-[150%] bg-[#000] px-[56px] py-[16px] border-[1px] border-solid border-[#000] rounded-[6px] hover:bg-[#fff] hover:text-[#000] transition-all'>Add to Card</button>
            </div>
            <div>
              <div>
                <div className='w-[56px] h-[56px]'></div>
                <div>
                  <p>Free Delivery</p>
                  <p>1-2 day</p>
                </div>
              </div>
              <div>
                <div className='w-[56px] h-[56px]'></div>
                <div>
                  <p>In Stock</p>
                  <p>Today</p>
                </div>
              </div>
              <div>
                <div className='w-[56px] h-[56px]'></div>
                <div>
                  <p>Guaranteed</p>
                  <p>1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage