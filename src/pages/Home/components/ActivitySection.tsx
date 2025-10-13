import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import './ActivitySection.css';

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
    <section className="activity-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('activity.title')}</h2>
        </div>
        <Row gutter={[32, 32]}>
          {activityList.map((activity) => (
            <Col xs={24} lg={12} key={activity.id}>
              <Card 
                className="activity-card"
                hoverable
                cover={
                  <div className="activity-image">
                    <img src={activity.image} alt={activity.title} />
                    {/* <div className="activity-overlay">
                      <div className="activity-date">
                        <CalendarOutlined />
                        <span>{activity.date}</span>
                      </div>
                    </div> */}
                  </div>
                }
              >
                <div className="activity-content">
                  <h4 className="activity-title">{activity.title}</h4>
                  {/* <div className="activity-meta">
                    <div className="activity-time">
                      <ClockCircleOutlined />
                      <span>{activity.time}</span>
                    </div>
                    {activity.location && (
                      <div className="activity-location">
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div> */}
                  {/* <p className="activity-description">{activity.content}</p> */}
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