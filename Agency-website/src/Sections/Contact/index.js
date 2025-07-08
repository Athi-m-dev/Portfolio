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
    border: 2px solid transparent;
    border-radius: 4px;
    color: #eff7f8;
    transition: all 0.3s ease;
    
    &.error {
      border-color: #ff4444;
      box-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
    }
    
    &:active,
    &:focus {
      border: 2px solid var(--purple);
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
    border: 2px solid transparent;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    
    &.error {
      border-color: #ff4444;
      box-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
    }
    
    &:focus,
    &:active {
      border: 2px solid var(--purple);
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
  border: 2px solid transparent;
  border-radius: 4px;
  color: #eff7f8;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.error {
    border-color: #ff4444;
    box-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
  }
  
  &:focus {
    border: 2px solid var(--purple);
    outline: none;
    background-color: var(--nav);
  }
  
  option {
    background-color: var(--nav2);
    color: #eff7f8;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Contact = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showPackageSelection, setShowPackageSelection] = useState(false);
  const [showPackageWarning, setShowPackageWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    package: ""
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    // Check if there's a package parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const packageParam = urlParams.get('package');
    
    if (packageParam) {
      setSelectedPackage(packageParam);
      setFormData(prev => ({ ...prev, package: packageParam }));
      setShowPackageSelection(true);
      setShowPackageWarning(false); // Don't show warning if package is pre-selected
      
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

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    // Package validation - if no package is selected, show package selection
    if (!formData.package) {
      newErrors.package = "Please select an option";
      // Automatically show package selection if it's not already shown
      if (!showPackageSelection) {
        setShowPackageSelection(true);
        setShowPackageWarning(true); // Show warning when package selection appears
      }
    }
    
    setErrors(newErrors);
    setShowErrors(true);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    // Keep dropdown visible for all selections, just remove warning
    if (name === 'package' && value) {
      // Don't hide the dropdown, just ensure it's visible
      setShowPackageSelection(true);
      // Remove the package warning message when any option is selected
      setShowPackageWarning(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, proceed with email
      const subject = formData.package && formData.package !== "Just Contact Us" 
        ? `Inquiry for ${formData.package} Package` 
        : 'Contact Form Submission';
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPackage: ${formData.package || 'No specific package'}\nMessage: ${formData.message}`;
      
      // Open email with both email addresses
      const mailtoLink = `mailto:contact@syphr.site,athithiyanm87@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
    }
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/sypherweb" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/syphrweb/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/anush006" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
      </Icons>
      
      {showPackageSelection && showPackageWarning && (
        <PackageMessage>
          Please select the package you're interested in.
        </PackageMessage>
      )}
      
      <Form onSubmit={handleSubmit}>
        <Row>
          <input 
            name="name" 
            type="text" 
            placeholder="your name" 
            value={formData.name}
            onChange={handleInputChange}
            className={showErrors && errors.name ? 'error' : ''}
          />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
            value={formData.email}
            onChange={handleInputChange}
            className={showErrors && errors.email ? 'error' : ''}
          />
        </Row>
        
        {showErrors && (errors.name || errors.email) && (
          <ErrorMessage>
            {errors.name && <div>{errors.name}</div>}
            {errors.email && <div>{errors.email}</div>}
          </ErrorMessage>
        )}
        
        {showPackageSelection && (
          <PackageSelect 
            value={formData.package} 
            onChange={handleInputChange}
            name="package"
            className={showErrors && errors.package ? 'error' : ''}
          >
            <option value="">Select a package</option>
            <option value="Starter">Starter - $200</option>
            <option value="Business">Business - $400</option>
            <option value="Enterprise">Enterprise - $800</option>
            <option value="Advanced Custom">Advanced Custom</option>
            <option value="Just Contact Us">Just Contact Us</option>
          </PackageSelect>
        )}
        
        {showErrors && errors.package && (
          <ErrorMessage>{errors.package}</ErrorMessage>
        )}
        
        <textarea
          name="message"
          cols="30"
          rows="2"
          placeholder="your message"
          value={formData.message}
          onChange={handleInputChange}
          className={showErrors && errors.message ? 'error' : ''}
        ></textarea>
        
        {showErrors && errors.message && (
          <ErrorMessage>{errors.message}</ErrorMessage>
        )}
        
        <div style={{ margin: "0 auto" }}>
          <button type="submit">
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
