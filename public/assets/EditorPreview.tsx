import React from 'react'
import {
    ChevronDown,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Image as ImageIcon,
    Link as LinkIcon,
    Smile,
    AtSign,
    Grid,
    Code,
    FileCode,
    List,
    ListOrdered,
    Sparkles,
    MoreVertical
} from 'lucide-react'

export default function EditorPreview() {
    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-24 mb-32 flex flex-col gap-10">

            {/* Editor Window Container */}
            <div className="relative w-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-[20px] p-8 flex flex-col items-center shadow-[0px_-32px_52px_#000000]">

                {/* Header "TRY IT HERE _" */}
                <div className="mb-8 text-center">
                    <h3 className="font-[family-name:var(--font-league-gothic)] text-2xl tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        TRY IT HERE _
                    </h3>
                </div>

                {/* Editor Surface */}
                <div className="w-full bg-[#141416] rounded-xl border border-white/5 overflow-hidden min-h-[400px] flex flex-col">

                    {/* Toolbar */}
                    <div className="flex flex-wrap items-center gap-4 px-6 py-4 border-b border-white/5 bg-[#19191C]">

                        {/* Font Selector */}
                        <div className="flex items-center gap-3 px-4 py-2 bg-[#23232A] rounded md:min-w-[140px] justify-between cursor-pointer hover:bg-white/5 transition-colors">
                            <span className="text-sm text-gray-300 font-['Poppins']">Poppins</span>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>

                        {/* Formatting Group 1 */}
                        <div className="h-6 w-[1px] bg-white/10 mx-2" />

                        <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Bold className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Underline className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Italic className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Strikethrough className="w-4 h-4" /></button>
                        </div>

                        {/* Color & Media Group */}
                        <div className="h-6 w-[1px] bg-white/10 mx-2" />

                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-white rounded flex items-center justify-center cursor-pointer">
                                <ChevronDown className="w-3 h-3 text-black" />
                            </div>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><ImageIcon className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><LinkIcon className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Smile className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><AtSign className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Grid className="w-4 h-4" /></button>
                        </div>

                        {/* Code Group */}
                        <div className="h-6 w-[1px] bg-white/10 mx-2" />

                        <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><Code className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><FileCode className="w-4 h-4" /></button>
                        </div>

                        {/* Lists Group */}
                        <div className="h-6 w-[1px] bg-white/10 mx-2" />

                        <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><List className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><ListOrdered className="w-4 h-4" /></button>
                        </div>

                        {/* AI Action */}
                        <div className="ml-auto flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#292A31] border border-[#383838] rounded-md hover:bg-white/5 transition-colors group">
                                <Sparkles className="w-4 h-4 text-white group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm text-white font-medium">Go with AI</span>
                            </button>

                            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>

                    </div>

                    {/* Text Area Content */}
                    <div className="flex-1 p-8">
                        <p className="text-[#848485] text-lg">Your Text</p>
                    </div>

                </div>

            </div>

            {/* Footer Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <p className="font-[family-name:var(--font-host-grotesk)] text-base text-white/80 max-w-[500px] text-center md:text-left">
                    Experience real-time collaboration, AI-powered writing suggestions, and a distraction-free editor built for professionals, teams, and content creators.
                </p>

                <div className="flex items-center gap-4">
                    <button className="px-8 py-3 rounded-md text-white font-[family-name:var(--font-league-gothic)] text-xl tracking-wide uppercase hover:text-white/80 transition-colors">
                        SEE IT IN ACTION
                    </button>
                    <button className="px-8 py-3 rounded-md bg-white text-black font-[family-name:var(--font-league-gothic)] text-xl tracking-wide uppercase shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:bg-gray-200 transition-colors">
                        TRY FOR FREE
                    </button>
                </div>
            </div>

        </section>
    )
}
