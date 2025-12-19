import { useEffect } from "react";
import createConnection from "../Utils/connection";

const serverUrl = "https://localhost:1234";



const ChatRoom = ({ roomId }) => {
    useEffect(() => {
        // synchronize with external chat server

        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        // cleanup
        return () => {
            connection.disconnect();
        }
    }, [roomId])




    return (
        <div>
            <h2> Welcome to the {roomId} room</h2>
        </div>
    );
};

export default ChatRoom;