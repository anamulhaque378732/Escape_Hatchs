import { getRndInteger } from "../Components/FatchingData/getRadInteger";

export default function fetchResults(query, page) {

    return new Promise((resolve) => {
        setTimeout(() => {
            if (query !== "") {
                if (page % 2 === 0) {
                    resolve(`Even - ${query}`)
                } else {
                    resolve(`Odd - ${query}`)
                };
            } else {
                resolve()
            };

        }, getRndInteger(1000, 3000)

        );
    });
};







