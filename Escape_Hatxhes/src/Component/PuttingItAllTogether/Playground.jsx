import { useEffect, useState } from "react";


const Playground = () => {
    const [text, setText] = useState("a");

    useEffect(() => {

        function onTimeout() {
            console.log('⏰ ' + text);

        };
        console.log(`🔵 Schedule "' + ${text} + '" log`);

        const timeOutId = setTimeout(onTimeout, 3000);
        return () => {
            console.log('🟡 Cancel "' + text + '" log');

            clearTimeout(timeOutId)
        }

    }, [text]);



    return (
        <div>
            <label htmlFor="">
                What to log :
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            </label>
            <h1> {text}</h1>
        </div>
    );
};

export default Playground;