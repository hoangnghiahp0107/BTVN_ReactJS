import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


function BookingMovie() {
  const data = useSelector((state) => state.rapfilmReducer);
  const dispatch = useDispatch();  
  const daChon = (soGhe) => {
    dispatch({ type: "rapfilm/da_Chon", payload: {soGhe}});
  };
  
    
        
    return(
      <div className='bookingMovie'>
        <h2 style={{textAlign:"center",justifyContent:"center",color:"#fcc202"}}>ĐẶT VÉ XEM PHIM CYBERLEARVN.VN</h2>
        <h5 style={{textAlign:"center",justifyContent:"center",color:"white"}}>Màn hình</h5>
        <div className='screen'></div>
        {data.map((row, index) => (
          <div className="row" key={index}>
            <div className="col">
              <div className="rowNumber">{row.hang}</div>
            </div>
            {row.danhSachGhe.map((ghe, indexGhe) => (
              <div className="col" key={`${index}-${indexGhe}`}>
                {index === 0 ? (
                  <div className="firstChar">{ghe.soGhe}</div>
                ) : (
                  <div
                  className={ghe.daDat ? "gheDuocChon" : (ghe.gheDangChon ? "gheDangChon" : "gheChuaChon")}
                  onClick={() => daChon(ghe.soGhe)}
                  >
                    {ghe.soGhe}
                  </div>
                )}
              </div>
            ))}
          </div>
          ))}


      
       
      </div>
    )
}

export default BookingMovie;