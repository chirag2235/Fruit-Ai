// src/AboutPage.js
import React from 'react';

// Inline styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: '1.1em',
    marginBottom: '20px',
    lineHeight: '1.6',
    color: '#555',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
    marginBottom: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
  code: {
    backgroundColor: '#f8f9fa',
    padding: '2px 4px',
    borderRadius: '4px',
    fontSize: '1em',
  },
};

function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About the Fruit API</h1>
      <p style={styles.text}>
        The Fruit API provides comprehensive information about various fruits. With this API, you can access data on:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Fruit names</li>
        <li style={styles.listItem}>Descriptions</li>
        <li style={styles.listItem}>Nutrition facts</li>
        <li style={styles.listItem}>Images</li>
        <li style={styles.listItem}>And more!</li>
      </ul>
      <p style={styles.text}>
        <strong>Features:</strong>
        <br />
        - Get detailed information about each fruit
        <br />
        - Search for fruits by name
        <br />
        - Retrieve nutritional information and images
      </p>
      <p style={styles.text}>
        <strong>How to Use:</strong>
        <br />
        To use the Fruit API, send a request to the endpoint with the desired parameters. For example, to get information about apples, you can use the endpoint: <code style={styles.code}>/api/fruits/apples</code>.
      </p>
      <p style={styles.text}>
        For more details, visit the official documentation at{' '}
        <a href="https://fruit-api-docs.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Fruit API Documentation
        </a>.
      </p>
    </div>
  );
}

export default AboutPage;
