import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Bg_Scroll = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.8, 1], [0.01, 1]);

    return (
        <div>
            <motion.div className='absolute h-[145em] lg:h-[170vh] sm:h-[160em] md:h-[110em] w-screen bg-[#0D0D0D] opacity-0'
                initial={{ opacity: 0 }}
                style={{ opacity }}
            >
                
            </motion.div>
        </div>
    )
}

export default Bg_Scroll