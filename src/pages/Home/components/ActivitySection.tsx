import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './ActivitySection.module.css';

 export interface ActivityProps {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  content: string;
  location?: string;
}
interface ActivitySectionProp {
  activityList: ActivityProps[];
}

const ActivitySection: React.FC<ActivitySectionProp> = (props) => {
  const {activityList=[]} = props;
  const { t } = useTranslation();

  return (
    <section className={styles.activitySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>{t('activity.title')}</h2>
        </div>
        <Row gutter={[32, 32]}>
          {activityList.map((activity) => (
            <Col xs={24} lg={12} key={activity.id}>
              <Card 
                className={styles.activityCard}
                hoverable
                cover={
                  <div className={styles.activityImage}>
                    <img src={activity.image} alt={activity.title} />
                    {/* <div className={styles.activityOverlay}>
                      <div className={styles.activityDate}>
                        <CalendarOutlined />
                        <span>{activity.date}</span>
                      </div>
                    </div> */}
                  </div>
                }
              >
                <div className={styles.activityContent}>
                  <h4 className={styles.activityTitle}>{activity.title}</h4>
                  {/* <div className={styles.activityMeta}>
                    <div className={styles.activityTime}>
                      <ClockCircleOutlined />
                      <span>{activity.time}</span>
                    </div>
                    {activity.location && (
                      <div className={styles.activityLocation}>
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div> */}
                  {/* <p className={styles.activityDescription}>{activity.content}</p> */}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ActivitySection;