import { useEffect, useRef } from "react";



const Animation = () => {
    let ref = useRef(null);

    useEffect(() => {


        const node = ref.current;
        node.style.opacity = 1;

        return () => {
            node.style.opacity = 0;
        }
    }, []);

    return (
        <div>
            <p ref={ref}> Here is an animation</p>
        </div>
    );
};

export default Animation;