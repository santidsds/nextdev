import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Box_Animated = ({img, title, p}) => {

    return (
        <div className=''>
            <motion.div className='bg-[#0D0D0D] border-[1px] border-[#232323] rounded-[14px] h-[174px] w-[300px] sm:h-[174px] sm:w-[360px] '
                whileHover={{scale: 1.05}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.3, ease:'easeIn'} }}>
                    <div className='px-4 sm:px-6 flex justify-center items-center text-white font-inter py-8'>
                        
                        
                        <motion.img className='w-[90px] h-[90px] sm:w- [90px] sm:h-[90px]' src={img} alt="" />
                        <div className='flex flex-col justify-start ml-[1em]'>
                            <h3 className='text-white text-[13px] font-semibold'> {title} </h3>
                            <p className='opacity-50 text-[10px] mt-[1em]'> {p} </p>
                        </div>

                    </div>
               
            </motion.div>
        </div>
    )
}

export default Box_Animated