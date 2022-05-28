import React, {useState} from 'react';

export default function countdownMaker() {


    return function () {
        // const [count, setCount] = useState(new Date().getTime());
        const [days, setDays] = useState();
        const [hours, setHours] = useState();
        const [minutes, setMinutes] = useState();
        const [seconds, setSeconds] = useState();

        const countDownDate = new Date("June 3, 2022 00:00:00").getTime();

        // let distance = countDownDate - count;



        setInterval(function () {

            let distance = countDownDate - new Date().getTime();

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));


        }, 1000);

        return (
            <div>
                <h1>ITALY T MINUS</h1>
                {days + "d " + hours + "h "
                + minutes + "m " + seconds + "s "}
            </div>
        );
    }
}