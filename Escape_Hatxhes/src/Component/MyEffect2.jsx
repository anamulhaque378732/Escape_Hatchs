import { useState } from "react";
import VideoPlayer2 from "./VideoPlayer2";


const MyEffect2 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {setIsPlaying ? "Pause" : "Play"}
            </button>
            <VideoPlayer2
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    );
};

export default MyEffect2;