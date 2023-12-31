import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './animation.css'


const Home = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    },[])
  return (
    <div >
        <Navbar />
        <div className=''>
        <div className='bg-[#E6F9F6] pb-16'>


<div className='flex flex-col md:flex-row gap-32 px-4 justify-center pt-32'>
            <div>
            <div className='text-[#0f4f57] text-5xl font-bold font-Prompt'  data-aos="fade-right">Software development has <br /> never been quicker</div>
        <p className='text-[#0f4f57] text-xl font-light font-Prompt mt-6' data-aos="fade-down">At Quick we are committed to providing speed and <br /> efficiency, in software development for our clients.</p>
        
        <button className='bg-[#0f4f57] text-white rounded-full px-4 py-2 mt-6'>Start Project</button>
        </div>

        <div>


        <div className='flex flex-col rotate-0 justify-center items-center animate-pulse' >
         

         
         <div className={`bg-green-200 w-20 px-[80px] animate-slow-bounce`} >
             <div className="bg-green-300 ">
                 <div className="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
             </div>
         </div>
         
         
         <div className={`bg-green-300 w-20  px-[100px] animate-slow-bounce2`} >
             <div className="bg-green-300 ">
                 <div className="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
             </div>
         </div>
         
         <div className={`bg-green-400 w-20  px-[130px] animate-slow-bounce3`} >
             <div className="bg-green-300">
                 <div className="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
             </div>
         </div>
         
         <div className={`bg-green-500 w-20  px-[150px] animate-slow-bounce4`}>
             <div className="bg-green-300">
                 <div className="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
             </div>
         </div>
         
         <div className={`bg-green-600 w-20 px-[180px] animate-slow-bounce5`} >
             <div className="bg-green-300  ">
                 <div className="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
             </div>
         </div>
         
         <div className='bg-green-700 w-20 px-[200px] animate-slow-bounce6' >
             <div className="bg-green-300 ">
                 <div className="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
             </div>
         </div>
         
         
         
         
         
         
         
         
         
         
         
                     
                  </div>
      
  </div>
        </div>


        </div>

        {/* services */}

        <p className='text-[#0f4f57] text-3xl font-Prompt font-bold justify-center flex mt-12' data-aos="fade-up">Services we offer</p>


        <div className='grid grid-cols-1 md:grid-cols-3 mt-12 gap-y-6 gap-x-6 items-center justify-center md:px-64'>
        <div className='hover:border-2 hover:shadow-xl hover:rounded-2xl p-16' data-aos="fade-up">
            <p className='text-[#0f4f57] text-2xl font-Prompt font-bold justify'>Product Design</p>
            <p className='text-[#0f4f57] text-xl font-Prompt font-light justify'>We design websites , apps , and print collateral for some of the world’s most recognized brands</p>
        </div>

        <div className='hover:border-2 hover:shadow-xl hover:rounded-2xl p-16' data-aos="fade-up">
            <p className='text-[#0f4f57] text-2xl font-Prompt font-bold justify '>Product Design</p>
            <p className='text-[#0f4f57] text-xl font-Prompt font-light justify'>We design websites , apps , and print collateral for some of the world’s most recognized brands</p>
        </div>

        <div className='hover:border-2 hover:shadow-xl hover:rounded-2xl p-16' data-aos="fade-up">
            <p className='text-[#0f4f57] text-2xl font-Prompt font-bold justify '>Product Design</p>
            <p className='text-[#0f4f57] text-xl font-Prompt font-light justify'>We design websites , apps , and print collateral for some of the world’s most recognized brands</p>
        </div>

        <div className='hover:border-2 hover:shadow-xl hover:rounded-2xl p-16' data-aos="fade-up">
            <p className='text-[#0f4f57] text-2xl font-Prompt font-bold justify '>Product Design</p>
            <p className='text-[#0f4f57] text-xl font-Prompt font-light justify'>We design websites , apps , and print collateral for some of the world’s most recognized brands</p>
        </div>

        <div className='hover:border-2 hover:shadow-xl hover:rounded-2xl p-16' data-aos="fade-up">
            <p className='text-[#0f4f57] text-2xl font-Prompt font-bold justify '>Product Design</p>
            <p className='text-[#0f4f57] text-xl font-Prompt font-light justify'>We design websites , apps , and print collateral for some of the world’s most recognized brands</p>
        </div>

        <div className='hover:border-2 hover:shadow-xl hover:rounded-2xl p-16' data-aos="fade-up">
            <p className='text-[#0f4f57] text-2xl font-Prompt font-bold justify '>Product Design</p>
            <p className='text-[#0f4f57] text-xl font-Prompt font-light justify'>We design websites , apps , and print collateral for some of the world’s most recognized brands</p>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Home