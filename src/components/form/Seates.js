import React,{useEffect} from 'react'
import './seats.css'
const Seates = ({seats,setSeats,prize,setPrize}) => {
    function countClickedSeats(){
        let count = 0;
        seats.forEach((seat)=>{
            if(seat.clicked) count=count+1;
        })
        setPrize(count*100);
    }
    useEffect(countClickedSeats,[seats,prize]);
  return (
    <div className="seats">
           {
            seats.map((seat)=>{
                return <div key={seat.id} className={seat.booked ? "seat seatbooked":"seat"}
                            onClick={()=>{
                                setSeats(seats.map((i)=>{
                                    if(i.id===seat.id && !i.booked){
                                        return {...i,clicked:!i.clicked}
                                    }else{
                                        return i
                                    }
                                }))
                            }}
                            style={{background: seat.clicked ? "#00b8f5":""}}
                ></div>
            })
           }
    </div>
  )
}

export default Seates
