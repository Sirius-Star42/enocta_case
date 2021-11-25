import React, {useState, useEffect} from "react";
import '../App.css';

const Timer = ({hoursMinSecs}) => {

    var {hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    var [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    var [state, setState] = useState();

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    const tick = () => {

        if(hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if(mins === 0 && secs === 0 ) {
            setTime([hrs-1, 59, 59]);
        } else if(secs === 0) {
            setTime([hrs, mins-1, 59])
        } else {
            setTime([hrs, mins, secs-1])
        }
    };

    var incDecr= (event) => {
        if(event === "inc") {
            if (state === "hour")
                setTime([hrs+1, mins, secs])
                if(hrs === 24) setTime([0, mins, secs])
            else if (state ==="minute") {
                setTime([hrs, mins+1, secs])
                if(mins === 59) setTime([hrs+1, 0, secs])
            } else if(state === "second") {
                setTime([hrs, mins, secs+1])
                if(secs === 59) setTime([hrs, mins+1, 0])
            }
        } else if (event === "decr") {
            if (state === "hour" && hrs != 0)
                setTime([hrs-1, mins, secs])
            else if (state ==="minute") {
                setTime([hrs, mins-1, secs])
                if (mins === 0) setTime([hrs-1, 59, secs])
            } else if(state === "second") {
                setTime([hrs, mins, secs-1])
                if (secs === 0) setTime([hrs, mins-1, 59])
            }
        }
    }
   
    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    return (
        <div className="container">
            <div className="row align-items-center align-content-center">
                <div className="col col-md-1">
                    <button className="button btn btn-outline-primary" type="button" onClick={() => incDecr("inc")}>+</button>
                </div>
                <div className="col col-md-2">
                    {`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
                </div>
                <div className="col col-md-1">
                    <button className="button btn btn-outline-primary" type="button" onClick={() => incDecr("decr")}>-</button>
                    
                </div>
                <div className="col col-md-12 mt-3">
                    <button className="btn btn-outline-success btn-small m-1" onClick={() => setState("hour")}>Hour</button>
                    <button className="btn btn-outline-success btn-small m-1" onClick={() => setState("minute")}>Minute</button>
                    <button className="btn btn-outline-success btn-small m-1" onClick={() => setState("second")}>Second</button>
                </div>         
            </div>
        </div>
    );
}

export default Timer;