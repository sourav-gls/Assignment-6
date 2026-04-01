import React from 'react';

const Banner = () => {
    return (
         <div className='container mx-auto flex flex-col gap-5 md:flex-row justify-between mt-21 mb-21 text-wrap text-center md:text-start '>
            <div className=' flex flex-col justify-center'>
               <div className="badge badge-soft badge-primary flex gap-2 rounded-full ">
                <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                New: AI-Powered Tools Available
                </div>
                <h1 className=" text-[50px] md:text-[72px] font-bold ">Supercharge Your <br />Digital Workflow</h1>
                <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<div className='mt-8'>
<button className="btn rounded-full bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white">Explore Products</button>
<button className="btn ml-5 rounded-full border-purple-400"><img src="../../../assets/Play.png" alt="" /> <span className="bg-gradient-to-r from-[#536DFE] to-[#7E57C2] bg-clip-text text-transparent">Watch Demo</span></button>
</div>
            </div>
            <div>
                 <img src="../../../assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;