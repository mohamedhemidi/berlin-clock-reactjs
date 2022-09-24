import './style.css';


function ClockBlock({ unit, count, shape, color, rank,handleClick }) {
    return (
        <div onClick={() => handleClick(unit,shape,color,rank)} className={`${unit}-${count}-${shape}-${color}`}></div>
    );
}


export default ClockBlock;