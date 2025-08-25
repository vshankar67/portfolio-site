import React from 'react';

const projectData = [
  {
    title: 'Keeper App',
    description: 'A note-taking app built with React, inspired by Google Keep. Features dynamic note creation and deletion.',
    tech: ['React', 'CSS', 'JavaScript'],
    liveLink: 'https://keeper-app-nine-chi.vercel.app/',
    repoLink: 'https://github.com/vshankar67/Keeper-App'
  },
  {
    title: 'Movie Ranking',
    description: 'Simple HTML project ranking favorite movies with images and descriptions.',
    tech: ['HTML', 'CSS'],
    liveLink: 'https://vshankar67.github.io/Vishal-s-Portfolio/public/movie-ranking.html',
    repoLink: 'https://github.com/vshankar67/Vishal-s-Portfolio'
  },
  {
    title: 'Birthday Invite',
    description: 'A fun birthday invitation page using basic HTML and CSS.',
    tech: ['HTML', 'CSS'],
    liveLink: 'https://vshankar67.github.io/Vishal-s-Portfolio/assets/3.4%20Birthday%20Invite%20Project/index1.html',
    repoLink: 'https://github.com/vshankar67/Vishal-s-Portfolio'
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Used:</strong> {project.tech.join(', ')}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;