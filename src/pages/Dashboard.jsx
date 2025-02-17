import { useState } from 'react';
import ProfileSection from '../components/ProfileSection';
import Applications from '../components/Applications';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState(['Tutoring', 'Graphic Design']);

  return (
    <div className={styles.dashboard}>
      <ProfileSection 
        bio={bio}
        setBio={setBio}
        skills={skills}
        setSkills={setSkills}
      />
      <Applications />
    </div>
  );
}