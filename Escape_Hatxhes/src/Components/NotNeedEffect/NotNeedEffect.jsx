import Example9 from "./Example9";

const NotNeedEffect = () => {
    //const [isOn, setIsOn] = useState(false); //  for 7 
    // const [data, setData] = useState(null); //  for 8 
    //const data = useSomeApi();// for 8







    return (
        <div>
            {/* Example -7 */}
            {/* <p>{isOn ? "On" :
                "Off"}</p>
            <Example7
                onChange={setIsOn}
            /> */}
            {/* Example -8 */}

            {/* <p> {data && data}</p>
            <Example8 data={data} /> */}

            <Example9 />

        </div>
    );
};

export default NotNeedEffect;