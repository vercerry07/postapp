import axios from 'axios'



let api = axios.create({baseURL: 'http://localhost:3200'})
// api.interceptors.request.use((req) => {
    
//       req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    
  
//     return req;
//   });
api.interceptors.request.use((req)=>{
      if(localStorage.getItem('profile')) {
          req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
      }
    return req       

})
// let url = 'http://localhost:3200/post'
export let getpost = api.get('/post')
export let addpost = (postdata)=> api.post('/post',postdata)
export let updatepost = (postid, postdata)=> api.patch(`/post/${postid}`,postdata)  




export let deletepost = (postid)=> api.delete(`/post/${postid}`)

export let likepost = (id)=> api.patch(`/post/${id}/likepost`)
export let signin = (formdata)=> api.post('/user/signin', formdata)
export let signup = (formdata)=> api.post('/user/signup', formdata)