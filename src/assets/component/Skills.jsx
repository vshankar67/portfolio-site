import React from 'react';

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript (ES6)', 'Bootstrap', 'Flexbox & Grid',
    'jQuery', 'React.js', 'Node.js', 'Express.js', 'EJS',
    'Git & GitHub', 'APIs', 'SQL', 'PostgreSQL'
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;