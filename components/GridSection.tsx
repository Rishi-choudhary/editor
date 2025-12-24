'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const features = [
    {
        title: { main: 'QUICK', sub: 'ACTION' },
        description: 'Speed up your workflow with instant actions that respond the moment you need them.',
        detail: 'Flow without interruptions. With Quick Actions, your writing transforms instantly. Whether inspiration hits or you’re refining a draft, one click becomes all you need.',
        gradient: 'from-[#4F46E5] to-[#7C3AED]', // Blue to Purple
        imgPlaceholder: '/assets/grid2-section-bg-img.png', // Placeholder
        imgSrc: '/assets/grid2-section-bg-img.png'
    },
    {
        title: { main: 'RECORD.', sub: 'TRANSCRIBE.' },
        description: 'Turn your voice into clean, editable text instantly—zero typing, zero effort.',
        detail: 'Speak your ideas, meetings, or brainstorms directly into the editor. CTEditor automatically converts your audio into perfectly structured, AI-enhanced text. No more manual note-taking.',
        gradient: 'from-[#be123c] to-[#db2777]', // Red/Pink
        imgPlaceholder: '/assets/grid2-section-twitch.png',
        imgSrc: '/assets/grid2-section-twitch.png'
    },
    {
        title: { main: 'COMMENT', sub: 'ON TEXT' },
        description: 'Real-time comments that make your writing faster, clearer, and teamwork effortless.',
        detail: 'Add comments directly to any text, highlight areas that need editing, discuss ideas, or give feedback—instantly. CTEditor’s smart commenting system keeps your collaboration clean.',
        gradient: 'from-[#0f172a] to-[#334155]', // Dark Blue/Gray
        imgPlaceholder: '/assets/grid3-section-message-bg.png',
        imgSrc: '/assets/grid3-section-message-bg.png'
    },
    {
        title: { main: 'SENTENCE', sub: 'CORRECTION' },
        description: 'Fix grammar, clarity, and flow instantly with clean, professional writing on one click.',
        detail: 'Correct awkward sentences, grammar mistakes, punctuation, and tone problems automatically. Your writing becomes clearer, sharper, and more confident in seconds.',
        gradient: 'from-[#ea580c] to-[#f59e0b]', // Orange/Amber
        imgPlaceholder: '/assets/grid3-section-pencil-bg.png',
        imgSrc: '/assets/grid3-section-pencil-bg.png'
    }
]

