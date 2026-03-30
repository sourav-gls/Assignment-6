import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='container mx-auto pt-30 pb-15'>
                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <h1 className='text-[25px] font-semibold'>DigiTools</h1>
                        <p className='text-[16px] '>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className=' text-[20px]'>Product</h5>
                        <p className='text-[16px] '>Features</p>
                        <p className='text-[16px] '>Pricing</p>
                        <p className='text-[16px] '>Templates</p>
                        <p className='text-[16px] '>Integrations</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className=' text-[20px]'>Company</h5>
                        <p className='text-[16px] '>About</p>
                        <p className='text-[16px] '>Blog</p>
                        <p className='text-[16px] '> Careers</p>
                        <p className='text-[16px] '>Press</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className=' text-[20px]'>Resources</h5>
                        <p className='text-[16px] '>Documentation</p>
                        <p className='text-[16px] '>Help Center</p>
                        <p className='text-[16px] '>Community</p>
                        <p className='text-[16px] '>Contact</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className='text-[20px]'>Social Links</h5>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;