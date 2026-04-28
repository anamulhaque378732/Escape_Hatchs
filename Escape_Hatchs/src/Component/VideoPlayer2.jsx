import { useEffect, useRef } from "react";

const VideoPlayer2 = ({ isPlaying, src }) => {
    let ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
            console.log("video is Playing");
        } else {
            ref.current.pause();
            console.log("video is pause");
        }
    }, [isPlaying])

    return (
        <div>
            <video src={src} ref={ref}></video>
        </div>
    );
};

export default VideoPlayer2;