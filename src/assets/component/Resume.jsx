import React from 'react';

function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <p>You can download my resume below to learn more about my background and skills.</p>
      <a
        href="https://docs.google.com/document/d/17FdT-2UB6Ogr-vdk3mdsHzcSmyoLPni1iB9Kazt4kLA/export?format=pdf"
        className="resume-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default Resume;