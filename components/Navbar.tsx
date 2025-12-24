import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="flex justify-center w-full fixed top-4 z-50 font-[family-name:var(--font-league-gothic)] uppercase">
            <nav
                className="relative flex items-center justify-between w-full mx-4 px-4 h-[72px] pl-9 rounded-[12px] border border-white/10 shadow-[0px_10px_64px_rgba(0,0,0,0.25)] backdrop-blur-[5.34px] transition-all duration-300"
                style={{
                    background: 'linear-gradient(154.15deg, rgba(255, 255, 255, 0.1) 8.21%, rgba(255, 255, 255, 0.06) 53.6%, rgba(255, 255, 255, 0.1) 102.77%)',
                    fontFamily: 'font-family: var(--font-league-gothic);'
                }}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="relative w-[85px] h-[34px]">
                        <Image
                            src="/assets/editor_logo.svg"
                            alt="Editor Logo"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                </div>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2">
                    <Link href="#" className="text-white text-2xl font-normal tracking-[0.03em] uppercase">
                        Home
                    </Link>
                    <div className="relative group flex items-center gap-1 cursor-pointer">
                        <span className="text-[#AEAEAE] hover:text-white transition-colors text-2xl font-normal tracking-[0.03em] uppercase">Features</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#AEAEAE] group-hover:text-white transition-colors">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                    <Link href="#" className="text-[#AEAEAE] hover:text-white transition-colors text-2xl font-normal tracking-[0.03em] uppercase">
                        Theme
                    </Link>
                    <Link href="#" className="text-[#AEAEAE] hover:text-white transition-colors text-2xl font-normal tracking-[0.03em] uppercase">
                        Pricing
                    </Link>
                    <Link href="#" className="text-[#AEAEAE] hover:text-white transition-colors text-2xl font-normal tracking-[0.03em] uppercase">
                        Testimonials
                    </Link>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 lg:gap-8">
                    <Link href="#" className="hidden lg:block text-[#AEAEAE] hover:text-white transition-colors text-2xl font-normal tracking-[0.03em] uppercase">
                        About Us
                    </Link>
                    <button className="bg-white text-black hover:bg-gray-200 text-xl font-normal px-6 py-3 rounded-[6px] transition-colors uppercase tracking-[0.03em]">
                        Contact Us
                    </button>

                    {/* Mobile Menu Button (Optional placeholder) */}
                    <button className="md:hidden text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
