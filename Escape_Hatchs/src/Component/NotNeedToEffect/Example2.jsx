import { useState } from "react";


const Example2 = ({ userId }) => {
    const [comment, setComment] = useState("");


    // Avoid : resetting state on prop change in an effect
    // useEffect(() => {
    //     setComment("")
    // }, [userId])







    return (
        <div>
            <h2> Profile id: {userId}</h2>
            <div>
                <input type="text"
                    name=""
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                    id="" /> <br /> <br />
                <h1 style={{ backgroundColor: "lightcyan", padding: "4px" }}> {comment}  </h1>


            </div>



        </div>
    );
};

export default Example2;