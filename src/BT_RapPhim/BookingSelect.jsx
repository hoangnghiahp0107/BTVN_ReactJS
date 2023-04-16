  import React, {useState} from 'react';
  import {useSelector, useDispatch} from 'react-redux';

  function BookingSelect() {
    const data  = useSelector((state)=> state.rapfilmReducer); // khi goi cai nay, no tra ve
    console.log(data);
    const dispatch = useDispatch();  
    const daHuy = (soGhe) => {
      dispatch({ type: "rapfilm/da_Huy", payload: {soGhe}});
    };
    const daDat=(soGhe)=>{
      dispatch({type:"rapfilm/da_Dat",payload:{soGhe}})
      setTongTien(0);
    }
    const [tongTien, setTongTien] = useState(0);

   
    return (
      <div>
          <h3 style={{color:"white",marginTop:"30px"}}>DANH SÁCH GHẾ ĐÃ CHỌN</h3>
          <br />
          <div style={{display:"flex", textAlign:"center"}}>
            <div className='gheDuocChon'></div>
            <span style={{marginLeft:"10px",fontSize:"16px",color:"white"}}>Ghế đã đặt</span>
          </div>
          <br/>
          <div style={{display:"flex", textAlign:"center"}}>
            <div className='gheDangChon'></div>
            <span style={{marginLeft:"10px",fontSize:"16px",color:"white"}}>Ghế đã chọn</span>
          </div>
          <br />
          <div style={{display:"flex", textAlign:"center"}}>
            <div className='gheChuaChon'></div>
            <span style={{marginLeft:"10px",fontSize:"16px",color:"white"}}>Ghế chưa đặt</span>
          </div>
          <table className='table' style={{marginTop:"16px"}} >
            <thead>
              <tr>
                <th style={{color:"white",border:"1px solid white"}}>Số ghế</th>
                <th style={{color:"white",border:"1px solid white"}}>Giá</th>
                <th style={{color:"white",border:"1px solid white"}}>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                row.danhSachGhe.map((ghe, indexGhe) => (
                  ghe.gheDangChon && !ghe.daDat && (
                    <tr key={`${index}-${indexGhe}`}>
                      <td style={{color:"white",border:"1px solid white"}}>{ghe.soGhe}</td>
                      <td style={{color:"white",border:"1px solid white"}}>{ghe.gia} đ</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => daHuy(ghe.soGhe)}>Hủy</button>
                        <button className="btn btn-primary" style={{marginLeft:"5px"}} onClick={() => daDat(ghe.soGhe)}>Đặt vé</button>
                      </td>
                    </tr>
                  )
                ))
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th style={{ color: "white", border: "1px solid white" }}>Tổng Tiền</th>
                <th style={{ color: "white", border: "1px solid white" }}>
                        {data.reduce((tong, row) => {
                          return tong + row.danhSachGhe.reduce((tongGhe, ghe) => {
                            return ghe.gheDangChon ? (tongGhe + ghe.gia) : tongGhe;
                          }, 0);
                        }, 0)}
                </th>
                <th style={{ color: "white", border: "1px solid white" }}>
                </th>
              </tr>
            </tfoot>

          </table>
          
      </div>
    )
  }

  export default BookingSelect

 