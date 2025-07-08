import styled from "styled-components";
import Instagram from "../../assets/instagram-square-brands.svg";
import GitHub from "../../assets/github-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  
  /* GitHub icon specific styling - black color */
  a:nth-child(2) img {
    filter: invert(0%);
  }
  
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
      
      /* GitHub icon hover - keep it dark */
      &:nth-child(2) img {
        filter: invert(0%) brightness(0.7);
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
  color:rgb(112, 112, 112);
`;

const Syphr = styled.span`
  font-family: 'Rintvera', sans-serif;
  padding : 4px;
  font-weight: bold;
  font-size: 1.3em;
  color:rgb(0, 0, 0);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff00cc, #3333ff);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © Built and Design by <Syphr>SYPHR</Syphr>
      </LeftText>
      <RightText>
        Reach out to us via 😉
        <a href="https://www.instagram.com/syphrweb/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="https://github.com/anush006" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
        &nbsp;
        <a href="mailto:contact@syphr.site,athithiyanm87@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;


