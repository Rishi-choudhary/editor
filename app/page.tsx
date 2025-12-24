
import GridSection from "@/components/GridSection";
import EditorPreview from "@/components/EditorPreview";
import TrustedBy from "@/components/TrustedBy";
import GenerateImages from "@/components/GenerateImages";
import BubbleMenu2 from "@/components/BubbleMenu2";
import CTA from "@/components/CTA";
import HeroCanvas from "@/components/HeroCanvas";
import PricingSection from "@/components/PricingSection";
import CustomTheming from "@/components/CustomTheming";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <HeroCanvas />
      {/* Editor Preview overlaps Hero due to negative margin, but Hero text (z-30) floats above Editor (z-20) */}
      <div className="-mt-[13.6%] relative z-20">
        <EditorPreview />
      </div>
      <GridSection />

      <CustomTheming />
      {/* Full-width wrapper with blurred black rectangle background */}
      <div className="relative w-full overflow-hidden">
        {/* Blurred black rectangle background - full width */}
        <div
          className="absolute inset-0 w-full pointer-events-none"
          style={{
            background: '#101010',
            filter: 'blur(125px)',
            transform: 'rotate(90deg) scale(2)',
            transformOrigin: 'center center',
            zIndex: 0
          }}
        />
        {/* BubbleMenu2 content - stays at 1200px */}
        <div className="relative z-10">
          <BubbleMenu2 />
        </div>
      </div>
      <GenerateImages />
      <PricingSection />


      <TrustedBy />
      <div className="mt-4"></div>
      <Testimonials />
      <CTA />
    </div>
  );
}
