import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import "./Nav.css";

function Nav() {

   let [str,setStr]=useState("");
   let navigate = useNavigate();
 
   let {search_str,setSearch_str} =useContext(SearchContext);
  
   let transfer=()=>{
    setSearch_str(str);
    navigate("/search")
  }
    
  return (
    <div className='container'>
        <div className='first_section'>
          <div className='list_icon'>
           <span></span>
           <span></span>
           <span></span>
          </div>
             <img onClick={()=>navigate("/")} src="data:image/png;base64,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" alt="youtube_logo" />
        </div>

       <div className='second_section'>
       
            <input
              value={str}
              onChange={(e)=>setStr(e.target.value)}
            type="text" />
             <button
               onClick={()=> str && transfer()}
             className='search_button'>
              <img  className='search_img' src="data:image/png;base64,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" alt="search_icon" />
             </button>
            <img className='speak' src="data:image/png;base64,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" alt="speech_logo" />
    
       </div>
         
        <div className='third_section'>
          <img src="data:image/jpeg;base64,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" alt="video_create_logo" />
          <img src="data:image/png;base64,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" alt="notification_icon" />
            <div className='user_icon'>
              <img src="data:image/jpeg;base64,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" alt="elon_musk" />
            </div>
        </div>
    </div>
  )
}

export default Nav