import { useEffect, useState } from 'react'
import { convertBerlinTimeToDigital, convertDigitalToBerlinTime } from '../../utils/helper';
import ClockBody from '../ClockBody/ClockBody'
import './styles.scss'

function BerlinToDigitalConverter({ body, time }) {

    const [newTime, setNewTime] = useState(time)
    const [newBody, setNewBody] = useState(body)

    const [seconds, setSeconds] = useState(0)
    const [fiveHours, setFiveHours] = useState(0)
    const [oneHour, setOneHour] = useState(0)
    const [fiveMinutes, setFiveMinutes] = useState(0)
    const [oneMinute, setOneMinutes] = useState(0)



    const updateCode = (value, attr) => {
        switch (attr) {
            case "second":
                setSeconds(value)
                break;
            case "fiveHours":
                setFiveHours(value)
                break;
            case "oneHour":
                setOneHour(value)
                break;
            case "fiveMinutes":
                setFiveMinutes(value)
                break;
            case "oneMinute":
                setOneMinutes(value)
                break;
        }
    }

    useEffect(() => {
        setNewTime(`${((fiveHours * 5) + oneHour * 1) == 24 ? 0 : ((fiveHours * 5) + oneHour * 1)}:${(fiveMinutes * 5) + oneMinute * 1}:${seconds}`)

    }, [seconds, fiveHours, oneHour, fiveMinutes, oneMinute, newTime])

    useEffect(() => {
        setNewBody(convertBerlinTimeToDigital(convertDigitalToBerlinTime(newTime)))
    }, [seconds, fiveHours, oneHour, fiveMinutes, oneMinute, newTime])

    return (
        <div>
            <div className='converter-container'>
                <ClockBody body={newBody} />
                <div className='clock-config'>
                    <h2>{newTime}</h2>
                    <div className='form-group'>
                        <label>Seconds</label>
                        <input type="range" data="second" onChange={(e) => updateCode(e.target.value, e.target.attributes.data.value)} min={1} max={59} value={seconds} />
                    </div>

                    <div className='form-group'>
                        <label>5 Hours</label>
                        <input type="range" data="fiveHours" onChange={(e) => updateCode(e.target.value, e.target.attributes.data.value)} min={0} max={4} value={fiveHours} />
                    </div>


                    <div className='form-group'>
                        <label>1 Hour</label>
                        <input type="range" data="oneHour" onChange={(e) => updateCode(e.target.value, e.target.attributes.data.value)} min={0} max={4} value={oneHour} />
                    </div>


                    <div className='form-group'>
                        <label>5 minutes</label>
                        <input type="range" data="fiveMinutes" onChange={(e) => updateCode(e.target.value, e.target.attributes.data.value)} min={0} max={11} value={fiveMinutes} />
                    </div>


                    <div className='form-group'>
                        <label>1 minute</label>
                        <input type="range" data="oneMinute" onChange={(e) => updateCode(e.target.value, e.target.attributes.data.value)} min={0} max={4} value={oneMinute} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BerlinToDigitalConverter