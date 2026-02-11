import ListComponent from '../../core/layouts/public/components/list/list.component'
import HandmadeProductPage from './main_product/handmade_product.component';



const HandProductComponent = () => {
    return (
        <div>
            {/* <TextComponent/> */}
            <ListComponent/>
            <HandmadeProductPage/>
            {/* <ProductsComponent/> */}
        </div>
    );
}

export default HandProductComponent;