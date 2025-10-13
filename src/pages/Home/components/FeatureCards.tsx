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
import './FeatureCards.css';

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
    <section className="feature-cards-section">
      <div className="container">
        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <div className="feature-card-wrapper">
                <Card 
                  className="feature-card"
                  hoverable
                >
                  <div className="feature-front">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-action">
                      <a href="#" className="read-more">{t('features.readMore')}</a>
                    </div>
                  </div>
                  <div className="feature-back">
                    <div className="feature-icon">
                      {feature.backIcon}
                    </div>
                    <h3 className="feature-title">{feature.backTitle}</h3>
                    <p className="feature-description">{feature.backDescription}</p>
                    <div className="feature-action">
                      <a href="#" className="see-more">{t('features.seeMore')}</a>
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
