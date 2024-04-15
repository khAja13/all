import { useEffect, useState } from "react";

function getDimensions() {
    return {width: window.innerWidth, height: window.innerHeight};
}

export default function WindowSize() {
    const [ WindowSize, setWindowSize ] = useState(getDimensions());

    useEffect(()=> {

        function changeSize() {
            setWindowSize(getDimensions());
        }

        window.addEventListener('resize', changeSize);
        return () => window.removeEventListener('resize', changeSize);
    }, []);

    return WindowSize;
}