import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.js';
import DefaultPageTheme from '../Themes/DefaultPageTheme';

const AboutUs = () => {
  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
        <div className='aboutus'>
          <div className='aboutus-container-pauls'>
            <div className='aboutus-section'>
              <h2 className='aboutus-header'>Paul Choi</h2>
              <div className='aboutus-profile-pic-paul'></div>
            </div>
            <div className='aboutus-section'>
              <h2 className='aboutus-header2'>About Me</h2>
              <p className='aboutus-text'>I'm a passionate gamer, friend, and supporter! I love to be creative and help others acheive their goals. Oh i'm also a fullstack software engineer.</p>
            </div>
            <div className='aboutus-section'>
              <h2 className='aboutus-header2'>Contact Me</h2>
              <a
                href='https://www.instagram.com/paulchoiiii/'
                rel="noreferrer"
                className='social-icon-link instagram'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </a>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <a
                href='https://www.linkedin.com/in/paulsoonminchoi/'
                rel="noreferrer"
                className='social-icon-link linkedin'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </a>
              <a
                className='social-icon-link github'
                href='https://github.com/PaulSoonMinChoi'
                rel="noreferrer"
                target='_blank'
                aria-label='Github'
              >
                <i className='fab fa-github' />
              </a>
            </div>
          </div>




          <div className='aboutus-container-tracys'>
            <div className='aboutus-section'>
              <h2 className='aboutus-header'>Tracy Tran</h2>
              <div className='aboutus-profile-pic-tracy'></div>
            </div>
            <div className='aboutus-section'>
              <h2 className='aboutus-header2'>About Me</h2>
              <p className='aboutus-text'>A blonde ninja once told me to believe in myself and to never give up so now here I am, a software engineer! My dream is to help bring "the next big game" to life so we can all enjoy it together, as gamers.</p>
            </div>
            <div className='aboutus-section'>
              <h2 className='aboutus-header2'>Contact Me</h2>
              <a
                className='social-icon-link instagram'
                href='https://www.instagram.com/tracetea/'
                rel="noreferrer"
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </a>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <a
                className='social-icon-link linkedin'
                href='https://www.linkedin.com/in/tracythutran/'
                rel="noreferrer"
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </a>
              <a
                className='social-icon-link github'
                href='https://github.com/enobot'
                rel="noreferrer"
                target='_blank'
                aria-label='Github'
              >
                <i className='fab fa-github' />
              </a>
            </div>
          </div>




          <div className='aboutus-container-justins'>
            <div className='aboutus-section'>
              <h2 className='aboutus-header'>Justin Murakami</h2>
              <div className='aboutus-profile-pic-justin'></div>
            </div>
            <div className='aboutus-section'>
              <h2 className='aboutus-header2'>About Me</h2>
              <p className='aboutus-text'>I’m a software engineer, living and working in Los Angeles.  I love gaming and building supportive communities, and hope you will have as much fun using BLU as we had developing it!</p>
            </div>
            <div className='aboutus-section'>
              <h2 className='aboutus-header2'>Contact Me</h2>
              <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <a
                className='social-icon-link linkedin'
                href='https://www.linkedin.com/in/justin-murakami/'
                rel="noreferrer"
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </a>
              <a
                className='social-icon-link github'
                href='https://github.com/JustinMurakami'
                rel="noreferrer"
                target='_blank'
                aria-label='Github'
              >
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </div>
        <Footer />

      </DefaultPageTheme>
    </div>
  )
}

export default AboutUs;
