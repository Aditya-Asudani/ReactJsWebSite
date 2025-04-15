import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Motorbike Explorer</h1>

      <p style={styles.paragraph}>
        Motorbike Explorer is a user-friendly platform designed to help enthusiasts and buyers explore top motorcycles from leading brands. The platform provides quick access to specifications, comparisons, and additional resources to make informed decisions.
      </p>

      <h2 style={styles.subheading}>Key Features</h2>
      <ul style={styles.list}>
        <li>Search and explore bikes by brand</li>
        <li>View specifications including engine type, power, torque, top speed, and more</li>
        <li>Access a curated list of top bikes from premium companies</li>
        <li>Discover notable motorcycles across categories such as speed, cost, and popularity</li>
        <li>Direct links to official Wikipedia pages for deeper insights</li>
      </ul>

      <h2 style={styles.subheading}>Technologies Used</h2>
      <ul style={styles.list}>
        <li>React JS for building a responsive and interactive frontend</li>
        <li>API Ninjas Motorcycles API for real-time data retrieval</li>
        <li>Custom CSS for layout and styling</li>
        <li>React Router for smooth client-side navigation</li>
      </ul>

      <h2 style={styles.subheading}>Project Objective</h2>
      <p style={styles.paragraph}>
        The aim of this project is to demonstrate effective use of REST APIs and frontend development skills. It also serves as a utility for bike enthusiasts to quickly explore models and gain essential insights.
      </p>

      <h2 style={styles.subheading}>Feedback & Improvement</h2>
      <p style={styles.paragraph}>
        This is an ongoing project open to feedback and improvements. Suggestions for new features or refinements are welcome and will help shape future updates.
      </p>

      <p style={{ ...styles.paragraph, marginTop: '40px', fontWeight: '600', textAlign: 'center' }}>
        Keep exploring. Ride safe.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'left',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '30px',
    textAlign: 'center',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
  },
  subheading: {
    fontSize: '24px',
    marginTop: '40px',
    marginBottom: '15px',
    color: '#333',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.7',
    marginBottom: '20px',
    color: '#444',
  },
  list: {
    fontSize: '18px',
    lineHeight: '1.8',
    paddingLeft: '20px',
    color: '#444',
  },
};

export default About;
