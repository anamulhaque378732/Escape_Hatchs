import { useRef } from "react";

const FocusingATextInput = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    }




    return (
        <div>

            <input ref={inputRef} type="text" name="" id="" />
            <button onClick={handleClick}>Focus the input</button>


        </div>
    );
};

export default FocusingATextInput;