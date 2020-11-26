import React,{useState,useEffect} from 'react';
import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Todocomp from './Todocomp.js';
import db from './firebase';
import firebase from "firebase"




function App() {



const [todos,setTodos]=useState(["hello"]);
const[inputgiven,setInputgiven]=useState('');

useEffect(() => {
   
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc=>({id: doc.id,
     todo: doc.data().todo })
    ))
  })
 
 
}, [])

const handlesubmit=(e)=>{
  e.preventDefault();
  
  db.collection('todos').add({
    todo:inputgiven,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  setInputgiven("");
  

}
 return(
    <div className="App">
      <h1>MAKE A NOTE 📔</h1>
       
       <form>
       <FormControl>
         <InputLabel>
         💁  what to do???</InputLabel>
         <Input value={inputgiven} onChange={event=>setInputgiven(event.target.value)}/>
       </FormControl>
       <FormControl>
 
       <Button disabled={!inputgiven}  color="primary" type="submit" onClick={handlesubmit} >
      add task
           </Button>
    
       

       </FormControl>
       </form><div className="todos"> {todos.map((item ,index)=> <Todocomp item={item} />)}</div>
      
  
  
    </div>
  );

}



export default App;
