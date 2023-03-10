import './Register.css';
import {useState} from 'react';
import axios from 'axios';
import { _apiURLUser } from '../apiURL';

function Register() {
 
    const [output , setOutput] = useState();
    const [name , setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        let userDetails={"name":name,"email":email,"password":password,"mobile":mobile};
    
        axios.post(_apiURLUser+"save",userDetails).then((response)=>{
            console.log(response);
            setOutput(response.data.result);
            setName('');
            setEmail('');
            setPassword('');
            setMobile('');
          }).catch((err)=>{
            console.log(err);
        });
    
      }
    
  return (
    <div>
        
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
                <h1 class="display-5 text-uppercase mb-4">Register <span class="text-primary">Page</span></h1>
                <font style={{"color": "blue"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                    
                    <div class="form-group">
                        <lable for="mobile">Mobile:</lable>
                        <input type="mobile" class="form-control" value={mobile} onChange={e=>setMobile(e.target.value)} />
                    </div>
                    
                    <br/><br/>
                   <button type="submit" class="btn btn-success">Submit</button>

                </form> 
             
            </div>
        </div>
    </div>
    {/* About End */}
    </div>
  );
}

export default Register;
