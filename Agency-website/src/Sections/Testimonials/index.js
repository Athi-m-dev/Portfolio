import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(2rem + 2vw);
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  letter-spacing: -1px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #0a0b10 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media only Screen and (max-width: 48em) {
    font-size: calc(1.5rem + 1.5vw);
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    
    &::after {
      width: 50px;
      height: 3px;
      bottom: -12px;
    }
  }
  
  @media only Screen and (max-width: 30em) {
    font-size: calc(1.2rem + 1.2vw);
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    
    &::after {
      width: 40px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

// Project data with unique content for each card
const projects = [
  {
    name: "State Guesser",
    text: "State Guesser is an interactive web game where users try to guess the correct Indian state (or U.S. state) based on hints, outlines, facts, or a blurred map image. It's a fun and educational way to test your geography knowledge, sharpen memory, and learn interesting trivia about different states. Perfect for students, quiz lovers, and anyone who enjoys a challenge!",
    image: "stateguesser",
    link: "https://game-rq20.onrender.com/"
  },
  {
    name: "Spicy Huts",
    text: "Spicy Huts is a restaurant website that allows users to view the menu, make reservations, and order food online. It's a full-featured online ordering system that includes a menu showcase, customer testimonials, and a reservation form. Perfect for restaurants looking to expand their online presence and offer a seamless ordering experience to their customers.",
    image: "spicy-huts",
    link: "https://spicy-huts.vercel.app/"
  },
  {
    name: "InstaDM Automator",
    text: "Craft Perfect Instagram DMs in Seconds Our Insta DM Generator helps you write engaging, personalized messages for your audience. Whether you're reaching out to new followers, potential clients, or promoting a product — generate high-converting DMs quickly and effortlessly.",
    image: "insta",
    link: "https://drive.google.com/file/d/1BUYKktNlYvQKToMo2vnaJKCEtz6ve7J0/view"
  },
  {
    name: "Business Website",
    text: "Our agency specializes in crafting high-performance websites and digital solutions tailored to meet your business goals. From stunning designs to seamless user experiences, we turn your ideas into digital reality.",
    image: "Website Image-1",
    link: "https://sypher-ten.vercel.app/"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Our Projects</Title>
      <Carousal>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <Card
                name={project.name}
                text={project.text}
                image={project.image}
                link={project.link}
              />
            </Suspense>
          ))}
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
