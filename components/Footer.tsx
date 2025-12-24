'use client'

import Image from 'next/image';
import Link from 'next/link';

// import { Instagram, Facebook, Youtube, X } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            className="relative w-full text-white overflow-hidden  bg-[#0B0B0E] font-[family-name:var(--font-host-grotesk)]"
            style={{
                backgroundImage: "url('/assets/Footer-bg.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-32 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0 min-h-[250px]">

                    {/* Left Side: Logo, Text, and Copyright spaced out */}
                    <div className="flex flex-col justify-between h-full gap-12 lg:gap-0">
                        <div className="flex flex-col gap-6 max-w-md">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <div className="relative w-[116px] h-[46px] drop-shadow-[0_0_194px_rgba(255,255,255,1)]">
                                    <Image
                                        src="/assets/editor_logo.svg"
                                        alt="Editor Logo"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </div>

                            <p className="text-white text-xs font-medium leading-[140%]">
                                Stay updated with new features & AI improvements.
                            </p>
                        </div>

                        {/* Copyright aligned to bottom left */}

                    </div>

                    {/* Right Side: Columns for Home and Contact */}
                    <div className="flex flex-col sm:flex-row gap-16 lg:gap-32">

                        {/* Home Column */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xs font-medium text-white leading-[140%]">Home</h3>
                            <nav className="flex flex-col gap-4">
                                {['Features', 'Theme', 'Pricing', 'Testimonials'].map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="text-xs font-medium leading-[140%] text-white/60 hover:text-white transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Us Column */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xs font-medium text-white leading-[140%]">Contact Us</h3>
                            <div className="flex items-center gap-4">
                                <Link href="#" className="hover:scale-110 duration-200 opacity-80 hover:opacity-100">
                                    <Image src="/assets/footer-x.svg" alt="X" width={24} height={24} className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:scale-110 duration-200 opacity-80 hover:opacity-100">
                                    <Image src="/assets/footer-instagram.svg" alt="Instagram" width={24} height={24} className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:scale-110 duration-200 opacity-80 hover:opacity-100">
                                    <Image src="/assets/footer-facebook.svg" alt="Facebook" width={24} height={24} className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:scale-110 duration-200 opacity-80 hover:opacity-100">
                                    <Image src="/assets/footer-youtube.svg" alt="YouTube" width={24} height={24} className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Mobile Copyright */}
                    <div className="lg:hidden mt-8">
                        <p className="text-white text-xs font-medium leading-[140%]">
                            © 2024 CT Editor. All right reserved.
                        </p>
                    </div>

                </div>
                <div className="mt-auto hidden lg:block">
                    <p className="text-white text-xs font-medium leading-[140%]">
                        © 2024 CT Editor. All right reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
}
