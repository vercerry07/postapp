import React,{useState, useEffect} from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'


import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
const Navbarr = ({postid, setpostid}) => {    
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')))
console.log(user)        

let location = useLocation()

useEffect(() => {
    let token = user?.token     
    setuser(JSON.parse(localStorage.getItem('profile')))  
  
  
  }, [location])  

  const dispatch = useDispatch()
  
  let history = useHistory()
  
  
  let handlepost = ()=>{
     setpostid(null)  
  }

  

  let handlepostlist =()=>{
   
     history.push('/')    
  }

  let handlesignin = ()=>{
     history.push('/login')    
  } 
  let handlelogout = ()=>{       
    
    dispatch({type:'LOGOUT'})
     
     history.push('/login')
    
     setuser(null)
  }
  return (

<div>       
<Navbar bg="light" expand="lg">
  <Container>
    
  {/* cursor: pointer; */}
    
    
    <Navbar.Brand onClick={handlepostlist}>Postapp</Navbar.Brand>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto"> 
        {/* <Nav.Link href="#home">Home</Nav.Link> */}  
        <LinkContainer to="/">
        <Nav.Link>post list</Nav.Link>        
        </LinkContainer>
        <LinkContainer to="/addpost">
    
        <Nav.Link onClick={handlepost}>Addpost</Nav.Link>        
        </LinkContainer>
        <LinkContainer to="/register">
        <Nav.Link >Register</Nav.Link>        
        </LinkContainer>


        {/* <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>        
        
        </LinkContainer> */}
        <p>{user?. result.name}</p> 
      {user ? 
      <Button onClick={handlelogout} variant="outline-danger">logout</Button> :
      <Button onClick={handlesignin} variant="outline-primary">Login</Button>            
    }
  
      </Nav>
    </Navbar.Collapse>
  </Container>


</Navbar>        
        </div>
 )}

 
export default Navbarr