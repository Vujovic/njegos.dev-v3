import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import styled from 'styled-components'

import Loading from './Loading'

import { ReactComponent as NewTab } from '../assets/newTab.svg'

const Projects = () => {
  const [projects, setProjects] = useState(null)
  useEffect(() => {
    const fetchProjects = async () => {
      const { projects } = await request(
        'https://api-eu-central-1.graphcms.com/v2/ckm3ib3n6in1f01xh56ky6poe/master',
        `
          {
            projects (orderBy: createdAt_DESC) {
              thumbnail {
                url
              }
              webp {
                url
              }
              title
              tags
              isWebsite
              url
            } 
          }
        `
      )
      setProjects(projects)
    }
    fetchProjects()
  }, [])

  return (
    <ProjectCards className='container'>
      {!projects ? (
        <Loading />
      ) : (
        projects.map(({ thumbnail, webp, title, tags, isWebsite, url }) => (
          <div className='card' key={title}>
            <picture>
              <source srcset={webp.url} type='image/webp' />
              <source srcset={thumbnail.url} type='image/jpeg' />
              <img src='img/creakyOldJPEG.jpg' alt={title} />
            </picture>
            <div className='info'>
              <div className='text'>
                <h1>{title}</h1>
                <p>{tags}</p>
              </div>
              {isWebsite ? (
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={url}
                >
                  Preview <NewTab />
                </a>
              ) : (
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={url}
                >
                  Behance <NewTab />
                </a>
              )}
            </div>
          </div>
        ))
      )}
    </ProjectCards>
  )
}

const ProjectCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 70px 0;
  .card {
    margin: 10px;
    picture {
      source,
      img {
        max-width: 460px;
      }
    }
    .info {
      background-color: var(--color-bg__light);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      a {
        border-radius: 20px;
        border: 1px solid var(--color-link);
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        padding: 5px 10px;
        transition: all 0.3s ease;
        svg {
          fill: var(--color-link);
          margin-left: 5px;
        }
        :hover {
          opacity: 0.9;
          transform: translateY(-3px);
        }
      }
      .text {
        h1 {
          color: var(--color-primary);
          font-size: 18px;
        }
        p {
          max-width: 250px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 35px 0;
    .card {
      picture {
        source,
        img {
          max-width: 95vw;
        }
      }
    }
  }
`

export default Projects
