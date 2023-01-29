import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="container mx-auto my-4 w-6/12 flex justify-between">
      <div>
        <h1 className="text-xl font-righteous">
          <Link href="/">Anugrah K</Link>
        </h1>
      </div>
      <ul className="flex">
        <li className="mx-4">
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
