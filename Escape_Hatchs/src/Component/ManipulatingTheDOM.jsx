import { useRef } from 'react';

const ManipulatingTheDOM = () => {
    const myRef = useRef(null); // {current :null}
    const handleScroll = () => {
        //myRef.current.scrollIntoView();
        myRef.current.textContent = "Hello React";

    }

    return (
        <div>
            <div ref={myRef}> Hello</div> <br />

            <button onClick={handleScroll}   > Scroll to view</button>
        </div>
    );
};

export default ManipulatingTheDOM;