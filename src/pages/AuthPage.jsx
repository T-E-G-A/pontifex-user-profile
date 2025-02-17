import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import styles from '../styles/AuthPage.module.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{isLogin ? 'Welcome Back!' : 'Join SkillBridge'}</h2>
        <AuthForm isLogin={isLogin} onSuccess={handleAuthSuccess} />
        <button 
          className={styles.toggleMode}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}