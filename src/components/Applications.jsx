import React, { useState } from 'react';
import styles from '../styles/Applications.module.css';
import unsplash from '../lib/unsplash.js';

export default function Applications() {
  const [applications] = useState([
    { id: 1, title: 'Math Tutoring', status: 'Pending' },
    { id: 2, title: 'Website Design', status: 'Approved' }
  ]);

  return (
    <div className={styles.applications}>
      <h3>Your Applications</h3>
      <div className={styles.grid}>
        {applications.map((app) => (
          <div key={app.id} className={styles.card}>
            <h4>{app.title}</h4>
            <p>Status: <span className={styles[app.status.toLowerCase()]}>{app.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}