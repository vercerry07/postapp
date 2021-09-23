import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'


import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {signup} from '../../action/authaction'
require('dotenv').config()
const Register = () => {

  const dispatch = useDispatch()      

  let history = useHistory()  
  const [register, setregister] = useState({
       firstname:'',
        
       
       lastname:'',

        email:'',

        password:'',
    }) 

    let handleregister = (e)=>{               
      setregister({ ...register, [e.target.name]: e.target.value })
        }
    let handlesubmit = (e)=>{ 
      e.preventDefault()
      let {firstname, lastname, email, password} = register
      
      // console.log(register)
         
        if(!firstname || !lastname || !email || !password){
           alert('please enter the required fields') 
        }
        else if(password.length < 6){
         alert('password should be at least 6 characters long')
        }

        else{
         


        dispatch(signup(register, history)) 

        }
       
        setregister({
          
          firstname:'',
          lastname:'',
          email:'',
          password:''   
        
        })  
      }
    
      
    let googlesuccess = async(res)=>{
      // console.log(res)
      let result = res?.profileObj
      
      let token = res?.tokenId
      try {
       dispatch({type:'AUTH', payload:{result, token}})    
       history.push('/') 
      
      } catch (err) {
         console.log(err) 
      }
    }
    let googlefailure = ()=>{
      
      console.log('google sign in was unsuccessful')
    }
    return (
  
  <div>
     <h2 className='text-center'>Register</h2>

     <hr />
      <Form onSubmit={handlesubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>first name</Form.Label>  
    <Form.Control type="text" value={register.firstname} onChange={handleregister} placeholder="first name" name='firstname' />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last name</Form.Label>  
    
    <Form.Control type="text" value={register.lastname} onChange={handleregister} placeholder="last name" name='lastname' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>  
    <Form.Control type="email" value={register.email} onChange={handleregister} placeholder="Enter email" name='email' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={register.password} onChange={handleregister} placeholder="Password" name='password' />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Confirm password</Form.Label>  
    <Form.Control type="password" onChange={handleregister} placeholder="enter password" name='password2' />
  </Form.Group> */}
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">   
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
   
  <div className="d-grid gap-2"> 
  <Button className='btn-block' variant="outline-primary" type="submit">
    
    Register
  </Button>
  
  </div>
  
  {console.log(process.env.REACT_APP_GOOGLE)}
  <GoogleLogin 
  clientId={process.env.REACT_APP_GOOGLE}  
  
  render={(renderprops)=>{
  
    return(
      <div className="d-grid gap-2 mt-2">
        <Button variant="outline-primary" type="submit" onClick={renderprops.onClick} disabled={renderprops.disabled}><i className="fab fa-google"></i> Google login</Button>    
       
       
        </div>
       )
      }}
  
      onSuccess={googlesuccess}
  onFailure={googlefailure}
  cookiePolicy='single_host_origin'
  ></GoogleLogin> 
</Form>         
        </div>
  
  )}

  export default Register