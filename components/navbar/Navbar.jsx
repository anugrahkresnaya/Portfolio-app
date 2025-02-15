import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-8 py-3 w-fit">
      <ul className="flex space-x-6 font-medium text-gray-700 items-center">
        <li><Link href="#about" scroll={false} className="hover:text-violet-900 transition-colors duration-500">About</Link></li>
        <li><Link href="#skillsExp" scroll={false} className="hover:text-violet-900 transition-colors duration-500">Skills & Experiences</Link></li>
        <li><Link href="#projects" scroll={false} className="hover:text-violet-900 transition-colors duration-500">Projects</Link></li>
        <li><Link href="#contact" scroll={false} className="hover:text-violet-900 transition-colors duration-500">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
