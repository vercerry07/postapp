import * as api from '../api/index5'
export let signin = (formdata, history)=>async(dispatch)=>{


    try {
    let { data} = await api.signin(formdata)
    // console.log(data) 
    dispatch({type:'AUTH', payload:data}) 
    history.push('/')
  } catch (err) {
     console.log(err) 
  
    }    

}

export let signup = (formdata, history)=>async(dispatch)=>{

    try {
    let { data} = await api.signup(formdata)
    // let { data} = api.signin(formdata) 
    dispatch({type:'AUTH', payload:data}) 
   
    history.push('/')
  } catch (err) {
    console.log(err) 
   }    
}