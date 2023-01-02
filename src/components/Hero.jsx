import React from 'react'
import me from '../assets/ana.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import Text from './Text'

import { motion } from "framer-motion"
import {staggerContainer, slideIn} from '../motion.js'
import CV from '../assets/monCV.pdf'

const Hero = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='overflow-x-hidden	' id='hero'>
      <div
      className='w-[80%] relative m-auto' >
        <div className='text-center mt-[2rem] xl:mt-[3rem]' >
          <p>Hello,I'm</p>
          <Text title="Rezazi Mohamed Abdelbasset" />
          <motion.p variants={slideIn('left','tween',0.2,1)}>Full Stack Devoloper</motion.p>
          <div className='flex  flex-col sm:flex-row gap-4 items-center justify-center mt-[2rem]' >
            <a href={CV} download>
              <button className=' border-[1px] w-[15rem] btn text-colorPrimary hover:bg-colorPrimary hover:text-colorWhite'  >Download Cv</button>
            </a>
            <a href="#contact">
              <button className='btn border-[1px] w-[15rem] hover:bg-[transparent] hover:text-colorPrimary bg-colorPrimary text-colorWhite' >Let's Talk</button>
            </a>
          </div>
        </div>
        <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='flex flex-row my-[1rem] justify-center items-center gap-4' >
          <a href="https://www.linkedin.com/in/rezazi-mohamed-abdelbasset-2199a824b/">
            <FaLinkedin className='text-3xl text-colorPrimary hover:text-colorWhite' />
          </a>
          <a href="https://github.com/Abdelbasset10">
            <FaGithub className='text-3xl text-colorPrimary hover:text-colorWhite' />
          </a>
         
        </motion.div>
        <motion.div 
        variants={slideIn('right','tween',0.2,1)}
        className=' flex justify-center w-full  	' >
          <img src={me} alt="MyPhoto" className='w-[20rem]  bg-colorPrimary p-4 rounded-tl-3xl	rounded-tr-3xl' />
        </motion.div>

        

      </div>
      
    </motion.div>
  )
}

export default Hero