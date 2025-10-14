import React from 'react';
import { Row, Col, Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './PortfolioSection.module.css';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      image: '/images/project-01.jpg',
      title: '商业服务审计',
      category: '网页设计'
    },
    {
      image: '/images/project-02.jpg',
      title: '业务改进',
      category: 'UI/UX设计'
    },
    {
      image: '/images/project-03.jpg',
      title: '商业与营销',
      category: '室内设计'
    },
    {
      image: '/images/project-04.jpg',
      title: '业务扩展',
      category: '室内设计'
    }
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>项目</h2>
          <h3>最近项目</h3>
        </div>
        
        <Row gutter={[32, 32]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} lg={12} key={index}>
              <Card 
                className={styles.projectCard}
                hoverable
                cover={
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.projectOverlay}>
                      <ArrowRightOutlined className={styles.projectIcon} />
                    </div>
                  </div>
                }
              >
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectCategory}>{project.category}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PortfolioSection;
