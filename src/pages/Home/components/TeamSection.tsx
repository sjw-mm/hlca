import React from 'react';
import { Row, Col, Card, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import team_1 from '@/assets/image/team-1.jpg';
import team_2 from '@/assets/image/team-2.jpg';
import styles from './TeamSection.module.css';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: t('team.members.ada.name'),
      position: t('team.positions.president'),
      image: team_1,
    },
    {
      name: t('team.members.qianhua.name'),
      position: t('team.positions.honoraryPresident'),
      image: team_2,
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>{t('team.title')}</h2>
        </div>
        
        <Row gutter={[32, 32]} justify="center">
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card 
                className={styles.teamCard}
                hoverable
                cover={
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    preview={false}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                }
              >
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <div className={styles.memberDivider}></div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamSection;
