import ClockBlock from '../ClockBlock/ClockBlock';
import './style.scss';

function ClockBody({body, handleClick}) {

    
    
    return (
        <>
            <div className='clock-container'>
                {
                    Object.entries(body).map((i, index) => {
                        return (
                            <div key={index} className={i[1].row_class}>
                                {
                                    Object.entries(i[1].row_blocks).map((b, index2) => {
                                        return (
                                            <ClockBlock handleClick={handleClick} rank={b[1]} key={index2} unit={b[1].unit} count={b[1].count} shape={b[1].shape} color={b[1].color} />
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