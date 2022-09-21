import './style.css';


function ClockBlock({unit, count,shape, color}) {
    return(
        <div className={`${unit}-${count}-${shape}-${color}`}></div>
    );
}


export default ClockBlock;