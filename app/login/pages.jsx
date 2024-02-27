'use client'
import React, { useState } from 'react'
import { FaAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const logins = {
    email : "",
    password:"",
}



const Login = () => {

const router = useRouter()     
const [data, setData] = useState(logins)

function LoginAuth(){
    if (data.email =="") {alert("Please enter email address")}
    else if (data.password =="") {alert("Please enter password")}
    else {
    axios.post('http://192.168.0.100:8000/api/user/login', data).then(
        response=>{if(response) {
            console.log(response.data.token)
            router.push('/dashboard')
        }
    }).catch((err)=> {
            alert(err)
    })

    
    
    
   
       
    }
}

  return (
    <div>
            <div className=" bg-gradient-to-r from-blue-900   to-blue-300  border flex-1  p-8  w-full h-screen justify-center items-center align-top  ">
                <div className="w-4/12 h-4/6 m-auto flex-1 p-4 rounded-xl  border r text-center justify-center bg-slate-200 shadow-slate-700 shadow-md min-w-96">
                     <h2 className=' text-blue-900 font-bold text-lg  items-center text-center'>IT Store Inventory Management System</h2>
                    <h4 className='  font-bold items-center text-center text-yellow-600'>NHMP Training College, Sheikhupura</h4> 
                    <h1><span className='text-yellow-600 font-extrabold font-serif text-2xl' >Log</span><span className='text-blue-900 font-extrabold font-serif text-2xl'>in</span> here</h1>
                    
                 <form action="" method="post" >
                    <div className=' justify-center items-center text-center p-2  '>
                        <div className=' flex-row  '>
                            {/* <label htmlFor="cnic">Enter CNIC</label> */}
                            <FaAddressCard className="absolute mt-3 ml-10" color="#077fb3"/>
                            <input className="p-1 border-b-2 border-slate-700 m-1 rounded-sm  pl-8 w-5/6" type="text" name="cnic" id="cnic" placeholder='Email' value={data.email} onChange={(e)=>setData({...data, email:(e).target.value })} /> 
                        </div>
                        <div className=' flex-row  '>
                        {/* <label htmlFor="cnic" className='text-left'>Password</label> */}
                            <FaLock className="absolute mt-3 ml-10" color="#fc0a05"/>
                            <input className="p-1 border-b-2 border-slate-700 m-1 rounded-sm  pl-8 w-5/6 text-red-500"type="password" name="" id="" placeholder='Password'
                            value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} /> 
                        </div>
                    </div>
                        <div className='flex-row text-xs'> 
                            <span className='text-blue-800'><Link href={"/registeration"}>Sign Up</Link></span>
                            <input className="p-1 w-2/4 bg-slate-700 ml-2 rounded-md text-white  hover:bg-slate-500 cursor-pointer" type="button" value="Login"  onClick={()=>LoginAuth()} /> 
                        </div>
                    
                 </form>
                 
                </div>    
                    
            </div>

    </div>
    
  )
}

export default Login