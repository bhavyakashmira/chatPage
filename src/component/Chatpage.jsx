import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { VscSettings } from "react-icons/vsc";
import { ImAttachment } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
import bag from "../../public/Bag.jpg"

function Chatpage() {  
  return (
  
    <>
      
      <div className="max-w-md mx-auto p-4 bg-gray-100 ">
        <div className="flex items-center justify-between mb-4 bg-blue-200 p-2 rounded-t-lg  ">
          <div className=" flex items-center gap-1 justify-around">
            <div className='flex items-center gap-3 relative'>
              <div className="relative">
                <img src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg" alt="Other User Avatar" className="w-8 h-8 rounded-lg ml-3" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-xl font-medium">Timpu</p>
                <p>chat Assistant</p>
              </div>
            </div>


          </div>
          <div className='flex items-center gap-2' >
            <div className=" w-3 h-3 bg-green-500 rounded-full"></div>
            <p className="text-gray-500 ">Online</p>
          </div>


        </div>
     
        <div className=" rounded-lg shadow-md p-4 ">
       
         

        
          <div className="space-y-4">
       
            <div className=" items-start">
             
              <div className="mr-20 bg-blue-400 rounded-lg p-3 ">
                <p className="text-sm text-gray-800">Hi Sam! I am your personal shopping assistant , how can i help you today?</p>
              </div>
              <p className='text-xs m-1'>4:45 PM</p>
            </div>

            <div className=''>
              <div className="  flex items-end justify-end">
                <div className="bg-green-600 p-3 rounded-lg">
                  <p className="text-sm text-white">I am looking for a hand bag,with long strap</p>
                </div>
              </div>
            </div>
            <p className='text-xs m-1 flex justify-end '>4:45 PM</p>
           </div>
            
          <div className='m-2'>Popular tags for handbag</div>
          <div className='flex gap-1 '>
            <button type="button" class="  inline-block bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">clutch</button>
            <button type="button" class="inline-block bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">fabric lining</button>
            <button type="button" class="inline-block bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Baggit</button>
            <button type="button" class="inline-block bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Multi</button>
          </div>


          <div class="mr-20 bg-blue-400 rounded-lg p-2 m-2">
            <div class="relative text-white  ">
              <div className='grid grid-cols-3 bg-white rounded-lg p-2 '>
                <img className='border rounded-xl'  src={bag} alt="no im" />
                <div className='col-span-2 ml-10 text-black ' >
                  <p className='font-bold' >BAGS on timpu</p>
                  <p className='flex items-center justify-between '>1123 products  <LiaGreaterThanSolid className='text-bold' size={"24"} />  </p>
                 

                 </div>
              </div>
              
              <span class="">or set filter and help us choose the best bag for you</span>
            </div>
          </div>
          <div  className='flex justify-between'><h1 className='text-xl text-gray-500 '>select filter</h1>
            <VscSettings size={"20"} /></div>
          
          <div className='grid grid-cols-3 gap-1 mr-15  '>
            <button type="button" class=" items-center flex  bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Strap - long <RxCross2 size={"21"} /></button>
            <button type="button" class="flex items-center bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">colour <RxCross2 size={"21"} /></button>
            <button type="button" class="flex items-center bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">size <RxCross2 size={"21"} /></button>
            <button type="button" class="flex items-center bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Brand <RxCross2 size={"21"} /></button>
            <button type="button" class="flex items-center bg-blue-100 p-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Model<RxCross2 size={"21"} /></button>
          </div>
         
        </div>
        <div className='bg-blue-200 p-2 flex'>
          <div className="mt-4 flex items-center">
            <div className='flex relative'>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 w-[300px] h-[40px] py-2 px-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <ImAttachment className="absolute right-0 top-0 mt-2 mr-2" /> 
            </div>
          </div>
          <button className="bg-blue-500 h-[40px] mt-5 ml-10 flex justify-end text-white px-4 py-2 rounded-lg  hover:bg-blue-600"><IoMdSend size={"20"} />
</button>

        </div>

          

        </div>
      
    
    </>
  )
}

export default Chatpage
