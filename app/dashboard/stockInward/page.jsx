'use client'
import React, {useState} from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import axios from 'axios';
import Link from 'next/link';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const StockInward = () => {
  const defaults = {
    serialno: "",
    name: "",
    catagory: "",
    brand: "",
    description:"",
  }
  
  const products = [
    {
        State: "Uttar Pradesh",
        Capital: "Lucknow",
    },
    {
        State: "Gujarat",
        Capital: "Gandhinagar",
    },
    {
        State: "Karnataka",
        Capital: "Bengaluru",
    },
    {
        State: "Punjab",
        Capital: "Chandigarh",
    },
    {
        State: "Maharashtra",
        Capital: "Mumbai",
    },
]
  const [data, setData] = useState(defaults)
  // const [products, setProducts] = useState(defaults)
  let objectArray
  
const saveData =()=>{

  setData(data)

   objectArray = Object.entries(data);

console.log(data)

   
//  axios.post('http://192.168.0.100:8000/api/products/store',data).then(
//   response=>{

//     if (response){
//       alert(response.data)
//       setData(defaults)
//     }
    
//   }).catch(
//     (reson)=>{
//     alert(Object.values(reson.response.data).map((item)=>(
      
//       item[0]
      
//       )))
//     }
//   )
}


  return (
    <div>
          <div className=' border border-black w-screen m-auto p-3  h-screen bg-gradient-to-b from-blue-200   to-slate-200 flex flex-row'>
              
              <form action="" method="post">
                <div className=' justify-start border border-black p-8 w-full rounded-md items-start  bg-gradient-to-b from-blue-300   to-slate-100 shadow-md shadow-blue-800 h-4/5 '>
                  <div className='flex flex-row bg-blue-100 justify-center items-center rounded-md'>
                <MdOutlineProductionQuantityLimits size={25} color='#123456' />
                <h1 className='font-bold text-blue-900  p-2 '> Stock Inward Items </h1>
                  </div>
                    <div className=' flex flex-row mt-2'>
                      <div className=' w-4/12 '><label htmlFor="serial" className='  '>Item Name</label></div>
                      <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                      value ={data.serialno}
                      onChange={(e)=>setData({...data,serialno:e.target.value})}/></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="product_name" className=' '>Received From</label></div>
                      <div><input type="text" name="" id="product_name" className='border'
                      value ={data.name}
                      onChange={(e)=>setData({...data,name:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="category" className=' '>Received By</label></div>
                      <div><input type="text" name="" id="category" className='border'
                      value ={data.catagory}
                      onChange={(e)=>setData({...data,catagory:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="brand" className=' '>Quantity</label></div>
                      <div><input type="number" name="" id="brand" className='border'
                      value ={data.brand}
                      onChange={(e)=>setData({...data, brand:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="brand" className=' '>Receiving Date</label></div>
                      <div><input type="date" name="" id="brand" className='border'
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
                    <input type="reset" value="Clear" className="p-1  bg-blue-900   text-white  hover:bg-blue-500 cursor-pointer text-sm rounded-sm px-2"/>
                      <input type="button" value="Add in Stock" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer" 
                       onClick={()=>saveData()}/>
                       
                      
                    </div>
                </div>
                </form>
                  {/* Stock in ward items  */}
                <div className='bg-blue-100 w-8/12 border-blue-800 rounded-sm p-4  h-4/6 overflow-y-scroll ml-5'>
                      <h1 className='bg-[#004e98] text-white text-center rounded-tr-md rounded-tl-md '>View Items</h1>
                      <div className='flex flex-row  text-white bg-blue-500  '>
                      <div className='p-1 w-1/12 '>Sr. #</div>
                      <div className='p-1 ml-2 w-3/12 '>Product Name</div>
                      <div className='p-1 ml-2 w-2/12 '>Category</div>
                      <div className='p-1 ml-2 w-3/12 '>Brand</div>
                      <div className='p-1 ml-2 w-4/12 '>Description</div>
                      <div className='p-1 mr-2 w-1/12  '>Action</div>
                    </div>
                    {
                      data  &&
                      Object.values(data).map((item) => (
                        
                        <div className='flex flex-row p-1 bg-slate-50 border border-b border-blue-100  '>

                          <div className='p-1 w-1/12 ml-2 text-wrap flex-wrap'> {data.serialno}</div>
                          <div className='p-1 w-3/12 ml-2 text-black'>{data.name}</div>
                          <div className='p-1 w-2/12 ml-2 text-black'>{data.catagory} </div>
                          <div className='p-1 w-3/12 ml-2'>{data.brand}</div>
                          <div className='p-1 w-4/12 ml-2 text-wrap'>{data.description}</div>
                          <div className='p-1 w-1/12 align-middle flex justify-center items-center  hover:cursor-pointer gap-2'>
                          <MdDelete size={20} color={'#d40404'}  />
                            <span className='hidden'>{data.serialno}</span> <MdEdit size={20} color={'#123999'}  /> </div>
                        </div>
                      ))}
                </div>
          </div>
    </div>
  )
}

export default StockInward