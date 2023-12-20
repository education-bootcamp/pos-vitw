import React, {useState} from "react";
import axios from 'axios';


const Login:React.FC = ()=>{
    return(
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className='form-control' placeholder='Email here'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className='form-control' placeholder='Password here'/>
                        </div>
                    </div>
                    <div className="col-12">
                        <br/>
                        <button className='btn btn-primary col-12'>Login</button>
                        <br/>
                        <br/>
                        <a href="" className='btn btn-outline-dark col-12'>Sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;