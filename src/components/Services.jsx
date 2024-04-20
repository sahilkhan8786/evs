import React from 'react'
import { inner, main, outer } from '../assets';
import { motion, spring } from 'framer-motion'


const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }


export default function Services() {
    return (
        <section className='h-screen w-full bg-bg '>
            <div className='flex items-center justify-center max-w-screen-2xl mx-auto flex-col select-none gap-10'>
                <motion.h1
                    initial={{
                        opacity: 0,
                        x: '-150px',

                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5
                    }}
                    className='text-primary text-3xl flex items-center justify-end  w-full mt-20'>"We create Experiences with Measurable Impact"</motion.h1>


                <article className='flex items-center  w-full z-20'>

                    {/* FOR IMAGES */}
                    <div className='relative w-[559px] h-[682px] z-30'>
                        <motion.img
                            initial={{
                                opacity: 0,
                                rotateZ: -180,

                            }}
                            animate={{
                                opacity: 1,
                                rotateZ: 0
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 1,
                                type: 'spring', stiffness: 100
                            }}

                            src={outer} alt="" className='absolute top-0 left-0   outer' />
                        <motion.img
                            initial={{
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,

                            }}
                            whileHover={{
                                scaleX: 180
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 2
                            }}
                            src={inner} alt="" className='absolute top-0 left-0 ' />
                        <motion.img
                            initial={{
                                opacity: 0,
                                rotateZ: 360,


                            }}
                            animate={{
                                opacity: 1,
                                rotateZ: 0
                            }}
                            transition={{
                                duration: 3,
                                delay: 1,
                                type: 'spring', stiffness: 100
                            }}
                            src={main} alt="" className='absolute top-0 left-0 origin-center  inner main' />

                    </div>
                    {/* FOR CONTENT */}
                    <ul className='text-white    flex-1 z-20'>
                        <li className='list-items'>Brand Strategy</li>
                        <li className='list-items'>Design</li>
                        <li className='list-items'>Digital</li>
                        <li className='list-items'>Events</li>
                        <li className='list-items'>Exhibitions</li>
                        <li className='list-items'>Interior & Retail</li>
                        <li className='list-items'>World Expo</li>

                    </ul>
                    <div>

                    </div>
                </article>
            </div>

        </section>
    )
}
