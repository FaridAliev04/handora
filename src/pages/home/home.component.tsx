// import TextComponent from "./components/info/info.component";

import CategoryComponent from "./components/category/category.component";
import InfoComponent from "./components/info/info.component";
import ListComponent from '../../core/layouts/public/components/list/list.component'
import ProductsComponent from "./components/products/products.components";
import SuggestedComponent from "./components/suggested/suggested.component";
import OfferComponent from "./components/Offer/offer.component";
import HandmadeProductPage from "../product/main_product/handmade_product.component";

const HomeComponent = () => {
    return (
        <div>
            {/* <TextComponent/> */}
            <ListComponent/>
            <InfoComponent/>
            <SuggestedComponent/>
            <CategoryComponent/>
            <OfferComponent/>
            {/* <HandmadeProductPage/> */}
            {/* <ProductsComponent/> */}
        </div>
    );
}

export default HomeComponent;