import { useState, useEffect } from "react";

export default function UseEffctTest() {
    const [count, setCount] = useState(0);
    return (
        <div className="effect-box">
            {/* <Counter /> */}
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c=>c + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return <h1>{count}</h1>;
}