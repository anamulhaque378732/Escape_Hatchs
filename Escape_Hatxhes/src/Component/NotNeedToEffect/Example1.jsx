import { useState } from "react";

const Example1 = () => {

    const [firstName] = useState("Taylor");
    const [lastName] = useState("Swift");
    // avoid : redundant state and unnecessary effect
    // const [fullName, setFullName] = useState("");
    // useEffect(() => {
    //     setFullName(firstName + " " + lastName);

    // }, [firstName, lastName])

    // good : calculated during rendering
    const fullName = firstName + " " + lastName;
    return (
        <div>
            <p>{fullName}</p>
        </div>
    );
};

export default Example1;