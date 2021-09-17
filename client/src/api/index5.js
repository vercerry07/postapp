import axios from 'axios'
let url = 'http://localhost:3200/post'


export let getpost = axios.get(url)
export let addpost = (postdata)=> axios.post(url,postdata)
export let updatepost = (postid, postdata)=> axios.patch(`${url}/${postid}`,postdata)  
export let deletepost = (postid)=> axios.delete(`${url}/${postid}`)
export let likepost = (id)=> axios.patch(`${url}/${id}/likepost`)