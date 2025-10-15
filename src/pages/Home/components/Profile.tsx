import React from 'react';
import { useTranslation } from 'react-i18next';
import profile_image from '@/assets/image/profile.jpg';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const handleImageClick = () => {
    // 打开新标签页显示协会简介
    window.open('/profile', '_blank');
  };

  return (
    <div className={styles.profileSection}>
      <div 
        className={styles.profileImageFullscreen}
        onClick={handleImageClick}
        style={{ 
          backgroundImage: `url(${profile_image})`,
          cursor: 'pointer'
        }}
      >
        <div className={styles.imageOverlay}>
          <div className={styles.imageContent}>
            <h2 className={styles.imageTitle}>{t('profile.title')}</h2>
            <p className={styles.imageDescription}>{t('profile.subtitle')}</p>
            <div className={styles.clickHint}>
              <span>{t('profile.clickHint')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
