import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
// import { PlayCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import about_1 from '@/assets/image/about-1.jpg';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.aboutImage}>
              <div className={styles.imageWrapper}>
                <img src={about_1} alt="关于我们" />
              </div>
              {/* <div className={styles.statsOverlay}>
                <Card className={styles.statsCard}>
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
            <div className={styles.aboutContent}>
              <h2>{t('about.title')}</h2>
              <h3>{t('about.subtitle')}</h3>
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
              <p className={styles.aboutBottomText}>
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
