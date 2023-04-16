import React from 'react'
import BookingMovie from './BookingMovie'
import BookingSelect from './BookingSelect'
import "./styles.scss"


function RapPhim() {
  return (
    <div className='bookingMovie' style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url('./img/bgmovie.jpg')", backgroundRepeat:"no-repeat",backgroundSize:"cover", width:"100%",height:"100%",position:"fixed"}}>
        <div className="row">
            <div className="col-md-8">
              <BookingMovie/>
            </div>
            <div className="col-md-4">
              <BookingSelect/>
            </div>
        </div>
    </div>
  )
}

export default RapPhim