import styled from 'styled-components'

import { ReactComponent as Illustration } from '../../assets/illustration.svg'

const AboutMe = () => (
  <StyledAboutMe>
    <div className='text'>
      <h1>I'm Njegos</h1>
      <p>
        Full-stack web developer and UI/UX designer specializing in full-stack
        Javascript applications and modern static sites.
      </p>
      <p>
        I love everything web-related from top to bottom. I’ve done on-site and
        remote work for agencies, consulted for startups, worked on digital
        products for business and consumer use alike.
      </p>
    </div>
    <Illustration />
  </StyledAboutMe>
)

const StyledAboutMe = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  padding: 70px 0;
  .text {
    h1 {
      color: var(--color-primary);
      font-weight: 600;
    }
    p {
      font-size: var(--font-size__medium);
      margin: 20px 0;
      max-width: 400px;
      text-align: justify;
    }
  }
  svg {
    margin: 20px;
    max-width: 500px;
    min-height: 250px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    .text {
      padding: 0 20px;
    }
  }
`

export default AboutMe
