import React from 'react'
import Text from './Text'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

import { motion } from "framer-motion"
import {staggerContainer} from '../motion.js'


const Footer = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='bg-bgVariant pt-[3rem] pb-[5rem] flex items-center justify-center text-center' id='#about' >
      <div className='text-colorWhite' >
        <Text title="Rezazi Mohamed Abdelbasset" />
        <div className='flex flex-wrap gap-10 items-center justify-center my-4 text-center' >
          <a href="#hero" className='hover:text-colorPrimary' >Home</a>
          <a href="#about" className='hover:text-colorPrimary'>About</a>
          <a href="#skills" className='hover:text-colorPrimary'>Skills</a>
          <a href="#portfolio" className='hover:text-colorPrimary'>Portfolio</a>
          <a href="#certeficates" className='hover:text-colorPrimary'>Certficates</a>
          <a href="#contact" className='hover:text-colorPrimary'>Contact</a>
        </div>
        <div className='flex flex-wrap gap-10 items-center justify-center'>
          <a href="https://www.linkedin.com/in/rezazi-mohamed-abdelbasset-2199a824b/"><FaLinkedin className='text-3xl hover:text-colorPrimary' /></a>
          <a href="https://github.com/Abdelbasset10"><FaGithub  className='text-3xl hover:text-colorPrimary'/></a>
        </div>
      </div>

    </motion.div>
  )
}

export default Footer