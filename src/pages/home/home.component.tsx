// import TextComponent from "./components/info/info.component";

import CategoryComponent from "./components/category/category.component";
import InfoComponent from "./components/info/info.component";
import OfferComponent from "./components/Offer/offer.component";
import SuggestedComponent from "./components/suggested/suggested.component";

const HomeComponent = () => {
    return (
        <div>
            {/* <TextComponent/> */}
            <InfoComponent/>
            <SuggestedComponent/>
            <CategoryComponent/>
            <OfferComponent/>
        </div>
    );
}

export default HomeComponent;