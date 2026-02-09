// import TextComponent from "./components/info/info.component";

import CategoryComponent from "./components/category/category.component";
import InfoComponent from "./components/info/info.component";
import ProductsComponent from "./components/products/products.components";
import SuggestedComponent from "./components/suggested/suggested.component";

const HomeComponent = () => {
    return (
        <div>
            {/* <TextComponent/> */}
            <InfoComponent/>
            <SuggestedComponent/>
            <CategoryComponent/>
            {/* <ProductsComponent/> */}
        </div>
    );
}

export default HomeComponent;