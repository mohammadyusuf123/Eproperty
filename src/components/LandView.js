import React, { useState } from 'react';
import f5 from '../assets/images/f5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';






const LandView = ( {properties, setFilterData}) => {
    
   
   
    const { register, formState: { errors } , handleSubmit,reset, getValues, watch , setError} = useForm();

  const onSubmit=(data)=>{
            
  setFilterData(data)

  }




    return (
        <div>
        <div className='relative'>
            <div>
                <img src={f5} alt="" srcset="" className='rounded-xl' height={400} width={'100%'}/>
            </div>
            <div className='absolute top-20 ml-20'>
                <h1 className='text-darker font-bold text-xl tablet:text-4xl laptop:text-6xl  mb-3'>
                    Find your next <span className='text-primary'>perfect</span><br/> place with ease
                </h1>
                <div className='text-gray-400 text-sm mb-8'>
                    Estately will help you find your home fast, easy and comfortable. <br/>
                    Our expert support are always available. Let's Start now!
                </div>
                <div className='text-primary text-xl mb-32'>
                    <div className=' mb-1'>
                        <FontAwesomeIcon icon={faSackDollar} />
                        <span className='text-dark font-bold text-sm mx-2'>$20,5M</span>
                        <span className='text-gray-400 text-xs'>Earned throught property transactions</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouse} />
                        <span className='text-dark font-bold text-sm mx-2'>19k +</span>
                        <span className='text-gray-400 text-xs'>Earned throught property transactions</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative  flex flex-col mx-20 bottom-28'>
            <div className='flex flex-row bg-light box-content w-fit rounded-t-xl cursor-pointer'>
                <div className='px-16 py-4 font-semibold text-base text-gray-500 rounded-t-xl bg-white'>Rent</div>
                <div className='px-16 py-4 font-semibold text-base text-gray-500'>Buy</div>
                <div className='px-16 py-4 font-semibold text-base text-gray-500'>Co-Living</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className='sticky flex flex-row justify-between bg-white p-10 rounded-r-xl rounded-bl-xl  drop-shadow-xl'>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Location</div>
                    <div className='text-night  font-semibold text-base '> 
                    <select  {...register("location")}   class="select select-primary w-full max-w-xs">
                    <option disabled selected>Select a location</option>
             {properties.map((e,index)=><option value={e.location} key={index}>{e.location}</option>) }
                 </select>
                        
                        </div>
                        </div>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Property Type</div>
                    <div className='text-night font-semibold text-base '> 
                    <select  {...register("type")}   class="select select-primary w-full max-w-xs">
                    <option disabled selected>Select any type</option>  
             {properties.map((e,index)=><option  key={index}>{e.propName}</option>) }
                 </select>

                 </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>When</div>
                    <div className='text-night font-semibold text-base'><input type="date" placeholder="pick a date" class="input  textarea textarea-primary" /></div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Property Price Range</div>
                    <div className='text-night font-semibold text-base'> <select  {...register("price")}   class="select select-primary w-full max-w-xs">
                    <option disabled selected>Select price</option>
             {properties.map((e,index)=><option value={e.price} key={index}>{e.price}</option>) }
                 </select>
                    </div>
                </div>
                
               <div className="flex align-center items-center mt-8 "> <input type='submit' value="Submit" className=' btn btn-primary  text-white px-4 py-3 w-32 rounded-md'/>
                   
                </div>
            </div>
            </form>
        </div>
      </div>
    );
};

export default LandView;