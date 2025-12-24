'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const plans = [
    {
        name: 'FREE',
        price: '$0',
        features: [
            'Basic AI Writing Assistance',
            'Export (TXT & PDF)',
            'Limited Document History'
        ],
        buttonText: 'GET STARTED',
        highlight: false,
    },
    {
        name: 'PRO',
        price: '$49.99',
        features: [
            'Advanced AI Writing & Editing',
            'Real-Time Collaboration',
            'Custom Themes & Personalization',
            'Full Document History & Recovery',
            'Export to Multiple Formats'
        ],
        buttonText: 'GET STARTED',
        highlight: true,
    },
    {
        name: 'BUSINESS',
        price: '$899.99',
        features: [
            'Includes everything in Pro and :',
            'Multi-User Real-Time Editing',
            'Priority AI Processing',
            'Brand Customization',
            'Team Management Dashboard',
            '24/7 Priority Support'
        ],
        buttonText: 'GET STARTED',
        highlight: false,
    },
    {
        name: 'ENTERPRISE',
        price: '$899.99',
        features: [
            'Includes everything in Pro and :',
            'Multi-User Real-Time Editing',
            'Priority AI Processing',
            'Brand Customization',
            'Team Management Dashboard',
            '24/7 Priority Support'
        ],
        buttonText: 'GET STARTED',
        highlight: false,
    }
]

export default function PricingSection() {
    return (
        <section className="relative py-24 mx-auto max-w-[1440px] font-[family-name:var(--font-host-grotesk)]">

            <div className="relative z-10 flex flex-col items-center mb-24">
                {/* Header Section */}
                <div className="relative w-full h-[200px] flex items-center justify-center">
                    {/* Big Background Text */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
                        <div className="relative w-[1000px] h-[300px]">
                            <Image
                                src="/assets/plans-pricing-text-bg.png"
                                alt="PLANS & PRICING"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Foreground Title */}
                    <h2 className="relative z-10 font-[family-name:var(--font-host-grotesk)] text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white uppercase tracking-wider"
                        style={{
                            textShadow: '0 0 40px rgba(255,255,255,0.3)',
                            fontFamily: 'var(--font-league-gothic), League Gothic, Impact, sans-serif'
                        }}
                    >
                        Plans & Pricing
                    </h2>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-around gap-2 w-full max-w-[1200px] mx-auto">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                            relative flex flex-col w-full max-w-[280px] h-[488px] box-border
                            bg-[transparent] border-2 border-[rgba(85,85,85,0.3)] rounded-[24px]
                            overflow-hidden group hover:border-white/20 transition-colors duration-300
                        `}
                    >
                        {/* Bulb/Glow Effect */}
                        {/* Card Background Image */}
                        <div className="absolute inset-0 z-0 opacity-100">
                            <Image
                                src="/assets/plan-pricing-bg.png"
                                alt="Background of bulb"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full h-full">
                            {/* Title */}
                            <h3 className="absolute top-12 left-8 font-[family-name:var(--font-league-gothic)] text-2xl md:text-4xl lg:text-5xl mb-3 leading-[100%] text-white tracking-[-0.02em] uppercase"
                                style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
                            >
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="absolute top-[94px] mt-5 left-0">
                                {/* Background Rectangle */}
                                <div className="absolute top-0 left-0 w-[150px] h-[42px] bg-[#D9D9D9]" />
                                {/* Price Text */}
                                <div className="absolute top-[4px] left-[35px] font-[family-name:var(--font-league-gothic)] text-[28px] leading-[130%] text-white">
                                    {plan.price}
                                </div>
                            </div>

                            {/* Spacer to prevent overlap if we are keeping the same layout flow, 
                                but since price is absolute, we might need adjustments to Title or Padding. 
                                The user only asked to change the CSS of the Price element. 
                                I will add a spacer or margin to the Title to accommodate. 
                                The original Title MB-8 might be enough or it might need to strictly follow flow. 
                                Let's push content down a bit if needed. 
                                Actually, 'top: 30px' is roughly where the Title usually starts in a p-8 (32px) container.
                                So Price will be at the top level. Title should probably be moved?
                                User didn't ask to move Title. I will leave Title as is for now, 
                                but I'll add `mt-12` to Title to avoid direct collision if possible.
                            */}

                            {/* Features */}
                            <div className="absolute top-[224px] left-[28px] w-[224px] flex flex-col gap-[8px]">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="font-[family-name:var(--font-host-grotesk)] text-[12px] font-medium leading-[140%] text-white/90">
                                        • {feature}
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                className={`
                                    absolute top-[404px] left-1/2 -translate-x-1/2
                                    w-[217px] h-[48px] rounded-[6px] text-[20px] font-[family-name:var(--font-league-gothic)] 
                                    uppercase tracking-[0.03em] transition-all duration-300
                                    border border-white/20 hover:bg-white hover:text-black
                                    ${plan.highlight
                                        ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                        : 'bg-transparent text-white'
                                    }
                                `}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section >
    )
}
