import React from 'react';
import './Action.css'

const Action = ({action, handleAddToList}) => {
    // const {action, handleAddToList} = props;
    const {img, name, time} = action;
    
    
    return (
        <div className='action'>
           <img src={img} alt=""></img>
            <div className='action-info'>
            <p className='action-name'>{name}</p>
            <p>Time required: {time}s</p>
            </div>
            <button onClick={ () => handleAddToList(action)} className='btn-list'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Action;