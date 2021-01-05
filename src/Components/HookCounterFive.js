import React, {useState} from 'react'

function HookCounterFive() {

    const intialCount = 0
    const [count, setCount] = useState(intialCount)

    const Incrementfive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    // const DecrementFive = () => {
    //     setCount(prevCount => prevCount - 5)
    // }

    return (
        <div>
            Count - {count}
            <button onClick={() => setCount(intialCount)}> Reset</button>
            <button onClick={() => setCount(count + 1)}> Increment</button>
            <button onClick={() => setCount(count - 1)}> Decrement</button>
            <button onClick={Incrementfive}> Increment 5</button>
        </div>
    )
}

export default HookCounterFive