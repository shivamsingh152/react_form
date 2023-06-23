import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../features/userDetails';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const Read = () => {

    const dispatch = useDispatch();

    const [id, setId] = useState();

    const {users, loading} = useSelector((state) =>state.app) 

    useEffect(() => {
      dispatch(readUser());
    }, // eslint-disable-next-line
    [])

    if(loading){
        return <h1>Loading...</h1>
    }
    

  return (
    <div className='contaier my-3'>
        
        <h4 className='my-4'>All Users Data...</h4>

        {users && users.map((element)=>( 
        <div key={element.id} className="card my-2" style={{width:'50rem'}}>
        <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{element.phone}</h6>
        <p className="card-text">{element.email}</p>
        <Link to={`/edit/${element.id}`} className="card-link">
            <button className='btn btn-outline-dark'>Edit</button></Link>
        <Link onClick={()=> dispatch(deleteUser(element.id))} className="card-link">
            <button className='btn btn-outline-dark'>Delete</button></Link>
        </div>
        </div> 
        ))}
     
    
    </div>
  )
}

export default Read
