import LayoutComponent from "@/layout/LayoutComponent";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import ProductDetailContainer from "@/containers/ProductDetailContainer/DetailsProductContainer";

export default function ProductDetailPage() {

    return (
        <LayoutComponent isSlider={false} urlBack={"products"}>
            <ProductDetailProvider>
                    <ProductDetailContainer />
            </ProductDetailProvider>
        </LayoutComponent>
    );
};