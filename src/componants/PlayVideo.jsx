import React, { useContext, useEffect, useState } from 'react'
import "./PlayVideo.css"
import Nav from './Nav'
import axios from 'axios'
import { SearchContext } from '../context/SearchContext';

function PlayVideo() {

 
  let {video_details,setVideo_details}=useContext(SearchContext);
  let video_id =video_details?.id.videoId;
 

  
  // let api_key="AIzaSyCr2bC4sU8hYA8O3ex35NQxHn__gVarwuI"
  let getApi =()=>{
    return Math.floor(Math.random()*api_arr.length)
  }
    let api_arr=["AIzaSyCr2bC4sU8hYA8O3ex35NQxHn__gVarwuI","AIzaSyBWiY7BoONlgUGKVZ8cl-TPBVCkGM8SOwU","AIzaSyAFdfta-ythzXEU5m8l3Dyc-eZfHqF1RV0","AIzaSyCRP475O01y_g3JPdr4cjWY5UKQ66_irRo"]
 

  let [data,setData]=useState([]);
  useEffect(()=>{
     async function fetchData(){
       let res  = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_arr[getApi()]}&part=snippet&type=video&maxResults=17&q=full stack web developer`)
       setData(res.data.items)
      .catch((err)=> console.log(err+ "hiiiii this is err"))
     }
     fetchData()
  },[])
  const cutter =(str,n)=>{
    return str.length <= n? str:str.substring(0,n)+"..."
  }
   

  return (
    <div>
      <Nav/>
      <div className='playvideo_container'>
 <div className='play_video'>
            <iframe
          width="750px"
          height=" 410px"
          className='video'
          src={`https://www.youtube.com/embed/${video_id}?autoplay=1`} allowFullScreen >
            </iframe>
            <div className='video_details'>
                 <header>{video_details.snippet.title}</header>
                 <div className='like_row'>
                 <img className='channel_imgV' src={video_details.snippet.thumbnails.default.url} alt="channel_name" />
                 <p className='channel_nameV' >{video_details.snippet.channelTitle}</p>
                 <button className='subscribe_btn'>Subscribe</button>
                  <img  className='like_btn' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEu-KDkBx5PJ9sNENPeYykQ3uZnlGdjDUVw&usqp=CAU" alt="like" />
                  <img className='dislike_btn' src="data:image/png;base64,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" alt="dislike" />
                  <p className='share'>share</p>
                  <button className='dots'>...</button>
                 </div>
            </div>
           
          </div>
          <div className='related_videos'>
               {
                data.map((item)=>{
                  return <div
                      onClick={()=>setVideo_details(item)}
                  key={item.id.videoId} className='video_div'>
                   <div><img src={item.snippet.thumbnails.high.url} alt="thumbnail" /></div>
                   <div className='second_part'>
                   
                    <p>{item.snippet.channelTitle}</p>
                    <p>{
                       cutter(item.snippet.title,40)
                         }</p>
                 
                 
                   </div>

                  </div>
                })
               }
          </div>
      </div>
         
    
    </div>
  )
}

export default PlayVideo
