import './Manageusers.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { _apiURLUser } from '../apiURL';

function Manageusers() {

  const [userDetails,setUserDetails] = useState([]);

  useEffect(()=>{
     axios.get(_apiURLUser+"fetch?role=user").then((response)=>{
        setUserDetails(response.data);
     }).catch((err)=>{
      console.log(err)
     })
  },[]);

  return (
    <div> 
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
        <div class="col-lg-12">
          <center>
          <br/>
          <h1>View & Manage User Details</h1>
          <br/>
          <table class= "table table-bordered">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>EntryDate</th>
            <th>Duration</th>
            <th>Comment</th>
            
          </tr>
          {
            userDetails.map((row)=>(
              <tr>
              <td>{row._id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.mobile}</td>
              <td>{row.info}</td>
              {/* <td>{row.duration}</td>
              <td>{row.comment}</td> */}
              </tr>
            ))
          }
          </table>
          </center>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Manageusers