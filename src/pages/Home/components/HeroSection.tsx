import React from 'react';
import { Button, Carousel } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './HeroSection.module.css';

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
    <section className={styles.heroSection}>
      <Carousel 
        autoplay 
        effect="fade"
        dots={true}
        className={styles.heroCarousel}
      >
        {heroContent.map((slide, index) => (
          <div key={index} className={styles.heroSlide}>
            <div 
              className={styles.heroBackground}
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
              <div className={styles.container}>
                <div className={styles.heroText}>
                  <h1 className={styles.heroTitle}>{slide.title}</h1>
                  <h2 className={styles.heroSubtitle}>{slide.subtitle}</h2>
                  <p className={styles.heroDescription}>{slide.description}</p>
                  <div className={styles.heroActions}>
                    <Button 
                      type="primary" 
                      size="large"
                      className={styles.heroBtn}
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
