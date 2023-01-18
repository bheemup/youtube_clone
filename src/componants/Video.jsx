import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import "./Video.css"

function Video({thumbnail,description,channel_name,channel_img,video}) {

     let {video_details,setVideo_details}=useContext(SearchContext);
     let navigate=useNavigate();

    let cutter =(str,n)=>{
        return str.length < n ? str :str.substring(0,n)+"...";
    }
    
    const playVideo=()=>{
       setVideo_details(video);
       navigate("/play")
    }


  return (
    <div className='video_container'>

      <div className='thumbnail'
  
      >
      <img 
          onClick={()=>playVideo()}
      src={thumbnail} alt="thumbnail" />

     </div>
   
     <div className="video_info">
        <img src={channel_img} alt="channel_logo" />
        <p className='description'>
         {
            cutter(description,50)
         }
        </p>
        
     </div>
   <div className='channel_info'>
   <p className='channel_name'>
      {
        channel_name
      }
        </p>
       <img className='right_sign' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsnATXiqt_SWH8jrTGjb0SVpx1d6iLvPkIy5KFe050iwX2_dFopb4ixHqDR_KZKpC-B4&usqp=CAU" alt="right_sign" />

   </div>
    </div>
  )
}

export default Video