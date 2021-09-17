export let postreducer = (post = [], action)=>{
  switch (action.type) {
      
    
    case 'GET_POST':
          return action.payload
    case 'ADD_POST':
          return [...post, action.payload]            
    case 'UPDATE_POST':
       return post.map((post5)=>post5.id === action.payload._id ? action.payload : post5)       
    
    case 'DELETE_POST':
      
        return post.filter((post5)=>post5.id === action.payload._id ? action.payload : post5)     
    case'LIKE_POST': 
        return post.map((post5)=> post5.id === action.payload._id ? action.payload : post5) 
        
      
      
      
        default:    
      
         return post                
            } 
        
      }