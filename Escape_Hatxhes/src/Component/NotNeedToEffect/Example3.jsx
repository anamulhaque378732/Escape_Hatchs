import { useState } from "react";


const Example3 = ({ items }) => {
    // const [selection, setSelection] = useState(null);


    const [selectedId, setSelectedId] = useState(null);
    // Avoid : adjusting State on prop change in an effect

    // useEffect(() => {

    //     setSelectedId(null);

    // }, []);

    // Better : Adjust the state while rendering

    // const [prevItems, setPrevItems] = useState(items);
    // if (items !== prevItems) {
    //     setPrevItems(items);
    //     setSelection(null);
    // };
    // Best : calculate everything during rendering

    const selection = items.find((item) => item.id === selectedId) ?? null;

    return (
        <div>
            <ol>
                {
                    items.map((item) => (<li key={item.id}>

                        <input type="checkbox"
                            checked={item.id === selection?.id}
                            onChange={() => setSelectedId(item.id)}
                        />
                        {item.title}
                    </li>
                    ))}
            </ol>
            {
                selection?.id && (

                    <div>
                        <h2> Selected Item :</h2>
                        <div style={{ padding: "10px", backgroundColor: "lightblue" }}>

                            {selection?.title}
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Example3;