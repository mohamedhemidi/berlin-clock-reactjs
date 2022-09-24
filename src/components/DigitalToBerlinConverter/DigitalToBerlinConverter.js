import { useEffect, useState } from 'react'
import { convertBerlinTimeToDigital, convertDigitalToBerlinTime } from '../../utils/helper'
import ClockBody from '../ClockBody/ClockBody'
import TimePicker from '../TimePicker/TimePicker'

function DigitalToBerlinConverter() {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("01");

    const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`);
    const handleClick = (e, unit) => {
        let value = e.target.value;
        switch (unit) {
            case "h":
                setHours(value)
                break;
            case "m":
                setMinutes(value)
                break;
            case "s":
                setSeconds(value)
                break;
        }

    }
    useEffect(() => {
        setTime(`${hours}:${minutes}:${seconds}`)
    }, [hours, minutes, seconds])

    // console.log(time)
    return (
        <>
            <TimePicker handleClick={handleClick} />
            <ClockBody body={convertBerlinTimeToDigital(convertDigitalToBerlinTime(time))} />
        </>
    )
}

export default DigitalToBerlinConverter