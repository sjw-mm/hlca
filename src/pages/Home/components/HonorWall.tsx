import React from 'react';
import { Row, Col, Card } from 'antd';
import './HonorWall.css';

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
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>荣誉墙</h2>
        </div>
        
        <Row gutter={[32, 32]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                className="team-card"
                hoverable
                cover={
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                }
              >
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-position">{member.time}</p>
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
