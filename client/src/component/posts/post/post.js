import React from 'react'
import {Card} from 'react-bootstrap'

 
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deletepost, likepost} from '../../../action/postaction'
const Post = ({post, setpostid, postid}) => {
  let history = useHistory()  
  const dispatch = useDispatch()

  let handleedit = ()=>{
  
    
      setpostid(post._id)
      history.push('/addpost') 
   
   
    
   
    }

    let handledelete = ()=>{    
      dispatch(deletepost(post._id)) 
      
      window.location.reload()
    }  
    let handlelike = ()=>{

      dispatch(likepost(post._id))
      window.location.reload()

    }
    return (   
    
    <div>
    <Card style={{ width: '18rem', marginBottom:'2rem' }}>
  
  
  <Card.Img variant="top" src={post.selectedfile} />
  
  <Card.Body>
  
    <Card.Title>{post.title}</Card.Title>   
    <hr />
    <Card.Text>
      {post.message}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
     
     <p style={{marginLeft:'12rem'}}>- {post.creator}</p>
    
    <i className="far fa-edit" onClick={handleedit}></i> &nbsp;
    <i className="fas fa-trash" onClick={handledelete}></i>
    <i style={{marginLeft:'10rem'}} className="far fa-thumbs-up" onClick={handlelike}></i> {post.likecount}
  </Card.Body>
</Card>        
     
        </div>
   
   )}

   export default Post