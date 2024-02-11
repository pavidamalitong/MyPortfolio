
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: white;
`;

const Name = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: #FAF9F6;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #FAF9F6;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: grey;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #FAF9F6;
  text-align: center;
`;


const Footer = () => {

  const links = [
    {
      id: 1,
      child:(
        <>
        <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/pavida-malitong-106174263/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child:(
          <>
        <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/pavidamalitong/'
    },
    {
      id: 3,
      child:(
        <>
        <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:pavida2545@gmail.com'
    },
    {
      id: 4,
      child:(
        <>
        <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: 'https://drive.google.com/file/d/1rd2Rn4X6owhDSPpku8U-1XudypCvXyIC/view?usp=sharing',
      style: 'rounded-br-md'
    }
  ];

  return (
    <Container id="footer">
      <Wrapper>
        <Name>Pavida Malitong</Name>
        <SocialIcons>
            {links.map(({id, child, href, download}) => (
              <SocialIcon key = {id} href={href} download={download} target="_blank" rel="noreferrer">
              {child}
              </SocialIcon>
            ))}
        </SocialIcons>
        <Copyright>
        &copy; 2024 Pavida Malitong
        </Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer;