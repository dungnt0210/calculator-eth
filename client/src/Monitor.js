import React, {useState, useEffect} from 'react';

const Monitor = ({param1, param2, opt}) => {
    const [mathText, setMathText] = useState("");

    useEffect(() =>{
        if(param2) {
            setMathText(param1 + " " + opt + " " + param2);
        } else if (opt) {
            setMathText(param1 + " " + opt);
        } else {
            setMathText(param1);
        }
    }, [param1, param2, opt]);
    return (
        <div>
            <span>{mathText}</span>
            <span>{param2 ? param2 : param1 }</span>
        </div>
    );
}
export default Monitor;