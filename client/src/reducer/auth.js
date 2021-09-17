export let authreducer = (state = {authdata:null},action)=>{
  switch (action.type) {
    
    
    case 'AUTH':   
      // console.log(action?.payload)
    localStorage.setItem('profile', JSON.stringify({...action?.payload}))       
      return {...state, authdata:action?.payload}
    case 'LOGOUT':  
      localStorage.clear()
      
      return {...state, authdata:null}

      default:
      return state 
      }      




}