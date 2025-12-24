'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bold, Italic, Underline, Strikethrough, Link as LinkIcon, Code, ChevronDown } from 'lucide-react'

export default function BubbleMenu2() {
    const [activeTab, setActiveTab] = useState<'bubble' | 'floating' | 'fixed'>('bubble')

    return (
        <section className="relative min-h-screen mt-24 mb-24 max-w-[1200px] mx-auto  justify-center items-center p-8">
            {/* Background Layers */}
            {/* <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000_70%)] z-0" />        */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(147, 142, 142, 0.8)_100%)] z-[1]" />
            {/* Tabs */}
            <div className="flex max-w-[max-content]  rounded-md my-4 gap-4 border border-white/10 shadow-[0_29px_52px_rgba(0,0,0,0.7)]">
                {(['bubble', 'floating', 'fixed'] as const).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{ fontFamily: 'var(--font-league-gothic)' }}
                        className={`px-6 py-2 rounded-md font-[family-name:var(--font-league-gothic)]  text-xl text-white uppercase  transition-all duration-200 ${activeTab === tab
                            ? 'bg-[#262626] text-white'
                            : 'text-[#565656] hover:text-gray-300'
                            }`}
                    >
                        {tab} MENU
                    </button>
                ))}
            </div>
            {/* Floating 3D Object */}
            <div className="absolute bottom-[35%] left-[40%] w-[1000px] h-[1000px] z-[5] pointer-events-none max-lg:w-[200px] max-lg:h-[200px] max-lg:top-0 max-lg:right-0">
                <Image
                    src="/image-removebg-preview.png"
                    alt="Floating 3D Shape"
                    width={1000}
                    height={1000}
                    style={{ objectFit: 'contain' }}
                />
            </div>


            {/* Main Glass Panel */}
            <div className="relative w-full max-w-[1200px] h-[min(700px,80vh)] border border-white/10 shadow-[0_29px_52px_rgba(0,0,0,0.7)] bg-[#101010] rounded-[20px] z-10 flex overflow-hidden max-lg:flex-col max-lg:h-auto">
                <div className="grid grid-cols-2 w-full h-full max-lg:grid-cols-1">

                    {/* LEFT COLUMN: Content */}
                    <div className="relative p-16 flex flex-col justify-center items-center gap-12 max-lg:p-8 max-lg:items-center">



                        {/* Editor Mock */}
                        <div className="relative w-full max-w-[500px]">
                            {/* The Floating Bubble Menu */}

                            <div className="absolute -top-[60px] left-5 flex items-center gap-3 p-2.5 bg-[#0B0B0B] border border-white/20 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="w-8 h-8 flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white"><Bold size={16} /></div>
                                <div className="w-8 h-8 flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white"><Underline size={16} /></div>
                                <div className="w-8 h-8 flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white"><Italic size={16} /></div>
                                <div className="w-8 h-8 flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white"><Strikethrough size={16} /></div>
                                <div className="w-px h-5 bg-white/20 mx-1" />
                                <div className="w-8 h-8 flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white"><LinkIcon size={16} /></div>
                                <div className="w-8 h-8 flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white"><Code size={16} /></div>
                                <div className="h-8 group flex items-center justify-center bg-[#202122] rounded hover:bg-[#333] transition-colors cursor-pointer text-white px-2 gap-1">
                                    <div className="w-3 h-3 bg-white rounded-[2px]" />
                                    <ChevronDown size={12} />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="bg-white rounded-lg p-8 text-black font-sans text-sm leading-relaxed shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative">
                                <p>
                                    <span className="bg-[#333] text-white px-0.5 rounded-[2px]">Lorem ipsum dolor sit gula consec</span>tetur, ultrices mauris. Maecenas vitae mattis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                </p>
                                <p className="mt-4">
                                    Maecenas vitae mattis tellus. amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Typography */}
                    <div className="flex flex-col justify-center items-start relative pl-8 max-lg:p-8 max-lg:items-center max-lg:text-center">
                        <div className="font-[family-name:var(--font-league-gothic)] text-xl tracking-[0.2em] text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] mb-6 z-[2]">MENU OPTIONS</div>
                        <h2 className="font-[family-name:var(--font-league-gothic)] text-[clamp(6rem,10vw,11rem)] leading-[0.85] text-white/10 uppercase z-[1]">
                            BUBBLE<br />MENU
                        </h2>
                    </div>

                </div>
            </div>
        </section >
    )
}
