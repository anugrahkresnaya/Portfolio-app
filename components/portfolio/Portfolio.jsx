import { motion } from 'framer-motion'
import { projectImages } from '../../data/data.js'
import Image from 'next/image.js'
import { FiGithub, FiEye } from 'react-icons/fi'

const Portfolio = () => {
  return (
    <div className="container mx-auto w-6/12 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="text-center"
      >
        <span className="text-violet-900 font-extrabold">My Work</span>
        <h1 className="text-5xl mt-5 font-bold">Web Projects</h1>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="mt-20 flex flex-wrap justify-center gap-5"
      >
        {projectImages.map((item) => {
          return (
            <div
              key={item.id}
              className="
                max-w-sm 
                basis-96 
                h-64 
                border-violet-600 
                border
                rounded-md
                text-center
                relative
              "
            >
              <Image
                src={item.img || item.logo}
                alt="project"
                className="mx-auto max-h-52 rounded-t-md"
              />
              <motion.h1 className="mt-3 text-2xl">{item.name}</motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="
                  bg-violet-900
                  items-center
                  absolute
                  flex
                  w-full
                  h-full
                  z-10
                  top-0
                  left-0
                  rounded-md
                  justify-center
                  gap-6
                "
              >
                <motion.a
                  href={item.repo}
                  target="_blank"
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-full 
                    text-2xl 
                    w-10 
                    h-10 
                    items-center
                    flex
                    justify-center
                    bg-gray-800/25
                  "
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href={item?.url}
                  target="_blank"
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-full 
                    text-2xl 
                    w-10 
                    h-10 
                    items-center
                    flex
                    justify-center
                    bg-gray-800/25
                  "
                >
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Portfolio
