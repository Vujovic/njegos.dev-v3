import styled from 'styled-components'

import { ReactComponent as Dev } from '../../assets/aboutDev.svg'
import { ReactComponent as Design } from '../../assets/aboutDesigner.svg'
import { ReactComponent as Javascript } from '../../assets/aboutJS.svg'
import { ReactComponent as Collaborator } from '../../assets/aboutCollab.svg'

const AboutCards = () => (
  <Cards>
    <div className='card'>
      <h3>
        <Dev /> Developer
      </h3>
      <div className='description'>
        <h4>Skills:</h4>
        <p>HTML, CSS, Javascript, NodeJS, GraphQL</p>
      </div>
      <div className='description'>
        <h4>Technologies:</h4>
        <p>
          React, Redux, Gatsby, Next, Express, Apollo, MongoDB, PostgreSQL, Git
        </p>
      </div>
    </div>
    <div className='card'>
      <h3>
        <Design /> Designer
      </h3>
      <div className='description'>
        <h4>What I do:</h4>
        <p>UI, UX, Web, Apps, Mobile, Desktop</p>
      </div>
      <div className='description'>
        <h4>Software I use:</h4>
        <p>
          Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop, Adobe After
          Effects
        </p>
      </div>
    </div>
    <div className='card'>
      <h3>
        <Javascript /> Javascript addict
      </h3>
      <div className='description'>
        <h4>Go-to Front end PWAs:</h4>
        <p>React, Gatsby, GraphQL, Styled Components</p>
      </div>
      <div className='description'>
        <h4>Go-to Full stack Web Apps:</h4>
        <p>React, Next, Node, Express, Mongodb || PostgreSQL</p>
      </div>
    </div>
    <div className='card'>
      <h3>
        <Collaborator /> Collaborator
      </h3>
      <div className='description'>
        <h4>Project management:</h4>
        <p>Agile, Scrum, Hybrid, Waterfall, Git, Gitflow</p>
      </div>
      <div className='description'>
        <h4>Software:</h4>
        <p>Clubhouse, Jira, Slack, Trello</p>
      </div>
    </div>
  </Cards>
)

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 80px;
  max-width: 1440px;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    width: 50%;
    h3 {
      border-bottom: 1px solid var(--color-link);
      color: var(--color-primary);
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      padding: 20px 40px;
      svg {
        margin-right: 10px;
      }
    }
    .description {
      margin: 20px 0;
      h4 {
        color: var(--color-primary);
        font-size: var(--size__medium);
        font-weight: 600;
      }
      p {
        font-size: var(--size__medium);
        width: 350px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 100%;
      svg {
        min-height: 40px;
        min-width: 40px;
      }
    }
  }
`

export default AboutCards
