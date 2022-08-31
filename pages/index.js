import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 flex items-center h-screen">
        <div>
          <h1 className="text-4xl mb-10">Hello,</h1>
          <h1 className="text-8xl">I'm Anugrah! 👋</h1>
          <p className="text-xl mt-10">
            An Informatics Engineering Student who passionate in technology and web development<br/>especially Frontend engineering using React & NextJS
          </p>
        </div>
      </div>
    </div>
  )
}
