import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './TeamDetail.module.css';
import team_1 from '@/assets/image/team-1.jpg';
import team_2 from '@/assets/image/team-2.jpg';
import team_3 from '@/assets/image/team-3.jpeg';
import team_4 from '@/assets/image/team-4.jpeg';
import team_5 from '@/assets/image/team-5.jpeg';
import team_6 from '@/assets/image/team-6.jpeg';
import team_7 from '@/assets/image/team-7.jpeg';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: t('team.members.ada.name'),
      position: t('team.positions.president'),
      image: team_1,
      description: t('team.members.ada.description'),
    },
    {
      name: t('team.members.qianhua.name'),
      position: t('team.positions.honoraryPresident'),
      image: team_2,
      description: t('team.members.qianhua.description'),
    },
    {
      name: t('team.members.jeff.name'),
      position: t('team.positions.vicePresident'),
      image: team_3,
      description: t('team.members.jeff.description'),
    },
    {
      name: t('team.members.david.name'),
      position: t('team.positions.secretaryGeneral'),
      image: team_4,
      description: t('team.members.david.description'),
    },
    {
      name: t('team.members.gunnar.name'),
      position: t('team.positions.director'),
      image: team_5,
      description: t('team.members.gunnar.description'),
    },
    {
      name: t('team.members.cathy.name'),
      position: t('team.positions.director'),
      image: team_6,
      description: t('team.members.cathy.description'),
    },
    {
      name: t('team.members.joyce.name'),
      position: t('team.positions.director'),
      image: team_7,
      description: t('team.members.joyce.description'),
    },
  ];

  return (
    <section className={styles.teamDetailSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>{t('team.coreTeam')}</h2>
        </div>
        
        <Row gutter={[32, 32]} className={styles.teamDetailRow}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                className={styles.teamCard}
                hoverable
                cover={
                  <div className={styles.memberImage}>
                    <img src={member.image} alt={member.name} />
                    <div className={styles.memberOverlay}>
                      <p className={styles.memberDescription}>{member.description}</p>
                    </div>
                  </div>
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
