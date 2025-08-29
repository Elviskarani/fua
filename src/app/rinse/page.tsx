import RinseRepeatComponent from "../components/rinserepeat";
import BagCareSection from "../components/Bagcare";
import TestimonialsSection from "../components/testimonial";
import TimeSavingsSection from "../components/timesaving";

export default function rinse () {

    return (
        <div className=" text-black w-full  font-bold">
            <RinseRepeatComponent />
            <BagCareSection />
            <TestimonialsSection />
            <TimeSavingsSection />

        </div>

    );

}