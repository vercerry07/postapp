import React from 'react'
import Post from './post/post'


import {Row,Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'
const Posts = ({postid, setpostid}) => {    
  const posts = useSelector(state => state.post)                                
     
  // console.log(posts)   

  return (
  
  <div>
    
    <h2 className="mb-5 text-center">post list</h2>
<hr />        
        <Row>        

 



 
      {posts.map((post)=>(
        <Col key={post._id} sm={12} md={6} lg={4} xl={3}>  
        <Post key={post._id} post={post} setpostid={setpostid} postid={postid}/> 
    </Col>
       ))}
        

{/* <Col sm={12} md={6} lg={4} xl={3}>  

<Post /> 

</Col> */}
{/* <Col sm={12} md={6} lg={4} xl={3}>  

<Post /> 

</Col> */}

  </Row>           

        </div>
)}
export default Posts