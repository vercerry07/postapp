import * as api from '../api/index5'
export let getpost = ()=>async(dispatch)=>{


    try {
    let {data} = await api.getpost
    dispatch({type:'GET_POST', payload:data})                
    } catch (err) {
     console.log(err)   
    }
    
}

export let addpost = (postdata)=>async(dispatch)=>{
  try {
    let {data} = await api.addpost(postdata)  
    


       
    dispatch({type:'ADD_POST', payload:data})  

  } catch (err) {
      console.log(err)  
  } 
}
export let updatepost = (id, post)=>async(dispatch)=>{
        try {
         
          let {data} = api.updatepost(id, post)
    
          dispatch({type:'UPDATE_POST', payload:data})  
        
        } catch (err) {
            console.log(err)  
        }
}


export let deletepost = (id)=>async(dispatch)=>{
      try {
        let {data} = api.deletepost(id)
        dispatch({type:'DELETE_POST', payload:data}) 
 

      } catch (err) {
         console.log(err)
      }

    }

export let likepost = (id)=>async(dispatch)=>{
      try { 
        let {data} = api.likepost(id)
        
        dispatch({type:'LIKE_POST', payload:data}) 
      } catch (err) {
         console.log(err)
      
        }
    
    }    