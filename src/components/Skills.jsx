import React from 'react'
import { BackSkills, FrontSkills } from '../data'
import {BsPatchCheckFill} from 'react-icons/bs'
import TitleSec from './TitleSec'
import { motion } from "framer-motion"
import {staggerContainer, slideIn} from '../motion.js'

const Skills = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='paddingSe' id="skills">
      <TitleSec text="What Skills I Have" title="My Skills" />
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='w-[90%] lg:w-[80%] overflow-x-hidden	 m-auto flex flex-col md:flex-row gap-4'>
        <div className='flex-[1] hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] bg-bgVariant cursor-pointer p-4 h-fit' >
          <p className='text-center font-bolf text-colorPrimary text-xl mb-[2rem] ' >Frontend Devolopment</p>
          <div className=' flex flex-wrap   gap-8' >
          {FrontSkills.map((front)=>{
            return(
              <div className='flex items-center  gap-4 sm:w-[10rem] md:w-[8rem]' key={front.id} >
                <BsPatchCheckFill  />
                <div>
                  <p>{front.topic}</p>
                  <p>{front.lvl}</p>
                </div>
              </div>
            )
          })}
          </div>

        </div>
        <div className='flex-[1] hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] bg-bgVariant cursor-pointer p-4 h-fit' >
        <p className='text-center font-bolf text-colorPrimary text-xl mb-[2rem]'>Backend Devolopment</p>
        <div className='flex flex-wrap gap-8' >
          {BackSkills.map((front)=>{
            return(
              <div className='flex gap-4 sm:w-[10rem] md:w-[8rem]' key={front.id} >
                <BsPatchCheckFill />
                <div>
                  <p>{front.topic}</p>
                  <p>{front.lvl}</p>
                </div>
              </div>
            )
          })}
          </div>

        </div>

      </motion.div>

    </motion.div>
  )
}

export default Skills