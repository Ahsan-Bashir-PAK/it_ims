'use client'
import Image from 'next/image';
import {React} from 'react'
import Link from 'next/link';
import Logo from '../img/logo.png'
import { MdAddCircle } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
const Dashboard = () => {
  

   return (
    <div>
          <div className='border w-screen h-screen'> {/* bg screen */}
              <div className='border  w-11/12 h-full m-auto flex fex-row'>
                <div className='  border-r-2 bg-slate-700 w-3/12 h-full bg-gradient-to-b from-slate-600  to-blue-300 '>
                <div className=' rounded-full w-4/12 h-26 m-auto mt-4 bg-blue-900 p-2 border-2 border-yellow-500 '>
                     {/* <image src={Logo} height={80} width={100}/> */}
                     <Image src={Logo} className=''/>
                  </div>
                 
                  <div className=' w-full m-auto mt-2 p-2 rounded-md'>
                     <h2 className=' px-4  py-2  text-yellow-400 items-center bg-blue-900 '>
                     <span className='text-lg'>Store Inventory Managment System</span>
                     <br/>NHMP Training College, Sheikhupura
                     </h2>
                     
                      <ul>
                     
                           
                            <li className='pl-5 bg-slate-300   hover:bg-white cursor-pointer  border-indigo-500 flex flex-row  items-center'>
                              <IoMdAddCircleOutline color={'#00112e'} size={20}/>
                              <Link href="/dashboard/addProducts">Add Product</Link>
                              </li>
                              <li className='pl-5 bg-slate-300   hover:bg-white cursor-pointer  border-indigo-500 flex flex-row  items-center'>
                              <CiViewList color={'#00112e'} size={20}/>
                              <Link href="/dashboard/viewProducts">View Product</Link>
                              </li>
                              <li className='pl-5 bg-slate-300   hover:bg-white cursor-pointer  border-indigo-500 flex flex-row  items-center'>
                              <MdOutlineInventory2 color={'#00112e'} size={20}/>
                              <Link href="/dashboard/stockInward">Stock Inward </Link>
                              </li>
                              <li className='pl-5 bg-slate-300   hover:bg-white cursor-pointer  border-indigo-500 flex flex-row  items-center'>
                              <MdOutlineProductionQuantityLimits color={'#00112e'} size={20}/>
                              <Link href="/dashboard/stockOutward">Stock Outward</Link>
                             
                              </li>
                              <li className='pl-5 bg-slate-300  mb-1 hover:bg-white cursor-pointer  border-indigo-500 flex flex-row  items-center'>
                              <CiViewList color={'#00112e'} size={20}/>
                              <Link href="/dashboard/viewStock">View Stock</Link>
                             
                              </li>
                            
                            
                      </ul>
                  </div>
                </div> 
                {/* Header Area */}
                 <div className='bg-gradient-to-b from-slate-200  to-gray-100 w-9/12 h-full'>
                    <div className=' justify-center items-center  to-slate-100 w-full  flex flex-row mb-1 h-1/6'>
                   
                    </div> {/*end of Header Area*/}
                    
                    {/* Container Area */}
                    <div className='bg-white w-full h-full flex flex-row'>
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-orange-600 p-1 text-white text-center'>Advance Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                        
                            </div>
                        </div>
                        
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-red-600 p-1 text-white text-center'>Upper Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>

                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-green-600 p-1 text-white text-center'>Probationer Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>
                      
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-black p-1 text-white text-center'>Recruite Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                             
                            </div>
                        </div>
                        {/* End Container Area */}
                    </div>
                 </div>        
              </div>     
          </div>

    </div>
  )
}

export default Dashboard