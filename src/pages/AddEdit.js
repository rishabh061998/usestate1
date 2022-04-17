import React,{useState,useEffect} from "react";

import{useHistory,useParams} from "react-router-dom";

import "./AddEdit.css";
import fireDb from "../firebase"
import { toast } from "react-toastify";

const initialState={
    name:"",
    email:"",
    contact:""
}

const AddEdit=()=>{

    const {state,setState}=useState(initialState);
    const [data,setData]=useState({})

    const history=useHistory()

    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please provide value in each field")
        }
        else {
            fireDb.child("contacts").push(state,(err)=>{
                if(err){
                    toast.error(err)
                }
                else{
                    toast.success("contact added")
                }
            })
        }
    }

    const{name,email,contact}=state
    return(
        
<div style={{marginTop:"100px"}}>

    <form style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center",}} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>

      <input type="text" id="name" name="name" placeHolder="Your name..." value={name} onChange={handleInputChange}/>

      <label htmlFor="email">Email</label>

<input type="email" id="email" name="email" placeHolder="Your Email..." value={email} onChange={handleInputChange}/>


<label htmlFor="contact">Contact</label>

<input type="number" id="contact" name="contact" placeHolder="Your contact number..." value={contact} onChange={handleInputChange}/>

<input type="submit" value="Save"/>
      
    </form>
</div>


        
    )
}

export default AddEdit;