//import Example1 from "./Example1";
import { useState } from "react";
//import Example2 from "./Example2";
import { items1, items2 } from "../../Utils/ItemsData";
import Example3 from "./Example3";


const NeedToEffect = () => {
    // example -2 
    //const [userId, setUserId] = useState(1);

    // example - 3

    const [items, setItems] = useState(items1)

    return (
        <div>
            {/* 1.0 Updating state based on Props or state */}
            {/* <Example1 /> */}




            {/* 2.0 Resetting all state when a props on state */}
            {/* <div>
                <button onClick={() => setUserId(userId === 1 ? 2 : 1)}> Switch the Profile number . {userId === 1 ? 2 : 1} </button>
            </div> <hr />

            <Example2 key={userId} userId={userId} /> */}



            {/* 3.0  Adjusting some state when a prop change  */}

            <div>
                <button onClick={() => {
                    setItems(items2)
                }}> Switch the items2 :

                </button> <br /> <br />
                <button onClick={() => {
                    setItems(items1)
                }}> Switch the items1 :

                </button> <br />



                <Example3 items={items} />
            </div>




        </div>
    );
};

export default NeedToEffect;