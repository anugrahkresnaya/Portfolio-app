import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiSequelize,
  SiTypescript,
} from 'react-icons/si'

const Bio = () => {
  const [active, setActive] = useState(0)

  const variants = {
    start: {
      x: [-50, 0],
      opacity: 1,
    },
    end: {
      x: [50, 0],
      opacity: 1,
    },
  }

  const variantsWithDelay = {
    start: {
      x: [-50, 0],
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    end: {
      x: [50, 0],
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  }

  const variantsWithDelay2 = {
    start: {
      x: [-50, 0],
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    end: {
      x: [50, 0],
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  }

  const variantsWithDelay3 = {
    start: {
      x: [-50, 0],
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
    end: {
      x: [50, 0],
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
  }

  return (
    <div className="container mx-auto w-6/12 text-center mt-32" id='skillsExp'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <span className="text-violet-900 font-extrabold">What I expert</span>
        <h1 className="text-3xl md:text-5xl mt-5 font-bold">Skills and Experiences</h1>
      </motion.div>
      <div className="flex gap-4 text-center justify-center">
        <button
          onClick={() => setActive(0)}
          className="
            bg-white 
            active:bg-violet-900 
            text-black 
            font-bold
            active:text-white
            py-2.5
            px-4
            rounded-lg
            text-sm
          "
        >
          Skills
        </button>
        <button
          onClick={() => setActive(1)}
          className="
            bg-white 
            active:bg-violet-900 
            text-black 
            font-bold
            active:text-white
            py-2.5
            px-4
            rounded-lg
            text-sm
          "
        >
          Experiences
        </button>
      </div>
      {active === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="mt-20"
        >
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-0 justify-center text-8xl">
            <SiHtml5 className="mx-5" />
            <SiCss3 className="mx-5" />
            <SiJavascript className="mx-5" />
          </div>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-0 justify-center text-8xl mt-10">
            <SiReact className="mx-5" />
            <SiNodedotjs className="mx-5" />
            <SiSequelize className="mx-5" />
          </div>
          <div className='flex flex-col items-center gap-10 md:flex-row md:gap-0 justify-center text-8xl mt-10'>
            <SiTypescript className='mx-5' />
          </div>
        </motion.div>
      )}
      {active === 1 && (
        <div className="grid grid-cols-4 text-left mt-20 items-center">
          <motion.p
            animate="start"
            initial={{ opacity: 0 }}
            variants={variants}
            className="col-span-2 mb-1 text-2xl font-semibold"
          >
            Sep 2019
          </motion.p>
          <motion.div
            animate="end"
            initial={{ opacity: 0 }}
            variants={variants}
            className="col-span-2"
          >
            <h3 className="text-3xl">Started as University Student</h3>
            <p className="text-gray-500 text-lg">
              Gunadarma University
            </p>
          </motion.div>
          <motion.p
            animate="start"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay}
            className="col-span-2 mb-1 mt-5 text-2xl font-semibold"
          >
            Feb - Aug 2022
          </motion.p>
          <motion.div
            animate="end"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay}
            className="col-span-2 mt-5"
          >
            <h3 className="text-3xl">Frontend Engineering Student</h3>
            <p className="text-gray-500 text-lg">
              Generasi GIGIH 2.0 by YABB & GoTo
            </p>
            <span className="text-gray-600">Kampus Merdeka MSIB</span>
          </motion.div>
          <motion.p
            animate="start"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay2}
            className="col-span-2 mb-1 mt-5 text-2xl font-semibold"
          >
            May - Aug 2022
          </motion.p>
          <motion.div
            animate="end"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay2}
            className="col-span-2 mt-5"
          >
            <h3 className="text-3xl">Frontend Engineering Intern</h3>
            <p className="text-gray-500 text-lg">Pinhome</p>
          </motion.div>
          <motion.p
            animate="start"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay3}
            className="col-span-2 mb-1 mt-5 text-2xl font-semibold"
          >
            Aug 2022
          </motion.p>
          <motion.div
            animate="end"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay3}
            className="col-span-2 mt-5"
          >
            <h3 className="text-3xl">Fullstack Web Student</h3>
            <p className="text-gray-500 text-lg">Binar Academy</p>
            <span className="text-gray-600">Kampus Merdeka MSIB</span>
          </motion.div>
          <motion.p
            animate="start"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay3}
            className="col-span-2 mb-1 mt-5 text-2xl font-semibold"
          >
            Jan 2024 - Sep 2024
          </motion.p>
          <motion.div
            animate="end"
            initial={{ opacity: 0 }}
            variants={variantsWithDelay3}
            className="col-span-2 mt-5"
          >
            <h3 className="text-3xl">Software Development Engineer Intern</h3>
            <p className="text-gray-500 text-lg">DANA Indonesia</p>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Bio
