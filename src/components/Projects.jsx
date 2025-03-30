/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import styled from 'styled-components';
import { useState } from 'react'
import ProjectCard from './Cards/ProjectCards'
import { projects } from '../data/constants'

const Container = styled.div`
    background: #FAF9F6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0px 100px 0;
    gap: 12px;

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
    max-width: 800px;
    color: grey;

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid #8b7faf;
    color: #8b7faf;
    font-size: 16px;
    font-weight: 500;
    margin: 22px 0px;
    box-shadow: lavender 0px 4px 24px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    ${({ active }) =>
        active && `
    background: #8b7faf;
    color: white !important;
    `
    }
    &:hover {
        background: #b3a2c7;
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
const Divider = styled.div`
    width: 1.5px;
    background: #8b7faf;
`


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects from curricular courses and competitions.
        </Desc>

        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP</ToggleButton>
          }
          <Divider />
          {toggle === 'data' ?
            <ToggleButton active value="data" onClick={() => setToggle('data')}>DATA</ToggleButton>
            :
            <ToggleButton value="data" onClick={() => setToggle('data')}>DATA</ToggleButton>
          }
          <Divider />
          {toggle === 'game' ?
            <ToggleButton active value="game" onClick={() => setToggle('game')}>GAME</ToggleButton>
            :
            <ToggleButton value="game" onClick={() => setToggle('game')}>GAME</ToggleButton>
          }
        </ToggleButtonGroup>


        <CardContainer>
          {toggle === 'all' && projects
            .slice().reverse().map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .slice().reverse().map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects