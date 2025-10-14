import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './HonorWall.module.css';

const HonorWall: React.FC = () => {
  const teamMembers = [
    {
      name: '荣誉名称',
      time: '2025-01-01',
      image: 'https://picsum.photos/350/420',
    },
    {
      name: '荣誉名称',
      time: '2025-01-01',
      image: 'https://picsum.photos/350/420',
    },
    {
      name: '荣誉名称',
      time: '2025-01-01',
      image: 'https://picsum.photos/350/420',
    },
    {
      name: '荣誉名称',
      time: '2025-01-01',
      image: 'https://picsum.photos/350/420',
    },
    
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>荣誉墙</h2>
        </div>
        
        <Row gutter={[32, 32]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                className={styles.teamCard}
                hoverable
                cover={
                  <div className={styles.memberImage}>
                    <img src={member.image} alt={member.name} />
                  </div>
                }
              >
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberPosition}>{member.time}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default HonorWall;
