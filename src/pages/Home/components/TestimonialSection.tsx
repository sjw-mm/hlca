import React from 'react';
import { Row, Col, Card, Rate, Avatar } from 'antd';
import { StarFilled } from '@ant-design/icons';
import styles from './TestimonialSection.module.css';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Richard Jackson',
      position: '经理',
      avatar: '/images/testi2.png',
      content: '这是一个长期确立的事实，读者在查看其布局时会被页面的可读内容分散注意力。使用Lorem Ipsum的要点是它具有或多或少',
      rating: 5,
      image: '/images/thumb.jpg'
    },
    {
      name: 'Selina Donald',
      position: '首席运营官',
      avatar: '/images/testi3.png',
      content: '这是一个长期确立的事实，读者在查看其布局时会被页面的可读内容分散注意力。使用Lorem Ipsum的要点是它具有或多或少',
      rating: 5,
      image: '/images/thumb.jpg'
    }
  ];

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>客户评价</h2>
          <h3>我们满意客户怎么说</h3>
        </div>
        
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.testimonialImage}>
              <img src={testimonials[0].image} alt="客户评价" />
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className={styles.testimonialsContent}>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <div className={styles.testimonialAvatar}>
                      <Avatar 
                        size={60} 
                        src={testimonial.avatar}
                        className={styles.avatar}
                      />
                    </div>
                    
                    <div className={styles.testimonialInfo}>
                      <h4 className={styles.testimonialName}>
                        {testimonial.name} <span className={styles.position}>{testimonial.position}</span>
                      </h4>
                      
                      <div className={styles.testimonialRating}>
                        <Rate 
                          disabled 
                          value={testimonial.rating} 
                          character={<StarFilled />}
                          className={styles.ratingStars}
                        />
                        <span className={styles.ratingText}>优秀!!</span>
                      </div>
                      
                      <p className={styles.testimonialText}>{testimonial.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TestimonialSection;
