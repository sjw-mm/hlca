import React, { useState } from 'react';
import { Row, Col, Card, Modal, Image } from 'antd';
import { UserOutlined, ClockCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import VideoPlayer from '@/components/VideoPlayer';
import news_1 from '@/assets/image/news-1.jpg';
import news_2 from '@/assets/image/news-2.jpg';
import news_3 from '@/assets/image/news-3.jpg';
import styles from './BlogSection.module.css';

interface BlogPost {
  image: string;
  video?: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  link: string;
}
const video_1 = 'https://mmsociety.net/assets/video-1-kuS-GIWu.mp4';
const BlogSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<BlogPost | null>(null);
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      image: news_1,
      video: video_1,
      title: '协会活动视频报道',
      excerpt: '观看我们最新的社区活动精彩瞬间，感受温馨的社区氛围',
      author: '协会管理员',
      date: '2025年9月24日',
      link: '/blog/post-1'
    },
    {
      image: news_2,
      title: '志愿者招募公告',
      excerpt: '加入我们的志愿者团队，为社区贡献力量，传递爱心与温暖',
      author: '协会管理员',
      date: '2025年9月24日',
      link: '/blog/post-2'
    },
    {
      image: news_3,
      title: '年度总结视频',
      excerpt: '回顾协会一年来的重要成就和发展历程，展望美好未来',
      author: '协会管理员',
      date: '2025年9月24日',
      link: '/blog/post-3'
    },
  ];

  // 处理视频播放
  const handleVideoPlay = (post: BlogPost) => {
    if (post.video) {
      setSelectedVideo(post);
      setIsVideoModalVisible(true);
    }
  };

  // 关闭视频模态框
  const handleVideoModalClose = () => {
    setIsVideoModalVisible(false);
    setSelectedVideo(null);
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>协会新闻</h2>
        </div>
        
        <Row gutter={[32, 32]}>
          {blogPosts.map((post, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                className={`blog-card ${post.video ? 'video-card' : ''}`}
                cover={
                  <div 
                    className={styles.blogImage}
                    onClick={() => post.video && handleVideoPlay(post)}
                    style={{ cursor: post.video ? 'pointer' : 'default' }}
                  >
                    <Image  className={styles.blogImg} src={post.image} alt={post.title} preview={false} height={400} />

                    {post.video && (
                      <div className={styles.videoOverlay}>
                        <PlayCircleOutlined className={styles.playIcon} />
                      </div>
                    )}
                  </div>
                }
              >
                <div className={styles.blogMeta}>
                  <span className={styles.blogAuthor}>
                    <UserOutlined /> {post.author}
                  </span>
                  <span className={styles.blogDate}>
                    <ClockCircleOutlined /> {post.date}
                  </span>
                </div>
                
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 视频播放模态框 */}
        <Modal
          title={selectedVideo?.title}
          open={isVideoModalVisible}
          onCancel={handleVideoModalClose}
          footer={null}
          width="90%"
          style={{ maxWidth: '800px' }}
          centered
          className={styles.videoModal}
        >
          {selectedVideo && (
            <VideoPlayer
              src={selectedVideo.video!}
              poster={selectedVideo.image}
              title={selectedVideo.title}
              onEnded={handleVideoModalClose}
            />
          )}
        </Modal>
      </div>
    </section>
  );
};

export default BlogSection;
