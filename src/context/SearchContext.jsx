import React ,{createContext, useState} from 'react';


export const SearchContext =createContext();

export const SearchContextProvider=({children})=>{

  let [video_details,setVideo_details] =useState({});
  
   let [search_str,setSearch_str]=useState("trending");
    
  return  (<SearchContext.Provider value={{search_str,setSearch_str,video_details,setVideo_details}}>{children}</SearchContext.Provider>)
  
}

