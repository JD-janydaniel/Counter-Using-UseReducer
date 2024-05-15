import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const [state,dispatch]=useReducer(ReducerAction,0)
    const handleDecrement=(value)=>{
  if(state-value<0){
    dispatch({type:'SET',payload:0})
  }
  else{
    dispatch({type:'SUB',payload:value})
  }
    }
    return (
        <>
           <h1 className='text-center' >Counter</h1>
           <h2 className='text-center fs-1 '>{state}</h2> 
           <div className="container border border-warning rounded-5 " style={{height:"400px"}}>
            <div className="row p-5">
                <div className="col-6">
                <div className='text-center'>
             <button className='btn btn-success btn-lg fs-2' onClick={()=>{dispatch({type:'ADD',payload:1})}}>Increment by 1</button>
             <button className='btn btn-danger btn-lg fs-2' onClick={()=>{handleDecrement(1)}} >Decrement by 1</button>
           </div>
                </div>
                <div className="col-6">
                <div className='text-center'>
             <button className='btn btn-success btn-lg fs-2' onClick={()=>{dispatch({type:'ADD',payload:10})}}>Increment by 10</button>
             <button className='btn btn-danger btn-lg fs-2' onClick={()=>{handleDecrement(10)}} >Decrement by 10</button>
           </div>
                </div>
            </div>
            <div className="row p-5">
            <div className="col ">
                <div className='text-center'>
             <button className='btn btn-warning btn-lg fs-2' onClick={()=>{dispatch({type:'MUL',payload:4})}}>Multiplay by 4</button>
             <button className='btn btn-info btn-lg fs-2' onClick={()=>{dispatch({type:'DIV',payload:2})}} >Divided by 2</button>
           </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default UseReducer;