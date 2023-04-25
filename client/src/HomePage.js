import React from 'react';
import styled from 'styled-components';

function HomePage() {
  return (
      <HomeWrapper>
        <Title>Bienvenue sur mon site web</Title>
        <SubTitle>Je suis un développeur backend NodeJS freelance.</SubTitle>
        <SkillsWrapper>
          <SkillsTitle>Compétences clés</SkillsTitle>
          <SkillList>
            <Skill>NodeJS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Express</Skill>
            <Skill>MongoDB</Skill>
            <Skill>RESTful APIs</Skill>
            <Skill>Git</Skill>
          </SkillList>
        </SkillsWrapper>
      </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2d4059;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #2d4059;
  margin-bottom: 2rem;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d4059;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Skill = styled.li`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export default HomePage;
