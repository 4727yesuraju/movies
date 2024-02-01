import React,{useState} from 'react'
import "./content.css"
const Content = ({content,setContent,showForm,setShowForm}) => {
    
  return content.show && <div className="content" >
     
     <div className="conImg">
          {
            content.show?.image?.medium && <img src={content.show.image.original} alt="" className="conImg"/>
          }
          <button className="book" onClick={()=>{
              setShowForm(!showForm);
          }}>book now</button>
     </div>
     <div className="condetails">
          <div className="name">
              <div>
                <h1>{content.show.name}</h1>
                <div className="d">
                  <span>2d</span>
                  <span><ion-icon name="star-half-outline"></ion-icon>{content.show.rating.average || 5.5}</span>
                  <span>{content.show.runtime || 120} min</span>
                </div>
              </div>
              <h3>score : {content.score}</h3>
          </div>
          <div className="details">
               <div>
                  <h3>country : </h3>
                  <span>{content.show.network?.country?.name || "US"}</span>
               </div>
               <div>
                <h3>code : </h3>
                <span>{content.show.network?.country?.code || "US"}</span>
               </div>
               <div>
                <h3>generics : </h3>
                <span>{content.show.genres.join("  ")}</span>
               </div>
               <div>
                <h3>premiered : </h3>
                <span>{content.show.premiered}</span>
               </div>
               <h3>summery : </h3>
               <div style={{textAlign:"justify",fontSize:"14px" }} dangerouslySetInnerHTML={{__html: content.show?.summary}}>
               </div>
          </div>
         
     </div>
  </div>
}

export default Content
