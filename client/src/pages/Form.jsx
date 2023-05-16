import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {

    const history = useHistory()
    const [data, setData] = useState({
      id:  Math.floor(Math.random()*1000 ), 
        name:"",
        email:"",
        contact:"",
        movie:"",
      }); 
      console.log(data);
// const [apiData , setApiData ]= useState('')
// console.log(apiData);

const handleChange = (e) =>{
    const value = e.target.value
    console.log(value);
    setData({
        ...data,
        [e.target.name]:value
    });

}

   const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log("submit");
    // fetch('https://movie-light-database-default-rtdb.firebaseio.com/users.json',
   const newData=  fetch('/movies',

    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        },
        // body: JSON.stringify(({
        //   // name: data.name
        // })),

    }
    ).then(()=>{

      console.log(newData);
        toast.success("Submitted Successfully")
      history.replace('/')
  

















































      
  

    })
   }
const movies = [
    {
        id: 1,
        name: "Ant-man"
    },
    {
        id: 2,
        name: "Doctor-strange"
    },
    {
        id: 3,
        name: "The-Nun"
    },

]

  return (
    <div className="container my-5 border shadow py-3 " style={{background: 'linear-gradient(45deg, rgba(37, 51, 57, 0.05), rgba(98, 201, 232, 0.15))'}}>
    <h2>DELIVERY BOOKING</h2>
    <form action="backend.php" />
    <h4>Fill The Data Below</h4>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input onChange={handleChange} className="form-control" type="text" name="name" id="floatingInput" placeholder="Enter Name" />
        <label htmlFor="floatingInput">Enter Name</label>
      </div>
      <br />
      <div className="form-floating mb-3">
        <input onChange={handleChange} className="form-control" type="email" name="email" id="floatingInput" placeholder="Enter Email" />
        <label htmlFor="floatingInput">Enter Email</label>
      </div>
      <br />
      <div className="form-floating mb-3">
        <input onChange={handleChange} className="form-control" type="text" name="contact" id="floatingInput" placeholder="cdc" />
        <label htmlFor="floatingInput">Contact Number</label>
      </div>
      <br />
      <div className="col-md">
        <div className="form-floating">
          <select className="form-select" name='movie' onChange={handleChange} >
          <option value="" style={{ color: "grey" }}>
                Select Movie
              </option>
          {movies?.map((item)=>{
      return(
        <option key={item.id} value={item.name} >{item.name}</option>
      )
     })}
          </select>
          <label htmlFor="floatingSelectGrid">Select Any Movie</label>
        </div>
      </div>
      <br />       
      <div>
        <button type="submit" className="btn btn-secondary">Submit</button>
        <button type="submit" className="btn btn-danger">Reset</button>
      </div>
      <br />    
    </form>
  </div>
  )
}

export default Form
