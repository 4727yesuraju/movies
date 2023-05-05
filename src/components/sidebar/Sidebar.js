import React,{useState} from 'react'
import "./sidebar.css"

const Sidebar = ({data,setData,setContent}) => {
   const [searchName,setSearchName] = useState("");
    function settingContent(item){
         setContent(item);
    }
    function handleSubmit(e){
       e.preventDefault();
       console.log(e.target.movie.value);
    }
  return <div className="sidebar">
            <form action="" onSubmit={handleSubmit} className="form">
                 <input 
                      type="text" 
                      name="movie" 
                      placeholder="search for a movie"
                      autoComplete="off" 
                      onChange={(e)=>setSearchName(e.target.value.toLowerCase())}
                      />
            </form>
            {
              data && data.map(item=>{
                const name = item.show.name.toLowerCase();
                return name.includes(searchName) && item.show.image?.medium && <div key={item.show.id} className="con">
                  <div className="img" >
                      <img src={item.show.image?.medium} alt=""  />
                      <span className="moviename">{item.show.name}</span>
                      <span className="genres">{item.show.genres.join(" ")}</span>
                      <span className="language">{item.show.language}</span>
                  </div>
                  <button className="showmore" onClick={()=>settingContent(item)}>show more</button>
                </div>
              })
        }
  </div>
}

export default Sidebar
