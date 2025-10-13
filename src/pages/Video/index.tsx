import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../../components/VideoPlayer';
import './index.css';

const Video: React.FC = () => {
  const { t } = useTranslation();
  
  const videoList = [
    {
      id: 1,
      title: t('video.videos.intro.title'),
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      poster: 'https://picsum.photos/800/450?random=1',
      description: t('video.videos.intro.description')
    },
    {
      id: 2,
      title: t('video.videos.activities.title'),
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      poster: 'https://picsum.photos/800/450?random=2',
      description: t('video.videos.activities.description')
    },
    {
      id: 3,
      title: t('video.videos.volunteers.title'),
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      poster: 'https://picsum.photos/800/450?random=3',
      description: t('video.videos.volunteers.description')
    },
    {
      id: 4,
      title: t('video.videos.future.title'),
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4',
      poster: 'https://picsum.photos/800/450?random=4',
      description: t('video.videos.future.description')
    }
  ];

  const handleVideoPlay = (videoId: number) => {
    console.log(`视频 ${videoId} 开始播放`);
  };

  const handleVideoPause = (videoId: number) => {
    console.log(`视频 ${videoId} 暂停播放`);
  };

  const handleVideoEnded = (videoId: number) => {
    console.log(`视频 ${videoId} 播放结束`);
  };

  const handleVideoError = (videoId: number, error: any) => {
    console.error(`视频 ${videoId} 播放错误:`, error);
  };

  return (
    <div className="video-page">
      <div className="container">
        <div className="page-header">
          <h1>{t('video.title')}</h1>
          <p>{t('video.subtitle')}</p>
        </div>

        <Row gutter={[24, 24]}>
          {videoList.map((video) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={video.id}>
              <Card 
                className="video-card"
                hoverable
                cover={
                  <div className="video-wrapper">
                    <VideoPlayer
                      src={video.src}
                      poster={video.poster}
                      title={video.title}
                      onPlay={() => handleVideoPlay(video.id)}
                      onPause={() => handleVideoPause(video.id)}
                      onEnded={() => handleVideoEnded(video.id)}
                      onError={(error) => handleVideoError(video.id, error)}
                    />
                  </div>
                }
              >
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 特色视频区域 */}
        <div className="featured-video-section">
          <h2>{t('video.featuredVideo')}</h2>
          <div className="featured-video-wrapper">
            <VideoPlayer
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              poster="https://picsum.photos/1300/675?random=featured"
              title={t('video.videos.annualSummary.title')}
              className="featured-video"
              autoPlay={false}
              onPlay={() => console.log('特色视频开始播放')}
              onPause={() => console.log('特色视频暂停')}
              onEnded={() => console.log('特色视频播放结束')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
