import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
// import { PlayCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import about_1 from '@/assets/image/about-1.jpg';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="about-section">
      <div className="container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="about-image">
              <div className="image-wrapper">
                <img src={about_1} alt="关于我们" />
              </div>
              {/* <div className="stats-overlay">
                <Card className="stats-card">
                  <Statistic
                    title="粉丝增长"
                    value={18450}
                    suffix="+"
                    valueStyle={{ color: '#F668AC', fontSize: '32px', fontWeight: 'bold' }}
                  />
                </Card>
              </div> */}
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="about-content">
              <h2>{t('about.title')}</h2>
              <h3>{t('about.subtitle')}</h3>
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
              <p className="about-bottom-text">
                {t('about.bottomText')}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
