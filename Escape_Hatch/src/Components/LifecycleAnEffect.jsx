import { useState } from "react";
import ChatRoom from "./ChatRoom";


const LifecycleAnEffect = () => {
    const [roomId, setRoomId] = useState("General");
    const [showChat, setShowChat] = useState(true);
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    const handleRoomChange = e => {
        setRoomId(e.target.value)
    }





    return (
        <div>
            <div>
                <input type="text"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)} name=""
                    id="" />
            </div>
            <div>
                <button onClick={() => setShowChat(s => !s)}> {showChat ? "Hide chat Room" : "Show chatRoom"}  </button>
            </div>

            {showChat && (
                <>

                    <hr />
                    <div>
                        Select Chat Room :
                        <select onChange={handleRoomChange} name="" id="">
                            <option value="General"> General</option>
                            <option value="Travel"> Travel</option>
                            <option value="Music"> Music</option>

                        </select>
                    </div>
                </>
            )
            }   <ChatRoom roomId={roomId} />
        </div>
    );
};

export default LifecycleAnEffect;