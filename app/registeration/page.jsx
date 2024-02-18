'use client'
import React, {useState} from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import axios from 'axios';
import Link from 'next/link';

const RegisterationForm = () => {
  const defaults = {
    serialno: "",
    name: "",
    catagory: "",
    brand: "",
    description:"",
  }

  const [data, setData] = useState(defaults)

const saveData =()=>{
 axios.post('http://192.168.0.100:8000/api/products/store',data).then(
  response=>{

    if (response){
      alert(response.data)
      setData(defaults)
    }
    
  }).catch(
    (reson)=>{
    alert(Object.values(reson.response.data).map((item)=>(
      
      item[0]
      
      )))
    }
  )
}
  return (
    <div>
          <div className=' border w-screen m-auto p-3 justify-center items-center text-center h-screen bg-gradient-to-b from-blue-200   to-slate-200'>
              
              <form action="" method="post">
                <div className=' justify-start border border-blue-300 p-4 w-4/12 rounded-md items-start m-auto mt-30 bg-gradient-to-b from-blue-300   to-slate-100 shadow-md shadow-blue-800 '>
                  <div className='flex flex-row bg-blue-100 justify-center items-center rounded-md'>
                <MdOutlineProductionQuantityLimits size={25} color='#123456' />
                <h1 className='font-bold text-blue-900  p-2 '> Product Registeration </h1>
                  </div>
                    <div className=' flex flex-row mt-2'>
                      <div className=' w-4/12 '><label htmlFor="serial" className='  '>Serial Number</label></div>
                      <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                      value ={data.serialno}
                      onChange={(e)=>setData({...data,serialno:e.target.value})}/></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="product_name" className=' '>Product Name</label></div>
                      <div><input type="text" name="" id="product_name" className='border'
                      value ={data.name}
                      onChange={(e)=>setData({...data,name:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="category" className=' '>Category</label></div>
                      <div><input type="text" name="" id="category" className='border'
                      value ={data.catagory}
                      onChange={(e)=>setData({...data,catagory:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="brand" className=' '>Brand</label></div>
                      <div><input type="text" name="" id="brand" className='border'
                      value ={data.brand}
                      onChange={(e)=>setData({...data, brand:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="brand" className=' '>Description</label></div>
                      <div className=' w-4/12'>
                        <textarea
                         value ={data.description}
                         onChange={(e)=>setData({...data, description:e.target.value})}
                        >
                        </textarea >
                       
                      </div>
                    </div>
                    
                    
                    <div className='flex flex-row justify-center items-center pt-2'>
                    <input type="reset" value="reset" className="p-1  bg-blue-900   text-white  hover:bg-blue-500 cursor-pointer text-sm rounded-sm px-2"/>
                      <input type="button" value="Add Product" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer" 
                       onClick={()=>saveData()}/>
                       <Link href="/dashboard/viewProducts">
                       <input type="button" value="View Product" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer" 
                        />
                      </Link>
                      
                    </div>
                </div>
                </form>
          </div>
    </div>
  )
}

export default RegisterationForm