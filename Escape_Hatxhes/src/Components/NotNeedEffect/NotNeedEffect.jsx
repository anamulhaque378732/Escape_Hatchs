import { useState } from "react";
import Example7 from "./Example7";
// import Example8 from "./Example8";

const NotNeedEffect = () => {
    const [isOn, setIsOn] = useState(false); //  for  example 7
    //const [data, setData] = useState(null); // for Example 8








    return (
        <div>
            {/* Example -7 */}
            <p>{isOn ? "On" :
                "Off"}</p>
            <Example7
                onChange={setIsOn}
            />
            {/* Example -8 */}

            {/* <p> {data && data}</p>
            <Example8 onFetched={setData} />
             */}
        </div>
    );
};

export default NotNeedEffect;