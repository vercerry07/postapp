import React, {useEffect, useState} from 'react'
import Navbarr from './component/navbar'


import Forrm from './component/form'
import Posts from './component/posts/posts'
import {BrowserRouter, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getpost} from './action/postaction'
import Login from './component/auth/login'

import Register from './component/auth/register'

function App() {
  const [postid, setpostid] = useState(null)
  let dispatch = useDispatch()    
  
  
  
  
  useEffect(() => {

    dispatch(getpost())     
  }, [dispatch])
  
  return (
<div className="App">
     <BrowserRouter>
     
      <Navbarr postid={postid} setpostid={setpostid}/>

<div className="container">

<Route path='/' render={(props)=> <Posts {...props} postid={postid} setpostid={setpostid}/>} exact></Route>
<Route path='/addpost' render={(props)=> <Forrm {...props} postid={postid} setpostid={setpostid}/>}  ></Route>
<Route path='/login' component={Login}></Route> 
<Route path='/register' component={Register}></Route>

{/* <Posts /> 


<Forrm /> */}
</div>

</BrowserRouter>    
    </div>
);
}

export default App;