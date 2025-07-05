import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 500px;
  height: 450px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  margin: 1.5rem;
  position: relative;
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    
    .card-image {
      transform: scale(1.1);
    }
    
    .view-project-btn {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(255, 0, 128, 0.3);
    }
  }
  
  @media only Screen and (max-width: 64em) {
    width: 450px;
    height: 400px;
    margin: 1rem;
  }
  
  @media only Screen and (max-width: 48em) {
    width: 350px;
    height: 350px;
    margin: 0.75rem;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
  
  @media only Screen and (max-width: 30em) {
    width: 280px;
    height: 320px;
    margin: 0.5rem;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-6px) scale(1.005);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
  position: relative;
  border-radius: 20px 20px 0 0;
  
  @media only Screen and (max-width: 48em) {
    border-radius: 16px 16px 0 0;
  }
  
  @media only Screen and (max-width: 30em) {
    border-radius: 12px 12px 0 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
  transform: scale(1);
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 0 20px 20px;
  
  @media only Screen and (max-width: 64em) {
    padding: 1.25rem;
  }
  
  @media only Screen and (max-width: 48em) {
    padding: 1rem;
    border-radius: 0 0 16px 16px;
  }
  
  @media only Screen and (max-width: 30em) {
    padding: 0.75rem;
    border-radius: 0 0 12px 12px;
  }
`;

const TextContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const ProjectTitle = styled.h3`
  color: #0a0b10;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.5px;
  margin: 0 0 0.75rem 0;
  
  @media only Screen and (max-width: 64em) {
    font-size: 1.3rem;
    margin: 0 0 0.6rem 0;
  }
  
  @media only Screen and (max-width: 48em) {
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
  }
  
  @media only Screen and (max-width: 30em) {
    font-size: 1.1rem;
    margin: 0 0 0.4rem 0;
  }
`;

const ProjectDescription = styled.div`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
  max-height: 120px;
  padding-right: 8px;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ff0080;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #d6006e;
  }
  
  @media only Screen and (max-width: 64em) {
    font-size: 0.9rem;
    line-height: 1.5;
    max-height: 100px;
  }
  
  @media only Screen and (max-width: 48em) {
    font-size: 0.85rem;
    line-height: 1.4;
    max-height: 90px;
  }
  
  @media only Screen and (max-width: 30em) {
    font-size: 0.8rem;
    line-height: 1.3;
    max-height: 80px;
  }
`;

const ViewProjectButton = styled.button`
  background: var(--pink);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 0, 128, 0.2);
  align-self: flex-start;
  margin-top: 1rem;
  flex-shrink: 0;
  
  &:hover {
    box-shadow: 0 6px 24px rgba(255, 0, 128, 0.3);
  }
  
  @media only Screen and (max-width: 64em) {
    padding: 0.65rem 1.25rem;
    font-size: 0.85rem;
    margin-top: 0.8rem;
  }
  
  @media only Screen and (max-width: 48em) {
    padding: 0.6rem 1.1rem;
    font-size: 0.8rem;
    margin-top: 0.6rem;
  }
  
  @media only Screen and (max-width: 30em) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;

const Card = ({ name, text, image, link }) => {
  const handleViewProject = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Try to load image with different extensions
  const getImageSrc = () => {
    try {
      // Try JPG first
      return require(`../../assets/${image}.jpg`);
    } catch (error) {
      try {
        // Try PNG if JPG doesn't exist
        return require(`../../assets/${image}.png`);
      } catch (error) {
        // Fallback to a default image or show error
        console.warn(`Image not found: ${image}`);
        return require(`../../assets/project2.jpg`); // Fallback image
      }
    }
  };

  return (
    <CardWrapper>
      <ImageContainer>
        <Image
          className="card-image"
          src={getImageSrc()}
          alt={name}
        />
      </ImageContainer>
      <ContentContainer>
        <TextContent>
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectDescription>{text}</ProjectDescription>
        </TextContent>
        {link && (
          <ViewProjectButton
            className="view-project-btn"
            onClick={handleViewProject}
          >
            View Project
          </ViewProjectButton>
        )}
      </ContentContainer>
    </CardWrapper>
  );
};

export default Card;
