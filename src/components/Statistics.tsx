import React, { useEffect, useState } from 'react'
import vector from '@/assets/Vector.png'
import vector2 from '@/assets/Vector2.png'
import customizableIcon from '@/assets/icon-fully-customizable.png'
import Image from 'next/image'
import { useTheme } from "next-themes"
import { motion } from 'framer-motion'

const Statistics = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const currentTheme = mounted ? theme === "system" ? systemTheme : theme : 'light';

    return (
        <div className='py-5 flex flex-col gap-10 justify-center items-center text-center max-w-[1000px] mx-auto xl:px-0 px-5'>
            <div className='flex flex-col gap-5 justify-center items-center max-w-[500px]'>
                <motion.h1 className={`text-3xl font-bold ${currentTheme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    Advanced Statistics</motion.h1>
                <motion.p className={`text-[15px] ${currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>Track how your links are performing across the eb with our advanced statistics dashboard.</motion.p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 items-center lg:gap-8 gap-4 relative'>
                <motion.div className={`flex flex-col gap-2 ${currentTheme === 'light' ? 'bg-white' : 'bg-[#14181f]'} rounded-lg px-5 pb-6 pt-12 text-left relative z-10`}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <p className='bg-[#0c102bd9] w-fit p-4 rounded-full absolute -top-7'>
                        <Image src={vector2} className='max-w-[20px]' alt='' />
                    </p>
                    <h1 className={`text-[18px] font-semibold ${currentTheme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>Brand Recognition</h1>
                    <p className={`text-[13px] ${currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Boost your brand recognition with each click, Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </motion.div>
                <motion.p className='hidden lg:flex h-2 w-80 bg-[#8b3dff] absolute left-[100px] bottom-[130px] z-1'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}>
                </motion.p>
                <motion.div className={`lg:mt-14 mt-6 flex flex-col gap-2 rounded-lg ${currentTheme === 'light' ? 'bg-white' : 'bg-[#14181f]'} px-5 pb-6 pt-12 text-left relative z-10`}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <p className='bg-[#0c102bd9] w-fit p-4 rounded-full absolute -top-7'>
                        <Image src={vector} className='max-w-[20px]' alt='' />
                    </p>
                    <h1 className={`text-[18px] font-semibold ${currentTheme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>Detailed Records</h1>
                    <p className={`text-[13px] ${currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </motion.div>
                <motion.p className='hidden lg:flex h-2 w-50 bg-[#8b3dff] absolute right-40 bottom-25 z-1'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}>
                </motion.p>
                <motion.div className={`lg:mt-24 mt-6 flex flex-col gap-2 rounded-lg ${currentTheme === 'light' ? 'bg-white' : 'bg-[#14181f]'}  px-5 pb-6 pt-12 text-left relative z-10`}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <p className='bg-[#0c102bd9] w-fit p-4 rounded-full absolute -top-7'>
                        <Image src={customizableIcon} className='max-w-[20px]' alt='' />
                    </p>
                    <h1 className={`text-[18px] font-semibold ${currentTheme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>Fully Customizable</h1>
                    <p className={`text-[13px] ${currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Statistics;
