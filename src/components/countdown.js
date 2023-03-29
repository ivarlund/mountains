import React, {useState} from 'react';

export default function countdownMaker() {

    return function () {
        const [days, setDays] = useState();
        const [hours, setHours] = useState();
        const [minutes, setMinutes] = useState();
        const [seconds, setSeconds] = useState();

        const countDownDate = new Date("July 24, 2023 00:00:00").getTime();

        setInterval(function () {

            let distance = countDownDate - new Date().getTime();

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        }, 1000);

        return (
            <div className="mt-5 pt-5">
                <div className="rounded rounded-3 border border-1 border-light shadow text-light d-flex p-2" style={{backgroundColor: 'RGB(50, 54, 51, 0.4)', marginTop: '250px'}}>
                    <div className="d-flex flex-column align-items-center justify-content-center counter-item">
                        <div className="display-6 mb-0 fw-bold">
                            D
                        </div>
                        <div className="display-4 fw-bold" style={{width: '70px'}}>
                            {days}
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center counter-item">
                        <div className="display-6 mb-0 fw-bold">
                            H
                        </div>
                        <div className="display-4 fw-bold" style={{width: '70px'}}>
                            {hours}
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center counter-item">
                        <div className="display-6 mb-0 fw-bold">
                            M
                        </div>
                        <div className="display-4 fw-bold" style={{width: '70px'}}>
                            {minutes}
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center counter-item">
                        <div className="display-6 mb-0 fw-bold">
                            S
                        </div>
                        <div className="display-4 fw-bold" style={{width: '70px'}}>
                            {seconds}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
