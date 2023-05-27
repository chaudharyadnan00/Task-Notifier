import React from 'react';
import dp from './dp.jpg';
const Navbar = () => {
    const d = new Date();
    const monthday = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[d.getDay()];
    let dateNum=d.getDate();
    let monthName = monthday[d.getMonth()];
    let yearNum=d.getFullYear();
    return (
        <>
            <div className='mainDiv'>
                <div className='textImage'>
                    <h1>My List</h1>
                    <div className='imageDiv'>
                        <img src={dp}
                            alt='NotFound' />
                    </div>
                </div>
            </div>
            <div className='dateTime'>
                <p className='dayPara'>{day}</p>
                <p className='datePara'>{dateNum}{" "}{monthName}{","}{yearNum}</p>
            </div>
        </>
    )
}

export default Navbar;
