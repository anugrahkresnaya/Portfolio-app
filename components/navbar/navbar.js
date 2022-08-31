const Navbar = () => {
  return (
    <nav>
      <div className="container absolute left-48 mx-auto px-4 py-6 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-3xl font-bold">
              Logo
            </h1>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="mr-10">
                Home
              </li>
              <li className="mr-10">
                About
              </li>
              <li className="mr-10">
                Contact
              </li>
              <li>
                Project
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;