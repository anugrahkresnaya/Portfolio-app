import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 justify-center mt-20">
      {/* Download CV Button */}
      <a
        href="/AnugrahKresnaya-CV.pdf" // Change to actual CV file path
        download="AnugrahKresnaya_CV.pdf"
        className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300"
      >
        Download CV <FaDownload className="text-gray-500" />
      </a>

      {/* Social Icons */}
      <a
        href="https://www.linkedin.com/in/anugrah-kresnaya" // Change to your LinkedIn profile
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition-all duration-300"
      >
        <FaLinkedin className="text-gray-700 text-xl" />
      </a>

      <a
        href="https://github.com/anugrahkresnaya" // Change to your GitHub profile
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition-all duration-300"
      >
        <FaGithub className="text-gray-700 text-xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
