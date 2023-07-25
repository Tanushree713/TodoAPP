import './App.css';
import React ,{useState} from 'react';
import TodoLists from './TodoLists';



function Card(){
   const [Input , SetInput] = useState("") ;
   const [ list,setLists] = useState([]) ;
   
   const ListenEvent = (event)=>{
       SetInput(event.target.value) ;     
   }

   const ListOfItems=() =>{
        setLists((olditems) =>{
            return [...olditems , Input] ;
        })

        SetInput('') ;
         
   }

   const DelList= (id)=>{
       
     setLists((olditems) =>{
         return olditems.filter((arrEl , index) =>{
            return index !== id ;
         })
     })

   }
    return(
        <>
        <div className="maindiv">
            <div className="centerdiv">
                <br/>
                <h1>TODOAPP</h1>
                <br/>
                <input type="text" placeholder="Add Items"  value={Input}  onChange={ListenEvent}/>
                <button onClick={ListOfItems} > + </button>
                <br/>
                <br/>
                <ul>
                   { list.map((inputVal , index)=>{
                        return <TodoLists id={index} text={inputVal} onSelect={DelList}/>
                    })}
                </ul>
             </div>
        </div>
        </>
    )
}
export default Card ;

