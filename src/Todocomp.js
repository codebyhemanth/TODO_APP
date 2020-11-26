import {  Button, List, ListItem, ListItemAvatar, ListItemText,Modal } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import React ,{useState}from "react";
import "./Todocomp.css";
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'realtive',
      display:"center",
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[10],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todocomp(props){
    const classes=useStyles();
    const [open, setOpen] = useState(false);
    const[input,setInput]=useState('');


  

    const updatetodo=()=>{
        db.collection('todos').doc(props.item.id).set({
                todo:input
        },{merge:true})
            setOpen(true);

    }

    return (
        <div>
            
        <Modal
  open={open}
  onClose={e=>setOpen(false)}>
      <div className={classes.paper}>
          <h1>edit your task   🤕 </h1>
          <input placeholder={props.item.todo} value={input} onChange={event=>setInput(event.target.value)}/>
      
      <Button onClick={updatetodo}>update</Button>
      <Button onClick={e=>setOpen(false)}>👍 OK</Button>
      </div>
      </Modal>
  
    


 <List className="todo_list">
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItemText  primary={props.item.todo} />
        </ListItem>

        <EditIcon className="editicon" onClick={e=>setOpen(true)}>edit</EditIcon>
        <DeleteIcon className="deleteicon" onClick={event=>db.collection('todos').doc(props.item.id).delete()} ></DeleteIcon>

      
 </List></div>
        
    );
}
export default Todocomp;