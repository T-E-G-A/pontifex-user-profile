import React, { useState } from 'react';
import styles from '../styles/ProfileSection.module.css';

function ProfileSection({ bio, setBio, skills, setSkills }) {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  return (
    <div className={styles.profileCard}>
      <h3>Your Profile</h3>
      <div className={styles.section}>
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Describe your skills and experience..."
        />
      </div>
      
      <div className={styles.section}>
        <label>Skills:</label>
        <div className={styles.skillsInput}>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
          />
          <button onClick={handleAddSkill}>+ Add</button>
        </div>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;