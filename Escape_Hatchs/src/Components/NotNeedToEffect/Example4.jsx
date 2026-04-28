import { useState } from "react";
import ProductPage from "./ProductPage";



const productInitialDate = {
    title: "Iphone 17 pro",
    description: "Ami kinte parbona,ami gorib",
    price: 200000,
    isInCart: false
}


const Example4 = () => {

    const [product, setProduct] = useState(productInitialDate);

    const handleAddToCard = () => {
        setProduct({
            ...product,
            isInCart: true
        });
    };





    return (
        <div>

            <ProductPage product={product} addToCard={handleAddToCard} />



        </div>
    );
};

export default Example4;