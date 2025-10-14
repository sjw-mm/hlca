import React from 'react';
import { Row, Col, Card } from 'antd';
import { 
  AppstoreOutlined, 
  CustomerServiceOutlined, 
  SettingOutlined,
  BulbOutlined,
  SafetyOutlined,
  RocketOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './FeatureCards.module.css';

const FeatureCards: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <AppstoreOutlined />,
      title: t('features.title1'),
      description: t('features.description1'),
      backIcon: <BulbOutlined />,
      backTitle: t('features.title1'),
      backDescription: t('features.description1')
    },
    {
      icon: <CustomerServiceOutlined />,
      title: t('features.title2'),
      description: t('features.description2'),
      backIcon: <SafetyOutlined />,
      backTitle: t('features.title2'),
      backDescription: t('features.description2')
    },
    {
      icon: <SettingOutlined />,
      title: t('features.title3'),
      description: t('features.description3'),
      backIcon: <RocketOutlined />,
      backTitle: t('features.title3'),
      backDescription: t('features.description3')
    }
  ];

  return (
    <section className={styles.featureCardsSection}>
      <div className={styles.container}>
        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <div className={styles.featureCardWrapper}>
                <Card 
                  className={styles.featureCard}
                  hoverable
                >
                  <div className={styles.featureFront}>
                    <div className={styles.featureIcon}>
                      {feature.icon}
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                    <div className={styles.featureAction}>
                      <a href="#" className={styles.readMore}>{t('features.readMore')}</a>
                    </div>
                  </div>
                  <div className={styles.featureBack}>
                    <div className={styles.featureIcon}>
                      {feature.backIcon}
                    </div>
                    <h3 className={styles.featureTitle}>{feature.backTitle}</h3>
                    <p className={styles.featureDescription}>{feature.backDescription}</p>
                    <div className={styles.featureAction}>
                      <a href="#" className={styles.seeMore}>{t('features.seeMore')}</a>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FeatureCards;
