import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { CodeSquare, BookmarkStarFill } from "react-bootstrap-icons";


interface Project {
  id: number,
  name: string,
  html_url: string,
  description: string,
  topics?: string []
}

const Timeline: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/vivianetrindade/repos?sort=updated')
      .then(data => {
        return data.json()
      }).then((result) => {
        result.map(((info: Project) => {
          const newProject: Project = {
            id: info.id,
            name: info.name,
            html_url: info.html_url,
            description: info.description,
            topics: info.topics
          };
          setProjects(projects => [...projects, newProject]);

          return null;
        }))
      })
      .catch((error: Error)=> {
        console.log(error)
      }) 
      
  }, [])
  console.log(projects, 'projects')
  return (
    <section id='projectstimeline'>
     <h1 className='title'>Projects Timeline</h1>
      <VerticalTimeline>
        {projects.map(project => {
          return (<VerticalTimelineElement className="vertical-timeline-element--work" 
            key={project.id}
            contentStyle={{background: '#fff'}}
            iconStyle={{background: 'rgb(122, 49, 93)'}}
            icon={<CodeSquare/>} >
            <h3 className='vertical-timeline-element-title'>{project.name}</h3>
            <h5 className='vertical-timeline-element-subtitle'>{project.description}</h5>
            {project.topics?.map(topic => {
              return (
              <section className='topics-container'>
                <span className='topic'>{topic} </span>
              </section>)
            })}
            <br/>
            <a className='button' href={project.html_url}>View Project</a>
            
          </VerticalTimelineElement>)
        })}
        <VerticalTimelineElement
        iconStyle={{background: 'rgb(122, 49, 93)'}}
        icon={<BookmarkStarFill/>}></VerticalTimelineElement>
      </VerticalTimeline>
     
    </section>
  )
}

export default Timeline;

