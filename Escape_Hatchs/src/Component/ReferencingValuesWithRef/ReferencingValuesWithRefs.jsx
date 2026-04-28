import { useRef } from "react";

const ReferencingValuesWithRefs = () => {
  // const [count, setCount] = useState(0);

  console.log("Rendering......");

  let ref = useRef(0);

  const handleClick = () => {
    console.log(ref);

    ref.current = ref.current + 1;

    // setCount((prevCount) => prevCount + 1);

    console.log(`you click  ${ref.current}  times`);
  };

  return (
    <div>
      <button onClick={handleClick}> Click me! </button>
    </div>
  );
};

export default ReferencingValuesWithRefs;
