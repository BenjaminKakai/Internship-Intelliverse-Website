import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';
import './headerservices.css';
import './ResponsiveHeader.css';

function Header() {
  const logoPath = '/images/logo.png';
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [clickedItem, setClickedItem] = useState(null);
  
  // Declare the showSubItems state
  const [showSubItems, setShowSubItems] = useState({});

  // Handle item click to toggle sub-items
  const handleItemClick = (item) => {
    setClickedItem(item);
    setShowSubItems((prevShowSubItems) => ({
      ...prevShowSubItems,
      [item]: !prevShowSubItems[item],
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbarBottom = document.querySelector('.navbar-bottom');
      const navbarTop = document.querySelector('.navbar-top');

      navbarTop.style.backgroundColor = '#ffffff';

      if (window.scrollY > 0) {
        navbarBottom.style.backgroundColor = '#ffffff';
      } else {
        navbarBottom.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (contentType) => {
    if (activeDropdown) {
      document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
    }

    const navbarBottom = document.querySelector('.navbar-bottom');
    navbarBottom.style.backgroundColor = '#ffffff';

    let dropdownContent;
    switch (contentType) {
      case 'services':
        dropdownContent = document.querySelector('.services-content');
        break;
      case 'portfolio':
        dropdownContent = document.querySelector('.portfolio-content');
        break;
      case 'teams':
        dropdownContent = document.querySelector('.teams-content');
        break;
      default:
        return;
    }

    if (dropdownContent) {
      dropdownContent.style.display = 'grid';
    }

    setActiveDropdown(contentType);
  };

  const handleMouseLeave = (e, contentType) => {
    // Do nothing on mouse leave
  };

  const handleNavbarMouseLeave = () => {
    if (activeDropdown) {
      document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
      const navbarBottom = document.querySelector('.navbar-bottom');
      navbarBottom.style.backgroundColor = 'transparent';
      setActiveDropdown(null);
    }
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);


  
  
  return (
<div className="showcase">
  <div className="navbar-container" onMouseLeave={handleNavbarMouseLeave}>
    <div className="navbar-top">
      <ul className="left">
        <li><a href="#">Download our AI in Business | Global Trends Report 2023 and stay ahead of the curve!</a></li>
      </ul>
    </div>
      
      
      <div className="navbar-bottom">
        <a className="brand-left" href="#home">
          <img src={logoPath} alt="INTELIVERSE" className="brand-logo" />
        </a>
        <ul className="menu-right">
          {/* ... other menu items ... */}
          
          
          
<div className="navbar-wrapper">
    <li>
        <div
            className="dropdown services-dropdown"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={(e) => handleMouseLeave(e, 'services')}
        >
            <button 
                className="dropbtn" 
                style={{ fontWeight: 'bold', backgroundColor: '', color: 'black' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'lightgreen'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
            >
                Services
            </button>
            <div className="services-pipe" style={{ height: '0px', width: '2px', backgroundColor: 'lightgreen', transition: 'height 0.3s', overflow: 'hidden' }}></div>
            <div className="services-underline" style={{ display: 'none', height: '2px', backgroundColor: 'green', width: '100%', marginTop: '2px' }}></div>
            <div
                className="dropdown-content services-content extended-dropdown"
                style={{
                    display: 'none', // Hide initially
                    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
                }}
            >
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Artificial Intelligence & ML</h3>
                    <a href="#" className="submenu-link slide-left">AI Consulting</a>
                    <a href="#" className="submenu-link slide-left">MLOps Consulting</a>
                </div>
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Data Engineering</h3>
                    <a href="#" className="submenu-link slide-left">Data Engineering Services</a>
                    <a href="#" className="submenu-link slide-left">Big Data Consulting</a>
                </div>
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Generative AI</h3>
                    <a href="#" className="submenu-link slide-left">Generative AI Development <br />Company</a>
                </div>
            </div>
            <div className="extended-dropdown" style={{ display: 'none' }}>
                {/* ... Extended Content ... */}
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}






<div className="navbar-wrapper">
    <li>
        <div
            className="dropdown portfolio-dropdown"
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={(e) => handleMouseLeave(e, 'portfolio')}
        >
            <button 
                className="dropbtn" 
                style={{ fontWeight: 'bold', backgroundColor: '', color: 'black' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'lightgreen'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
            >
                Portfolio
            </button>
            <div className="portfolio-pipe" style={{ height: '0px', width: '2px', backgroundColor: 'lightgreen', transition: 'height 0.3s', overflow: 'hidden' }}></div>
            <div
                className="dropdown-content portfolio-content extended-dropdown"
                style={{
                    display: 'none', // Hide initially
                    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
                }}
            >
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Technologies</h3>
                    <img src="/images/Computer Vision Solution.jpg" alt="Computer Vision Solution" style={{ width: '300px', height: '100px' }} />
                    <a href="#" className="submenu-link slide-left">Computer Vision Solutions</a>
                    <img src="/images/NLPP.jpg" alt="NLP Solution" style={{ width: '300px', height: '100px' }} />
                    <a href="#" className="submenu-link slide-left">NLP Solutions</a>
                </div>

                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Industries</h3>
                    <a href="#" className="submenu-link slide-left">Manufacturing</a>
                    <a href="#" className="submenu-link slide-left">Retail</a>
                    <a href="#" className="submenu-link slide-left">Finance & Insurance</a>
                    <a href="#" className="submenu-link slide-left">Logistics</a>
                    <a href="#" className="submenu-link slide-left">Aviation</a>
                    <a href="#" className="submenu-link slide-left">Technology Company</a>
                </div>

                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Case Studies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" style={{ color: 'lightgreen' }}>all case studies</a></h3>
                    <a href="#" className="submenu-link slide-left">Upgrading AI into the production- <br /> ready stage with microservice- <br /> based MLOps</a>
                    <a href="#" className="submenu-link slide-left">Audit and future-proof, <br />scaleable dataflows</a>
                    <a href="#" className="submenu-link slide-left">Teezly <br /> Automated image quality <br /> detection engine for retail</a>
                    <a href="#" className="submenu-link slide-left">Unified Supply Chain Management</a>
                </div>
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}

            
          
  <div className="navbar-wrapper">
  <li>
    <div className="dropdown"
         onMouseEnter={() => {
           // Hide any active dropdown immediately
           if (activeDropdown) {
             document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
           }
           
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent';
           document.querySelector('.resources-button').style.color = 'lightgreen';
         }}
         onMouseLeave={() => {
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent'; // Reset to transparent.
           document.querySelector('.resources-button').style.color = 'black';
         }}
    >
      <a href="/resources" className="dropbtn resources-button" style={{ backgroundColor: '', color: 'black' }}>
        Resources
      </a>
      <div className="dropdown-content resources-dropdown-content" style={{ display: 'none' }}>
        <div className="submenu-link slide-left">
          Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
        </div>
      </div>
    </div>
  </li>
</div> {/* Closing div tag for navbar-wrapper */}





<div className="navbar-wrapper">
  <li>
    <div className="dropdown"
         onMouseEnter={() => {
           // Hide any active dropdown immediately
           if (activeDropdown) {
             document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
           }
           
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent';
           document.querySelector('.blog-button').style.color = 'lightgreen';
         }}
         onMouseLeave={() => {
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent'; // Reset to transparent.
           document.querySelector('.blog-button').style.color = 'black';
         }}
    >
      <a href="/blog" className="dropbtn blog-button" style={{ backgroundColor: '', color: 'black' }}>
        Blog
      </a>
      <div className="dropdown-content blog-dropdown-content" style={{ display: 'none' }}>
        <div className="submenu-link slide-left">
          Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
        </div>
      </div>
    </div>
  </li>
</div>




<div className="navbar-wrapper">
    <li>
        <div
            className="dropdown teams-dropdown"
            onMouseEnter={() => handleMouseEnter('teams')}
            onMouseLeave={(e) => handleMouseLeave(e, 'teams')}
        >
            <button 
                className="dropbtn" 
                style={{ fontWeight: 'bold', backgroundColor: '', color: 'black' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'lightgreen'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
            >
                Teams
            </button>
            <div className="teams-pipe" style={{ height: '0px', width: '2px', backgroundColor: 'lightgreen', transition: 'height 0.3s', overflow: 'hidden' }}></div>
            <div
                className="dropdown-content teams-content extended-dropdown"
                style={{ display: 'none' }}
            >
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Career</h3>
                    <a href="#" className="submenu-link slide-left" style={{ width: '500px', display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="/images/check job opportunities.jpg" 
                            alt="Check job opportunities" 
                            style={{ width: '100px', height: '70px', marginRight: '10px' }} 
                        />
                        Check job opportunities <br />and join us
                    </a>
                </div>
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Meet us</h3>
                    <a href="#" className="submenu-link slide-left" style={{ width: '300px', display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="/images/learn more about.jpg" 
                            alt="Learn more about Inteliverse" 
                            style={{ width: '100px', height: '70px', marginRight: '10px' }} 
                        />
                        Learn more about how it is <br /> to work at Inteliverse
                    </a>
                </div>
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}



    

<div className="navbar-wrapper">
    <li className="contact-us-button">
        <div className="dropdown">
            <Link 
                to="/contact" 
                className="dropbtn"
                style={{ 
                    backgroundColor: 'green',  // Start with a green background
                    color: 'black',
                    borderRadius: '10px',
                    transition: 'background-color 0.3s',
                    whiteSpace: 'nowrap',
                    height: '30px',
                    paddingTop: '20px',
                    paddingBottom: '5px',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgreen'}  // Transition to light green when hovered
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'green'}  // Transition back to green when not hovered
            >
                Contact Us
            </Link>
            <div className="dropdown-content">
                <div className="submenu-link" style={{ cursor: 'pointer' }}>
                    Use This Form <span className="arrow">&gt;</span>
                </div>
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}



<div>
  {/* ... other components */}
  {isSmallScreen && (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} ref={dropdownRef}>
      <button className="responsive-button" onClick={toggleDropdown} style={{ marginTop: '20px' }}>
        {isDropdownVisible ? '✕' : '☰'}
      </button>
      {isDropdownVisible && (
        <div className="responsive-dropdown dropdown-box">
          <ul className="simple-dropdown-list">
            <li>
              <div onClick={(e) => { e.stopPropagation(); handleItemClick('services'); }}>
                <a href="#" className={clickedItem === 'services' ? 'active' : ''}>Services</a>
              </div>
              {showSubItems['services'] && (
                <ul className={`sub-list ${showSubItems['services'] ? 'show' : ''}`}>
                  <li>
                    <div onClick={(e) => { e.stopPropagation(); handleItemClick('item1'); }}>
                      <a href="#" className={clickedItem === 'item1' ? 'active' : ''}>Item 1</a>
                    </div>
                    {showSubItems['item1'] && (
                      <ul className="sub-list">
                        <li>Sub-item 1</li>
                        <li>Sub-item 2</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div onClick={(e) => { e.stopPropagation(); handleItemClick('item2'); }}>
                      <a href="#" className={clickedItem === 'item2' ? 'active' : ''}>Item 2</a>
                    </div>
                    {showSubItems['item2'] && (
                      <ul className="sub-list">
                        <li>Sub-item 1</li>
                        <li>Sub-item 2</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div onClick={(e) => { e.stopPropagation(); handleItemClick('item3'); }}>
                      <a href="#" className={clickedItem === 'item3' ? 'active' : ''}>Item 3</a>
                    </div>
                    {showSubItems['item3'] && (
                      <ul className="sub-list">
                        <li>Sub-item 1</li>
                        <li>Sub-item 2</li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )}
</div>

<div>
  {/* ... other components */}
  {isSmallScreen && (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} ref={dropdownRef}>
      <button className="responsive-button" onClick={toggleDropdown} style={{ marginTop: '20px' }}>
        {isDropdownVisible ? '✕' : '☰'}
      </button>
      {isDropdownVisible && (
        <div className="responsive-dropdown dropdown-box">
          <ul className="simple-dropdown-list">
            <li>
              <div onClick={() => handleItemClick('services')}>
                <a href="#" className={clickedItem === 'services' ? 'active' : ''}>Services</a>
              </div>
              {showSubItems['services'] && (
                <ul className={`sub-list ${showSubItems['services'] ? 'show' : ''}`}>
                  <li>
                    <div onClick={() => handleItemClick('item1')}>
                      <a href="#" className={clickedItem === 'item1' ? 'active' : ''}>Item 1</a>
                    </div>
                    {showSubItems['item1'] && (
                      <ul className="sub-list">
                        <li>Sub-item 1</li>
                        <li>Sub-item 2</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div onClick={() => handleItemClick('item2')}>
                      <a href="#" className={clickedItem === 'item2' ? 'active' : ''}>Item 2</a>
                    </div>
                    {showSubItems['item2'] && (
                      <ul className="sub-list">
                        <li>Sub-item 1</li>
                        <li>Sub-item 2</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div onClick={() => handleItemClick('item3')}>
                      <a href="#" className={clickedItem === 'item3' ? 'active' : ''}>Item 3</a>
                    </div>
                    {showSubItems['item3'] && (
                      <ul className="sub-list">
                        <li>Sub-item 1</li>
                        <li>Sub-item 2</li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )}
</div>



    


</ul>
</div>
</div>
</div>
);
}

export default Header;


