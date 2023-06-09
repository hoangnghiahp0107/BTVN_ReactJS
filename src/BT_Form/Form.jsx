import React, {useState,useEffect} from 'react'

function Form({user,onSubmit,onReset}) {
    // state quản lý giá trị của các input trong form
    const [values,setValues]=useState({
      name:"",
      type:"",
      description: "",
      image:"",
      price:"",
    })

    // Hàm setup của useEffect sẽ được chạy ở sau lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của prop user bị thay đổi
    useEffect(()=>{
      // Dùng giá trị mới của prop user để cập nhật cho state values
      setValues(user);
    }, [user]);

    const handleChange = (evt) => {
      const {value,name}=evt.target
      setValues({
        ...values,
        [name] :value,
      });
    };

    const handleSubmit= (evt) =>{
      // Chặn hành vi submit mặc định của form
      evt.preventDefault();
      // Tạo object user từ giá trị của các input 
      // const user = {...values, id: Math.floor(Math.random() * 100)};
      // Gọi prop onSubmit và truyền vào object values
      onSubmit(values,values.id ? "update": "create");
      // Gọi hàm handleResetForm để set giá trị trên các input về rỗng
      handleResetForm();
    };

    const handleResetForm = () =>{
      setValues({
        name: "",
        type: "",
        description: "",
        image: "",
        price: "",
      });
      onReset();
    };

    return ( 
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={values.name}
              onChange={handleChange}
            />
          </div>
    
          <div className="mb-3">
            <label className="form-label">Type</label>
            <input
              type="text"
              name="type"
              className="form-control"
              value={values.type}
              onChange={handleChange}
            />
          </div>
    
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </div>
    
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={values.image}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
          </div>
    
          <button type="submit" className="btn btn-success me-2">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleResetForm}
          >
            Reset
          </button>
        </form>
      );
}

export default Form