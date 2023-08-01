import React from 'react';
import CountdownTimer from './CountdownTimer';
import './Countdown.css';

export default function Countdown({date_exp}) {
    // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date(date_exp).getTime();

    // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    const dateTimeAfterThreeDays = NOW_IN_MS;

    return (
        <div>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
    );
}
