import { useEffect } from "react";
import { createConnection } from "../Utils/Chat";


const ChatRoom = () => {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => {
            connection.disconnect();
        }



    }, [])

    return (
        <div>
            <h1>Welcome to the chat !!!</h1>
        </div>
    );
};

export default ChatRoom;