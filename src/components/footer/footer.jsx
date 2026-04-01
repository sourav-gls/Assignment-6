import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-[#101727] text-gray-400'>
            <div className='container mx-auto pt-10 md:pt-30 pb-15'>
                <div className='flex flex-col md:flex-row text-center md:text-start justify-between space-y-3 md:space-y-0'>
                    <div className='space-y-2'>
                        <h1 className='text-[25px] font-semibold text-white'>DigiTools</h1>
                        <p className='text-[16px] '>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className=' text-[20px] text-white'>Product</h5>
                        <p className='text-[16px] '>Features</p>
                        <p className='text-[16px] '>Pricing</p>
                        <p className='text-[16px] '>Templates</p>
                        <p className='text-[16px] '>Integrations</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className=' text-[20px] text-white'>Company</h5>
                        <p className='text-[16px] '>About</p>
                        <p className='text-[16px] '>Blog</p>
                        <p className='text-[16px] '> Careers</p>
                        <p className='text-[16px] '>Press</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className=' text-[20px] text-white'>Resources</h5>
                        <p className='text-[16px] '>Documentation</p>
                        <p className='text-[16px] '>Help Center</p>
                        <p className='text-[16px] '>Community</p>
                        <p className='text-[16px] '>Contact</p>
                    </div>
                    <div className='space-y-1'>
                        <h5 className='text-[20px] text-white'>Social Links</h5>
                        <div className='flex gap-4 justify-center md:justify-start'>
                            <a><FaInstagram></FaInstagram></a>
                            <a><FaFacebook></FaFacebook></a>
                            <a><FaTwitter></FaTwitter></a>

                        </div>
                    </div>
                  
                </div>
                  <div className='flex flex-col items-center md:flex-row  justify-between mt-10 border-t border-gray-400 pt-6'>
                        <p>© 2026 Digitools. All rights reserved.</p>
                        <div className='flex gap-8 mt-3 md:mt-0'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                    </div>

            </div>
            
        </div>
    );
};

export default Footer;