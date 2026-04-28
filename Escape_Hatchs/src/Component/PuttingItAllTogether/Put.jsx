import { useState } from "react";
import Playground from "./Playground";

const Put = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}  >{show ? "Unmount" : "Mount"} the component</button>
            {show && <hr />}
            {show && <Playground />}
        </div>
    );
};

export default Put;