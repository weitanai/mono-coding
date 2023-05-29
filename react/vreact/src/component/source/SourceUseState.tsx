import {useState} from 'react';

export default function SourceUseState() { 
  const [count, setCount] = useState(0);

  const handleCount = () => { 
    setCount(count+1);
    setCount(count+1);
  }
  return ( 
      <div className="">
        <h1>source code </h1>
        <button onClick={()=>handleCount()}>add count</button>
        <p>{count}</p>
      </div>
    )
  }