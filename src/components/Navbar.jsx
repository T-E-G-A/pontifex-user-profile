import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>SkillBridge</Link>
        <div className={styles.links}>
          <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}