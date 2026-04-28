import { useRef } from "react";
import ForwardedMyInput from "./MyInput";

const FocusingATextInput = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }




    return (
        <div>

            <ForwardedMyInput type="text"

                ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>


        </div>
    );
};

export default FocusingATextInput;