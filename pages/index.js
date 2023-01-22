import Navbar from "../components/navbar/Navbar";
import useSWR from "swr";
import { SiGmail, SiInstagram, SiLinkedin, SiSpotify, SiTwitch } from 'react-icons/si';
import { motion } from 'framer-motion';
import Bio from "../components/bio/Bio";
import TextSpan from "../components/text/TextSpan";
import Portfolio from "../components/portfolio/Portfolio";
import Image from "next/image";

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  const greetings = "Hello,".split("")
  const myName = "I'm Anugrah!".split("")

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-6/12">
        <h1 className="text-8xl">{greetings.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter}
            </TextSpan>
          )
        })}</h1>
        <h1 className="text-8xl">
          {myName.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            )
          })}<motion.div
            style={{
              marginBottom: '-20px',
              marginRight: '-45px',
              paddingBottom: '20px',
              paddingRight: '45px',
              display: 'inline-block',
            }}
            animate={{ rotate: 20 }}
            transition={{
              repeatType: 'mirror',
              repeat: Infinity,
              from: 0,
              duration: 0.5,
              ease: 'easeInOut',
              type: 'tween',
            }}
            className="text-8xl"
          >👋</motion.div>
        </h1>
      </div>
      <div className="container mx-auto my-16 w-6/12 text-justify">
        <h1 className="text-4xl mb-6">About Me</h1>
        <p className="text-lg mb-4">
          My name is Anugrah Kresnaya, an Informatics Engineering Student in Gunadarma University, Indonesia
          who passionate in Web Development. I live in Bekasi, Indonesia. I started my college in 2019
          and currently on my last year.
        </p>
        <p className="text-lg mb-4">
          I&apos;m focusing my time to learn about Web Development, especially frontend using React & NextJS. But
          right now, I&apos;m also starting to learn backend using ExpressJS. I&apos;m already interested to learn
          Fullstack Web Development. And starting my journey to learn Fullstack on Binar Academy.
        </p>
        <p className="text-lg mb-4">
          I love to explore anything that related to technology. When I was in senior high school and first
          year on my college, I watched a lot of videos and read articles that related to technology, also
          joined a few communities that related to technology. but in my second year, I already choosed to
          focusing my journey on Web Development.
        </p>
        <p className="text-lg">
          Outside of tech thingy, I play a lot of video games and streaming on Twitch for fun. I like a
          game that have a good story. but right now, I&apos;m still grinding on Valorant.
        </p>
      </div>
      <Bio />
      <Portfolio />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="container mx-auto w-6/12 my-16"
      >
        <h1 className="text-4xl mb-6">Now Playing</h1>
        <p className="mb-4">You can see what I&apos;m listening to right now:</p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={
            data?.isPlaying
              ? data.songUrl
              : 'https://open.spotify.com/user/krdm9kqj9n9rlc8tklwgmg0e3'
          }
          className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
        >
          <div className='w-16'>
            {data?.isPlaying ? (
              <Image
                className='w-16 shadow-sm'
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            ) : (
              <SiSpotify size={64} color={'#1ED760'} />
            )}
          </div>
          <div className='flex-1'>
            <p className='font-bold component'>
              {data?.isPlaying ? data.title : 'Not Listening'}
            </p>
            <p className='text-xs font-dark'>
              {data?.isPlaying ? data.artist : 'Spotify'}
            </p>
          </div>
          <div className='absolute bottom-1.5 right-1.5'>
            <SiSpotify size={20} color={'#1ED760'} />
          </div>
        </a>
      </motion.div>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="container mx-auto my-16 w-6/12"
      >
        <h1 className="text-4xl my-6">On the internet</h1>
        <ul className="text-lg">
          <li className="flex items-center">
            <SiGmail className="mr-4" />
            anugrahkresnaya.ak@gmail.com
          </li>
          <li>
            <a
              className="flex items-center"
              href="https://www.instagram.com/anugrah_kresnaya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="mr-4" />
              @anugrah_kresnaya
            </a>
          </li>
          <li>
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/anugrah-kresnaya-5628671ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="mr-4" />
              Anugrah Kresnaya
            </a>
          </li>
          <li>
            <a
              className="flex items-center"
              href="https://www.twitch.tv/kazecrowz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitch className="mr-4" />
              kazecrowz
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  )
}
