import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
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
import news_30 from '@/assets/image/news/news-30.jpg';
import news_31 from '@/assets/image/news/news-31.jpg';
import news_32 from '@/assets/image/news/news-32.jpg';
import news_33 from '@/assets/image/news/news-33.jpg';
import news_34 from '@/assets/image/news/news-34.jpg';
import news_35 from '@/assets/image/news/news-35.jpg';
import news_36 from '@/assets/image/news/news-36.jpg';
import news_37 from '@/assets/image/news/news-37.jpg';
import news_38 from '@/assets/image/news/news-38.jpg';
import news_39 from '@/assets/image/news/news-39.jpg';
import news_40 from '@/assets/image/news/news-40.jpg';
// import news_41 from '@/assets/image/news/news-41.jpg';
import news_42 from '@/assets/image/news/news-42.jpg';

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
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [displayedItems, setDisplayedItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Pagination configuration
  const ITEMS_PER_PAGE = 6; // 3x3 grid for PC
  const MOBILE_ITEMS_PER_LOAD = 6; // Load 6 items at a time on mobile
  
  // News data with different display types
  const newsItems: NewsItem[] = useMemo(() => [
    { 
      id: 42, 
      type: 'image', 
      src: news_42, 
      alt: 'News 42'
    },
    // { 
    //   id: 41, 
    //   type: 'image', 
    //   src: news_41, 
    //   alt: 'News 41'
    // },
    { 
      id: 40, 
      type: 'image', 
      src: news_40, 
      alt: 'News 40'
    },
    { 
      id: 39, 
      type: 'image', 
      src: news_39, 
      alt: 'News 39'
    },
    { 
      id: 38, 
      type: 'image', 
      src: news_38, 
      alt: 'News 38'
    },
    { 
      id: 37, 
      type: 'image', 
      src: news_37, 
      alt: 'News 37'
    },
    { 
      id: 36, 
      type: 'image', 
      src: news_36, 
      alt: 'News 36'
    },
    { 
      id: 35, 
      type: 'image-text', 
      src: news_35, 
      alt: 'News 35',
      description: t('news.items.visit'),
    },
    { 
      id: 34, 
      type: 'image', 
      src: news_34, 
      alt: 'News 34'
    },
    { 
      id: 33, 
      type: 'image', 
      src: news_33, 
      alt: 'News 33'
    },
    { 
      id: 32, 
      type: 'image', 
      src: news_32, 
      alt: 'News 32'
    },
    { 
      id: 31, 
      type: 'image', 
      src: news_31, 
      alt: 'News 31'
    },
    { 
      id: 30, 
      type: 'image', 
      src: news_30, 
      alt: 'News 30'
    },
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
  ], [t]);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Initialize displayed items
  useEffect(() => {
    if (isMobile) {
      // Mobile: show first batch of items
      setDisplayedItems(newsItems.slice(0, MOBILE_ITEMS_PER_LOAD));
    } else {
      // PC: show items for current page
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      setDisplayedItems(newsItems.slice(startIndex, endIndex));
    }
  }, [currentPage, isMobile, newsItems]);

  // Mobile infinite scroll
  const loadMoreItems = useCallback(() => {
    if (isLoading || !isMobile) return;
    
    setIsLoading(true);
    setTimeout(() => {
      const currentCount = displayedItems.length;
      const nextBatch = newsItems.slice(currentCount, currentCount + MOBILE_ITEMS_PER_LOAD);
      setDisplayedItems(prev => [...prev, ...nextBatch]);
      setIsLoading(false);
    }, 500); // Simulate loading delay
  }, [displayedItems.length, isMobile, isLoading, newsItems]);

  // Scroll event handler for mobile infinite scroll
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Load more when user is near bottom (100px from bottom)
      if (scrollTop + windowHeight >= documentHeight - 100) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, loadMoreItems]);

  // PC pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

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
          {displayedItems.map((item) => (
            <div key={item.id} className={styles.newsItem}>
              {renderNewsCard(item)}
            </div>
          ))}
        </div>

        {/* PC Pagination Controls */}
        {!isMobile && totalPages > 1 && (
          <div className={styles.paginationContainer}>
            <div className={styles.pagination}>
              <button
                className={`${styles.paginationBtn} ${currentPage === 1 ? styles.disabled : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <LeftOutlined />
              </button>
              
              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                className={`${styles.paginationBtn} ${currentPage === totalPages ? styles.disabled : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <RightOutlined />
              </button>
            </div>
            
            <div className={styles.paginationInfo}>
              {t('pagination.showing')} {((currentPage - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, newsItems.length)} {t('pagination.of')} {newsItems.length} {t('pagination.items')}
            </div>
          </div>
        )}

        {/* Mobile Loading Indicator */}
        {isMobile && (
          <div className={styles.mobilePagination}>
            {isLoading && (
              <div className={styles.loadingIndicator}>
                <div className={styles.spinner}></div>
                <span>{t('pagination.loading')}</span>
              </div>
            )}
            
            {!isLoading && displayedItems.length < newsItems.length && (
              <button 
                className={styles.loadMoreBtn}
                onClick={loadMoreItems}
              >
                {t('pagination.loadMore')}
              </button>
            )}
            
            {displayedItems.length >= newsItems.length && (
              <div className={styles.endMessage}>
                {t('pagination.allLoaded')}
              </div>
            )}
          </div>
        )}
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
