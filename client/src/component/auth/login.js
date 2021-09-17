import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'


import {useDispatch} from 'react-redux'
import {signin} from '../../action/authaction'
const Login = () => {    
  const dispatch = useDispatch()
  const [login, setlogin] = useState({
     email:'',
     password:''     
  
    }) 

  let handlelogin = (e)=>{ 

    setlogin({ ...login, [e.target.name]: e.target.value })                
  }
  let handlesubmit = (e)=>{
       e.preventDefault()   
    // console.log(login)
    
    setlogin({
      email:'',
      password:''   
    })
    dispatch(signin(login)) 
  }



  return (
  
  <div>

     <h2 className='text-center'>Sign in</h2>  
    <hr />  
    <Form onSubmit={handlesubmit}>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={login.email} onChange={handlelogin} placeholder="Enter email" name='email' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={login.password} onChange={handlelogin} placeholder="Password" name='password' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">   
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

<div className="d-grid gap-2">


  <Button variant="outline-primary" type="submit">
    Submit

  </Button>
  </div>
</Form>        
        </div> 
    )}

export default Login