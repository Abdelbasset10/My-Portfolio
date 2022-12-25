import React from 'react'
import TitleSec from './TitleSec'
import {aboutData} from '../data'
import devfest from '../assets/devfest.jpg'
import { motion } from "framer-motion"
import {staggerContainer, textVariant2} from '../motion.js'



const About = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='paddingSec' id='about' >
      <TitleSec text="Get To Know" title="About Me" />
      <motion.div
      variants={textVariant2}
      className='w-[90%] lg:w-[80%] m-auto gap-10 flex flex-col items-center md:items-start md:flex-row md:justify-between'>
        <div className='flex-[1] ' >
          <img src={devfest} alt="MyImage" className='w-[25rem] md:h-[28rem]  hover:rotate-12 p-4 bg-colorWhite cursor-pointer	' />
        </div>
        <div className='flex-[1] flex flex-col gap-4' >
          <div className='flex flex-col md:flex-row md:flex-wrap   gap-4' >
            {aboutData.map((a)=>{
              return(
                <div key={a.id} className=" hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] w-[70%]  rounded-[10px] m-auto md:w-[9rem] md:ml-0 lg:w-[12rem] xl:w-[15rem] flex flex-col justify-center items-center  gap-4 p-4 bg-bgVariant cursor-pointer" >
                  <a.icon className='text-3xl' />
                  <div>{a.title}</div>
                  <p>{a.state}</p>
                </div>
              )
            })}
          </div>
          <p className='text-colorLight' >
            I am Rezazi Mohamed Abdelbasset, Full Stack Devoloper, Student at University of Science and Technology Houari Boumediene (USTHB) in Algeria Algiers <br /> I am a punctual person who respects time. I always work to deliver work before the specified time and make the client happy of my work.
          </p>
          <a href="#contact">
            <button className='btn border-[1px] w-[15rem] bg-colorPrimary text-colorWhite hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] hover:text-colorWhite' >Let's Talk</button>
          </a>
        </div>

      </motion.div>

    </motion.div>
  )
}

export default About