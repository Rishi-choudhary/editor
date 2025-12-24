'use client'

import React from 'react'
import {
    Underline,
    Italic,
    Strikethrough,
    Link as LinkIcon,
    Code,
    ChevronDown,
} from 'lucide-react'

const BubbleMenu = () => {
    return (
        <section className="relative mx-auto w-full max-w-[75rem] sm:my-32 my-16 h-[39rem] rounded-[1.25rem] font-['Host_Grotesk'] text-white">

            {/* === BACKGROUND / GLASS === */}
            <div className="absolute inset-0 rounded-[1.25rem]  border border-white/10 shadow-[0_29px_52px_rgba(0,0,0,0.7)] overflow-hidden">

                {/* glass shine */}
                <div className="absolute -top-[25%] -right-[10%] w-[52rem] h-[48rem] bg-gradient-to-br from-white/10 to-transparent rotate-[-20deg] mix-blend-color-dodge blur-3xl opacity-40" />

                {/* BIG TEXT */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-right pointer-events-none select-none">
                    <div className="font-['Forge_Sans'] text-[10.5rem] leading-[0.8] uppercase tracking-tight text-white/20">
                        BUBBLE
                    </div>
                    <div className="font-['Forge_Sans'] text-[10.5rem] leading-[0.8] uppercase tracking-tight text-white/20">
                        MENU
                    </div>
                </div>

                {/* glowing label */}
                <div
                    className="absolute right-[7.5rem] top-[42%] -translate-y-full font-['Forge_Sans'] text-xl uppercase tracking-widest"
                    style={{
                        textShadow:
                            '0 0 250px #fff,0 0 216px #fff,0 0 126px #fff,0 0 63px #fff',
                    }}
                >
                    Menu Options
                </div>
            </div>

            {/* === CONTENT === */}
            <div className="relative z-10 flex flex-col gap-6 p-12 h-full">

                {/* Tabs */}
                <div className="w-fit rounded-lg border border-white/10 bg-black/30 backdrop-blur px-2 py-2 flex gap-2">
                    {['Bubble Menu', 'Floating Menu', 'Fixed Menu'].map((item, i) => (
                        <div
                            key={item}
                            className={`px-6 py-2 rounded-md text-sm uppercase tracking-wide cursor-pointer transition
              ${i === 0 ? 'bg-[#262626] text-white' : 'text-[#565656] hover:bg-white/5'}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Editor Area */}
                <div className="relative mt-16 ml-10">

                    <div className="relative w-[26.7rem] rounded-lg bg-white p-6 text-black shadow-2xl">

                        <p className="font-['Inter'] text-[0.72rem] leading-[1.6] font-medium text-justify">
                            <span className="bg-[#e6e6e6]">
                                Lorem ipsum dolor sit gula consectetur
                            </span>
                            , ultrices mauris. Maecenas vitae mattis tellus. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                            hendrerit urna. Pellentesque sit amet sapien fringilla.
                        </p>

                        {/* === FLOATING TOOLBAR === */}
                        <div
                            className="absolute -top-[3.75rem] left-0 flex items-center gap-5 rounded-[0.5rem] border border-white bg-[#0b0b0b] px-3 py-2"
                            style={{
                                boxShadow:
                                    '80px -35px 35px rgba(145,145,145,.04), 45px -20px 30px rgba(145,145,145,.13)',
                            }}
                        >
                            {/* group 1 */}
                            <div className="flex gap-2">
                                <ToolBtn label="B" />
                                <IconBtn icon={<Underline size={18} />} />
                                <IconBtn icon={<Italic size={18} />} />
                                <IconBtn icon={<Strikethrough size={18} />} />
                            </div>

                            <div className="h-5 w-px bg-white/60" />

                            {/* group 2 */}
                            <div className="flex gap-2 items-center">
                                <IconBtn icon={<LinkIcon size={18} />} />
                                <IconBtn icon={<Code size={18} />} />

                                <div className="flex items-center gap-2 rounded-md bg-[#202122] px-2 py-1">
                                    <div className="h-4 w-4 rounded bg-white" />
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

/* ===== helpers ===== */

const IconBtn = ({ icon }: { icon: React.ReactNode }) => (
    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#202122] hover:bg-[#2d2d2d] transition">
        {icon}
    </button>
)

const ToolBtn = ({ label }: { label: string }) => (
    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#202122] border border-white text-sm font-semibold">
        {label}
    </button>
)

export default BubbleMenu
