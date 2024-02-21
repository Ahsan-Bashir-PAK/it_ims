"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdEdit } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Link from 'next/link';



const ViewStock = () => {

  const [stock, setStock] = useState([])


  useEffect(() => {

    axios.get('http://192.168.0.100:8000/api/stock/get').then(
      response => {
        // setProducts(response.data)
        console.log(response.data.data)
        setStock(response.data.data)
      }
    )
    // console.log(products)


  }, [])

  const updatedItems = {
    serialno: "",
    name: "",
    catagory: "",
    brand: "",
  }
  const [items, setItems] = useState(updatedItems)
  // const updateData = (id) => {
  //   // console.log(id, items)
  //   axios.patch(`http://192.168.0.100:8000/api/products/update/${id}`, items).then(


  //     response => {

  //       if (response) {

  //         setItems(updatedItems)
  //       }

  //     }).catch(
  //       (reson) => {
  //         alert(Object.values(reson.response.data).map((item) => (

  //           item[0]

  //         )))
  //       }
  //     )
  // }

  // const [data, setData] = useState(defaults)

  return (
    <div>
      <div className='w-full bg-slate-800 h-1/6'>
        

      </div>
      <div className=' border w-screen m-auto  justify-center items-center text-center h-screen bg-gradient-to-t from-teal-500   to-blue-200 flex flex-row'>
        {/* Menu Bar */}

        <div className='w-full h-screen p-3  overflow-scroll scroll-smooth'>

          <div className='flex flex-row  text-white bg-blue-500  '>
            <div className='p-1 w-2/12 '>Vno.</div>
            <div className='p-1 ml-2 w-3/12 '>Date</div>
            <div className='p-1 ml-2 w-2/12 '>Product Name</div>
            <div className='p-1 ml-2 w-3/12 '>Issued Branch</div>
            <div className='p-1 ml-2 w-3/12 '>Issued By</div>
            <div className='p-1 ml-2 w-4/12 '>Received Branch</div>
            <div className='p-1 ml-2 w-4/12 '>Received By</div>
            <div className='p-1 ml-2 w-2/12 '>Quantity</div>
            <div className='p-1 ml-2 w-2/12 '>Available</div>
            <div className='p-1 ml-2 w-2/12 '>Issued</div>
            <div className='p-1 ml-2 w-2/12 '>Status</div>
            <div className='p-1 mr-2 w-1/12  '>Description</div>
          </div>
          {
            stock &&
            stock.map((item, index) => (
              <div className='flex flex-row p-1 bg-slate-50 border border-b border-blue-100'>

                <div  className='p-1 w-2/12 ml-2 break-words inline-flex flex-wrap text-wrap '>
                  
                  <span className='text-wrap flex flex-wrap'>{item.vno}</span>
                  </div>
                <div className='p-1 w-3/12 ml-2'>{item.date}</div>
                <div className='p-1 w-2/12 ml-2'>{item.product_name}</div>
                <div className='p-1 w-3/12 ml-2'>{item.issued_branch}</div>
                <div className='p-1 w-3/12 ml-2'>{item.issued_by}</div>
                <div className='p-1 w-4/12 ml-2 text-wrap'>{item.received_branch}</div>
                <div className='p-1 w-4/12 ml-2 text-wrap'>{item.received_by}</div>
                <div className='p-1 w-2/12 ml-2 text-wrap'>{item.qty}</div>
                <div className='p-1 w-2/12 ml-2 text-wrap'>{item.stkin}</div>
                <div className='p-1 w-2/12 ml-2 text-wrap'>{item.stkout}</div>
                <div className='p-1 w-2/12 ml-2 text-wrap'>{item.product_status}</div>
                <div className='p-1 w-4/12 ml-2 text-wrap'>{item.description}</div>
                
                {/* <div className='p-1 w-1/12 align-middle flex justify-center items-center  hover:cursor-pointer'><span className='hidden'>{item.id}</span> <MdEdit size={20} color={'#123999'} onClick={() => setItems(item)} /></div> */}
              </div>
            ))}

        </div>

        {/* <div className='w-4/12  h-screen bg-gradient-to-b from-blue-500   to-teal-200  '>

          <form action="" method="post">
            <div className=' justify-start border border-blue-300 p-2 w-10/12 rounded-md items-start m-auto mt-10 bg-gradient-to-b from-blue-300   to-slate-100 shadow-md shadow-blue-800 '>
              <div className='flex flex-row bg-blue-100 justify-center items-center rounded-md'>
                <MdOutlineProductionQuantityLimits size={25} color='#123456' />
                <h1 className='font-bold text-blue-900  p-2 '> Product Registeration </h1>
              </div>
              <div className=' flex flex-row mt-2'>
                <div className=' w-4/12 '><label htmlFor="serial" className='  '>Product ID</label></div>
                <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                  value={items.id}
                  onChange={(e) => setItems({ ...items, id: e.target.value })}
                  disabled
                /></div>
              </div>
              <div className=' flex flex-row mt-2'>
                <div className=' w-4/12 '><label htmlFor="serial" className='  '>Serial Number</label></div>
                <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                  value={items.serialno}
                  onChange={(e) => setItems({ ...items, serialno: e.target.value })} /></div>
              </div>
              <div className=' flex flex-row mt-1'>
                <div className=' w-4/12'><label htmlFor="product_name" className=' '>Product Name</label></div>
                <div><input type="text" name="" id="product_name" className='border'
                  value={items.name}
                  onChange={(e) => setItems({ ...items, name: e.target.value })}
                /></div>
              </div>
              <div className=' flex flex-row mt-1'>
                <div className=' w-4/12'><label htmlFor="category" className=' '>Category</label></div>
                <div><input type="text" name="" id="category" className='border'
                  value={items.catagory}
                  onChange={(e) => setItems({ ...items, catagory: e.target.value })}
                /></div>
              </div>
              <div className=' flex flex-row mt-1'>
                <div className=' w-4/12'><label htmlFor="brand" className=' '>Brand</label></div>
                <div><input type="text" name="" id="brand" className='border'
                  value={items.brand}
                  onChange={(e) => setItems({ ...items, brand: e.target.value })}
                /></div>
              </div>


              <div className='flex flex-row justify-center items-center pt-2'>


                <Link href="/dashboard/addProduct">
                  <input type="button" value="Add Product" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer"
                  />
                </Link>
                <input type="button" value="Udpdate Product" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer"
                  onClick={() => updateData(items.id)} />
              </div>
            </div>
          </form>
        </div> */}

      </div>
    </div>
  )
}

export default ViewStock