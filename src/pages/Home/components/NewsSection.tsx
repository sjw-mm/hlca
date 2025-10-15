import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeOutlined } from '@ant-design/icons';
import VideoPlayer from '@/components/VideoPlayer';
// import playIcon from '@/assets/image/play.svg';
import news_01 from '@/assets/image/news-1.jpg';
import news_02 from '@/assets/image/news-2.jpg';
import news_03 from '@/assets/image/news-3.jpg';
import news_04 from '@/assets/image/news-4.jpg';
import news_05 from '@/assets/image/news-5.jpg';
import news_06 from '@/assets/image/news-6.jpg';
import news_07 from '@/assets/image/news-7.jpg';
import news_2 from '@/assets/image/news/news-2.jpg';
import news_3 from '@/assets/image/news/news-3.jpg';
import news_4 from '@/assets/image/news/news-4.jpg';
import news_5 from '@/assets/image/news/news-5.jpg';
import news_6 from '@/assets/image/news/news-6.jpg';
import news_7 from '@/assets/image/news/news-7.jpg';
import news_8 from '@/assets/image/news/news-8.jpg';
import news_09 from '@/assets/image/news/news-9.jpg';
import news_10 from '@/assets/image/news/news-10.jpg';
import news_11 from '@/assets/image/news/news-11.jpg';
import news_14 from '@/assets/image/news/news-14.jpg';
import news_15 from '@/assets/image/news/news-15.jpg';
import news_16 from '@/assets/image/news/news-16.jpg';
import news_17 from '@/assets/image/news/news-17.jpg';
import news_18 from '@/assets/image/news/news-18.jpg';
import news_19 from '@/assets/image/news/news-19.jpg';
import news_20 from '@/assets/image/news/news-20.jpg';
import news_21 from '@/assets/image/news/news-21.jpg';
import news_22 from '@/assets/image/news/news-22.jpg';
import news_23 from '@/assets/image/news/news-23.jpg';
import news_25 from '@/assets/image/news/news-25.jpg';
import news_26 from '@/assets/image/news/news-26.jpg';
import news_27 from '@/assets/image/news/news-27.jpg';
import news_28 from '@/assets/image/news/news-28.jpg';
import news_29 from '@/assets/image/news/news-29.jpg';

import styles from './NewsSection.module.css';

interface NewsItem {
  id: number;
  type: 'image' | 'image-text' | 'video';
  src: string;
  alt: string;
  title?: string;
  description?: string;
  videoSrc?: string;
  poster?: string;
}

// const videoUrl = 'https://mmsociety.net/video/video-1-kuS-GIWu.mp4'

