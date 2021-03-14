import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as Behance } from '../assets/behance.svg'
import { ReactComponent as Dribbble } from '../assets/dribbble.svg'

const Header = () => (
  <Navbar>
    <div className='container'>
      <a href='/'>
        <Logo />
        <h1>njegos.dev</h1>
      </a>
      <div className='social'>
        <a
          href='https://github.com/Vujovic'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github profile'
        >
          <Github />
        </a>
        <a
          href='https://www.behance.net/njegos'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Behance profile'
        >
          <Behance />
        </a>
        <a
          href='https://dribbble.com/Njegos'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Dribbble profile'
        >
          <Dribbble />
        </a>
      </div>
    </div>
  </Navbar>
)

const Navbar = styled.header`
  background-color: var(--color-bg__light);
  border-bottom: 1px solid var(--color-border);
  .container {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
  a {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    :hover {
      opacity: 0.9;
      transform: translateY(-3px);
    }
  }
  h1 {
    color: var(--color-primary);
    margin-left: 10px;
    font-weight: 500;
  }
  .social {
    display: flex;
    justify-content: space-between;
    a {
      margin: 0 5px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    .container > a {
      h1 {
        font-size: 18px;
      }
    }
  }
`

export default Header
