'use client'

import Image from 'next/image'

export default function CustomTheming() {
    return (
        <section className="relative w-full text-white mx-auto max-w-[1440px] mt-24 mb-24">

            <div className="relative w-full h-[600px] flex items-start  justify-center overflow-hidden">
                {/* Background Image (Toolbars Stack) */}
                {/* Adjusting scale/position to ensure the toolbars looked stacked as in design. */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/custom_themeing-bg.png"
                        alt="Custom Theming Background"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Central Glass Card */}
                <div className="relative z-10 w-full max-w-[45%] min-h-[248px] mt-10 flex flex-col items-center justify-center text-center p-8 md:px-20 md:py-16 gap-6 custom-theming-card">
                    <h2 className="font-[family-name:var(--font-league-gothic)] text-5xl md:text-7xl leading-none text-white uppercase w-full">
                        CUSTOM THEMING
                    </h2>

                    <div className="flex flex-col gap-3 font-[family-name:var(--font-host-grotesk)] text-base font-normal leading-none text-white text-center">
                        <p>Light & Dark Modes for better reading and writing.</p>
                        <p>Customization for editing option and themes.</p>
                    </div>
                </div>

            </div>

        </section>
    )
}
