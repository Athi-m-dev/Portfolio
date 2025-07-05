import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

// --- Styled Components ---
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  font-family: inherit;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 2rem 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #0a0b10;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -1px;
`;

// --- Testimonials ---
const TestimonialsSection = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #000000 100%);
  position: relative;
  padding: 3rem 0 2rem 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 0, 128, 0.1) 0%, rgba(0, 0, 0, 0) 50%, rgba(255, 0, 128, 0.05) 100%);
    pointer-events: none;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TestimonialsContent = styled.div`
  color: #fff;
`;

const TestimonialsIntro = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AvatarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200px;
  
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const AvatarCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #ff0080;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(255, 0, 128, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 0, 128, 0.4);
  }
  
  &:nth-child(1) {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
  }
  
  &:nth-child(2) {
    top: 60px;
    left: 20%;
    z-index: 3;
  }
  
  &:nth-child(3) {
    top: 60px;
    right: 20%;
    z-index: 3;
  }
  
  &:nth-child(4) {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    
    &:nth-child(1) {
      top: 15px;
    }
    
    &:nth-child(2) {
      top: 45px;
      left: 25%;
    }
    
    &:nth-child(3) {
      top: 45px;
      right: 25%;
    }
    
    &:nth-child(4) {
      bottom: 15px;
    }
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;

// --- Packages ---
const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  justify-items: center;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PackageCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  width: 100%;
  max-width: 320px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  transition: box-shadow 0.3s, transform 0.3s;
  position: relative;
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    transform: translateY(-6px) scale(1.03);
  }
`;

const PackageTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #0a0b10;
  margin-bottom: 0.5rem;
`;

const PackageDesc = styled.div`
  font-size: 1rem;
  color: #444;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  margin: 0 0 1.5rem 0;
  padding-left: 1.2em;
  color: #333;
  font-size: 0.98rem;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background: var(--pink, #ff0080);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 2px 8px rgba(255,0,128,0.10);
  &:hover {
    background: #d6006e;
    box-shadow: 0 4px 16px rgba(255,0,128,0.18);
    transform: scale(1.04);
  }
`;

const PackagesSection = styled.section`
  width: 100%;
  background: #f8f9fa;
  position: relative;
  padding: 3rem 0 2rem 0;
  margin-top: 0;
`;

// --- Data ---
const testimonials = [
  {
    avatar: require("../assets/avatar-3.jpg"),
    review: "Absolutely wonderful service! The team exceeded my expectations.",
    name: "Priya S."
  },
  {
    avatar: require("../assets/avatar-4.jpg"),
    review: "Professional, creative, and always on time. Highly recommended!",
    name: "Rahul M."
  },
  {
    avatar: require("../assets/avatar-1.jpg"),
    review: "Great communication and support throughout the project.",
    name: "Sara K."
  },
  {
    avatar: require("../assets/project2.jpg"),
    review: "The website looks amazing and works perfectly on all devices.",
    name: "Amit T."
  }
];

const packages = [
  {
    title: "Starter – $200",
    desc: "Ideal for individuals and small businesses needing a basic online presence",
    features: [
      "Upto 3 Static Pages (e.g., Home, About, Contact)",
      "Mobile Responsive Design",
      "WhatsApp Chat Integration",
      "Basic SEO (meta titles, descriptions)",
      "Enquiry Form",
      "Social Media Links",
      "1 Month Post-Delivery Support",
      "Deployment support"
    ],
    cta: "Get Started",
    packageType: "Starter"
  },
  {
    title: "Business – $400",
    desc: "Suitable for local businesses and service providers",
    features: [
      "Upto 6–7 Pages with structured layout",
      "Enquiry, Booking, or Contact Forms",
      "Gallery, Testimonials, FAQ Section",
      "Google Maps Integration",
      "Optimized for Mobile and Tablets",
      "Light Speed Optimization",
      "Social Media & WhatsApp Integration",
      "1 Month Post-Delivery Support",
      "Deployment support"
    ],
    cta: "Get Started",
    packageType: "Business"
  },
  {
    title: "Enterprise – $800",
    desc: "For growing brands requiring professional-grade websites",
    features: [
      "Upto 10 Custom Pages",
      "Premium UI Design with Smooth Animations",
      "Admin Panel to Edit Text, Images, Offers, Gallery",
      "Booking / Appointment / Enquiry Management System",
      "Multiple Forms (General Contact, Departmental, Feedback)",
      "Dynamic Gallery / Portfolio / Menu Sections",
      "Payment Gateway Integration (Razorpay / Stripe)",
      "Newsletter / WhatsApp Lead Capture Integration",
      "SEO-Optimized (Meta Tags, Sitemap, Alt Attributes)",
      "Speed Optimization and Code Clean-up",
      "Google Analytics and Meta Pixel Setup",
      "Deployment support",
      "2 Month Support & 2 Revisions"
    ],
    cta: "Get Started",
    packageType: "Enterprise"
  },
  {
    title: "Advanced Custom – Based on requirements",
    desc: "For complex projects requiring custom backend and advanced features",
    features: [
      "Tailored Web Architecture with Custom Frontend",
      "Admin Dashboards and Role-Based Access",
      "Backend API Development (Node.js, Django, FastAPI, etc.)",
      "Relational or NoSQL Database Setup",
      "Authentication and Authorization Systems",
      "Complex UI Features (Search, Filters, Real-Time Updates)",
      "CRM / Third-Party Integrations",
      "Cloud Deployment and Version Control Setup",
      "Detailed Timeline and Pricing Based on Requirements",
      "Optional Long-Term Maintenance Contracts",
      "Deployment support"
    ],
    cta: "Get Started",
    packageType: "Advanced Custom"
  }
];

// --- Main Page Component ---
const FullServices = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const handleGetStartedClick = (packageType) => {
    // Navigate to home page and scroll to contact section with package type
    navigate(`/?package=${encodeURIComponent(packageType)}#contact`);
    
    // Add a small delay to ensure the page loads before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return (
    <PageWrapper>
      <TestimonialsSection>
        <TestimonialsTitle>What Clients Say</TestimonialsTitle>
        <TestimonialsContainer>
          <TestimonialsContent>
            <TestimonialsIntro>
              Our clients consistently praise our commitment to excellence, innovative design solutions, and exceptional customer service. From small businesses to enterprise clients, we've built lasting relationships based on trust, quality, and results that speak for themselves.
            </TestimonialsIntro>
          </TestimonialsContent>
          <AvatarsContainer>
            {testimonials.map((t, i) => (
              <AvatarCircle key={i}>
                <AvatarImage src={t.avatar} alt={t.name} />
              </AvatarCircle>
            ))}
          </AvatarsContainer>
        </TestimonialsContainer>
      </TestimonialsSection>
      <PackagesSection>
        <SectionTitle>Our Packages</SectionTitle>
        <PackagesGrid>
          {packages.map((p, i) => (
            <PackageCard key={i}>
              <PackageTitle>{p.title}</PackageTitle>
              <PackageDesc>{p.desc}</PackageDesc>
              <FeatureList>
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </FeatureList>
              <CTAButton onClick={() => handleGetStartedClick(p.packageType)}>
                {p.cta}
              </CTAButton>
            </PackageCard>
          ))}
        </PackagesGrid>
      </PackagesSection>
    </PageWrapper>
  );
};

export default FullServices; 