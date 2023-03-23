import React, {useState} from 'react'

function GlassesList() {
    const [glassesURL,setGlassesURL]=useState("./img/v1.jpg")
  return (
    <div className='container'>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 position-relative" >   
                <img className="card-img-top position-absolute justify-content-center" src={glassesURL} alt="" style={{left:"90px" ,top:"24%" ,width:"150px" ,opacity:"0.7"}} />
                <img className="card-img-top " src="./img/model.jpg" alt=""  style={{ maxWidth: "100%", height: 300 }} />
            </div>
            <div className="col mb-5 mx-5">   
                <img className="card-img-top" src="./img/model.jpg" alt=""  style={{ maxWidth: "100%", height: 300 }} />
            </div>
        </div>
        <div className="row">
           <div className="col-md-8 mx-auto">
           <ul className='list-group'>
                <li className='list-group-item d-flex justify-content-left align-items-center'>
                    <div className="mx-3" onClick={() => setGlassesURL('./img/v1.png')}>
                        <img src="./img/g1.jpg" width="100px" height="auto" alt=""/>     
                    </div>
                    <div className='mx-3 ' onClick={() => setGlassesURL('./img/v2.png')}>
                        <img src="./img/g2.jpg" width="100px" height="auto" alt="" />
                    </div>
                    <div className="mx-3 " onClick={() => setGlassesURL('./img/v3.png')}>
                        <img src="./img/g3.jpg" width="100px" height="auto" alt="" />
                    </div>
                    <div className="mx-3 " onClick={() => setGlassesURL('./img/v4.png')}>
                        <img src="./img/g4.jpg" width="100px" height="auto" alt="" />
                    </div>
                    <div className="mx-3 " onClick={() => setGlassesURL('./img/v5.png')}>
                        <img src="./img/g5.jpg" width="100px" height="auto" alt="" />
                    </div>
                    <div className="mx-3 " onClick={() => setGlassesURL('./img/v6.png')}>
                        <img src="./img/g6.jpg" width="100px" height="auto" alt="" />
                    </div>
                </li>     
                <li className='list-group-item d-flex justify-content-left align-items-center'>
                <div className="mx-3 " onClick={() => setGlassesURL('./img/v7.png')} >
                        <img src="./img/g7.jpg" width="100px" height="auto" alt="" />
                    </div>
                    <div className="mx-3 " onClick={() => setGlassesURL('./img/v8.png')}>
                        <img src="./img/g8.jpg" width="100px" height="auto" alt="" />
                    </div>
                    <div className="mx-3 " onClick={() => setGlassesURL('./img/v9.png')}>
                        <img src="./img/g9.jpg" width="100px" height="auto" alt="" />
                    </div>
                </li>
            </ul>
           </div>      
        </div>
    </div>
  )
}

export default GlassesList