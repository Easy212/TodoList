import React from 'react';
import '../css/Template.css'

function Template({children, todoLength, today, date}){
    const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
    return(
        <div className='template'>
             
            <div className='title'>
                <h1 className="date">{date}</h1>
                <p>{dayName}</p>
                <h2 className="todo">TODO LIST({todoLength})</h2>
            </div>
           <div>{children}</div>
        </div>
    );

}
export default Template