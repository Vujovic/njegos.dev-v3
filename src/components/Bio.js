import styled from 'styled-components'
import Img from 'react-cool-img'

import Me from '../images/me.jpg'

const Bio = () => (
  <Style>
    <Img src={Me} alt='This is me' />
    <div className='description'>
      <h1>Njegos Vujovic</h1>
      <h2>Web developer & UI/UX designer</h2>
      <p>
        Full-stack web developer and UI/UX designer specializing in jamstack
        websites and web apps.
      </p>
    </div>
  </Style>
)

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  img {
    background-color: var(--color-bg);
    border: 2px solid var(--color-link);
    border-radius: 50%;
    margin-right: 30px;
    height: 130px;
    width: 130px;
    padding: 4px;
  }
  .description {
    h1 {
      color: var(--color-primary);
      font-size: var(--font-size__large);
      font-weight: 600;
    }
    h2 {
      color: var(--color-link);
      font-size: var(--font-size__medium);
      font-weight: 600;
    }
    p {
      max-width: 300px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    text-align: center;
    img {
      margin-right: 0;
    }
  }
`

export default Bio
