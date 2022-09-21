import ClockBlock from '../ClockBlock/ClockBlock';
import './style.scss';
function ClockBody() {
    return (

        <div className='clock-container'>
            <div className='seconds-row'>
                {/* <ClockBlock unit="second" count="1" shape="circle" color="red" status="on"/> */}
                <ClockBlock unit="s" count="1" shape="circle" color="white"/>
            </div>
            <div className='hours-x5-row'>
            <ClockBlock unit="h" count="5" shape="rectangle" color="orange"/>
            <ClockBlock unit="h" count="5" shape="rectangle" color="orange"/>
            <ClockBlock unit="h" count="5" shape="rectangle" color="orange"/>
            <ClockBlock unit="h" count="5" shape="rectangle" color="white"/>
            </div>
            <div className='hours-x1-row'>
            <ClockBlock unit="h" count="5" shape="rectangle" color="orange"/>
            <ClockBlock unit="h" count="5" shape="rectangle" color="orange"/>
            <ClockBlock unit="h" count="5" shape="rectangle" color="orange"/>
            <ClockBlock unit="h" count="5" shape="rectangle" color="white"/>
            </div>
            <div className='minutes-x5-row'>
            <ClockBlock unit="m" count="5" shape="rectangle" color="yellow"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="yellow"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="red"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="yellow"/>            <ClockBlock unit="m" count="5" shape="rectangle" color="yellow"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="red"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="yellow"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="white"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="white"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="white"/>
            <ClockBlock unit="m" count="5" shape="rectangle" color="white"/>
            </div>
            <div className='minutes-x1-row'>
            <ClockBlock unit="m" count="1" shape="rectangle" color="white"/>
            <ClockBlock unit="m" count="1" shape="rectangle" color="white"/>
            <ClockBlock unit="m" count="1" shape="rectangle" color="white"/>
            <ClockBlock unit="m" count="1" shape="rectangle" color="white"/>
            </div>
        </div>
    );
}

export default ClockBody;