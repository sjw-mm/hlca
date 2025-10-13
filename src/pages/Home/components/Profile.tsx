import React from 'react';
import { useTranslation } from 'react-i18next';
import profile_image from '@/assets/image/profile.jpg';
import './Profile.css';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const handleImageClick = () => {
    // 打开新标签页显示协会简介
    window.open('/profile', '_blank');
  };

  return (
    <div className="profile-section">
      <div 
        className="profile-image-fullscreen"
        onClick={handleImageClick}
        style={{ 
          backgroundImage: `url(${profile_image})`,
          cursor: 'pointer'
        }}
      >
        <div className="image-overlay">
          <div className="image-content">
            <h2 className="image-title">{t('profile.title')}</h2>
            <p className="image-description">{t('profile.subtitle')}</p>
            <div className="click-hint">
              <span>{t('profile.clickHint')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
