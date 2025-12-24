
import Image from 'next/image'

export default function HeroCanvas() {
    return (
        <section className="relative w-full aspect-[1200/850] max-w-[1200px] mx-auto overflow-hidden">

            {/* Background/Robot Image - Layer z-0 (Behind Editor) */}
            <div className="absolute left-[10] top-0 w-full h-full z-0">
                <Image
                    src="/assets/homepage/robot-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Floating Elements - Layer z-30 (Above Editor) & Pointer Events None */}

            {/* WRITE */}
            <div className="absolute left-0 top-[18.8%] w-[29.4%] min-w-[200px] h-[16.6%] z-30 pointer-events-none">
                <Image src="/assets/homepage/Write.svg" alt="Write" fill className="object-contain" />
            </div>

            {/* AND */}
            <div className="absolute left-[58.2%] top-[18.8%] w-[18.1%] min-w-[120px] h-[16.6%] z-30 pointer-events-none">
                <Image src="/assets/homepage/and.svg" alt="and" fill className="object-contain" />
            </div>

            {/* EDIT */}
            <div className="absolute left-[80.2%] top-[18.2%] w-[19.8%] min-w-[130px] h-[16.6%] z-30 pointer-events-none">
                <Image src="/assets/homepage/Edit.svg" alt="Edit" fill className="object-contain" />
            </div>

            {/* SMARTER */}
            <div className="absolute left-0 top-[40.9%] w-[44%] min-w-[300px] h-[16.6%] z-30 pointer-events-none">
                <Image src="/assets/homepage/Smarter.svg" alt="Smarter" fill className="object-contain" />
            </div>

            {/* WITH */}
            <div className="absolute left-[62.3%] top-[40.9%] w-[23.8%] min-w-[160px] h-[16.6%] z-30 pointer-events-none">
                <Image src="/assets/homepage/with.svg" alt="with" fill className="object-contain" />
            </div>

            {/* AI */}
            <div className="absolute left-[90.8%] top-[40.9%] w-[8.8%] min-w-[60px] h-[16.6%] z-30 pointer-events-none">
                <Image src="/assets/homepage/Group 2085664517.svg" alt="AI" fill className="object-contain" />
            </div>

            {/* EFFORTLESSLY */}
            <div className="absolute left-[-0.6%] top-[63.5%] w-[100.5%] min-w-[600px] h-[24.8%] z-30 pointer-events-none mix-blend-exclusion opacity-60">
                <Image src="/assets/homepage/Effortlessly.svg" alt="Effortlessly" fill className="object-contain" />
            </div>

        </section>
    )
}
