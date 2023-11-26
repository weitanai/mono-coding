import { useEffect, useState } from "react";

export function SetStateSync() {
    const [isUpdateSync, SetStateSync] = useState('hello');

    const handleAsyncClick = () => {
        SetStateSync('async world');
        console.log('async isUpdate', isUpdateSync);
    }

    const handlesyncClick = () => {
        setTimeout(() => {
            SetStateSync('sync world');
            console.log('sync isUpdate', isUpdateSync);
        }, 100)
    }

    useEffect(() => {
        SetStateSync('useEffect sync world');
        console.log('useEffect  isUpdate', isUpdateSync);
    }, [isUpdateSync])


    return (<div>
        <button onClick={handleAsyncClick}>set state async</button>
        <button onClick={handlesyncClick}>set State aync</button>
    </div>)
}