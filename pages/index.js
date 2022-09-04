import Navbar from "../components/navbar/Navbar";
import useSWR from "swr";
import { SiSpotify } from 'react-icons/si';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-6/12">
        <h1 className="text-8xl">Hello,</h1>
        <h1 className="text-8xl">
          I'm Anugrah!👋
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
          I'm focusing my time to learn about Web Development, especially frontend using React & NextJS. But
          right now, I'm also starting to learn backend using ExpressJS. I'm already interested to learn
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
          game that have a good story. but right now, I'm still grinding on Valorant.
        </p>
      </div>
      <div className="container mx-auto w-6/12">
        <h1 className="text-4xl mb-6">Now Playing</h1>
        <p className="mb-4">You can see what I'm listening to right now:</p>
        <a
          target='_blank'
          rel='noopener noreferer'
          href={
            data?.isPlaying
              ? data.songUrl
              : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
          }
          className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
        >
          <div className='w-16'>
            {data?.isPlaying ? (
              <img
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
      </div>
    </>
  )
}
