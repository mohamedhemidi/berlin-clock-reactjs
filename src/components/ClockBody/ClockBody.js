import { useState, useEffect } from 'react';

import ClockBlock from '../ClockBlock/ClockBlock';
import './style.scss';
import { convertBerlinTimeToDigital, convertDigitalToBerlinTime } from '../../utils/helper';

function ClockBody() {

    // const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR'));

    // const [code, setCode] = useState("YOOOOOOOOOOOOOOOOOOOOOOO");
    // const [body, setBody] = useState(convertBerlinTimeToDigital(convertDigitalToBerlinTime(time)));

    // useEffect(() => {
    //     setTime(convertBerlinTimeToDigital(code))
    //     // setBody(convertBerlinTimeToDigital(code));
    // }, [])

    // useEffect(() => {
    //     setCode(convertDigitalToBerlinTime(time))
    // }, [])

    const body = convertBerlinTimeToDigital(convertDigitalToBerlinTime(new Date().toLocaleTimeString('fr-FR')));

    // console.log(new Date().toLocaleTimeString('fr-FR'))

    return (
        <>
            <h1>{new Date().toLocaleTimeString('fr-FR')}</h1>
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