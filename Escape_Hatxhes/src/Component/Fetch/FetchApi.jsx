import { useEffect, useState } from "react";
import { fetchComments } from "../../Utils/FetchComments";

const FetchApi = ({ postId }) => {
    const [comments, setComments] = useState([]);




    useEffect(() => {
        let ignore = false;
        //fetch comment here
        async function startFetching() {
            const json = await fetchComments(postId);
            if (!ignore) {
                setComments(json)
            }
        };
        startFetching();

        return () => {
            ignore = true;
        }
    }, [postId]);



    return (
        <div>
            <ul>
                {
                    comments && comments.map(comment => (
                        <li key={comment.id}>{comment.name}</li>
                    ))

                }
            </ul>
        </div>
    );
};

export default FetchApi;