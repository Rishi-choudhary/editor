'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { url } from 'inspector'

const brands = [
    { src: '/assets/trusted/HP.png', alt: 'HP' },
    { src: '/assets/trusted/BuildBox.png', alt: 'BuildBox' },
    { src: '/assets/trusted/Daf.png', alt: 'DAF' },
    { src: '/assets/trusted/IBM.png', alt: 'IBM' },
    { src: '/assets/trusted/HP.png', alt: 'HP' },
    { src: '/assets/trusted/BuildBox.png', alt: 'BuildBox' },
    { src: '/assets/trusted/Daf.png', alt: 'DAF' },
]

export default function TrustedBy() {
    return (
        <section className="relative w-full min-h-[600px] md:min-h-[806px] mt-20 flex items-center justify-center overflow-hidden">
            {/* Main Container with 1200px max-width */}
            <div
                className="relative w-full max-w-[1200px] mx-auto md:mx-auto h-[600px] md:h-[806px] rounded-[20px] overflow-hidden"
                style={{
                    background: `url('/assets/trusted/trusted-section-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0px 0px 250px #000000, 0px 0px 250px #000000, 0px 0px 250px #000000, 0px 0px 250px #000000, 0px 0px 216px #000000, 0px 0px 108px #000000'
                }}
            >

                {/* Background Image - Full Size
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/assets/trusted/trusted-section-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '1200px',
                        backgroundRepeat: 'no-repeat',
                        opacity: 1,
                        pointerEvents: 'none'
                    }}
                /> */}



                {/* Main Heading "TRUSTED BY" with Glow */}
                <div
                    className="absolute"
                    style={{
                        width: 'auto',
                        left: 'calc(50% - 165px/2 - 386.5px)',
                        top: 'calc(50% - 33px/2 - 256.5px)',
                        fontFamily: 'var(--font-league-gothic), "League Gothic", Impact, "Arial Black", sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(32px, 4vw, 53.1744px)',
                        lineHeight: '1.2',
                        textAlign: 'right',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        textShadow: '0px 0px 80px rgba(255, 255, 255, 0.9), 0px 0px 60px rgba(255, 255, 255, 0.8), 0px 0px 40px rgba(255, 255, 255, 0.7), 0px 0px 250px rgba(200, 200, 200, 0.6), 0px 0px 181.44px rgba(180, 180, 180, 0.5), 0px 0px 100px rgba(160, 160, 160, 0.4), 0px 0px 51.84px rgba(255, 255, 255, 0.8), 0px 0px 25.92px rgba(255, 255, 255, 0.9)'
                    }}
                >
                    TRUSTED BY
                </div>

                {/* Background "brands" text */}
                <div
                    className="absolute hidden md:block"
                    style={{
                        width: '233px',
                        height: '75px',
                        left: 'calc(50% + 1280.5px)',
                        top: '391px',
                        fontFamily: 'var(--font-league-gothic), "League Gothic", Impact, "Arial Black", sans-serif',
                        fontSize: 'clamp(60px, 8vw, 118.571px)',
                        lineHeight: '1.2',
                        textAlign: 'right',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.08)',
                        pointerEvents: 'none'
                    }}
                >
                    brands
                </div>

                {/* Brand Carousel Rows Container */}
                <div className="absolute w-full bottom-[80px] md:bottom-[140px] flex flex-col gap-8 md:gap-12">

                    {/* Row 1 - Moving Left */}
                    <div className="w-full overflow-hidden relative">
                        <motion.div
                            className="flex gap-12 md:gap-32 w-fit items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40
                            }}
                        >
                            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="relative flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
                                    style={{
                                        width: 'clamp(100px, 10vw, 127px)',
                                        height: 'clamp(100px, 10vw, 127px)'
                                    }}
                                >
                                    <Image
                                        src={brand.src}
                                        alt={brand.alt}
                                        width={127}
                                        height={127}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 - Moving Right */}
                    <div className="w-full overflow-hidden relative">
                        <motion.div
                            className="flex gap-12 md:gap-32 w-fit items-center"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 45
                            }}
                        >
                            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                                <div
                                    key={`row2-${index}`}
                                    className="relative flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
                                    style={{
                                        width: 'clamp(100px, 10vw, 127px)',
                                        height: 'clamp(100px, 10vw, 127px)'
                                    }}
                                >
                                    <Image
                                        src={brand.src}
                                        alt={brand.alt}
                                        width={127}
                                        height={127}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>

            </div>

        </section>
    )
}
