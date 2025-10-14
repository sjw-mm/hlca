import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: '/images/service-01.jpg',
      title: 'HR咨询经验',
      description: '我们提供专业的人力资源咨询服务，帮助企业优化人力资源配置。'
    },
    {
      image: '/images/service-02.jpg',
      title: 'IT技术支持',
      description: '24/7专业技术支持，确保您的系统稳定运行，解决各种技术问题。'
    },
    {
      image: '/images/service-03.jpg',
      title: '软件开发',
      description: '定制化软件开发服务，从需求分析到部署维护的全流程解决方案。'
    },
    {
      image: '/images/service-04.jpg',
      title: '数据分析',
      description: '专业的数据分析服务，帮助企业从数据中获取有价值的商业洞察。'
    },
    {
      image: '/images/service-05.jpg',
      title: '云服务管理',
      description: '全面的云服务管理，包括迁移、优化、监控和安全保障。'
    },
    {
      image: '/images/service-06.jpg',
      title: '网络安全',
      description: '企业级网络安全解决方案，保护您的数据和系统免受威胁。'
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>我们的服务</h2>
          <h3>我们为客户提供</h3>
          <h1>商业服务</h1>
        </div>
        
        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card 
                className={styles.serviceCard}
                hoverable
                cover={
                  <div className={styles.serviceImage}>
                    <img src={service.image} alt={service.title} />
                  </div>
                }
              >
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <Button 
                    type="link" 
                    className={styles.serviceBtn}
                    icon={<ArrowRightOutlined />}
                  >
                    了解更多
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServicesSection;
