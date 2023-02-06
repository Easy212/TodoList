import React from 'react';
import '../css/Template.css'

function Template({children, todoLength}){
    return(
        <div className='template'>
           <div className='title'>오늘 할 일({todoLength})</div>
           <div >{children}</div>
        </div>
    );

}
export default Template