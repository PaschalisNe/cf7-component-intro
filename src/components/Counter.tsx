import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <>
            <div className="space-y-4 pt-12">

                <h1 className="text-center"> Count is: {count} </h1>

                <div className="text-center space-x-4">

                    <CounterButton onClick={increaseCount} label="Increase" disabled={false}  />
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label= "Decrease" />
                    <CounterButton onClick={resetCount}  disabled={count === 0} label= "Reset" addClass="bg-cf-dark-red "/>
                    {/*<button className="bg-black text-white py-2 px-4 rounded" onClick={increaseCount}>*/}
                    {/*    Increase*/}
                    {/*</button>*/}

                    {/*<button className="bg-yellow-200 text-white py-2 px-4 disabled:bg-gray-600 rounded"*/}
                    {/*        onClick={decreaseCount} disabled = {count === 0} >*/}
                    {/*    Decrease*/}
                    {/*</button>*/}

                    {/*<button className="bg-red-500 text-white py-2 px-4 rounded disabled:bg-gray-600"*/}
                    {/*        onClick={resetCount} disabled = {count === 0}>*/}
                    {/*    Reset*/}
                    {/*</button>*/}

                </div>
            </div>
        </>
    )
}
export default Counter;
