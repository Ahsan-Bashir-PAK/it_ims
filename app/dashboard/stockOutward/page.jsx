'use client'
import React, { useState } from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import axios from 'axios';
import Link from 'next/link';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const StockOutward = () => {
  const defaults = {
    vno: "",
    date: "",
    product_name: "",
    issued_branch: "",
    received_branch: "",
    issued_by: "",
    received_by: "",
    qty: "",
    product_status: "",
    expiry_date: "",
    description: "",
  }

  const Branches = ['Admin', 'DLA', 'Development','Security', 'OSI', 'Accounts', 'MT', 'Store', 'Training', 'Mess', 'Drill'];
  const [data, setData] = useState(defaults)
 
  const [ReceivedItemArray, setRecievedItemArray] = useState([]);

//  Data add to table  
 function addToTable(){
  setRecievedItemArray([...ReceivedItemArray, data])
 }


//  Delete an item from Array
function deleteItem(val){
  // alert(val)
  
   const index = ReceivedItemArray.indexOf(val);

    const x = ReceivedItemArray.splice(index, 1);

 
}

//  Data add to database
  const saveData = () => {
      
    if(ReceivedItemArray!=""){
      // console.log(ReceivedItemArray)
    ReceivedItemArray.map((item, key) => {
    
      axios.post('http://192.168.0.100:8000/api/stockout', item).then(
        // console.log(item)
        response => {
          if (response) { console.log(response.data.message)
            setRecievedItemArray([])
            setData(defaults)
            alert("Data has been added Successfully")
          }
          else { alert("not working") }
        }
      ).catch((err) => {
        console.log("Axios not working" + err)
      })

    }
    )
  } else {alert("No Data to add")}
}

  return (
    <div>
      <div className=' border border-black w-screen m-auto p-3  h-screen bg-gradient-to-b from-blue-200   to-slate-200 flex flex-row'>

        <form action="" method="post">
          <div className=' justify-start border border-black p-8 w-full rounded-md items-start  bg-gradient-to-b from-blue-300   to-slate-100 shadow-md shadow-blue-800 h-6/6 '>
            <div className='flex flex-row bg-blue-100 justify-center items-center rounded-md'>
              <MdOutlineProductionQuantityLimits size={25} color='#123456' />
              <h1 className='font-bold text-blue-900  p-2 '> Stock Outwards</h1>
            </div>
            <div className=' flex flex-row mt-2'>
              <div className=' w-4/12 '><label htmlFor="serial" className='  '>Voucher No.</label></div>
              <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                value={data.vno}
                onChange={(e) => setData({ ...data, vno: e.target.value })} /></div>
            </div>
            <div className=' flex flex-row mt-2'>
              <div className=' w-4/12 '><label htmlFor="serial" className='  '>Date</label></div>
              <div className='flex'><input type="date" name="" id="serial" className=' rounded-sm '
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })} /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="product_name" className=' '>Item Name</label></div>
              <div><input type="text" name="" id="product_name" className='border'
                value={data.product_name}
                onChange={(e) => setData({ ...data, product_name: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="category" className=' '>Issued Branch</label></div>
              <div><input type="text" name="" id="category" className='border'
                value={data.issued_branch}
                onChange={(e) => setData({ ...data, issued_branch: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="category" className=' '>Received Branch</label></div>
              <div><input type="text" name="" id="category" className='border'
                value={data.received_branch}
                onChange={(e) => setData({ ...data, received_branch: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="brand" className=' '>Issued By</label></div>
              <div><input type="text" name="" id="brand" className='border'
                value={data.issued_by}
                onChange={(e) => setData({ ...data, issued_by: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="brand" className=' '>Received by</label></div>
              <div><input type="text" name="" id="brand" className='border'
                value={data.received_by}
                onChange={(e) => setData({ ...data, received_by: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="brand" className=' '> Quantity</label></div>
              <div><input type="text" name="" id="brand" className='border'
                value={data.qty}
                onChange={(e) => setData({ ...data, qty: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="brand" className=' '>Expiry Date</label></div>
              <div><input type="date" name="" id="brand" className='border'
                value={data.expiry_date}
                onChange={(e) => setData({ ...data, expiry_date: e.target.value })}
              /></div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="status" className=' '>Status</label></div>
              <div>
                <select name="status" value={data.product_status} onChange={(e) => setData({ ...data, product_status: e.target.value })}>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
                
                <select name="status" >
                {
                  Branches.forEach(function(entry) {
                    <option value={console.log(entry)}>{console.log(entry)}</option>
                  })
                }
                </select>
                
                
              </div>
            </div>
            <div className=' flex flex-row mt-1'>
              <div className=' w-4/12'><label htmlFor="brand" className=' '>Description</label></div>
              <div className=' w-4/12'>
                <textarea
                  value={data.description}
                  onChange={(e) => setData({ ...data, description: e.target.value })}
                >
                </textarea >

              </div>
            </div>


            <div className='flex-1 flex-row justify-center items-center pt-2'>
              <input type="reset" value="Clear" className="p-1  bg-blue-900   text-white  hover:bg-blue-500 cursor-pointer text-sm rounded-sm px-2" />
              <input type="button" value="Add into Table" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer"
                onClick={() => addToTable()} />


            </div>
          </div>
        </form>
        {/* Stock in ward items  */}
        <div className='bg-blue-100 w-8/12 border-blue-800 rounded-sm p-4  h-4/6 overflow-y-scroll ml-5'>
          <h1 className='bg-[#004e98] text-white text-center rounded-tr-md rounded-tl-md '>View Items</h1>
          <div className='flex flex-row  text-white bg-blue-500  '>
            <div className='p-1 w-1/12 '>Vno #</div>
            <div className='p-1 ml-2 w-3/12 '> Date</div>
            <div className='p-1 ml-2 w-2/12 '>Name</div>
            <div className='p-1 ml-2 w-3/12 '>Issued Branch</div>
            <div className='p-1 ml-2 w-3/12 '>Issued By</div>
            <div className='p-1 ml-2 w-3/12 '>Received Branch</div>
            <div className='p-1 ml-2 w-3/12 '>Receieved By</div>
            <div className='p-1 ml-2 w-3/12 '>Quantity</div>
            <div className='p-1 ml-2 w-3/12 '>Expiry Date</div>
            <div className='p-1 ml-2 w-4/12 '>Status</div>
            <div className='p-1 ml-2 w-4/12 '>Description</div>
            <div className='p-1 mr-2 w-1/12  '>Action</div>
          </div>
          {

            ReceivedItemArray.map((item, index) =>

            (
              <div key={index} className='flex flex-row p-1 bg-slate-50 border border-b border-blue-100  '>

                <div className='p-1 w-1/12 ml-2 text-wrapflex flex-wrap'>{item.vno}</div>
                <div className='p-1 w-1/12 ml-2 text-wrap flex-wrap'> {item.date}</div>
                <div className='p-1 w-3/12 ml-2 text-black'>{item.product_name}</div>
                <div className='p-1 w-2/12 ml-2 text-black'>{item.issued_branch} </div>
                <div className='p-1 w-2/12 ml-2 text-black'>{item.received_branch} </div>
                <div className='p-1 w-2/12 ml-2 text-black'>{item.issued_by} </div>
                <div className='p-1 w-2/12 ml-2 text-black'>{item.received_by} </div>
                <div className='p-1 w-3/12 ml-2'>{item.qty}</div>
                <div className='p-1 w-3/12 ml-2'>{item.expiry_date}</div>
                <div className='p-1 w-3/12 ml-2'>{item.product_status}</div>
                <div className='p-1 w-4/12 ml-2 text-wrap'>{item.description}</div>
                <div className='p-1 w-1/12 align-middle flex justify-center items-center  gap-1'>
                  <span className='hover:cursor-pointer' onClick={()=>deleteItem(item.vno)}><MdDelete size={20} color={'#d40404'} /></span>
                  <span className='hover:cursor-pointer'><MdEdit size={20} color={'#123999'} /></span>
                </div>

              </div>
            )

            )}
            <div className='mt-2 p-2 flex justify-end flex-1' > <input type="button" value="Issued to concerned Branch" className='bg-blue-800 w-4/12 text-white p-1 rounded-md justify-center items-center hover:cursor-pointer' onClick={()=>saveData()}/> </div>

        </div>
      </div>
    </div>
  )
}

export default StockOutward