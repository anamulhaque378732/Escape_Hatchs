import { useEffect, useRef } from "react";


const VideoPlayer = ({ isPlaying, src }) => {

    let ref = useRef(null);
    useEffect(() => {
        if (isPlaying) {
            ref.current.play();

        } else {
            ref.current.pause();
        };
    })

    return (
        <div>
            <video
                src={src}
                ref={ref}
            > </video>
        </div>
    );
};

export default VideoPlayer;