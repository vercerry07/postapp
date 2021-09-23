import React from 'react'
import {Card} from 'react-bootstrap'

 
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deletepost, likepost} from '../../../action/postaction'
const Post = ({post, setpostid, postid}) => {
  let history = useHistory()  
  const dispatch = useDispatch()

  let user = JSON.parse(localStorage.getItem('profile'))  
  
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

    // const Likes = () => {
    //   if (post.likes.length > 0) {
    //     return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
    //       ? (
    //         <> &nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
    //       ) : (
    //         <>&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
    //       );
    //   }
  
    //   return <>&nbsp;Like</>;
    // };  
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
     
     <p style={{marginLeft:'12rem'}}>- {post.name}</p>
    {(user?.result?.googleId === post?.creator || user?.result?._id === post.creator) && (
   <div>
   <i className="fas fa-trash" onClick={handledelete}></i>&nbsp;     
   </div>
    
    ) 
    }

    {(user?.result?.googleId === post?.creator || user?.result?._id === post.creator) && (
   <i className="far fa-edit" onClick={handleedit}></i>
)
    }
    {/* <i className="far fa-edit" onClick={handleedit}></i> &nbsp;
    <i className="fas fa-trash" onClick={handledelete}></i> */}
    {/* <i style={{marginLeft:'10rem'}} className="far fa-thumbs-up" onClick={handlelike}></i>  */}
    
    {/* <Likes />  */}
  </Card.Body>
</Card>        
     
        </div>
   
   )}

   export default Post