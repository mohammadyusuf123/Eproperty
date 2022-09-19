import React from 'react';
import f3 from'../assets/images/f3.png'
import f2 from'../assets/images/f2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faClock, faSuitcase, faCalendarCheck, } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className='my-40 flex flex-row items-center justify-center static'>
            <div className='w-9/12 flex relative mb-96 '>
                
                <div className='drop-shadow-3xl w-6/12 absolute right-60 top-0 z-0'>
                    <img src={f3} alt="building" srcset="" />
                </div>
                <div className='drop-shadow-3xl w-6/12 absolute right-0 top-20 z-20'>
                    <img src={f2} alt="building" srcset="" />
                </div>
            
            </div>
            <div className='box-content w-96 h-fit p-5 ml-20'>
                <div>
                    <h2 className='text-primary text-lg font-normal'><span className='text-dark font-bold'>About</span> Our Company</h2>
                    <h1 className='text-darker text-2xl font-bold my-6'>We are Offering the Best Real Estate Deals</h1>
                    <p className='text-gray-400 text-sm my-2'>We have already sold more than 7,000 Houses and we are Still going at very good pace</p>
                </div>
                <div className='text-white flex flex-row text-xl justify-between my-10 box-content w-72'>
                    <p className='bg-primary py-3 px-4 rounded-lg cursor-pointer'><FontAwesomeIcon icon={faCalendarCheck} /></p>
                    <div className='bg-primary py-3 px-4 rounded-lg flex flex-row items-center cursor-pointer'><FontAwesomeIcon icon={faClock} /><p className='ml-2 text-sm'>24 H Consultant</p></div>
                    <p className='bg-primary py-3 px-4 rounded-lg cursor-pointer'><FontAwesomeIcon icon={faSuitcase} /></p>
                </div>
            </div>
        </div>
    );
};

export default About;