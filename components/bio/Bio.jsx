import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiSequelize
} from 'react-icons/si'

const Bio = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='container mx-auto w-6/12 text-center mt-20'>
      <div className='mb-12'>
        <span className='text-violet-900 font-extrabold'>What I expert</span>
        <h1 className='text-5xl mt-5'>Skills and Experience</h1>
      </div>
      <div className='flex gap-4 text-center justify-center'>
        <button
          onClick={() => setActive(0)}
          className='
            bg-white 
            active:bg-violet-900 
            text-black 
            active:text-white
            py-2.5
            px-4
            rounded-lg
            text-sm
          '
        >
          Skills
        </button>
        <button
          onClick={() => setActive(1)}
          className='
            bg-white 
            active:bg-violet-900 
            text-black 
            active:text-white
            py-2.5
            px-4
            rounded-lg
            text-sm
          '
        >
          Experience
        </button>
      </div>
      {active === 0 && (
        <div className='mt-20'>
          <div className='flex justify-center text-8xl'>
            <SiHtml5 className='mx-5' />
            <SiCss3 className='mx-5' />
            <SiJavascript className='mx-5' />
          </div>
          <div className='flex justify-center text-8xl mt-10'>
            <SiReact className='mx-5' />
            <SiNodedotjs className='mx-5' />
            <SiSequelize className='mx-5' />
          </div>
        </div>
      )}
      {active === 1 && (
        <div className="grid grid-cols-4 text-left mt-20 items-center">
          <p className="col-span-2 mb-1 text-2xl font-semibold">Sep 2019</p>
          <div className='col-span-2'>
            <h3 className='text-3xl'>Started as University Student</h3>
            <p className='text-gray-500 text-lg'>Generasi GIGIH 2.0 by YABB & GoTo</p>
          </div>
          <p className="col-span-2 mb-1 mt-5 text-2xl font-semibold">Feb - Aug 2022</p>
          <div className='col-span-2 mt-5'>
            <h3 className='text-3xl'>Frontend Engineering Student</h3>
            <p className='text-gray-500 text-lg'>Generasi GIGIH 2.0 by YABB & GoTo</p>
            <span className='text-gray-600'>Kampus Merdeka MSIB</span>
          </div>
          <p className="col-span-2 mb-1 mt-5 text-2xl font-semibold">May - Aug 2022</p>
          <div className='col-span-2 mt-5'>
            <h3 className='text-3xl'>Frontend Engineering Intern</h3>
            <p className='text-gray-500 text-lg'>Pinhome</p>
          </div>
          <p className="col-span-2 mb-1 mt-5 text-2xl font-semibold">Aug 2022</p>
          <div className='col-span-2 mt-5'>
            <h3 className='text-3xl'>Fullstack Web Student</h3>
            <p className='text-gray-500 text-lg'>Binar Academy</p>
            <span className='text-gray-600'>Kampus Merdeka MSIB</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bio
