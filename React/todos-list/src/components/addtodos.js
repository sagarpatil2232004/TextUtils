import React from 'react'
import { useState } from 'react';



export default function Addtodos(props) {

    const [Title,setTitle]=useState("");
    const [Desc,setDesc]=useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!Title || !Desc){
            alert("Title or Desc can not be empty");
        }
        else{
            props.addtodo(Title,Desc);
        }
        setTitle('');
        setDesc('');
        
    }

    return (
        <>
        <div className='container' onSubmit={submit}>
            <form>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input type="text"  value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input type="text"value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control" />
                </div>
                <button type="submit"  className="btn btn-primary btn-sm">Submit</button>
            </form>
        </div>
        </>
    )
}
