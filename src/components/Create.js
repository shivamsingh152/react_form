import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetails';
import { useNavigate } from 'react-router-dom';
import validation from './Validation';

const Create = () => {

  const [users, setUsers] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();


    const getData = (e) =>{
      setUsers({...users, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setErrors(validation(users));
      console.log(users);
      dispatch(createUser(users));
      navigate('/read');
}

  return (
    <div className='container'>
      <h4>Enter Your Details...</h4>
  <form className='w-50 mx-auto' onSubmit={handleSubmit}>
  <div className="mb-3">
  <label>Name: </label>  
  <input type="name" className='form-control' id="name" name="name" placeholder='abc' 
  onChange={getData} required/> 
  {errors.name && <p style={{color:'red'}}>{errors.name}</p>} <br/>  
  </div>
  <div className="mb-3">
  <label>Phone No.: </label>  
  <input type="tel" className='form-control' id="phone" name="phone" placeholder='0123456789'
  onChange={getData} required />
  {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>} <br/>  
  </div>
  <div className="mb-3">
  <label>Email: </label>  
  <input type="email" className='form-control' id="email" name="email" placeholder='@email'
  onChange={getData} required/>
  {errors.email && <p style={{color:'red'}}>{errors.email}</p>} <br/>  
  </div>

  <button type="submit" className="btn btn-danger">Submit</button>
</form>
    </div>
  )
}

export default Create
