import React,{useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'


import FileBase from 'react-file-base64'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addpost, updatepost} from '../action/postaction'
const Forrm = ({postid, setpostid}) => {    
  const dispatch = useDispatch()

  let history = useHistory()

  const postt = useSelector(state => postid ? state.post.find(p => p._id === postid): null)   
  const [post, setpost] = useState({
    creator:'',
    
    
    
    
    title:'',
    
    message:'',        
    selectedfile:''
  })  
useEffect(() => {
if(postid){
  setpost(postt)

}
}, [postid, postt])
  let handlechange = (e)=>{
  
    setpost({ ...post, [e.target.name]: e.target.value })
  }
  
  let handlesubmit = (e)=>{
    e.preventDefault()
    let {creator, title, message} = post
    if(!creator || !title || !message){
  
      alert('please enter required post field')
    } 
    if(postid !== null){
       dispatch(updatepost(postid, post))

 
      //  setpostid(null)
       alert('post updated')
       history.push('/')  
      //  window.location.href = '/'
       window.location.reload()
      }

      else {
     // console.log(post)  
     dispatch(addpost(post))      
    }
    handleclear()
  
  
  } 
  let handleclear = ()=>{
    
    setpostid(null) 
    setpost({  
      creator:'',
      title:'',
      message:'',
      selectedfile:''   
    }) 
  }
  return (
  <div>
     <h2 className='text-center'>{!postid ? 'Add post':'Update post'}</h2>      
     <hr />      
    <Form onSubmit={handlesubmit}> 
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Label>creator</Form.Label> 
    
    <Form.Control type="text" value={post.creator} name='creator' placeholder="Enter name" onChange={handlechange}/>    
  
    </Form.Group>     
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>title</Form.Label>  
    <Form.Control type="text" value={post.title} name='title' placeholder="Enter Title" onChange={handlechange}/> 
    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    
    <Form.Label>Post</Form.Label>  
    <Form.Control type="text" name='message' value={post.message} placeholder="post" as="textarea" rows={5} onChange={handlechange}/>
  </Form.Group> 
  <FileBase type="file" multyple={false} onDone={({base64})=>setpost({ ...post, selectedfile: base64 })}></FileBase>
  {/* onDone={({base64})=>setpostdata({ ...postdata, selectedFile: base64 })} */}
<Form.Group className="mb-3" controlId="formBasicPassword">  
<div className="d-grid gap-2 mt-2">
  <Button variant="primary" type="submit"> { postid ? 'update':'Submit'} 
  </Button>
  
  </div>
<div className="d-grid gap-2 mt-2">
<Button variant="secondary" onClick={handleclear}>clear</Button>
</div>
</Form.Group>
</Form>        
        </div>
)}
export default Forrm