import { useState } from "react";
import VideoPlayer from "./VideoPlayer";




const MyEffect = () => {
    const [isPlaying, setIsPlaying] = useState(false);




    // useEffect(() => {
    //     console.log("hello World");

    // }, []);





    return (
        <div>
            <h2>My Effect</h2>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    );
};

export default MyEffect;