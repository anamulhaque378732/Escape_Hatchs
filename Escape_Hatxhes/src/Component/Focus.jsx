import { useRef } from 'react';
const Focus = () => {

    const myRef = useRef(null);

    const handleFocusInput = () => {
        myRef.current.focus();
    };

    return (
        <div>



            <input ref={myRef} type="text" />
            <button onClick={handleFocusInput}> Focus the input</button>
        </div>
    );
};

export default Focus;