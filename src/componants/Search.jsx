import React, { useContext } from 'react'
import Filters from './Filters'
import Left from './Left'
import Nav from './Nav';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Search.css"
import { SearchContext } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';



function Search() {
   
 let {setVideo_details} =useContext(SearchContext);
   let navigate =useNavigate(); 
   function transfer(item){
      setVideo_details(item);
      navigate("/play")
   }


  //  let api_key ="AIzaSyAFdfta-ythzXEU5m8l3Dyc-eZfHqF1RV0";
  //  let api_key="AIzaSyCr2bC4sU8hYA8O3ex35NQxHn__gVarwuI";
  let getApi =()=>{
    return Math.floor(Math.random()*api_arr.length)
  }
    let api_arr=["AIzaSyCr2bC4sU8hYA8O3ex35NQxHn__gVarwuI","AIzaSyBWiY7BoONlgUGKVZ8cl-TPBVCkGM8SOwU","AIzaSyAFdfta-ythzXEU5m8l3Dyc-eZfHqF1RV0","AIzaSyCRP475O01y_g3JPdr4cjWY5UKQ66_irRo"]
 
    let [data,setData]=useState([]);
    let {search_str} =useContext(SearchContext);
   
    useEffect(()=>{
       async function fetchData(){
         let res  = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_arr[getApi()]}&part=snippet&type=video&maxResults=27&q=${search_str}`)
         setData(res.data.items)
      
       }

       fetchData()
    },[search_str])
  return (
    <div>
      <Nav />
      <Left/>
      <Filters/>
            <div className='search_items'>
               {
                data.map((item)=>{
                    return <div key={item.id.videoId} className='Search_videos'>
                        <div 
                         onClick={()=>transfer(item)}
                        className='img_div'>
                            <img src={item.snippet.thumbnails.high.url} alt="thumbnail" />    
                        </div>
                        <div className='video_information'>
                         <p>{item.snippet.title}</p>
                         <p>{item.snippet.channelTitle}</p> 
                         <p>{item.snippet.description}</p>
                        
                           </div>

                        </div>
                })
               }

            </div>
      
    </div>
  )
}

export default Search
