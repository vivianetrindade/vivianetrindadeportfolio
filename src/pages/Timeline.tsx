import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { Clipboard2Data, CodeSquare } from "react-bootstrap-icons";

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
  return (
    <section >
     <h1 className='title'>
      <VerticalTimeline>
        {projects.map(project => {
          return (<VerticalTimelineElement key={project.id} >
            <h3 className='vertical-timeline-element-title'>{project.name}</h3>
          </VerticalTimelineElement>)
        })}
      </VerticalTimeline>
     </h1>
    </section>
  )
}

export default Timeline;