const NewsSection: React.FC = () => {
  const { t } = useTranslation();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  
  // News data with different display types
  const newsItems: NewsItem[] = [
    { 
      id: 26, 
      type: 'video', 
      src: news_26, 
      alt: 'News 26',
      description: t('news.items.adaInterview'),
      videoSrc: 'https://mmsociety.net/video/20251014-205852.mp4',
      poster: news_26,
    },
    { 
      id: 27, 
      type: 'image-text', 
      src: news_27, 
      alt: 'News 27',
      description: t('news.items.filmWeekOpening')
    },
    { 
      id: 28, 
      type: 'image-text', 
      src: news_28, 
      alt: 'News 28',
      description: t('news.items.adaSignature')
    },
    { 
      id: 29, 
      type: 'image-text', 
      src: news_29, 
      alt: 'News 29',
      description: t('news.items.adaCoordination')
    },
    { 
      id: 22, 
      type: 'image', 
      src: news_22, 
      alt: 'News 22'
    },
    { 
      id: 2, 
      type: 'image', 
      src: news_2, 
      alt: 'News 2'
    },
    { 
      id: 3, 
      type: 'image', 
      src: news_3, 
      alt: 'News 3'
    },
    { 
      id: 18, 
      type: 'image', 
      src: news_18, 
      alt: 'News 18'
    },
    { 
      id: 19, 
      type: 'image', 
      src: news_19, 
      alt: 'News 19'
    },
    { 
      id: 4, 
      type: 'image', 
      src: news_4, 
      alt: 'News 4'
    },
    { 
      id: 5, 
      type: 'image', 
      src: news_5, 
      alt: 'News 5' 
    },
    { 
      id: 6, 
      type: 'image', 
      src: news_6, 
      alt: 'News 6'
    },
    { 
      id: 7, 
      type: 'image', 
      src: news_7, 
      alt: 'News 7'
    },
    { 
      id: 8, 
      type: 'image', 
      src: news_8, 
      alt: 'News 8' 
    },
    { 
      id: 9, 
      type: 'image', 
      src: news_09, 
      alt: 'News 9'
    },
    { 
      id: 10, 
      type: 'image', 
      src: news_10, 
      alt: 'News 10'
    },
    { 
      id: 11, 
      type: 'image', 
      src: news_11, 
      alt: 'News 11'
    },
    { 
      id: 14, 
      type: 'image', 
      src: news_14, 
      alt: 'News 14'
    },
    { 
      id: 15, 
      type: 'image', 
      src: news_15, 
      alt: 'News 15'
    },
    { 
      id: 16, 
      type: 'image', 
      src: news_16, 
      alt: 'News 16'
    },
    { 
      id: 17, 
      type: 'image', 
      src: news_17, 
      alt: 'News 17'
    },
    { 
      id: 20, 
      type: 'image', 
      src: news_20, 
      alt: 'News 20'
    },
    { 
      id: 21, 
      type: 'image', 
      src: news_21, 
      alt: 'News 21'
    },
    { 
      id: 23, 
      type: 'image', 
      src: news_23, 
      alt: 'News 23'
    },
    
    { 
      id: 25, 
      type: 'image', 
      src: news_25, 
      alt: 'News 25'
    },
    { 
      id: -1, 
      type: 'image', 
      src: news_01, 
      alt: 'News 1' 
    },
    { 
      id: -2, 
      type: 'image', 
      src: news_02, 
      alt: 'News 2'
    },
    { 
      id: -3, 
      type: 'image', 
      src: news_03, 
      alt: 'News 3'
    },
    { 
      id: -4, 
      type: 'image', 
      src: news_04, 
      alt: 'News 4'
    },
    { 
      id: -5, 
      type: 'image', 
      src: news_05, 
      alt: 'News 5' 
    },
    { 
      id: -6, 
      type: 'image', 
      src: news_06, 
      alt: 'News 6'
    },
    { 
      id: -7, 
      type: 'image', 
      src: news_07, 
      alt: 'News 7'
    },
  ];

  const handleImageClick = (src: string) => {
    setPreviewImage(src);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  const handleVideoClick = (videoId: number) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPlay = () => {
    // Video started playing
  };

  const handleVideoPause = () => {
    // Video paused
  };

  const handleVideoEnded = () => {
    setPlayingVideo(null);
  };

  const renderNewsCard = (item: NewsItem) => {
    switch (item.type) {
      case 'image':
        return (
          <div className={`${styles.newsCard} ${styles.imageOnly}`} onClick={() => handleImageClick(item.src)}>
            <div className={styles.cardImageContainer}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <EyeOutlined className={styles.previewIcon} />
              </div>
            </div>
          </div>
        );

      case 'image-text':
        return (
          <div className={`${styles.newsCard} ${styles.imageText}`}>
            <div className={styles.cardImageContainer} onClick={() => handleImageClick(item.src)}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <EyeOutlined className={styles.previewIcon} />
              </div>
              <div className={styles.textOverlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
            <div className={styles.cardTextMobile}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className={`${styles.newsCard} ${styles.video}`} onClick={() => handleVideoClick(item.id)}>
            <div className={styles.cardVideoContainer}>
              <VideoPlayer
                src={item.videoSrc || ''}
                poster={item.poster}
                title={item.alt}
                className={styles.cardVideo}
                controls={playingVideo === item.id}
                muted={false}
                autoPlay={playingVideo === item.id}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
              />
              {playingVideo !== item.id && (
                <div className={styles.videoOverlay}>
                  {/* <img src={playIcon} alt="play" className="play-icon" /> */}
                  {/* <PlayCircleOutlined className="play-icon" /> */}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('news.title')}</h2>
        <div className={styles.newsGrid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.newsItem}>
              {renderNewsCard(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className={styles.imagePreviewModal} onClick={closePreview}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closePreview}>×</button>
            <img src={previewImage} alt="Preview" className={styles.previewImage} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
