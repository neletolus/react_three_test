import {useEffect, useState} from "react";

export default function RandomizeLine() {
    const [isInit, setIsInit] = useState(true)

    const getRandomStyle = () => {
        return {
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            width: Math.random() * 50 + "%",
            height: Math.random() * 50 + "px",
            transform: "rotate(" + Math.random() * 360 + "deg)",
            opacity: 1
        };
    }

    useEffect(() => {
        setIsInit(false)
    }, []);

    return (
        <div style={isInit ? ({top:"calc(50% - 50px)", left:"calc(50% - 50px)", width:"100px", height:"100px"}) : getRandomStyle()}></div>
    )
}