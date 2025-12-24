'use client'

import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "HP",
        content: "The AI features saved me hours of editing! Love the seamless collaboration",
        avatar: "/assets/placeholder-avatar-1.png",
        borderColor: "#FFFFFF",
        glow: true
    },
    {
        id: 2,
        name: "James W.",
        role: "IBM",
        content: "Best AI-powered editor for teams. The real-time editing is a game-changer",
        avatar: "/assets/placeholder-avatar-2.png",
        borderColor: "#FFFFFF",
        glow: true
    },
    {
        id: 3,
        name: "Emily R.",
        role: "Paypal",
        content: "Feels like having an intelligent co-writer. Highly recommend!",
        avatar: "/assets/placeholder-avatar-3.png",
        borderColor: "#FFFFFF",
        glow: true
    },
    {
        id: 4,
        name: "Michael T.",
        role: "Google",
        content: "Incredible speed and accuracy. Changed our workflow completely.",
        avatar: "/assets/placeholder-avatar-4.png",
        borderColor: "#55C200",
        glow: false
    },
];

export default function Testimonials() {
    return (
        <section
            className="relative w-full py-24 md:py-40 overflow-hidden text-white"
            style={{
                backgroundImage: 'url(/assets/testimonials-bg.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Container Group */}
            <div
                className="relative mx-auto"
                style={{
                    width: 'min(1784px, 95%)',
                    maxWidth: '1784px'
                }}
            >
                {/* Large Background Text "TESTIMONIALS" - Multiple Rows */}
                {/* <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '10px'
                    }}
                >
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            style={{
                                width: '100%',
                                fontFamily: 'var(--font-league-gothic), "League Gothic", Impact, sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: 'clamp(80px, 18vw, 304.768px)',
                                lineHeight: '1.2',
                                textAlign: 'right',
                                textTransform: 'uppercase',
                                opacity: 0.5,
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            testimonials
                        </div>
                    ))}
                </div> */}

                {/* Main Content Container */}
                <div
                    className="relative z-10"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '40px 0px',
                        gap: '100px'
                    }}
                >
                    {/* Heading */}
                    <div
                        className="text-center"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: 'var(--font-league-gothic), "League Gothic", Impact, sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: 'clamp(40px, 6vw, 80px)',
                                lineHeight: '1.2',
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                color: '#FFFFFF'
                            }}
                        >
                            What companies Are Saying ?
                        </h2>
                    </div>

                    {/* Testimonials Carousel */}
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex gap-12 px-4"
                        >
                            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="relative flex-shrink-0"
                                    style={{
                                        width: '430.45px',
                                        height: '159.7px',
                                        flex: 'none',
                                        order: index % 4
                                    }}
                                >
                                    {/* Group Container */}
                                    <div
                                        className="absolute"
                                        style={{
                                            width: '430.45px',
                                            height: '159.7px',
                                            left: '0px',
                                            top: '0px'
                                        }}
                                    >
                                        {/* Floating Avatar with Intense Glow */}
                                        <div
                                            className="absolute"
                                            style={{
                                                width: '45.01px',
                                                height: '45.01px',
                                                left: '0px',
                                                top: '0px',
                                                border: `2.8134px solid ${testimonial.borderColor}`,
                                                borderRadius: '2869.14px',
                                                // filter: testimonial.glow
                                                //     ? 'drop-shadow(0px 0px 170.154px #FFFFFF) drop-shadow(0px 0px 97.231px #FFFFFF) drop-shadow(0px 0px 56.7181px #FFFFFF) drop-shadow(0px 0px 28.359px #FFFFFF) drop-shadow(0px 0px 8.10258px #FFFFFF) drop-shadow(0px 0px 4.05129px #FFFFFF)'
                                                //     : 'none'
                                            }}
                                        >
                                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden flex items-center justify-center text-xs font-bold text-white">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                        </div>

                                        {/* Bento Card */}
                                        <div
                                            className="absolute"
                                            style={{
                                                boxSizing: 'border-box',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '22.0489px',
                                                gap: '8.35px',
                                                width: '393.88px',
                                                height: '106.24px',
                                                left: 'calc(50% - 393.88px/2)',
                                                top: '53.45px',
                                                background: '#1A1A1A',
                                                boxShadow: '0px 0px 18.3741px rgba(0, 0, 0, 0.2), inset 1.04427px 2.08855px 8.35419px rgba(248, 248, 248, 0.06)',
                                                backdropFilter: 'blur(24.805px)',
                                                borderRadius: '1.83741px 22.0489px 22.0489px 22.0489px'
                                            }}
                                        >
                                            {/* Content Frame */}
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    padding: '0px',
                                                    gap: '12.14px',
                                                    width: '349.78px',
                                                    height: '62.14px',
                                                    flex: 'none',
                                                    order: 0,
                                                    alignSelf: 'stretch'
                                                }}
                                            >
                                                {/* Name & Role */}
                                                <div
                                                    style={{
                                                        width: '46px',
                                                        height: '18px',
                                                        fontFamily: 'var(--font-league-gothic), "FORGE SANS", Impact, sans-serif',
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        fontSize: '13.1292px',
                                                        lineHeight: '140%',
                                                        color: '#FFFFFF',
                                                        flex: 'none',
                                                        order: 0
                                                    }}
                                                >
                                                    {testimonial.name}, {testimonial.role}
                                                </div>

                                                {/* Testimonial Text */}
                                                <p
                                                    style={{
                                                        width: '349.78px',
                                                        height: '32px',
                                                        fontFamily: 'var(--font-host-grotesk), "Host Grotesk", sans-serif',
                                                        fontStyle: 'normal',
                                                        fontWeight: 500,
                                                        fontSize: '11.2536px',
                                                        lineHeight: '140%',
                                                        color: '#FFFFFF',
                                                        flex: 'none',
                                                        order: 1,
                                                        alignSelf: 'stretch'
                                                    }}
                                                >
                                                    {testimonial.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
