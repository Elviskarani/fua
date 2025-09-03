import HeroSection from "./components/hero";
import WashFoldSection from "./components/WashFoldSection";
import PickupEssentials from "./components/pickupessentials";
import CustomerTestimonials from "./components/customertestimonial";
import WhyLoveRinse from "./components/whylove";
import ScheduleCTA from "./components/scheduleCTA";
import MasonryGallery from "./components/masonryGallery";
import RinseGuarantee from "./components/RinseGuarantee";



export default function Home() {

  return (
    <div className="text-bold text-3xl">
      <HeroSection/>
      <WashFoldSection/>
      <PickupEssentials />
      <CustomerTestimonials/>
      <WhyLoveRinse/>
      <div>
      <ScheduleCTA />
    </div>
    <RinseGuarantee />
    </div>
  );
}
