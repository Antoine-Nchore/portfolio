import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      style={{
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h2>About Me</h2>
      <p style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        I'm a passionate <strong>Software Engineer</strong> and <strong>Machine Learning Engineer</strong> with a strong
        background in developing full-stack web applications and deploying intelligent data-driven solutions.
        I enjoy building scalable systems and creating meaningful impact through technology. Currently focused on
        working with JavaScript, React, Python, FastAPI, and ML frameworks like TensorFlow and scikit-learn.
      </p>
    </section>
  );
}
