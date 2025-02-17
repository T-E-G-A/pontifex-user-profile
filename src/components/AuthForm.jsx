import { useState } from 'react';
import styles from '../styles/AuthForm.module.css';

export default function AuthForm({ isLogin, onSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic mock authentication
    console.log('Auth data:', formData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="email"
        placeholder="Student Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        {isLogin ? 'Login' : 'Create Account'}
      </button>
    </form>
  );
}