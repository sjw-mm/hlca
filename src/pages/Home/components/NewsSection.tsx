import React from 'react';
import { useTranslation } from 'react-i18next';
import news_1 from '@/assets/image/news-1.jpg';
import news_2 from '@/assets/image/news-2.jpg';
import news_3 from '@/assets/image/news-3.jpg';
import news_4 from '@/assets/image/news-4.jpg';
import news_5 from '@/assets/image/news-5.jpg';
import news_6 from '@/assets/image/news-6.jpg';
import news_7 from '@/assets/image/news-7.jpg';
import news_8 from '@/assets/image/news-8.jpg';
import styles from './NewsSection.module.css';

const NewsSection: React.FC = () => {
  const { t } = useTranslation();
  
  // News images data
  const newsImages = [
    { id: 1, src: news_1,  alt: 'News 1' },
    { id: 2, src: news_2, alt: 'News 2' },
    { id: 3, src: news_3, alt: 'News 3' },
    { id: 4, src: news_4, alt: 'News 4' },
    { id: 5, src: news_5, alt: 'News 5' },
    { id: 6, src: news_6, alt: 'News 6' },
    { id: 7, src: news_7, alt: 'News 7' },
    { id: 8, src: news_8, alt: 'News 8' },
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('news.title')}</h2>
        <div className={styles.newsGrid}>
          {newsImages.map((news) => (
            <div key={news.id} className={styles.newsItem}>
              <div className={styles.imageContainer}>
                <img
                  src={news.src}
                  alt={news.alt}
                  className={styles.newsImage}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
