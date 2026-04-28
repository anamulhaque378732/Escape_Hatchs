import { useEffect } from "react";

const SubscribingToEvent = () => {

    useEffect(() => {

        function handleScroll() {
            console.log(window.scrollX, window.scrollY);

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])


    return (
        <div>
            <p style={{ fontSize: "100px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in inventore mollitia laudantium suscipit accusamus at? Nulla, dolore doloremque ex laboriosam magnam cum fugit alias id suscipit molestiae accusamus sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat sapiente quibusdam ab corporis, quis illum neque quia molestiae adipisci aliquid voluptas fugiat praesentium velit ipsum doloribus. Officiis, laborum? Nesciunt!</p>
        </div>
    );
};

export default SubscribingToEvent;