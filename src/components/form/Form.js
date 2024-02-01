import React,{useState,useEffect} from 'react'
import './form.css'
import img from '../../assets/screen.svg'
import Seates from './Seates'
import seatsData from "../../seats.json"

const Form = ({showForm,setShowForm,content}) => {
  const [seats,setSeats] = useState([]);
  useEffect(()=>{
      setSeats(seatsData)
  },[])
  const id = content.show.id;
  console.log(id)
  const [prize,setPrize] = useState(0);
  const [showNext,setShowNext] = useState(false);
  function handleEvent(e){
      e.preventDefault();
      const obj = JSON.parse(localStorage.getItem("ReadyToBooked")) || {}
      const clickedSeats = JSON.parse(localStorage.getItem("ReadyToBooked")) && id in JSON.parse(localStorage.getItem("ReadyToBooked")) ? 
                                    JSON.parse(localStorage.getItem("ReadyToBooked")) : 
                                    {...obj,[id]:[]} ;
      console.log("clicked 1 :",clickedSeats);
      seats.forEach((seat)=>{
        seat.clicked && clickedSeats?.[content.show.id]?.push(seat.id);
      })
      console.log(clickedSeats)
      localStorage.setItem("ReadyToBooked",JSON.stringify(clickedSeats))
      console.log(JSON.parse(localStorage.getItem("ReadyToBooked")));
      setShowNext(!showNext);
  }
  return (
    <form action="" className={prize?"bookForm clicked":"bookForm"} onSubmit={handleEvent}>
        <div className="movieDetails">
            <h5>paytm</h5>
            <span>{content.show?.name}  <span>-{content.show?.language}</span> </span>
            <ion-icon name="close-outline" 
                    onClick={()=>setShowForm(!showForm)}
            ></ion-icon>
        </div>
        <div className="times">
           <div className="time">
              <div>Today</div>
              <div className="t">02:30 PM</div>
              <div className="t">06:30 PM</div>
              <div className="t">09:30 PM</div>
           </div>
           <div className="instru">
                <div className="indi">
                  <span className="available"></span>AVAILABLE
                </div>
                <div className="indi">
                  <span className="selected"></span>SELECTED
                </div>
                <div className="indi">
                  <span className="booked"></span>BOOKED
                </div>
           </div>
        </div>
        <Seates 
                   seats={seats.map(seat=> {
                    if(JSON.parse(localStorage.getItem("ReadyToBooked"))?.[id]?.includes(seat.id)){
                      return {...seat,booked:true}
                    }
                    return seat
                  })}
                   setSeats={setSeats}
                   prize={prize}
                   setPrize={setPrize}
                   showNext={showNext}
                   />
        <div className="last">
            <img src={img} alt="" className="screen"/>
            <div className="prize">
                  <div>
                    <h3>{prize}</h3>
                    <span>{prize/100==1?"ticket":"tickets"} {prize/100}*{100}</span>
                  </div>
                  <button className="booknow">Book {prize/100} {prize/100==1?"ticket":"tickets"}</button>
              </div>
        </div>
      
       { showNext && <div className="nextstep">
           <h3>Thanking you for booking </h3>
           <div> your seats are : 
           {
            (JSON.parse(localStorage.getItem("ReadyToBooked"))[id]).map((id,i)=>{
               return <span key={i}>{`${id}    `}</span>
            })
           }
           </div>
          
           <br />
           <span>press button to exit</span>
           <div className="button" onClick={()=>{
              setShowForm(!showForm)
           }}>close</div>
        </div>}
    </form>
  )
}

export default Form
