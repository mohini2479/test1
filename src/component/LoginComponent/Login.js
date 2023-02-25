import './Login.css';
import {useState} from 'react';
import axios from 'axios';
import { _apiURLUser } from '../apiURL';
//import { useNavigate } from 'react-router-dom';


function Login() {

    //const navigate = useNavigate();
    const [output , setOutput] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        let userDetails={"email":email,"password":password};
    
        axios.post(_apiURLUser+"login",userDetails).then((response)=>{
            //console.log(response.data);
             localStorage.setItem("token", response.data.token);
             const obj=response.data.userDetails;
             localStorage.setItem('name',obj.name);
             localStorage.setItem('email',obj.email);
             localStorage.setItem('password',obj.password);
             localStorage.setItem('mobile',obj.mobile);
             localStorage.setItem('address',obj.address);
             localStorage.setItem('city',obj.city);
             localStorage.setItem('gender',obj.gender);
             localStorage.setItem('role',obj.role);
             localStorage.setItem('status',obj.status);
             localStorage.setItem('info',obj.info);
            
             setOutput("successs");
             setEmail('');
             setPassword('');
             //obj.role=="admin"?navigate("/admin"):navigate("/user");

        }).catch((err)=>{
            localStorage.setItem("token", "error")
            setOutput("Invalide user or varify your account");
            setEmail('');
            setPassword('');
              })
    
      }
    

  return (
    <div>
        
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-7">
                <h1 class="display-5 text-uppercase mb-4">Welcome To The <span class="text-primary">RoomRent.Com</span></h1>
                 <h2>Login page</h2>
                 
                 <font style={{"color": "blue"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                    
                    <br/><br/>
                   <button type="submit" class="btn btn-success">Submit</button>
                   
                </form> 
                
            </div>
            <div class="col-lg-5 pb-5" style={{"minHeight": "400px"}}>
                <div class="position-relative bg-dark-radial h-100 ms-5">
                    <img class="position-absolute w-100 h-100 mt-5 ms-n5" src="assets/img/about.jpg" style={{"objectFit": "cover"}}/>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>
  );
}

export default Login;
