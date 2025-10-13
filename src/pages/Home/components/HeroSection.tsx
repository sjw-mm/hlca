import React from 'react';
import { Button, Carousel } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  const heroContent = [
    {
      title: t('hero.title1'),
      subtitle: t('hero.subtitle1'),
      description: t('hero.description1'),
      backgroundImage: '/images/slider1.jpg'
    },
    {
      title: t('hero.title2'),
      subtitle: t('hero.subtitle2'),
      description: t('hero.description2'),
      backgroundImage: '/images/slider2.jpg'
    },
    {
      title: t('hero.title3'),
      subtitle: t('hero.subtitle3'),
      description: t('hero.description3'),
      backgroundImage: '/images/slider3.jpg'
    }
  ];

  return (
    <section className="hero-section">
      <Carousel 
        autoplay 
        effect="fade"
        dots={true}
        className="hero-carousel"
      >
        {heroContent.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div 
              className="hero-background"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="container">
                <div className="hero-text">
                  <h1 className="hero-title">{slide.title}</h1>
                  <h2 className="hero-subtitle">{slide.subtitle}</h2>
                  <p className="hero-description">{slide.description}</p>
                  <div className="hero-actions">
                    <Button 
                      type="primary" 
                      size="large"
                      className="hero-btn"
                    >
                      {t('hero.getStarted')}
                      <ArrowRightOutlined />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
