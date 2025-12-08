import { useEffect, useState } from "react";


const Example5 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [jsonToSubmit, setJsonToSubmit] = useState(null);

    // good : this logic should run because the component was displayed


    useEffect(() => {
        post("/analytics/event", { eventName: "visit_from" });

    }, []);


    // Avoid : Event-specific inside an effect

    // useEffect(() => {
    //     if (jsonToSubmit !== null) {
    //         post("/api/register", jsonToSubmit)
    //     }
    // }, [jsonToSubmit])

    const handleSubmit = (e) => {
        e.preventDefault();
        //  good : Event-specific logic is in the event handler
        post("/api/register", { firstName, lastName })


    };

    function post(url, data) {
        console.log(`Posted to url ${url} with data ${JSON.stringify(data)}`);

    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </p>
                <p>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </p>
                <button > Submit</button>
            </form>
        </div>
    );
};

export default Example5;