import React from 'react'
import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from "./Nav";
import Left from "./Left";
import Filters from "./Filters";
import Video from "./Video";


function Home() {

  let getApi =()=>{
    return Math.floor(Math.random()*api_arr.length)
  }
    let api_arr=["AIzaSyCr2bC4sU8hYA8O3ex35NQxHn__gVarwuI","AIzaSyBWiY7BoONlgUGKVZ8cl-TPBVCkGM8SOwU","AIzaSyAFdfta-ythzXEU5m8l3Dyc-eZfHqF1RV0","AIzaSyCRP475O01y_g3JPdr4cjWY5UKQ66_irRo"]
  // let api_key="AIzaSyCr2bC4sU8hYA8O3ex35NQxHn__gVarwuI";
  // let api_key2="AIzaSyAFdfta-ythzXEU5m8l3Dyc-eZfHqF1RV0";
  // let api_key3="AIzaSyCRP475O01y_g3JPdr4cjWY5UKQ66_irRo";



   let [data,setData]=useState([]);
   useEffect(()=>{
      async function fetchData(){
        let res  = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_arr[getApi()]}&part=snippet&type=video&maxResults=17&q=developing tech`)
        setData(res.data.items)
       
      }
      fetchData()
   },[])

  return (
    <div className="App">
      <Nav/> 
      <div className="con">
       <Left/>
       <Filters/>
       <div className='right'> 
       {
        data.map((item)=>{
          return < Video key={item.id.videoId} 
          video={item}
          thumbnail={item.snippet.thumbnails.high.url}
          description={item.snippet.description} 
           channel_name={item.snippet.channelTitle}
           channel_img={item.snippet.thumbnails.default.url} />
        })
       }
      
       </div>
       </div>
    </div>
  )
}

export default Home