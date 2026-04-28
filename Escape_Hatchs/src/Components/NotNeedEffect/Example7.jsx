import { useState } from "react";


const Example7 = ({ onChange }) => {
    const [isOn, setIsOn] = useState(false);

    // avoid : The change handler rus too late;
    // useEffect(() => {
    //     onChange(isOn) //parent k janaiya deya

    // }, [onChange, isOn]);

    // good way
    function handleToggle(nextIsOn) {
        onChange(nextIsOn);
        setIsOn(nextIsOn);
    };

    function handleClick() {
        handleToggle(!isOn);
    };

    return (
        <div>
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
};

export default Example7;