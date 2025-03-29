import styled from 'styled-components';
import imageProfile from '/imageProfile.png'

const Container = styled.div`
  margin: 0 auto;
  padding-top: 2.5rem;
  background-color: #FAF9F6;
  color: #121212;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const LeftContainer = styled.div`
  width: 70%;
  margin: 2rem 1rem 2rem 6rem;

  
  @media only screen and (max-width: 960px) {
    margin: 2rem 0 2rem 2rem;
}

  @media only screen and (max-width: 768px) {
    order:2;
    width: 90%;
    margin: 0 0 2rem 0;
}
`;

const RightContainer = styled.div`
  width: 30%;
  margin: 1rem 1rem;

  @media only screen and (max-width: 768px) {
    margin: 0;
}
`;

const Greeting = styled.div`
  font-size: 1.25rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
}
`;

const BigName = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1.5rem auto;
  color: #8b7faf;
  text-shadow: 2px 2px #d1c0e4;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 3rem;
}
`;

const Position = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #b3a2c7;

  @media only screen and (max-width: 768px) {
    text-align: center;
}
`;

const Description = styled.h2`
  font-size: 20px;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    text-align: center;
}
`;

const Img = styled.img`
  border-radius: 50%;
  max-height: 30rem;
  margin-top: 3rem;

  @media only screen and (max-width: 768px) {
    clip-path: circle(39% at center);
    margin: 0rem;
}
`;

const Scroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem auto;
  font-size: 1rem;
  color: grey;
`;


const HeroSection = () => {
  return (
    <Container id="hero">
    <Wrapper>
      <LeftContainer>
        <Greeting>Hello there, Welcome to my portfolio website.</Greeting>
        <BigName>Pavida Malitong</BigName>
        <Position>Senior Digital Engineering student at SIIT, Thammasat University</Position>
        <Description>
        <br></br>
        Have a background in <b>Full-stack Development</b> and <b>Data Visualization</b> internships. <br/>Currently seeking a full-time or contract position in software engineering or data science to further develop my expertise and contribute to impactful projects within a potential company.
        </Description>
      </LeftContainer>

      <RightContainer>
        <Img src={imageProfile} alt="Profile Image"></Img>
      </RightContainer>
    </Wrapper>

    <Scroll>Scroll down to see all of my accomplishments</Scroll>
    </Container>
)
}

export default HeroSection