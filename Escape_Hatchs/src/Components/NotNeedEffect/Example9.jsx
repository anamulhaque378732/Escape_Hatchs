import { useEffect, useState } from "react";

const Example9 = () => {
    const [isOnline, setIsOnline] = useState(true);




    useEffect(() => {
        function updateState() {
            setIsOnline(navigator.onLine);
        };

        updateState();

        // subscribe
        window.addEventListener("online", updateState);
        window.addEventListener("offline", updateState);

        //clean up
        return () => {
            window.removeEventListener("online", updateState);
            window.removeEventListener("offline", updateState)
        }

    }, []);



    return (
        <div>
            <div> I am {isOnline ? "Online" : "Offline"}</div>
        </div>
    );
};

export default Example9;