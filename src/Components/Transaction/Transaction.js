import React,{useState} from 'react';
import './Transaction.css';


const Transaction = (props) => {
    const [count,setCount]= useState(0);
    const handleClick=()=>setCount(count + 1);
const tax =9.87;

    return (
        <div>
           <h2>Number of courses:{count}</h2>
           <h4>Total:{tax *count}</h4>
           <button onClick={handleClick}>Total</button> 
        </div>
    );
};

export default Transaction;