import React, {useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";


const Login:React.FC = ()=>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');


    const login=()=>{
        console.log(email)
        console.log(password)
    }

    return(
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   onChange={(e)=>{setEmail(e.target.value)}}
                                   className='form-control' placeholder='Email here'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   onChange={(e)=>{setPassword(e.target.value)}}
                                   className='form-control' placeholder='Password here'/>
                        </div>
                    </div>
                    <div className="col-12">
                        <br/>
                        <button className='btn btn-primary col-12' onClick={login}>Login</button>
                        <br/>
                        <br/>
                        <Link to="/signup" className='btn btn-outline-dark col-12'>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;