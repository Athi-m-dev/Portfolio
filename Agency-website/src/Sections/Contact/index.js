import Facebook from "../../assets/facebook-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import GitHub from "../../assets/github-brands.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
      filter: invert(0%);
    }
  }
  
  /* GitHub icon specific styling - white color */
  a:nth-child(3) img {
    filter: invert(100%);
  }
  
  a:nth-child(3):hover img {
    filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
      brightness(100%) contrast(97%);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const PackageMessage = styled.div`
  color: var(--white);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: rgba(255, 0, 128, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 0, 128, 0.3);
`;

const PackageSelect = styled.select`
  padding: 1rem calc(0.5rem + 1vw);
  margin-bottom: 1rem;
  background-color: var(--nav2);
  border: none;
  border-radius: 4px;
  color: #eff7f8;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    border: none;
    outline: none;
    background-color: var(--nav);
  }
  
  option {
    background-color: var(--nav2);
    color: #eff7f8;
  }
`;
const Contact = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showPackageSelection, setShowPackageSelection] = useState(false);

  useEffect(() => {
    // Check if there's a package parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const packageParam = urlParams.get('package');
    
    if (packageParam) {
      setSelectedPackage(packageParam);
      setShowPackageSelection(true);
      
      // Ensure we're scrolled to the contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }, []);

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/people/AutoFlow/61575137396110/?rdid=327TXWmmchUwFe9Q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19J6fKXFt1%2F">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/theautoflow/?utm_source=qr&igsh=bmRnazV2NnF5YjYy#">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/anush006">
          <img src={GitHub} alt="GitHub" />
        </a>
      </Icons>
      
      {showPackageSelection && (
        <PackageMessage>
          Please select the package you're interested in.
        </PackageMessage>
      )}
      
      <Form>
        <Row>
          <input name="name" type="text" placeholder="your name" />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
          />
        </Row>
        
        {showPackageSelection && (
          <PackageSelect 
            value={selectedPackage} 
            onChange={(e) => setSelectedPackage(e.target.value)}
            name="package"
          >
            <option value="">Select a package</option>
            <option value="Starter">Starter</option>
            <option value="Business">Business</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Advanced Custom">Advanced Custom</option>
          </PackageSelect>
        )}
        
        <textarea
          name="message"
          id=""
          cols="30"
          rows="2"
          placeholder="your message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              // Redirect to email with form data
              const name = e.target.form?.name?.value || '';
              const email = e.target.form?.email?.value || '';
              const message = e.target.form?.message?.value || '';
              const packageType = e.target.form?.package?.value || '';
              
              const subject = packageType ? `Inquiry for ${packageType} Package` : 'Contact Form Submission';
              const body = `Name: ${name}\nEmail: ${email}\nPackage: ${packageType}\nMessage: ${message}`;
              
              // Open email with both email addresses
              const mailtoLink = `mailto:anushoffcl@gmail.com,athithiyanm87@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.open(mailtoLink);
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
