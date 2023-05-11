import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../../store/counter';




function ReduxUse() {
    const count = useSelector( (state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="redux-container">
            <h1>how to use redux</h1>
            <div>value: {count}</div>
            <div><button onClick = {()=> dispatch(decrement())} >-1</button></div>
            <div><button onClick = {()=> dispatch(increment())} >+1</button></div>
            <div><button onClick = {()=> dispatch(incrementByAmount({value: 10}))} >+10</button></div>
        </div>
    )
}
export default ReduxUse