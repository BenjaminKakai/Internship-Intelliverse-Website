import React, { useState, useEffect, useRef } from "react";
import homeVideo from "../home video.mp4";
import './Home.css';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/IBMlogo.jpg",
    "/images/Jumialogo.jpg",
    "/images/ciscologo.jpg",
    "/images/googlelogo.jpg",
    "/images/amazonlogo.jpg",
    "/images/Nielsenlogo.jpg",
    "/images/microsoftlogo.jpg",
    "/images/donebydonelogo.jpg",
  ];

  const numberOfDuplicates = 1000;
  const duplicatedImages = Array.from({ length: numberOfDuplicates }, () => [...images]).flat();

  const inputRef = useRef(null);
  const imageContainerRef = useRef(null);

 const animationDuration = 30; 
  const timeGap = animationDuration / duplicatedImages.length; 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      setTimeout(() => setShowMenu(false), 5000);
    }
  };

  const toggleChat = () => {
    setShowChat(true);
  };

  const sendMessage = () => {
    setMessageSent(true);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    let timer;
    if (messageSent) {
      timer = setTimeout(() => {
        setShowChat(false);
        setMessageSent(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [messageSent]);

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(carouselTimer);
  }, []);

  return (
    <div className="home-slider" id="home">
      <video className="background-video" id="background-video" autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" />
      </video>
      
      
        <div className="home-content">
          <h1>
            Driving changes through <br />AI &amp; Data Solutions 
          </h1>
          <button className="btn btn-case-studies" onClick={toggleMenu}>
            Read Case Studies
          </button>
          <button className="btn btn-secondary" onClick={toggleChat}>
            Let's talk
          </button>
          

          <div style={{ 
              width: '130%', 
              height: '200px', 
              display: 'flex', 
              marginTop: '20px', 
              marginLeft: '-10%', 
              background: 'linear-gradient(to right, #003c1e, #002414)', 
              color: 'white', 
              alignItems: 'center',
          }}>
            <div style={{ flex: 1 }}></div>
            
            <div style={{ width: '1px', backgroundColor: 'white', height: '80%', margin: 'auto 0' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15px' }}>
              <h2 style={{ fontWeight: 'bold' }}>Artificial Intelligence</h2>
              <p>Building AI-powered solutions</p>
            </div>
            <div style={{ width: '1px', backgroundColor: 'white', height: '80%', margin: 'auto 0' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15px' }}>
              <h2 style={{ fontWeight: 'bold' }}>Advanced Analytics</h2>
              <p>Drive insights from your data</p>
            </div>
            
            <div style={{ width: '1px', backgroundColor: 'white', height: '80%', margin: 'auto 0' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15px' }}>

              <h2 style={{ fontWeight: 'bold' }}>Consulting</h2>
              <p>Bringing capabilities and<br /> consultative approach</p>
            </div>
          </div>

          {showMenu && (
            <div className="dropdown-menu">
              <span className="dropdown-close" onClick={closeMenu}>X</span>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#teams">Teams</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          )}

          {showChat && (
            <div className="chat-dialogue">
              <p>Hello, how can I be of help today?</p>
              <textarea ref={inputRef} placeholder="Type your text here..."></textarea>
              <button onClick={sendMessage}>Send</button>
              {messageSent && (
                <p>Thank you for reaching out. An expert will be in touch with you shortly.</p>
              )}
            </div>
          )}




<div
        style={{
          width: '100vw',
          height: '120px',
          marginLeft: '-10%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '270px',
          overflow: 'hidden'
        }}
      >
        <span style={{ color: 'black', zIndex: 2 }}>Our Clients</span>
        <div className="client-logos">
          <div className="logo-slider">
            {duplicatedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="client logo"
                className="client-logo"
                style={{
                  animationDelay: `${(timeGap * index)}s`,
                }}
              />
        
    ))}
  </div>
</div>







      </div>
    </div>
    </div>
  );
};

export default Home;
