import { useEffect, useState } from "react";
import fetchResults from "../../Utils/fetchResults";

const FetchingData = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);

    useEffect(() => {

        let ignore = false;
        fetchResults(query, page).then((json) => {
            if (!ignore) {
                setResults(json)

            };
        });

        // clean up
        return () => {
            ignore = true;
        }
    }, [query, page]);

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            </div>
            <hr />
            <div>
                <ul style={{
                    display: "flex",
                    gap: "10px",
                    listStyleType: "none"
                }}>
                    <li
                        style={{ border: "2px solid red", padding: "10px", borderRadius: "5px" }} >
                        <button onClick={() => setPage(1)}> 1</button>
                    </li>

                    <li style={{ border: "2px solid red", padding: "10px", borderRadius: "5px" }}>
                        <button onClick={() => setPage(2)}> 2</button>
                    </li>
                    <li style={{ border: "2px solid red", padding: "10px", borderRadius: "5px" }}>
                        <button onClick={() => setPage(3)}> 3</button>
                    </li>
                    <li style={{ border: "2px solid red", padding: "10px", borderRadius: "5px" }}>
                        <button onClick={() => setPage(4)}> 4</button>
                    </li>

                </ul>
            </div>
            <hr />
            {results}
        </div>
    );
};

export default FetchingData;