export default function GridSection() {
    return (
        <section className="relative max-w-[1200px] mx-auto ">
            {/* bg-gradient-to-br from-[#2A0808] to-[#4B1B54] */}
            {/* Top Header Block */}
            {/* Top Header Block */}
            <div className="relative overflow-hidden rounded-[32px] p-8 md:p-12 mb-6 flex items-center min-h-[600px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/ai_original.jpg"
                        alt="AI Header Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0" />
                </div>


                {/* Content Grid */}
                <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-[53px] my-4">

                    {/* Text Group */}
                    <div className="flex flex-col gap-5">
                        <h2 className="font-[family-name:var(--font-league-gothic)] text-6xl lg:text-7xl leading-[60px] text-white uppercase tracking-tighter">
                            AI Powered
                            <span className="font-[family-name:var(--font-host-grotesk)] text-2xl lg:text-5xl font-base text-white tracking-[-0.03em] mt-2 italic">
                                - Features
                            </span>
                        </h2>

                        <p className="font-[family-name:var(--font-host-grotesk)] text-base font-semibold text-white tracking-[-0.03em] leading-[160%] max-w-[446px]">
                            Cut your writing time by 80%. Create, refine, and finalize content with an AI powerhouse built right inside your editor.
                        </p>

                        <div className="flex flex-col gap-1.5">
                            <p className="font-[family-name:var(--font-host-grotesk)] text-sm font-normal text-white/60 text-justify text-base/7  max-w-[446px] ">
                                Flow without interruptions. With Quick Actions, your writing transforms instantly. Whether inspiration hits or you’re refining a draft, one click becomes all you need.
                            </p>
                            <div className="relative w-[50px] h-[16px] mt-2">
                                <Image
                                    src="/assets/arrow-right.svg"
                                    alt="Arrow Right"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature List */}
                    <div className="flex flex-col gap-1">
                        {['Ask Anything', 'Generate Images', 'Rewrite', 'Corrections', 'Change Models', 'Tone Options'].map((item) => (
                            <div key={item} className="font-[family-name:var(--font-host-grotesk)] text-base font-medium leading-[160%] text-[#FF9D5C] cursor-pointer hover:text-[#ffb480] transition-colors">
                                {item}
                            </div>
                        ))}
                        {/* Blurred Items */}
                        <div className="font-[family-name:var(--font-host-grotesk)] text-base font-medium leading-[160%] text-[#FF9D5C] filter blur-[2px] opacity-80">Corrections</div>
                        <div className="font-[family-name:var(--font-host-grotesk)] text-base font-medium leading-[160%] text-[#FF9D5C] filter blur-[3px] opacity-60">Change Models</div>
                        <div className="font-[family-name:var(--font-host-grotesk)] text-base font-medium leading-[160%] text-[#FF9D5C] filter blur-[4px] opacity-40">Tone Options</div>
                        <div className="font-[family-name:var(--font-host-grotesk)] text-base font-medium leading-[160%] text-[#FF9D5C] filter blur-[5px] opacity-20">Change</div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                            relative overflow-hidden rounded-[24px] p-8 md:p-[52px] h-[618px] w-full max-w-[580px] mx-auto flex flex-col justify-start gap-5
                            bg-white border text-black group hover:shadow-2xl transition-shadow duration-300
                        `}
                    >
                        {/* Background Image - Full Size */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={feature.imgSrc}
                                alt={feature.title.main}
                                fill
                                className="object-cover opacity-100 mix-blend-normal transform"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-start w-[85%] gap-4">
                            {/* <h3 className="flex flex-col items-start">
                                <span className="font-[family-name:var(--font-league-gothic)] text-3xl leading-[60px] text-white uppercase tracking-tighter">
                                    
                                    <span className="font-[family-name:var(--font-host-grotesk)] text-xl font-semibold text-white tracking-[-0.03em] mt-2">
                                       
                                    </span>
                                </span>

                            </h3> */}
                            <h2 className="font-[family-name:var(--font-league-gothic)] text-6xl lg:text-7xl leading-[60px] text-white uppercase tracking-tighter">
                                {feature.title.main}
                                <span className="font-[family-name:var(--font-host-grotesk)] text-2xl lg:text-5xl font-base text-white tracking-[-0.03em] px-3 mt-2 italic">
                                    {feature.title.sub}
                                </span>
                            </h2>

                            <p className="font-[family-name:var(--font-host-grotesk)] text-base font-semibold text-white tracking-[-0.03em] leading-[160%] max-w-[446px]">
                                {feature.description}
                            </p>

                            {/* <p className="font-[family-name:var(--font-host-grotesk)] text-[14px] text-base/7  text-white/60 text-justify max-w-[384px]">
                                {feature.detail}
                            </p> */}
                            {/* 
                            <div className="mt-2 w-[50px] h-[15px] relative">
                                <Image
                                    src="/assets/arrow-right.svg"
                                    alt="Arrow Right"
                                    fill
                                    className="object-contain"
                                />
                            </div> */}
                            <div className="flex flex-col gap-1.5">
                                <p className="font-[family-name:var(--font-host-grotesk)] text-sm font-normal text-white/60 text-justify text-base/7  max-w-[446px] ">
                                    {feature.detail}
                                </p>
                                <div className="relative w-[50px] h-[16px] mt-2">
                                    <Image
                                        src="/assets/arrow-right.svg"
                                        alt="Arrow Right"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    </motion.div>
                ))}

            </div>
            <div className="flex justify-center mt-12">
                <button className="flex items-center justify-center  py-2 w-[175px] h-[48px] bg-white rounded-[6px] shadow-[0_0_20px_#FFFFFF] text-black font-[family-name:var(--font-host-grotesk)] text-xl font-medium leading-[120%] tracking-[0.03em] uppercase hover:scale-105 transition-transform duration-300">
                    Try For Free
                </button>
            </div>
        </section>
    )
}


