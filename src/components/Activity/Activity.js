// import
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Action from '../Action/Action';
import Result from '../Result/Result';
import './Activity.css'

// state declare

const Activity = () => {
    
    const [actions, setActions] = useState([]);
    const [result, setResult] = useState([]);

    // fetch part

    useEffect(() =>{
        fetch('./actions.json')
        .then(res=> res.json())
        .then(data=> setActions(data))
    }, [])

    // event handler
    const handleAddToList = (action) =>{
        const newResult = [...result, action]
        setResult(newResult)
        
    }

    return (
        <div className='action-container'>
            <div className="actions-container">
                {
                    actions.map(action=><Action 
                        key={action.id}
                        action={action}
                        handleAddToList={handleAddToList}
                    ></Action>)
                }

            </div>
            <div className="self-container">
                <Result result={result}></Result>
            </div>
        </div>
    );
};

export default Activity;