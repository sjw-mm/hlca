import React from 'react';
import { UserOutlined, AimOutlined, StarOutlined, HeartOutlined, TeamOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './index.css';

const ProfileDetail: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="profile-detail-page">
      <div className="profile-detail-container">
        {/* 我们的名字 */}
        <section className="profile-section">
          <div className="section-header">
            <div className="section-image-placeholder">
              <UserOutlined />
            </div>
            <h2 className="section-title">{t('profile.ourName.title')}</h2>
          </div>
          <div className="section-content">
            <p>{t('profile.ourName.description1')}</p>
            <p>{t('profile.ourName.description2')}</p>
            <p>{t('profile.ourName.description3')}</p>
          </div>
        </section>

        {/* 我们的使命与愿景 */}
        <section className="profile-section">
          <div className="section-header">
            <div className="section-image-placeholder">
              <AimOutlined />
            </div>
            <h2 className="section-title">{t('profile.mission.title')}</h2>
          </div>
          <div className="section-content">
            <p>{t('profile.mission.description1')}</p>
            <p>{t('profile.mission.description2')}</p>
          </div>
        </section>

        {/* 我们的特色 */}
        <section className="profile-section">
          <div className="section-header">
            <div className="section-image-placeholder">
              <StarOutlined />
            </div>
            <h2 className="section-title">{t('profile.features.title')}</h2>
          </div>
          <div className="section-content">
            <div className="feature-item">
              <h3 className="feature-title">{t('profile.features.safety.title')}</h3>
              <p>{t('profile.features.safety.description')}</p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">{t('profile.features.etiquette.title')}</h3>
              <p>{t('profile.features.etiquette.description')}</p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">{t('profile.features.professional.title')}</h3>
              <p>{t('profile.features.professional.description')}</p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">{t('profile.features.matching.title')}</h3>
              <p>{t('profile.features.matching.description')}</p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">{t('profile.features.community.title')}</h3>
              <p>{t('profile.features.community.description')}</p>
            </div>
          </div>
        </section>

        {/* 我们的价值观 */}
        <section className="profile-section">
          <div className="section-header">
            <div className="section-image-placeholder">
              <HeartOutlined />
            </div>
            <h2 className="section-title">{t('profile.values.title')}</h2>
          </div>
          <div className="section-content">
            <div className="values-grid">
              <div className="value-item">
                <h3 className="value-title">{t('profile.values.sincerity.title')}</h3>
                <p>{t('profile.values.sincerity.description')}</p>
              </div>
              <div className="value-item">
                <h3 className="value-title">{t('profile.values.openness.title')}</h3>
                <p>{t('profile.values.openness.description')}</p>
              </div>
              <div className="value-item">
                <h3 className="value-title">{t('profile.values.respect.title')}</h3>
                <p>{t('profile.values.respect.description')}</p>
              </div>
              <div className="value-item">
                <h3 className="value-title">{t('profile.values.growth.title')}</h3>
                <p>{t('profile.values.growth.description')}</p>
              </div>
              <div className="value-item">
                <h3 className="value-title">{t('profile.values.connection.title')}</h3>
                <p>{t('profile.values.connection.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 加入我们 */}
        <section className="profile-section">
          <div className="section-header">
            <div className="section-image-placeholder">
              <TeamOutlined />
            </div>
            <h2 className="section-title">{t('profile.joinUs.title')}</h2>
          </div>
          <div className="section-content">
            <div className="join-content">
              <p>{t('profile.joinUs.description1')}</p>
              <p>{t('profile.joinUs.description2')}</p>
              <p>{t('profile.joinUs.description3')}</p>
              <p>{t('profile.joinUs.description4')}</p>
              <p>{t('profile.joinUs.description5')}</p>
              <p>{t('profile.joinUs.description6')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileDetail;
