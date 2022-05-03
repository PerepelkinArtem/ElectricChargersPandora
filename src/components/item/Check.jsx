import React from 'react';
import './Check.css';



const Check = (isCompleted) => {
    return (
        <div class="container">
            <div className="round">
                {isCompleted && <input type="checkbox"></input>}
            </div>
        </div>
    )
}

export default Check