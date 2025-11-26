import React from 'react'
import { motion } from "framer-motion"

const DownArrowAnimated = ({tailwind}) => {
  return (
    <div id='motion_icon' className='transition-all ease-in duration-75'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}>
          <motion.div
          initial={{ opacity: 1}}
          animate={{
            y: '5px',
            transition: { duration: 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}
          }}> <svg className='opacity-75 w-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M4.74 17.089c.19 2.391 2.084 4.422 4.525 4.723c.898.11 1.81.188 2.735.188s1.837-.078 2.735-.188c2.44-.301 4.334-2.332 4.524-4.723c.132-1.657.241-3.357.241-5.089s-.11-3.432-.24-5.089c-.19-2.391-2.084-4.422-4.525-4.723C13.837 2.078 12.925 2 12 2s-1.837.078-2.735.188c-2.44.3-4.335 2.332-4.524 4.723C4.609 8.568 4.5 10.268 4.5 12s.109 3.432.24 5.089M11.988 6.84v4.92"/><path d="M10.004 7.86c.982-1.02 1.58-1.92 2.036-1.856c.383-.003.742.596 1.964 1.856m-.008 3.282c-.982 1.02-1.58 1.92-2.036 1.855c-.383.003-.742-.595-1.964-1.855"/></g></svg>
        </motion.div> 
        </motion.div>
    </div>
  )
}

export default DownArrowAnimated