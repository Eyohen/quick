import React, {useState, useEffect} from 'react'
import './animation.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'tailwindcss/tailwind.css'; 

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

   

    const [animationDuration, setAnimationDuration] = useState('0.2s');
    const [animate2, setAnimate2] = useState('0.2s');
    const [animate3, setAnimate3] = useState('0.3s');
    const [animate4, setAnimate4] = useState('0.4s');
    const [animate5, setAnimat5] = useState('0.5s');
    const [animate6, setAnimat6] = useState('0.6s');
    const [animate7, setAnimat7] = useState('0.7s');

    const handleIncreaseSpeed = () => {
      // Adjust the duration as needed
      setAnimationDuration('0.2s');
    };
  return (
    <div>
        <h1 className='text-center'>Welcome to Henrys Animation class</h1> <br /> <br/>

        {/* <h1>Fade</h1>
        <div className='animation' data-aos="fade-up"></div>
        <div className='animation'  data-aos="fade-down"></div>
        <div className='animation'  data-aos="fade-right"></div>
        <div className='animation'  data-aos="fade-left"></div>

        <h1>Flip</h1>
        <div className='animation'  data-aos="flip-right"></div>
      
        <h1>Zoom Animation</h1>
        <div className='animation'  data-aos="zoom-in"></div>
      */}

{/* 
       <div className='justify-center flex h-screen flex-col items-center gap-y-12'>

            <p className='bg-red-200 px-16 py-4'  data-aos="fade-up">Tablet one</p>

            <p className='bg-yellow-200 px-16 py-4' data-aos="fade-down">Tablet one</p>

            <p className='bg-blue-200 px-16 py-4'  data-aos="fade-right">Tablet one</p>

            <p className='bg-green-200 px-16 py-4' data-aos="flip-right">Tablet one</p>


             <p className='bg-red-200 px-16 py-4' data-aos="zoom-in">Tablet one</p>

            <p className='bg-yellow-200 px-16 py-4'>Tablet one</p>

            <p className='bg-blue-200 px-16 py-4'>Tablet one</p>

            <p className='bg-green-200 px-16 py-4'>Tablet one</p>

        </div> 
         */}


         <div className='flex flex-col rotate-90 justify-center items-center animate-pulse mt-64'>
         

{/* <div class="bg-red-200 w-20 rounded-full p-2">
	<div class="bg-red-300 rounded-full p-2">
		<div class="bg-red-400 text-center text-xl text-white font-medium rounded-full p-2">1</div>
	</div>
</div> */}


{/* <div class={`bg-green-200 w-20 rounded-full p-2 animate-bounce`} >
	<div class="bg-green-300 rounded-full p-2">
		<div class="bg-green-400 text-center text-xl text-white font-medium rounded-full p-2">1</div>
	</div>
</div> */}


<div class={`bg-green-100 w-20 px-[50px] animate-slow-bounce`} >
	<div class="bg-green-300 ">
		<div class="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
	</div>
</div>


<div class={`bg-green-200 w-20  px-[100px] animate-slow-bounce2`} >
	<div class="bg-green-300 ">
		<div class="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
	</div>
</div>

<div class={`bg-green-300 w-20  px-[150px] animate-slow-bounce3`} >
	<div class="bg-green-300">
		<div class="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
	</div>
</div>

<div class={`bg-green-400 w-20  px-[200px] animate-slow-bounce4`}>
	<div class="bg-green-300">
		<div class="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
	</div>
</div>

<div class={`bg-green-500 w-20 px-[230px] animate-slow-bounce5`} >
	<div class="bg-green-300  ">
		<div class="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
	</div>
</div>

<div class='bg-green-600 w-20 px-[270px] animate-slow-bounce6' >
	<div class="bg-green-300 ">
		<div class="bg-green-400 text-center text-xl text-white font-medium py-3"></div>
	</div>
</div>











            
         </div>
    
        
    </div>
  )
}

export default Projects