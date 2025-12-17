import useSomeApi from "../../Utils/SomeData";
import Example8 from "./Example8";

const NotNeedEffect = () => {
    //const [isOn, setIsOn] = useState(false); //  for 7 
    // const [data, setData] = useState(null); //  for 8 
    const data = useSomeApi();







    return (
        <div>
            {/* Example -7 */}
            {/* <p>{isOn ? "On" :
                "Off"}</p>
            <Example7
                onChange={setIsOn}
            /> */}
            {/* Example -8 */}

            <p> {data && data}</p>
            <Example8 data={data} />

        </div>
    );
};

export default NotNeedEffect;