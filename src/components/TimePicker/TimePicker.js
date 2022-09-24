import './styles.scss'

function TimePicker({handleClick}) {
    const picker = (length) => {
        const items = []
        for (let i = 0; i <= length; i++) {
            items.push(<option key={i} value={i}>{i}</option>)
        }
        return items;
    }
    return (
        <div className='timepicker-container'>
            <div className='hours'>
                <select onChange={(e) => handleClick(e , "h")} className='timeInput'>
                    {picker(23)}
                </select>
                H
            </div>
            <div className='minutes'>
                <select onChange={(e) => handleClick(e , "m")} className='timeInput'>
                    {picker(59)}
                </select>
                M
            </div>
            <div className='seconds'>
                <select onChange={(e) => handleClick(e , "s")} className='timeInput'>
                    {picker(59)}
                </select>
                S
            </div>
        </div>
    )
}

export default TimePicker