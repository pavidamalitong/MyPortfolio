import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child:(
        <>
        Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/pavida-malitong-106174263/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child:(
          <>
        GitHub <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/pavidamalitong/'
    },
    {
      id: 3,
      child:(
        <>
        Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:pavida2545@gmail.com'
    },
    {
      id: 4,
      child:(
        <>
        CV <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: 'https://drive.google.com/file/d/1e6ieHyy4B0KMF6YSC5ExkHdFwvIhAZq9/view?usp=sharing',
      style: 'rounded-br-md'
    }
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-20">
      <ul>
       
        {links.map(({id, child, href, style, download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " + style}>
          <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
          {child}
          </a>
        </li>
        ))}

      </ul>
    </div>
  )
}

export default SocialLinks