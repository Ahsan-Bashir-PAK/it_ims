import Link from 'next/link';
export default function SideBar () {
    return (
 
       <div className='border w-screen h-screen'> {/* bg screen */}
          
             <div className='  border-r-2 bg-slate-700 w-3/12 h-full bg-gradient-to-b from-slate-600  to-blue-300 '>
                <div className=' rounded-full w-4/12 h-26 m-auto mt-4 bg-blue-900 p-2 border-2 border-yellow-500 '>
                   {/* <image src={Logo} height={80} width={100}/> */}
                   {/* <Image src={Logo} className='' /> */}
                </div>
 
                <div className=' w-full m-auto'>
                   <ul>
 
                      <li className='pl-5 bg-slate-200  mb-1 mt-2 hover:bg-white cursor-pointer  border-indigo-500'>
                         Add Product
                      </li>
                      <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>
                         <Link href="/dashboard/viewProducts">View Products</Link>
                      </li>
                      <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>
                         <Link href="/dashboard/stockInward">Stock Inward</Link>
                      </li>
                      <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>
                         <Link href="/dashboard/stockInward">Stock Outward</Link>
                      </li>
 
                   </ul>
                </div>
             </div>
          
       </div>
       
    )
 }
 
 