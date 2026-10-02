import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    });

    return (
        <div>
        <div className="my-2.5 grid grid-cols-3 items-center px-4">

            <div>
                {/* Empty Left Side  */}
            </div>


            <div className="flex items-center justify-center gap-2">
                <Image
                    src="/logo.webp"
                    alt="Logo"
                    width={50}
                    height={50}
                />

                <div>
                    <h3>Bangla News 24</h3>
                    <p>{date}</p>
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <button className="btn btn-xs sm:btn-sm md:btn-md">
                    সাইন ইন
                </button>

                <button className="btn bg-red-600 text-white btn-xs sm:btn-sm md:btn-md">
                    সাইন আপ
                </button>
            </div>
            
        </div>
        <NavLinks />
        </div>
    );
};

export default Header;