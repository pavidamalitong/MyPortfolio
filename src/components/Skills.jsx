/* eslint-disable react/jsx-key */

import styled from 'styled-components'
import { skills } from '../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background-color: #FAF9F6;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  margin-top: 5rem;
  
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #121212;
  
  @media (max-width: 768px) {
  margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: grey;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const SkillProgramming = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  border: 0.1px solid #854CE6;
  box-shadow: lavender 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillOthers = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  background: white;
  border: 0.1px solid #854CE6;
  box-shadow: lavender 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #121212;
  border: 1px solid #f3f2f7;
  background: #f3f2f7;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Programming skills, software development tools, and Languages.</Desc>
        <SkillsContainer>
        <Section>
        {skills
          .filter(skill => skill.title === 'Programming')
          .map(skill => (
            <SkillProgramming key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map(item => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillProgramming>
          ))}
        </Section>

        <Section>
        {skills
        .filter(skill => skill.title === 'Tech Tools')
        .map(skill => (
          <SkillOthers key={skill.title}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map(item => (
                <SkillItem key={item.name}>
                  <SkillImage src={item.image} alt={item.name} />
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillOthers>
        ))}

        {skills
          .filter(skill => skill.title === 'Languages')
          .map(skill => (
            <SkillOthers key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map(item => (
                  <SkillItem key={item.language}>
                    <b>{item.language}</b> : {item.proficiency}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillOthers>
          ))}
        </Section>
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills