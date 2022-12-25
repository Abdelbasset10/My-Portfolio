import React from 'react'
import {AiFillHome, AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'

import { motion } from "framer-motion"
import {navVariants} from '../motion'

const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='flex justify-center fixed bottom-0 w-full m-auto sm:left-[25%] md:left-[30%]  lg:left-[34%] xl:left-[35%] z-[2] py-4 gap-10 px-10 sm:w-fit m-auto bg-primaryVariant rounded-[12px]' >
      <a href="#hero">
        <AiFillHome className='text-lg sm:text-3xl hover:text-bgVariant' />
      </a>
      <a href="#about">
      <AiOutlineUser className='text-lg sm:text-3xl hover:text-bgVariant' />
      </a>
      <a href="#skills">
        <BsBook className='text-lg sm:text-3xl hover:text-bgVariant' /> 
      </a>
      <a href="#portfolio" >
        <RiServiceLine className='text-lg sm:text-3xl hover:text-bgVariant' />
      </a>
      <a href="#certeficates">
        <RiServiceLine className='text-lg sm:text-3xl hover:text-bgVariant' />
      </a>
      <a href="#contact">
        <BiMessageDetail className='text-lg sm:text-3xl hover:text-bgVariant '/>
      </a>
      

    </motion.nav>
  )
}

export default Navbar