import { useRef } from 'react';

const ReferencingValuesWithRefs = () => {
    console.log('rendering');

    //const [count, setCount] = useState(0)


    let ref = useRef(0);


    const handleClick = () => {
        // console.log(ref);

        ref.current = ref.current + 1;
        //setCount((prevCount) => prevCount + 1);
        console.log(`you click  ${ref.current}  times`)
    };

    return (
        <div>
            <button onClick={handleClick}> Click me!   </button>

        </div>
    );
};

export default ReferencingValuesWithRefs;