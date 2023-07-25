import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const TodoLists = (props) =>{
    
    return(
        <>
        <div className='Todo'>
        <AiOutlineCloseCircle style={{backgroundColor : "rgb(154, 9, 9)"}}  onClick={()=>{props.onSelect(props.id)}}/>
         <li>{props.text}</li>
         </div>
        </>
    )
}
 
export default TodoLists ;