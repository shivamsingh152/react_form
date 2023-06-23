import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetails';
import validation from './Validation';

const Update = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();
    
    const {users} = useSelector((state)=> state.app);

    const [errors, setErrors] = useState({});
    
    useEffect(() => {
      if(id){
        const singleUser = users.filter((element)=> element.id === id);
        setUpdateData(singleUser[0]);
      }
    },  // eslint-disable-next-line
     [])

   const newData = (e) =>{
     setUpdateData({...updateData, [e.target.name] : e.target.value})
     }

     const handleUpdate = (e) =>{
      e.preventDefault();
      setErrors(validation(users));
      dispatch(updateUser(updateData));
      navigate('/read')
     }

    console.log(updateData);


  return (
    <div className='container'>
    <h4>Edit Your Details...</h4>
<form className='w-50 mx-auto' onSubmit={handleUpdate}>
<div className="mb-3">
<label>Name: </label>  
<input type="name" className='form-control' id="name" name="name" placeholder='abc' 
onChange={newData} 
value={updateData && updateData.name} required/>
{errors.name && <p style={{color:'red'}}>{errors.name}</p>} <br/>  
</div>
<div className="mb-3">
<label>Phone No.: </label>  
<input type="tel" className='form-control' id="phone" name="phone" placeholder='0123456789'
onChange={newData} 
value={updateData && updateData.phone} required />
{errors.phone && <p style={{color:'red'}}>{errors.phone}</p>} <br/>  
</div>
<div className="mb-3">
<label>Email: </label>  
<input type="email" className='form-control' id="email" name="email" placeholder='@email'
onChange={newData} 
value={updateData && updateData.email} required/>
{errors.email && <p style={{color:'red'}}>{errors.email}</p>} <br/>  
</div>

<button type="submit" className="btn btn-danger">Submit</button>
</form>
  </div>
  )
}

export default Update
