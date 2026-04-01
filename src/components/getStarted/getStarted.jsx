import React from 'react';

const GetStarted = () => {
    return (
        <div className='bg-base-200'>
        <div className='container mx-auto pt-25 pb-25'>
            <div className='text-center mb-10'>
            <h1 className='text-[48px] font-semibold'>Get Started in 3 Steps</h1>
            <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-around'>
                <div>
                 <div className="card bg-base-100 w-90 pt-8 pb-8 shadow-sm rounded-lg">
       <div className='bg-purple-100 rounded-full flex items-center justify-center w-30 h-30 ml-30'>
    
        <img
           src="../../../assets/user.png"
           alt="Shoes"
           className="rounded-xl " />
      
      </div> 
      <div className="bg-gradient-to-r from-[#536DFE] to-[#7E57C2] w-7 h-7 text-[15px] text-white rounded-full flex justify-center items-center transform translate-x-77 -translate-y-32">01</div>            
      <div className="card-body items-center text-center">
      <h2 className="card-title font-semibold text-[24px]">Create Account</h2>
      <p className=' text-gray-400'>Sign up for free in seconds. No credit card <br />required to get started.</p>
     
  </div>
</div>
                </div>
                <div>
                 <div className="card bg-base-100 w-90 pt-8 pb-8 shadow-sm">
      <div className='bg-purple-100 rounded-full flex items-center justify-center w-30 h-30 ml-30'>
        <img
           src="../../../assets/package.png"
           alt="Shoes"
           className="rounded-xl" />
      </div>
      <div className="bg-gradient-to-r from-[#536DFE] to-[#7E57C2] w-7 h-7 text-[15px] text-white rounded-full flex justify-center items-center transform translate-x-77 -translate-y-32">02</div> 
      <div className="card-body items-center text-center">
      <h2 className="card-title font-semibold text-[24px]">Choose Products</h2>
      <p className=' text-gray-400'> Browse our catalog and select the tools <br />that fit your needs.</p>
     
  </div>
</div>
                </div>
                <div>
                 <div className="card bg-base-100 w-90 pt-8 pb-8 shadow-sm">
<div className='bg-purple-100 rounded-full flex items-center justify-center w-30 h-30 ml-30'>        <img
           src="../../../assets/rocket.png"
           alt="Shoes"
           className="rounded-xl" />
      </div>
      <div className="bg-gradient-to-r from-[#536DFE] to-[#7E57C2] w-7 h-7 text-[15px] text-white rounded-full flex justify-center items-center transform translate-x-77 -translate-y-32">03</div> 
      <div className="card-body items-center text-center">
      <h2 className="card-title font-semibold text-[24px]">Start Creating</h2>
      <p className=' text-gray-400'>Download and start using your premium  <br /> tools immediately.</p>
     
  </div>
</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default GetStarted;