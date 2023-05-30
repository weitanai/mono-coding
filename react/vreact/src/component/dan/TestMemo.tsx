import {ReactNode, useState} from "react";

export default function TestMemo() {
    return (
        <div className="memo-box">
            <NumberRecord>
            <ExpensiveTree/>
            </NumberRecord>
        </div>
    );
}


function NumberRecord({children}: {children: ReactNode}) {
    const [num, setNum]  = useState(0);
    return (
        <div className="number-box">
            <button onClick={()=>setNum(1+num)}>{num}</button>
            {children}
        </div>
    );
}

function ExpensiveTree() {
    const now = performance.now();
    console.log("ExpensiveTree render");
    while (performance.now() - now < 100) {
    }
    return <p>I am a very slow component tree.</p>;
}

// solution 1
// you can put state in child

// solution 2
// put state in this component & memo child as children props