import Recat, {useState} from 'react'


function HookCounter() {


    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick = {() => setCount(count + 1)}>Count-Increase - {count}</button>
        </div>
    )
}

export default HookCounter