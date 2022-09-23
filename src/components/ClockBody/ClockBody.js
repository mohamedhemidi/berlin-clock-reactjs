import { useState, useEffect } from 'react';

import ClockBlock from '../ClockBlock/ClockBlock';
import './style.scss';
import { convertBerlinTimeToDigital, convertDigitalToBerlinTime } from '../../utils/helper';

function ClockBody() {

    const body = convertBerlinTimeToDigital(convertDigitalToBerlinTime(new Date().toLocaleTimeString('fr-FR')));

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    // console.log(convertDigitalToBerlinTime("23:30:09"))
    // const body = convertBerlinTimeToDigital(convertDigitalToBerlinTime("23:44:09"));

    return (
        <>
            <h1>{date.toLocaleTimeString('fr-FR')}</h1>
            {/* <h1>{new Date().toLocaleTimeString('fr-FR')}</h1> */}
            {/* <h1>23:30:09</h1> */}
            
            <div className='clock-container'>
                {
                    Object.entries(body).map((i, index) => {
                        return (
                            <div key={index} className={i[1].row_class}>
                                {
                                    Object.entries(i[1].row_blocks).map((b, index2) => {
                                        return (
                                            <ClockBlock key={index2} unit={b[1].unit} count={b[1].count} shape={b[1].shape} color={b[1].color} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default ClockBody;