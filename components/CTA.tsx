'use client'

import Image from 'next/image'

export default function CTA() {
    return (
        <section className="relative mx-auto px-6 py-24 font-sans flex justify-center">
            <div
                className="relative h-[372px] w-full max-w-[1200px] overflow-hidden rounded-[20px] shadow-2xl"
                style={{
                    background: '#FFFFFF'
                }}
            >

                {/* =======================
                   Background Texture (Full Container)
                ======================= */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(/assets/CTA-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Background Texture Rotated (from Figma) */}
                <div
                    className="absolute"
                    style={{
                        width: '675px',
                        height: '1200px',
                        left: 'calc(50% - 675px/2 - 262.5px)',
                        top: 'calc(50% - 1200px/2 + 414px)',
                        backgroundImage: 'url(/assets/CTA-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'rotate(-90deg)',
                        opacity: 0.3,
                        pointerEvents: 'none'
                    }}
                />

                {/* Decorative Glass Elements */}






                {/* =======================
                   Main Content (Left)
                ======================= */}
                <div
                    className="relative z-30 flex h-full flex-col justify-center pl-8 md:pl-20 max-w-[650px]"
                    style={{
                        gap: '54px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <h1
                        className="font-[family-name:var(--font-league-gothic)] uppercase"
                        style={{
                            width: '559px',
                            fontFamily: 'var(--font-league-gothic), "League Gothic", Impact, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 'clamp(40px, 6vw, 80px)',
                            lineHeight: '80px',
                            textTransform: 'uppercase',
                            color: '#000000'
                        }}
                    >
                        experience the
                        <br />
                        effortless text edit
                    </h1>

                    <button
                        className="transition hover:scale-105 duration-300"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // padding: '8px 24px',
                            gap: '10px',
                            width: '150px',
                            height: '48px',
                            background: '#000000',
                            boxShadow: '0px 0px 20px #FFFFFF',
                            borderRadius: '6px',
                            fontFamily: 'var(--font-league-gothic), "League Gothic", Impact, sans-serif',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '120%',
                            letterSpacing: '0.03em',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        start from here
                    </button>
                </div>

                {/* =======================
                   Robot Image (Right Side - Big in Corner)
                ======================= */}
                <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                        width: '553.96px',

                        right: '-170px',
                        top: '52px',
                        // transform: 'matrix(-1, 0, 0, 1, 0, 0)'
                    }}
                >
                    <Image
                        src="/assets/cta-robot-image.png"
                        alt="Futuristic Robot"
                        width={554}
                        height={733}
                        className="object-contain w-full h-full"
                        // style={{
                        //     mixBlendMode: 'normal'
                        // }}
                        priority
                    />
                </div>

            </div>
        </section>
    )
}
