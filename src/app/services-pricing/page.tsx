import WashFoldComponent from "../components/washfold";
import HowItWorksComponent from "../components/Howitworks";
import PricingComponent from "../components/pricingcomponent";
import AboutFeesComponent from "../components/aboutfees";
import DeliveryComponent from "../components/delivery";
import HeroCTAComponent from "../components/herocta";

export default function services () {

    return (
        <div className=" text-black w-full  font-bold mt-10">
            <WashFoldComponent/>
            <HowItWorksComponent/>
            <PricingComponent/>
            <AboutFeesComponent/>
            <DeliveryComponent/>
            <HowItWorksComponent />
            <HeroCTAComponent/>

        </div>

    );

}