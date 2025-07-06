import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const SyphrText = styled.h3`
  font-family: 'Rintvera', sans-serif;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.3em;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 255, 255, 0.5);
    letter-spacing: 2px;
    color: #ffffff;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--purple), var(--pink));
    transition: width 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--pink), var(--purple));
    transition: width 0.3s ease;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Nav = styled.nav`
  width: auto;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap; // add this line
  align-items: center;
  justify-content: flex-end; // or space-evenly/space-around as needed
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    margin-left: 1.5rem; // add spacing between links
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;
const Header = () => {
  const [click, setClick] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);

  // Helper to scroll or navigate+scroll
  const handleSectionNav = (id, e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
    } else {
      navigate("/", { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
      }, 400); // Delay to allow homepage to render
    }
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="syphr" />
        <SyphrText>syphr</SyphrText>
      </Logo>
      <Nav>
        <Link to="/">
          <a>Home</a>
        </Link>
        <a href="#about" onClick={(e) => handleSectionNav("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => handleSectionNav("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => handleSectionNav("contact", e)}>
          Contact Us
        </a>
        <a
          href="https://www.instagram.com/syphrweb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </Nav>
      <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={+click}>
        <Link to="/" onClick={() => setClick(false)}>
          <a>Home</a>
        </Link>
        <a href="#about" onClick={(e) => { handleSectionNav("about", e); setClick(false); }}>
          About Us
        </a>
        <a href="#services" onClick={(e) => { handleSectionNav("services", e); setClick(false); }}>
          Services
        </a>
        <a href="#contact" onClick={(e) => { handleSectionNav("contact", e); setClick(false); }}>
          Contact Us
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
