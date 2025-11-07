import React from 'react'
import { motion } from "framer-motion"

const MotionH1 = ({tailwind, text, seconds}) => {

  return (
    <div >
        <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: seconds, ease: "easeOut" }}
        
        className=''>
            <div>
                    <h1  className={`${tailwind}`}>
                         <span>{text}</span></h1>
                          </div>
    
                
        </motion.div>
        
    </div>
  )
}

export default MotionH1