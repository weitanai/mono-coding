import React,  {useMemo, useState} from 'react';

const CountCard =  function({count}) {
    console.log('count, -------')
    return (
        <div>
            {count.count}
        </div>
    )
}
React.memo(CountCard)


function CountRanddom() {
    const [count, setCount] = useState(1);
    const [testCount, setTestCount] = useState(1);
    const countObj = useMemo(()=>{
        console.log('re cal count')
        return {
            count: Math.random() * 100000 *count
        }
    }, [count])
    return (
        <div>
            <CountCard count={countObj}></CountCard>
            <button onClick={()=>setTestCount(testCount+1)}>change test Count {testCount}</button>
        </div>
    )
}


export default CountRanddom;