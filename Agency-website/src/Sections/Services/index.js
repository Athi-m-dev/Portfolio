import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as DesignIcon } from "../../assets/Design.svg";
import { ReactComponent as DevelopeIcon } from "../../assets/Develope.svg";
import { ReactComponent as SupportIcon } from "../../assets/Support.svg";
import { ReactComponent as MobileIcon } from "../../assets/mobile.svg";

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 8rem;
  background: #111;
  min-height: 60vh;
  overflow: hidden;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  margin-top: -10.5rem;
  position: relative;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  z-index: 2;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto 1.5rem auto;
  padding: 0 2rem;
  overflow: hidden;
  
  @media only Screen and (max-width: 64em) {
    padding: 0 1rem;
  }
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CardsRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  animation: ${slideAnimation} 30s linear infinite;
  
  /* Pause animation on hover */
  &:hover {
    animation-play-state: paused;
  }
  
  /* Mobile: faster animation */
  @media only Screen and (max-width: 48em) {
    animation-duration: 20s;
    gap: 1.5rem;
  }
  
  @media only Screen and (max-width: 40em) {
    animation-duration: 15s;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: rgba(30, 30, 30, 0.98);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.45), 0 0 0 1.5px #222;
  padding: 2rem 1.5rem;
  margin-top: 20px;
  min-width: 220px;
  max-width: 260px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  
  &:hover {
    box-shadow: 0 8px 40px 0 var(--pink), 0 0 0 2px var(--pink);
    transform: translateY(-6px) scale(1.04);
  }
  
  @media only Screen and (max-width: 48em) {
    min-width: 200px;
    max-width: 240px;
    padding: 1.5rem 1rem;
  }
  
  @media only Screen and (max-width: 40em) {
    min-width: 180px;
    max-width: 220px;
    padding: 1.25rem 0.75rem;
  }
`;

const CardIcon = styled.div`
  margin-bottom: 1rem;
  svg {
    width: 48px;
    height: 48px;
    fill: var(--pink);
    filter: drop-shadow(0 2px 8px #ffb6e6);
  }
  
  @media only Screen and (max-width: 40em) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 1.18rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  
  @media only Screen and (max-width: 40em) {
    font-size: 1.1rem;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 0;
  line-height: 1.4;
  
  @media only Screen and (max-width: 40em) {
    font-size: 0.9rem;
  }
`;

const ViewAllButton = styled(Link)`
  background: var(--pink);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1.5rem;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px 0 rgba(255, 0, 128, 0.12);
  z-index: 2;
  position: relative;
  
  &:hover {
    background: var(--purple);
    box-shadow: 0 4px 24px 0 var(--purple);
  }
  
  @media only Screen and (max-width: 40em) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
`;

const services = [
  {
    title: "Website Design",
    text: "Beautiful, user-friendly websites for your brand.",
    icon: <DesignIcon />,
  },
  {
    title: "Front-End",
    text: "Modern, responsive interfaces for seamless UX.",
    icon: <MobileIcon />,
  },
  {
    title: "Back-End",
    text: "Robust, scalable backend solutions for your business.",
    icon: <DevelopeIcon />,
  },
  {
    title: "Full-Stack For You",
    text: "End-to-end solutions: frontend, backend, and more.",
    icon: <SupportIcon />,
  },
];

const Services = () => {
  return (
    <ServiceSection id="services">
      <Title>What We Do</Title>
      <CardsContainer>
        <CardsRow>
          {/* Duplicate services for infinite loop effect */}
          {[...services, ...services].map((service, idx) => (
            <Card key={idx}>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.text}</CardText>
            </Card>
          ))}
        </CardsRow>
      </CardsContainer>
      <ViewAllButton to="/full-services">View Full Services</ViewAllButton>
    </ServiceSection>
  );
};

export default Services;
