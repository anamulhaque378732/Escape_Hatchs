import { useState } from "react";


const ProductPage = ({ product, addToCard }) => {
    const [notifyMessage, setNotifyMessage] = useState(null);

    // Avoid : Event-specific logic inside an effect

    // useEffect(() => {
    //     if (product.isInCart) {
    //         ShowNotification(`Added ${product.title} to the shopping card`);
    //     };
    // }, [product]);

    function buyProduct() {
        addToCard(product);
        ShowNotification(`Added ${product.title} to the shopping card`);
    };

    function handleBuyClick() {
        // console.log("added", product);
        buyProduct(product);
    };

    function handleCheckOutClick() {
        buyProduct(product)
        navigateTo("/checkout");
    };


    function ShowNotification(meg) {
        setNotifyMessage(meg)
    };

    function navigateTo(url) {
        console.log(`Assume that we have navigated to ${url} `);

    };

    return (
        <>
            <div
                style={{ backgroundColor: "lightskyblue", padding: "20px", border: "2px solid", width: "400px", height: "300px", color: "black" }}
            >
                <h1>{product.title}</h1> <br />
                <h3>  {product.description} </h3> <br />
                <h1>  TK :   {product.price.toFixed(2)}</h1> <br />

                <button style={{ marginRight: "30px" }} onClick={handleBuyClick}  > Buy now  </button>
                <button onClick={handleCheckOutClick}    > Check Out</button> <br /> <br />

            </div> <br />
            {notifyMessage && (
                <div style={{ backgroundColor: "skyblue", padding: "10px", width: "400px" }} onClick={() => setNotifyMessage(null)}>
                    <span style={{ color: "black" }}> {notifyMessage}</span>
                </div>)}
        </>
    );
};

export default ProductPage;