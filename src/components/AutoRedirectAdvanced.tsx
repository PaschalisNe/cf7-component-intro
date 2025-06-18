import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

const AutoRedirectAdv = () => {

    const navigate = useNavigate();
    const[secondsRemaining, setSecondsRemaining] = useState(5)

    useEffect(() => {
        const intervalId: number = setInterval( () => {
         setSecondsRemaining((prev: number) => prev - 1)
        }, 1000 )

        const timer: number = setTimeout( () => {
        navigate("/examples/name-changer")}, 5000 )

        return () => {
            clearInterval(intervalId)
            clearTimeout(timer)
        }

    }, [])

    return (
        <>
        <h1 className="text-center text-2xl mb-4">
            Redirecting in {secondsRemaining} second{secondsRemaining !== 1 && "s"}...
        </h1>
        </>
    )
}
export default AutoRedirectAdv