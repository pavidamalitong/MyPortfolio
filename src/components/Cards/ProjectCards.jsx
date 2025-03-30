/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 80%;
    padding: 10px;
    background-color: #8b7faf;
    color: #FAF9F6;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`

const Details = styled.div`
    display: block;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #121212;
    background-color: #f3f2f7;
    padding: 2px 8px;
    border-radius: 10px;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #121212;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: grey;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    display: block
    font-weight: 400;
    color: #121212;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`


const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: white;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    font-family: Poppins, sans-serif;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
        position: absolute;
        bottom: 1rem;
        left: 10%;
    }

    &:hover ${Description} {
        display: none;
    }
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Button>View Project</Button>
        </Card>
    )
}

export default ProjectCards