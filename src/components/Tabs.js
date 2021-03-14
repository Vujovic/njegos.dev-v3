import { useState } from 'react'
import styled from 'styled-components'

import WorkSection from './Projects'
import AboutSection from './About/Main'
import ContactSection from './Contact'

import { ReactComponent as Work } from '../assets/work.svg'
import { ReactComponent as About } from '../assets/about.svg'
import { ReactComponent as Contact } from '../assets/contact.svg'

const TabList = {
  work: <WorkSection />,
  about: <AboutSection />,
  contact: <ContactSection />,
}

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('work')
  return (
    <Style>
      <div className='container buttons'>
        <button
          className={selectedTab === 'work' ? 'active' : ''}
          onClick={() => setSelectedTab('work')}
          ariaLabel='Work section'
        >
          <Work /> <span className='text'>WORK</span>
        </button>
        <button
          className={selectedTab === 'about' ? 'active' : ''}
          onClick={() => setSelectedTab('about')}
          ariaLabel='About section'
        >
          <About /> <span className='text'>ABOUT</span>
        </button>
        <button
          className={selectedTab === 'contact' ? 'active' : ''}
          onClick={() => setSelectedTab('contact')}
          ariaLabel='Contact section'
        >
          <Contact /> <span className='text'>CONTACT</span>
        </button>
      </div>
      <div className='container'>{TabList[selectedTab]}</div>
    </Style>
  )
}

const Style = styled.div`
  .buttons {
    border-top: 1px solid var(--color-border);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .active {
      border-top: 1px solid var(--color-link);
      box-sizing: border-box;
      svg {
        fill: var(--color-link);
      }
    }
    button {
      background: none;
      border: none;
      color: var(--color-primary);
      cursor: pointer;
      display: flex;
      justify-content: center;
      outline: none;
      align-items: center;
      padding: 10px 0;
      font-family: 'Poppins', sans-serif;
      font-size: var(--font-size__large);
      font-weight: 500;
      width: 100%;
      :focus,
      :active {
        border-top: 1px solid var(--color-link);
        box-sizing: border-box;
        svg {
          fill: var(--color-link);
        }
      }
      svg {
        margin-right: 10px;
        fill: var(--color-light);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .buttons {
      button {
        span {
          display: none;
        }
        svg {
          margin-right: 0;
        }
      }
    }
  }
`

export default Tabs
