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
      <div className=' border w-6/12 m-auto  justify-center items-center text-center h-screen bg-gradient-to-t from-teal-500   to-blue-200 flex flex-row'>
        {/* Menu Bar */}

        <div className='w-full h-screen p-3  '>

          <div className='flex flex-row  text-white bg-blue-500  '>
            <div className='p-1 w-6/12 '>Product Name</div>
            <div className='p-1 ml-2 w-2/12 '>Quantity</div>
          
          </div>
          {
            stock &&
            stock.map((item, index) => (
              <div className='flex flex-row p-1 bg-slate-50 border border-b border-blue-100'>
                <div className='p-1 w-2/12 ml-2'>{item.product_name}</div>     
                <div className='p-1 w-2/12 ml-2 text-wrap'>{item.qty}</div>
     
                
              </div>
            ))}

        </div>

        

      </div>
    </div>
  )
}

export default ViewStock