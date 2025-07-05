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
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © Built and Design by{" "}
        <h1>Web</h1>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="https://www.instagram.com/theautoflow/?utm_source=qr&igsh=bmRnazV2NnF5YjYy#">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="https://github.com/anush006">
          <img src={GitHub} alt="GitHub" />
        </a>
        &nbsp;
        <a href="mailto:anushoffcl@gmail.com,athithiyanm87@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;


