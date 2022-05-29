import React, {useState} from 'react';

export default function countdownMaker() {

    return function () {
        const [days, setDays] = useState();
        const [hours, setHours] = useState();
        const [minutes, setMinutes] = useState();
        const [seconds, setSeconds] = useState();

        const countDownDate = new Date("June 27, 2022 00:00:00").getTime();

        setInterval(function () {

            let distance = countDownDate - new Date().getTime();

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        }, 1000);

        return (
            <div>
                <h1>Camping 2k22</h1>
                <div className="counter">
                    <ul>
                        <li><span>{days}</span>days</li>
                        <li><span>{hours}</span>Hours</li>
                        <li><span>{minutes}</span>Minutes</li>
                        <li><span>{seconds}</span>Seconds</li>
                    </ul>
                </div>
            </div>
        );
    }
}
