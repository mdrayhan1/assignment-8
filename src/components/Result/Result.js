import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import { useState, useEffect } from 'react';

import './Result.css';

const Result = (props) => {
    
    const [breaktime,setBreaktime] = useState(0);

    const addtime = (time) =>{
        setBreaktime(time)
         localStorage.setItem('Data', JSON.stringify({'breakTime':time}));
    }
    useEffect(() => {
        let localBreakTime = JSON.parse(localStorage.getItem('Data'));
        if (localBreakTime != null) {
          setBreaktime(localBreakTime.breakTime);
        }
      
      }, [])
    


    const { result } = props;

    let add = 0;
    
    
    for (const action of result) {
       add = add + parseFloat(action.time);
            
    }

    const toastShow = () => toast("Activity completed!");

    
    
    
   

    return (
        <div className='result'>
            <ToastContainer></ToastContainer>
            <div>
                <h3>Md Rayhan</h3>
                <p>Barisal, Bangladesh</p>
                    {/* <img src='../../images/rayhan.jpg'> </img> */}
                    
                </div>
                <p>Total: {result.length}</p>
                
                <h3>Add A Break</h3>
                <div className='btn'>
                    <button onClick={ () => addtime(20)}>20s</button>
                    <button onClick={ () => addtime(30)}>30s</button>
                    <button onClick={ () => addtime(40)}>40s</button>
                    <button onClick={ () => addtime(50)}>50s</button>
                    <button onClick={ () => addtime(60)}>60s</button>
                </div>
                <h3>Exercise details</h3>
                <p>Exercise time:  {add} seconds</p>
                <p>Break time: {breaktime} seconds</p>
                <button className='activity-btn' onClick={toastShow}>Activity Completed</button>
        </div>
        
    );
};

export default Result;
